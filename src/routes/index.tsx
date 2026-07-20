import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { EttLogo } from "@/components/EttLogo";
import { SECTORS, type SectorId } from "@/lib/sectors";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sistema ETT — Proposta Técnica" },
      {
        name: "description",
        content:
          "Ecossistema de incentivos verificáveis para água, solo e circularidade — Piloto Sul de Minas Gerais.",
      },
      { property: "og:title", content: "Sistema ETT — Proposta Técnica" },
      {
        property: "og:description",
        content:
          "Proposta técnica do Sistema ETT: MRV, ativo digital e reputação para impacto ambiental verificável.",
      },
    ],
  }),
  component: PropostaPage,
});

function PropostaPage() {
  const [showForm, setShowForm] = useState(false);
  const [preselected, setPreselected] = useState<SectorId[]>([]);

  function openFor(id: SectorId) {
    setPreselected([id]);
    setShowForm(true);
    setTimeout(() => {
      document.getElementById("solicitar")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }

  return (
    <div className="min-h-screen bg-[#fcfbf8] text-slate-800 font-sans">
      <header className="print:hidden border-b border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <EttLogo />
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Imprimir / Salvar em PDF
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <section className="mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
            Proposta Técnica
          </p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold text-slate-900">
            Sistema ETT
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl">
            Ecossistema de incentivos verificáveis para a preservação da água,
            do solo e a promoção da circularidade — Projeto-Piloto Sul de Minas
            Gerais.
          </p>
        </section>

        {/* Visão Geral - LIBERADA */}
        <section className="space-y-8 bg-white rounded-2xl border border-slate-200 p-8 md:p-10 shadow-sm">
          <div>
            <p className="text-xs uppercase tracking-wide text-[#008080] font-semibold mb-1">
              Visão geral · acesso livre
            </p>
            <h2 className="text-2xl font-bold text-slate-900">
              O que é o Sistema ETT
            </h2>
          </div>
          <p className="text-slate-700 leading-relaxed">
            O Sistema ETT é um ecossistema de incentivos verificáveis que
            transforma comportamentos sustentáveis em vantagem econômica e
            reputacional mensurável. Diferentemente de modelos baseados em
            declarações, o ETT só atribui valor ao que é efetivamente medido e
            auditado.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Três pilares sustentam a arquitetura:{" "}
            <strong>Evidência</strong> (MRV — registro auditável),{" "}
            <strong>Transação</strong> (ETT-Ativo — valor econômico) e{" "}
            <strong>Transformação</strong> (Reputação — score vinculado ao
            CPF/CNPJ). O piloto no Sul de Minas cobre três frentes: perdas de
            água municipal, qualidade ambiental (indústria/agro) e
            circularidade de embalagens e resíduos.
          </p>
        </section>

        {/* Setores TRANCADOS */}
        <section className="mt-12">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">
            Conteúdo restrito
          </p>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Blocos com acesso mediante liberação
          </h2>
          <p className="text-slate-600 mb-6 max-w-2xl">
            Cada bloco abaixo detalha uma dimensão sensível do sistema.
            Solicite acesso indicando seu vínculo institucional — a liberação é
            individual e concedida pelo proponente.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {SECTORS.map((s) => (
              <div
                key={s.id}
                className="relative bg-white border border-slate-200 rounded-2xl p-6 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                    🔒 Restrito
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 flex-1">
                  {s.teaser}
                </p>
                <button
                  onClick={() => openFor(s.id)}
                  className="mt-4 self-start rounded-lg bg-[#008080] text-white text-sm font-semibold px-4 py-2 hover:bg-[#006666]"
                >
                  Solicitar acesso
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Formulário de solicitação */}
        <section
          id="solicitar"
          className="print:hidden mt-12 rounded-2xl border-2 border-dashed border-[#008080]/40 bg-[#008080]/5 p-8"
        >
          <h2 className="text-2xl font-bold text-slate-900 text-center">
            Solicitar acesso aos blocos restritos
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl mx-auto text-center">
            Cada pedido é analisado individualmente. Após aprovação, você
            recebe um link único de acesso.
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

        <section className="mt-10 rounded-2xl bg-slate-900 text-slate-100 p-8">
          <p className="font-semibold">
            Proponente: Marcos Fernando C. dos Santos — Pouso Alegre - MG
          </p>
          <p className="mt-1 text-slate-300">WhatsApp: (35) 99934-0088</p>
        </section>
      </main>
    </div>
  );
}

function RequestForm({ preselected }: { preselected: SectorId[] }) {
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
          {SECTORS.map((s) => {
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
