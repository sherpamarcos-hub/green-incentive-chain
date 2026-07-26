import { useEffect, useState } from "react";
import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { EttLogo } from "@/components/EttLogo";
import { SECTORS, getSector, type SectorId } from "@/lib/sectors";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Painel — Pedidos de acesso ETT" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminPage,
});

interface Request {
  id: string;
  name: string;
  email: string;
  institution: string;
  role_title: string;
  justification: string;
  sectors_requested: string[];
  sectors_granted: string[];
  status: string;
  token: string;
  created_at: string;
  approved_at: string | null;
}

function AdminPage() {
  const navigate = useNavigate();
  const [rows, setRows] = useState<Request[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  async function load() {
    setLoading(true);
    const { data: u } = await supabase.auth.getUser();
    if (!u.user) return;
    const { data: roles } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", u.user.id);
    const admin = (roles ?? []).some((r) => r.role === "admin");
    setIsAdmin(admin);
    if (!admin) {
      setLoading(false);
      return;
    }
    const { data, error } = await supabase
      .from("access_requests")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) setError(error.message);
    setRows((data ?? []) as Request[]);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  async function approve(row: Request, granted: SectorId[]) {
    if (granted.length === 0) return;
    const { error } = await supabase
      .from("access_requests")
      .update({
        status: "approved",
        sectors_granted: granted,
        approved_at: new Date().toISOString(),
      })
      .eq("id", row.id);
    if (error) return alert(error.message);
    load();
  }

  async function reject(row: Request) {
    const { error } = await supabase
      .from("access_requests")
      .update({ status: "rejected" })
      .eq("id", row.id);
    if (error) return alert(error.message);
    load();
  }

  async function signOut() {
    await supabase.auth.signOut();
    navigate({ to: "/auth" });
  }

  function copyLink(token: string) {
    const url = `${window.location.origin}/acesso/${token}`;
    navigator.clipboard.writeText(url);
    setCopied(token);
    setTimeout(() => setCopied(null), 2000);
  }

  if (loading) return <div className="p-8 text-slate-600">Carregando…</div>;
  if (isAdmin === false)
    return (
      <div className="min-h-screen flex items-center justify-center p-8 text-center">
        <div>
          <p className="text-slate-700">
            Sua conta não tem permissão de administrador.
          </p>
          <button
            onClick={signOut}
            className="mt-4 rounded-lg border border-slate-300 px-4 py-2 text-sm"
          >
            Sair
          </button>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#fcfbf8]">
      <header className="border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <EttLogo />
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-500">Painel administrativo</span>
            <Link
              to="/"
              className="text-sm rounded-lg border border-slate-300 px-3 py-1.5 hover:bg-slate-50"
            >
              ← Início
            </Link>
            <button
              onClick={signOut}
              className="text-sm rounded-lg border border-slate-300 px-3 py-1.5 hover:bg-slate-50"
            >
              Sair
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">
          Pedidos de acesso ({rows.length})
        </h1>
        {error && <p className="text-sm text-red-600 mb-4">{error}</p>}
        <div className="space-y-4">
          {rows.length === 0 && (
            <p className="text-slate-500">Nenhum pedido ainda.</p>
          )}
          {rows.map((r) => (
            <RequestCard
              key={r.id}
              row={r}
              onApprove={(g) => approve(r, g)}
              onReject={() => reject(r)}
              onCopy={() => copyLink(r.token)}
              copied={copied === r.token}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

function RequestCard({
  row,
  onApprove,
  onReject,
  onCopy,
  copied,
}: {
  row: Request;
  onApprove: (granted: SectorId[]) => void;
  onReject: () => void;
  onCopy: () => void;
  copied: boolean;
}) {
  const [granted, setGranted] = useState<SectorId[]>(
    row.sectors_granted.length > 0
      ? (row.sectors_granted as SectorId[])
      : (row.sectors_requested as SectorId[]),
  );

  const statusColor =
    row.status === "approved"
      ? "bg-emerald-100 text-emerald-700"
      : row.status === "rejected"
        ? "bg-red-100 text-red-700"
        : "bg-amber-100 text-amber-700";

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <p className="font-semibold text-slate-900">{row.name}</p>
          <p className="text-sm text-slate-600">
            {row.role_title} — {row.institution}
          </p>
          <p className="text-sm text-slate-500">{row.email}</p>
        </div>
        <span
          className={`text-xs font-medium px-2 py-1 rounded-full ${statusColor}`}
        >
          {row.status}
        </span>
      </div>
      <p className="text-sm text-slate-700 whitespace-pre-wrap bg-slate-50 rounded-lg p-3 mb-3">
        {row.justification}
      </p>
      <div className="mb-3">
        <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">
          Setores solicitados → selecione o que liberar:
        </p>
        <div className="flex flex-wrap gap-2">
          {row.sectors_requested.map((sid) => {
            const s = getSector(sid);
            if (!s) return null;
            const on = granted.includes(sid as SectorId);
            return (
              <button
                key={sid}
                onClick={() =>
                  setGranted(
                    on
                      ? granted.filter((g) => g !== sid)
                      : [...granted, sid as SectorId],
                  )
                }
                className={`text-xs px-3 py-1.5 rounded-full border ${
                  on
                    ? "bg-[#008080] text-white border-[#008080]"
                    : "bg-white text-slate-700 border-slate-300"
                }`}
              >
                {s.title}
              </button>
            );
          })}
          {SECTORS.filter(
            (s) => !row.sectors_requested.includes(s.id),
          ).map((s) => {
            const on = granted.includes(s.id);
            return (
              <button
                key={s.id}
                onClick={() =>
                  setGranted(
                    on
                      ? granted.filter((g) => g !== s.id)
                      : [...granted, s.id],
                  )
                }
                className={`text-xs px-3 py-1.5 rounded-full border border-dashed ${
                  on
                    ? "bg-slate-800 text-white border-slate-800"
                    : "bg-white text-slate-500 border-slate-300"
                }`}
                title="Não solicitado, mas você pode incluir"
              >
                + {s.title}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex flex-wrap gap-2 items-center">
        {row.status !== "approved" && (
          <button
            onClick={() => onApprove(granted)}
            className="rounded-lg bg-[#008080] text-white text-sm font-semibold px-4 py-2 hover:bg-[#006666]"
          >
            Aprovar
          </button>
        )}
        {row.status === "pending" && (
          <button
            onClick={onReject}
            className="rounded-lg border border-slate-300 text-slate-700 text-sm font-medium px-4 py-2 hover:bg-slate-50"
          >
            Rejeitar
          </button>
        )}
        {row.status === "approved" && (
          <button
            onClick={onCopy}
            className="rounded-lg border border-[#008080] text-[#008080] text-sm font-medium px-4 py-2 hover:bg-[#008080]/10"
          >
            {copied ? "✓ Copiado" : "Copiar link de acesso"}
          </button>
        )}
        <span className="text-xs text-slate-400 ml-auto">
          {new Date(row.created_at).toLocaleString("pt-BR")}
        </span>
      </div>
    </div>
  );
}
