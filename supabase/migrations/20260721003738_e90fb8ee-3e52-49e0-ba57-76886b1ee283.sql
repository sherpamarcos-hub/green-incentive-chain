
-- 1) access_requests: remover leitura anônima ampla
DROP POLICY IF EXISTS "Anon reads only approved rows by token" ON public.access_requests;
DROP POLICY IF EXISTS "Authenticated can read approved" ON public.access_requests;
REVOKE SELECT ON public.access_requests FROM anon;

-- Admins continuam podendo ler tudo
CREATE POLICY "Admins read all requests"
  ON public.access_requests
  FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Função dedicada para consulta por token (não expõe e-mail nem justificativa)
CREATE OR REPLACE FUNCTION public.get_access_by_token(_token uuid)
RETURNS TABLE(
  name text,
  institution text,
  sectors_granted text[],
  status text,
  approved_at timestamptz
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT name, institution, sectors_granted, status, approved_at
  FROM public.access_requests
  WHERE token = _token AND status = 'approved'
  LIMIT 1;
$$;

REVOKE ALL ON FUNCTION public.get_access_by_token(uuid) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_access_by_token(uuid) TO anon, authenticated;

-- 2) leads: leitura explícita restrita a admins
CREATE POLICY "Admins read leads"
  ON public.leads
  FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::app_role));

-- 3) has_role: restringir EXECUTE (mantém uso em policies e no app autenticado)
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated, service_role;
