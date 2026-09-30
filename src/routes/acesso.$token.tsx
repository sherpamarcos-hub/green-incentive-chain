import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { EttLogo } from "@/components/EttLogo";
import { SectorContent } from "@/components/SectorContent";
import { getSector, type SectorId } from "@/lib/sectors";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/acesso/$token")({
  head: () => ({
    meta: [
      { title: "Acesso liberado — Sistema ETT" },
      { name: "description", content: "Consulta individual aos materiais do Programa ETT conforme aprovação do proponente." },
      { property: "og:title", content: "Consulta individual — Programa ETT" },
      { property: "og:description", content: "Consulta individual aos materiais do Programa ETT conforme aprovação do proponente." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AcessoPage,
});

interface Row {
  name: string;
  sectors_granted: string[];
  status: string;
}

function AcessoPage() {
  const { token } = Route.useParams();
  const [row, setRow] = useState<Row | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.rpc("get_access_by_token", {
        _token: token,
      });
      const first = Array.isArray(data) ? data[0] : data;
      if (!first) setNotFound(true);
      else setRow(first as Row);
      setLoading(false);
    })();
  }, [token]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-500">
        Verificando acesso…
      </div>
    );

  if (notFound || !row)
    return (
      <div className="min-h-screen bg-[#fcfbf8] flex items-center justify-center px-4">
        <div className="max-w-md text-center bg-white border border-slate-200 rounded-2xl p-8">
          <h1 className="text-xl font-bold text-slate-900">Link inválido</h1>
          <p className="mt-2 text-sm text-slate-600">
            Este link de acesso não existe, foi revogado ou o pedido ainda não
            foi aprovado.
          </p>
        </div>
      </div>
    );

  const granted = (row.sectors_granted as SectorId[])
    .map((id) => getSector(id))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-[#fcfbf8]">
      <header className="print:hidden border-b border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <EttLogo />
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              ← Início
            </Link>
            <Button
              onClick={() => window.print()}
              className="bg-primary text-primary-foreground"
            >
              Salvar PDF
            </Button>
          </div>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
          Acesso liberado para
        </p>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
          {row.name}
        </h1>
        <p className="mt-2 text-slate-600">
          Material de estudo do Programa ETT — {granted.length} bloco(s) liberado(s).
        </p>
        <div className="mt-6 border-l-4 border-primary bg-muted p-4 text-sm leading-relaxed text-foreground">
          <p><strong>Versão para avaliação crítica.</strong> Proposta ainda não validada; parâmetros e exemplos ilustrativos devem ser testados. As referências, afirmações jurídicas, benefícios e participações institucionais requerem verificação independente. A consulta não representa endosso de universidade ou órgão público.</p>
          <p className="mt-2">Autor e proponente: Marcos Fernando Carvalho dos Santos. A autorização para copiar e distribuir materiais em atividade acadêmica é concedida separadamente ao professor identificado, não a qualquer pessoa que receba este endereço.</p>
        </div>

        <div className="mt-10 space-y-8">
          {granted.map((s) => (
            <section
              key={s.id}
              className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {s.title}
              </h2>
              <SectorContent id={s.id} />
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
