import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { EttLogo } from "@/components/EttLogo";
import { SectorContent } from "@/components/SectorContent";
import { SECTORS, getSector, type SectorId } from "@/lib/sectors";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Programa ETT — Espelho de Trajetória e Transparência" },
      {
        name: "description",
        content:
          "Infraestrutura pública regional que valida práticas produtivas sustentáveis via NF-e, Nota de Produtor Rural e GT-ETT — sem moeda, sem novo órgão.",
      },
      { property: "og:title", content: "Programa ETT — Espelho de Trajetória e Transparência" },
      {
        property: "og:description",
        content:
          "Modelo regional de validação produtiva sustentável para pequenos e médios produtores, cooperativas e empresas.",
      },
    ],
  }),
  component: PropostaPage,
});

function PropostaPage() {
  const [showForm, setShowForm] = useState(false);
  const [preselected, setPreselected] = useState<SectorId[]>([]);
  const [openFree, setOpenFree] = useState<SectorId | null>(null);

  const freeSectors = SECTORS.filter((s) => !s.restricted);
  const restrictedSectors = SECTORS.filter((s) => s.restricted);

  function requestAccess(id: SectorId) {
    setPreselected([id]);
    setShowForm(true);
    setTimeout(() => {
      document.getElementById("solicitar")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }

  function openFreeBlock(id: SectorId) {
    setOpenFree((cur) => (cur === id ? null : id));
  }

  return (
    <div className="min-h-screen bg-[#fcfbf8] text-slate-800 font-sans">
      <header className="print:hidden border-b border-slate-200 bg-white sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <EttLogo />
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Imprimir / Salvar PDF
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="mb-16 relative">
          <div className="absolute -top-8 -left-8 w-64 h-64 rounded-full bg-[#008080]/5 blur-3xl -z-0 print:hidden" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.25em] text-[#008080] font-semibold">
              Programa ETT · Documento Institucional · 2026
            </p>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold text-slate-900 leading-[1.05] tracking-tight">
              Espelho de Trajetória
              <br />
              <span className="text-[#008080]">e Transparência</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed">
              Infraestrutura pública regional que valida práticas produtivas
              sustentáveis a partir de dados fiscais já existentes — NF-e,
              Nota de Produtor Rural e amostragem de campo.{" "}
              <span className="text-slate-800 font-medium">
                Sem criar moeda, sem novo órgão, sem custo obrigatório ao
                Estado no piloto.
              </span>
            </p>
            <div className="mt-8 flex flex-wrap gap-3 print:hidden">
              <a
                href="#materiais"
                className="rounded-lg bg-[#008080] text-white text-sm font-semibold px-5 py-3 hover:bg-[#006666] transition"
              >
                Ler materiais públicos
              </a>
              <button
                onClick={() => {
                  setShowForm(true);
                  setTimeout(
                    () =>
                      document
                        .getElementById("solicitar")
                        ?.scrollIntoView({ behavior: "smooth" }),
                    50,
                  );
                }}
                className="rounded-lg border border-slate-300 bg-white text-slate-800 text-sm font-semibold px-5 py-3 hover:bg-slate-50 transition"
              >
                Solicitar acesso técnico
              </button>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700">
                Sem token · sem criptoativo
              </span>
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700">
                Piloto 12 meses
              </span>
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700">
                GT-ETT: SEFAZ · Emater · Cooperativas · Academia
              </span>
            </div>
          </div>
        </section>

        {/* Como Funciona — visual */}
        <section className="mb-16">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#008080] font-semibold">
              Como funciona
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
              Quatro passos, dados já existentes
            </h2>
            <p className="mt-2 text-slate-600 max-w-3xl">
              O ETT não cria nova burocracia: reaproveita o que o produtor
              já emite e o que o Estado já recebe.
            </p>
          </div>
          <ol className="grid gap-4 md:grid-cols-4">
            {[
              {
                n: "01",
                t: "Ação sustentável",
                d: "Produtor adota prática elegível (adubação verde, plantio direto, manejo integrado, etc.).",
              },
              {
                n: "02",
                t: "Comprovação fiscal",
                d: "A prática é refletida em NF-e ou Nota de Produtor Rural — sem formulário extra.",
              },
              {
                n: "03",
                t: "Validação GT-ETT",
                d: "Grupo Técnico (SEFAZ · Emater · Cooperativas · Academia) valida por amostragem.",
              },
              {
                n: "04",
                t: "ETT Espelho",
                d: "Trajetória do produtor é registrada de forma pública, comparável e auditável.",
              },
            ].map((step) => (
              <li
                key={step.n}
                className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col"
              >
                <span className="text-3xl font-bold text-[#008080]/80 leading-none">
                  {step.n}
                </span>
                <h3 className="mt-3 text-base font-bold text-slate-900">
                  {step.t}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {step.d}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Livre acesso */}
        <section className="mb-14">
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-700 font-semibold">
                Acesso livre
              </p>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">
                Materiais de apresentação
              </h2>
            </div>
            <span className="text-xs text-slate-500">
              {freeSectors.length} documentos
            </span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {freeSectors.map((s) => {
              const open = openFree === s.id;
              return (
                <div
                  key={s.id}
                  className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col"
                >
                  <span className="inline-flex self-start items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full mb-3">
                    ● Livre
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 flex-1">
                    {s.teaser}
                  </p>
                  <button
                    onClick={() => openFreeBlock(s.id)}
                    className="mt-4 self-start text-sm font-semibold text-[#008080] hover:text-[#006666]"
                  >
                    {open ? "− Fechar" : "+ Ler agora"}
                  </button>
                </div>
              );
            })}
          </div>

          {openFree && (
            <div className="mt-6 bg-white rounded-2xl border border-slate-200 p-8 md:p-10 shadow-sm">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-2xl font-bold text-slate-900">
                  {getSector(openFree)?.title}
                </h3>
                <button
                  onClick={() => setOpenFree(null)}
                  className="print:hidden text-sm text-slate-500 hover:text-slate-800"
                >
                  Fechar ✕
                </button>
              </div>
              <SectorContent id={openFree} />
            </div>
          )}
        </section>

        {/* Restrito */}
        <section className="mb-14">
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-semibold">
                Acesso mediante liberação
              </p>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">
                Documentos técnicos e regulatórios
              </h2>
            </div>
            <span className="text-xs text-slate-500">
              {restrictedSectors.length} documentos
            </span>
          </div>
          <p className="text-slate-600 mb-6 max-w-3xl">
            Cada bloco abaixo detalha uma dimensão sensível do programa
            (metodologia, regulamento, governança, riscos). O acesso é
            individual, concedido pelo proponente após análise do vínculo
            institucional.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {restrictedSectors.map((s) => (
              <div
                key={s.id}
                className="relative bg-white border border-slate-200 rounded-2xl p-6 flex flex-col"
              >
                <span className="inline-flex self-start items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-slate-600 bg-slate-100 px-2 py-1 rounded-full mb-3">
                  🔒 Restrito
                </span>
                <h3 className="text-base font-bold text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 flex-1">
                  {s.teaser}
                </p>
                <button
                  onClick={() => requestAccess(s.id)}
                  className="mt-4 self-start rounded-lg bg-[#008080] text-white text-sm font-semibold px-4 py-2 hover:bg-[#006666]"
                >
                  Solicitar acesso
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Formulário */}
        <section
          id="solicitar"
          className="print:hidden mb-10 rounded-2xl border-2 border-dashed border-[#008080]/40 bg-[#008080]/5 p-8"
        >
          <h2 className="text-2xl font-bold text-slate-900 text-center">
            Solicitar acesso aos blocos restritos
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl mx-auto text-center">
            Cada pedido é analisado individualmente. Após aprovação, você
            recebe um link único de acesso apenas aos blocos liberados.
          </p>
          {!showForm ? (
            <div className="text-center mt-6">
              <button
                onClick={() => setShowForm(true)}
                className="rounded-lg bg-[#008080] text-white font-semibold px-6 py-3 hover:bg-[#006666]"
              >
                Abrir formulário
              </button>
            </div>
          ) : (
            <RequestForm preselected={preselected} />
          )}
        </section>

        <section className="rounded-2xl bg-slate-900 text-slate-100 p-8">
          <p className="font-semibold">
            Proponente Técnico: Marcos Fernando C. dos Santos — Pouso Alegre, MG
          </p>
          <p className="mt-1 text-slate-300 text-sm">
            Programa ETT — Modelo de Infraestrutura Regional · WhatsApp: (35) 99934-0088
          </p>
        </section>
      </main>
    </div>
  );
}

function RequestForm({ preselected }: { preselected: SectorId[] }) {
  const restricted = SECTORS.filter((s) => s.restricted);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [institution, setInstitution] = useState("");
  const [role, setRole] = useState("");
  const [justification, setJustification] = useState("");
  const [selected, setSelected] = useState<SectorId[]>(preselected);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  function toggle(id: SectorId) {
    setSelected((s) =>
      s.includes(id) ? s.filter((x) => x !== id) : [...s, id],
    );
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (selected.length === 0) {
      setError("Selecione pelo menos um bloco.");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) {
      setError("E-mail inválido.");
      return;
    }
    setBusy(true);
    const { error: dbError } = await supabase.from("access_requests").insert({
      name: name.trim(),
      email: email.trim(),
      institution: institution.trim(),
      role_title: role.trim(),
      justification: justification.trim(),
      sectors_requested: selected,
    });
    setBusy(false);
    if (dbError) {
      setError("Não foi possível registrar. Tente novamente.");
      return;
    }
    setDone(true);
  }

  if (done)
    return (
      <div className="mt-6 text-center">
        <p className="text-lg font-semibold text-emerald-700">
          ✓ Pedido enviado
        </p>
        <p className="mt-2 text-slate-600">
          Você receberá o link de acesso assim que o proponente aprovar sua
          solicitação.
        </p>
      </div>
    );

  return (
    <form onSubmit={submit} className="mt-6 max-w-2xl mx-auto grid gap-3">
      <input
        required
        maxLength={120}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome completo"
        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3"
      />
      <div className="grid gap-3 md:grid-cols-2">
        <input
          type="email"
          required
          maxLength={254}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail institucional"
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3"
        />
        <input
          required
          maxLength={120}
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Cargo / função"
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3"
        />
      </div>
      <input
        required
        maxLength={160}
        value={institution}
        onChange={(e) => setInstitution(e.target.value)}
        placeholder="Instituição / órgão / empresa"
        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3"
      />
      <textarea
        required
        maxLength={2000}
        rows={4}
        value={justification}
        onChange={(e) => setJustification(e.target.value)}
        placeholder="Justificativa: para qual finalidade o acesso é solicitado?"
        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 resize-none"
      />
      <div>
        <p className="text-sm font-medium text-slate-700 mb-2">
          Blocos desejados:
        </p>
        <div className="flex flex-wrap gap-2">
          {restricted.map((s) => {
            const on = selected.includes(s.id);
            return (
              <button
                type="button"
                key={s.id}
                onClick={() => toggle(s.id)}
                className={`text-sm px-3 py-2 rounded-full border ${
                  on
                    ? "bg-[#008080] text-white border-[#008080]"
                    : "bg-white text-slate-700 border-slate-300"
                }`}
              >
                {on ? "✓ " : ""}
                {s.title}
              </button>
            );
          })}
        </div>
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={busy}
        className="rounded-lg bg-[#008080] text-white font-semibold py-3 hover:bg-[#006666] disabled:opacity-60"
      >
        {busy ? "Enviando..." : "Enviar pedido"}
      </button>
    </form>
  );
}
