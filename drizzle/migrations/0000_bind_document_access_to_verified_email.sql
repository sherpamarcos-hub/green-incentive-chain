-- Approved links now require a signed-in, email-confirmed account matching the approved request.
CREATE OR REPLACE FUNCTION public.get_access_by_token(_token uuid)
RETURNS TABLE(name text, institution text, sectors_granted text[], status text, approved_at timestamptz)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT r.name, r.institution, r.sectors_granted, r.status, r.approved_at
  FROM public.access_requests AS r
  WHERE r.token = _token AND r.status = 'approved'
    AND auth.uid() IS NOT NULL
    AND EXISTS (
      SELECT 1 FROM auth.users AS u
      WHERE u.id = auth.uid()
        AND u.email_confirmed_at IS NOT NULL
        AND lower(u.email) = lower(r.email)
    )
  LIMIT 1;
$$;
REVOKE ALL ON FUNCTION public.get_access_by_token(uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.get_access_by_token(uuid) TO authenticated;

-- Prevent the next person registering from automatically becoming the site administrator.
CREATE OR REPLACE FUNCTION public.grant_first_user_admin()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  RETURN NEW;
END;
$$;