import { createFileRoute, Link } from "@tanstack/react-router";

import { EttLogo } from "@/components/EttLogo";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/termo-interesse")({
  head: () => ({
    meta: [
      { title: "Termo de Interesse — Programa ETT" },
      {
        name: "description",
        content:
          "Termo de Interesse não vinculante para instituições, órgãos, cooperativas ou investidores interessados no Programa ETT. Reconhece autoria e abre etapa de negociação.",
      },
      { property: "og:title", content: "Termo de Interesse — Programa ETT" },
      {
        property: "og:description",
        content:
          "Documento de manifestação formal de interesse no Programa ETT, com reconhecimento de autoria e abertura de negociação.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE_URL}/termo-interesse` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/termo-interesse` }],
  }),
  component: TermoInteressePage,
});

function TermoInteressePage() {
  const hoje = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-[#fcfbf8] text-slate-800 font-sans">
      <header className="print:hidden border-b border-slate-200 bg-white sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <Link to="/" className="flex items-center gap-3" aria-label="Voltar à página inicial">
            <EttLogo />
          </Link>
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="inline-flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              ← Início
            </Link>
            <Link
              to="/adesao"
              className="inline-flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Modelo de Adesão
            </Link>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-lg bg-[#008080] px-3 py-2 text-sm font-semibold text-white hover:bg-[#006666]"
            >
              Imprimir / Salvar PDF
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-xs uppercase tracking-[0.25em] text-[#008080] font-semibold">
          Documento não vinculante
        </p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
          Termo de Interesse<br />
          <span className="text-[#008080]">Programa ETT</span>
        </h1>
        <p className="mt-6 text-slate-600 leading-relaxed">
          Este documento formaliza, sem gerar obrigação contratual, o
          interesse de uma instituição, órgão, empresa, cooperativa ou pessoa
          física em conhecer, apoiar, financiar ou implementar o Programa ETT
          — Espelho de Trajetória e Transparência.
        </p>

        {/* Preâmbulo */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-slate-900">Preâmbulo</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            O <strong>Programa ETT</strong> é obra intelectual originária de{" "}
            <strong>Marcos Fernando C. dos Santos</strong> (Pouso Alegre/MG),
            protegida pela <strong>Lei nº 9.610/1998</strong>. A denominação
            "Programa ETT", a metodologia PCP (Perfil de Coerência
            Produtiva), o Regulamento Institucional, o modelo de Governança
            (GT-ETT) e demais documentos publicados em{" "}
            <a href={SITE_URL} className="text-[#008080] underline">
              {SITE_URL.replace("https://", "")}
            </a>{" "}
            são de titularidade exclusiva do autor.
          </p>
        </section>

        {/* Cláusulas */}
        <section className="mt-10 space-y-6">
          <h2 className="text-xl font-bold text-slate-900">Do interesse manifestado</h2>

          <Clausula n="1" titulo="Reconhecimento de autoria">
            O(a) interessado(a) declara reconhecer{" "}
            <strong>Marcos Fernando C. dos Santos</strong> como autor e
            titular exclusivo do Programa ETT, comprometendo-se a citar a
            autoria em qualquer material, apresentação, documento derivado,
            publicação técnica ou proposta orçamentária que faça referência
            ao Programa, mesmo em fase preliminar de estudo.
          </Clausula>

          <Clausula n="2" titulo="Ausência de transferência de titularidade">
            A manifestação de interesse aqui firmada não implica cessão,
            licenciamento, transferência de titularidade, nem autorização de
            uso da obra. Qualquer uso operacional do Programa depende de
            contrato específico de cessão de uso, conforme{" "}
            <Link to="/adesao" className="text-[#008080] underline">
              Modelo de Adesão
            </Link>
            .
          </Clausula>

          <Clausula n="3" titulo="Confidencialidade recíproca">
            As partes tratarão como confidenciais as informações
            institucionais, técnicas e estratégicas trocadas nas conversas
            preliminares, resguardado o direito de o autor divulgar
            publicamente a existência do interesse manifestado, sem revelar
            valores, condições ou dados sensíveis do(a) interessado(a).
          </Clausula>

          <Clausula n="4" titulo="Boa-fé negocial">
            O(a) interessado(a) compromete-se a conduzir eventuais tratativas
            em boa-fé, sem replicar, adaptar ou apresentar o Programa como
            iniciativa própria ou de terceiros durante ou após a fase de
            negociação, salvo autorização expressa e escrita do autor.
          </Clausula>

          <Clausula n="5" titulo="Participação do autor no GT-ETT">
            Havendo evolução para contrato de adesão, o(a) interessado(a)
            reconhece a condição do autor como <strong>membro técnico permanente</strong>{" "}
            do Grupo Técnico do Programa (GT-ETT) durante toda a vigência da
            adesão, com atuação consultiva e metodológica, nos termos do
            Modelo de Adesão publicado.
          </Clausula>

          <Clausula n="6" titulo="Natureza não vinculante">
            Este Termo <strong>não constitui contrato, promessa de contratar
            ou obrigação financeira</strong> para nenhuma das partes. Serve
            exclusivamente para formalizar o interesse e proteger a autoria
            durante o período de estudos e negociação.
          </Clausula>

          <Clausula n="7" titulo="Prazo e revogação">
            A manifestação de interesse tem validade de{" "}
            <strong>180 (cento e oitenta) dias</strong> a contar da
            assinatura, podendo ser revogada por qualquer das partes mediante
            simples comunicação escrita, sem ônus ou penalidades.
          </Clausula>
        </section>

        {/* Assinaturas */}
        <section className="mt-12 border-t border-slate-200 pt-8">
          <p className="text-sm text-slate-600">
            Emitido em <strong>{hoje}</strong>.
          </p>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <div className="border-t border-slate-400 pt-2">
                <p className="text-sm font-semibold text-slate-900">
                  Marcos Fernando C. dos Santos
                </p>
                <p className="text-xs text-slate-500">
                  Autor e proponente do Programa ETT<br />
                  CNPJ MEI 55.536.716/0001-08 — Pouso Alegre/MG
                </p>
              </div>
            </div>

            <div>
              <div className="border-t border-slate-400 pt-2">
                <p className="text-sm font-semibold text-slate-900">
                  Interessado(a)
                </p>
                <p className="text-xs text-slate-500">
                  Nome:<br />
                  Instituição / Órgão / Empresa:<br />
                  CPF/CNPJ:<br />
                  Cargo:
                </p>
              </div>
            </div>
          </div>

          <p className="mt-10 text-xs text-slate-500 leading-relaxed">
            Documento gerado a partir da página institucional{" "}
            <a href={SITE_URL} className="underline">
              {SITE_URL.replace("https://", "")}
            </a>
            . Para versão contratual definitiva, consulte a página{" "}
            <Link to="/adesao" className="underline">
              Modelo de Adesão
            </Link>
            .
          </p>
        </section>
      </main>
    </div>
  );
}

function Clausula({
  n,
  titulo,
  children,
}: {
  n: string;
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="text-xs uppercase tracking-wider text-[#008080] font-bold">
        Cláusula {n}
      </p>
      <h3 className="mt-1 text-base font-bold text-slate-900">{titulo}</h3>
      <p className="mt-2 text-sm text-slate-700 leading-relaxed">{children}</p>
    </div>
  );
}
