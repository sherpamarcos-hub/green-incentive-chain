import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { SECTORS } from "@/lib/sectors";

export const getApprovedDocuments = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data) => z.object({ token: z.string().uuid() }).parse(data))
  .handler(async ({ data, context }) => {
    const { data: rows, error } = await context.supabase.rpc("get_access_by_token", { _token: data.token });
    if (error || !rows?.length) return null;
    const row = rows[0];
    const allowed = SECTORS.filter((sector) => row.sectors_granted.includes(sector.id));
    const { RestrictedContent } = await import("@/lib/restricted-content.server");
    const { renderToStaticMarkup } = await import("react-dom/server");
    return {
      name: row.name,
      documents: allowed.map((sector) => ({
        id: sector.id,
        title: sector.title,
        html: renderToStaticMarkup(RestrictedContent({ id: sector.id })),
      })),
    };
  });