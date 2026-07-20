
-- Roles
CREATE TYPE public.app_role AS ENUM ('admin');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

CREATE POLICY "Admins read roles" ON public.user_roles FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Access requests
CREATE TABLE public.access_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  institution text NOT NULL,
  role_title text NOT NULL,
  justification text NOT NULL,
  sectors_requested text[] NOT NULL,
  sectors_granted text[] NOT NULL DEFAULT '{}',
  status text NOT NULL DEFAULT 'pending',
  token uuid NOT NULL DEFAULT gen_random_uuid() UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now(),
  approved_at timestamptz,
  CONSTRAINT access_requests_status_check CHECK (status IN ('pending','approved','rejected')),
  CONSTRAINT access_requests_email_check CHECK (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' AND length(email) <= 254),
  CONSTRAINT access_requests_name_check CHECK (length(name) BETWEEN 1 AND 120),
  CONSTRAINT access_requests_inst_check CHECK (length(institution) BETWEEN 1 AND 160),
  CONSTRAINT access_requests_role_check CHECK (length(role_title) BETWEEN 1 AND 120),
  CONSTRAINT access_requests_just_check CHECK (length(justification) BETWEEN 1 AND 2000),
  CONSTRAINT access_requests_sectors_check CHECK (array_length(sectors_requested,1) BETWEEN 1 AND 10)
);

GRANT SELECT, INSERT ON public.access_requests TO anon;
GRANT SELECT, INSERT, UPDATE ON public.access_requests TO authenticated;
GRANT ALL ON public.access_requests TO service_role;

ALTER TABLE public.access_requests ENABLE ROW LEVEL SECURITY;

-- Anyone can create a request
CREATE POLICY "Anyone can submit a request" ON public.access_requests
  FOR INSERT TO anon, authenticated
  WITH CHECK (status = 'pending' AND sectors_granted = '{}');

-- Anyone with the token can read that single row (needed for /acesso/$token)
CREATE POLICY "Read by token" ON public.access_requests
  FOR SELECT TO anon, authenticated
  USING (true);
-- Note: SELECT is permissive; the app queries by token. To lock down, admin panel filters server-side.
-- To avoid leaking email lists via anon SELECT, we restrict: only allow SELECT when the row is approved OR caller is admin.
DROP POLICY "Read by token" ON public.access_requests;
CREATE POLICY "Anon reads only approved rows by token" ON public.access_requests
  FOR SELECT TO anon
  USING (status = 'approved');
CREATE POLICY "Authenticated can read approved" ON public.access_requests
  FOR SELECT TO authenticated
  USING (status = 'approved' OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins update requests" ON public.access_requests
  FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));
