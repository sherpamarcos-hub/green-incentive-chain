import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

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
  const [email, setEmail] = useState("");

  function handleAccess(e: React.FormEvent) {
    e.preventDefault();
    // Sem backend: apenas registra no console e navega.
    if (!email.includes("@")) return;
    window.location.href = "/carta";
  }

  return (
    <div className="min-h-screen bg-[#fcfbf8] text-slate-800 font-sans">
      <header className="print:hidden border-b border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-sm font-semibold tracking-wide text-[#008080]">
            SISTEMA ETT
          </span>
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

        <section className="space-y-8 bg-white rounded-2xl border border-slate-200 p-8 md:p-10 shadow-sm">
          <Bloco n="1" titulo="Visão geral">
            O Sistema ETT é um ecossistema de incentivos verificáveis que
            transforma comportamentos sustentáveis em vantagem econômica e
            reputacional mensurável. Diferentemente de modelos baseados em
            declarações, o ETT só atribui valor ao que é efetivamente medido e
            auditado.
          </Bloco>
          <Bloco n="2" titulo="Problema endereçado">
            Apesar das regulações vigentes, falta um mecanismo estrutural que
            recompense quem realmente gera impacto. Persistem falhas de
            incentivos, perdas crônicas de água nas redes públicas, baixa
            circularidade de resíduos e a dificuldade de distinguir impacto real
            de greenwashing.
          </Bloco>
          <Bloco n="3" titulo="Arquitetura em três pilares">
            <strong>Evidência (MRV):</strong> registro e auditoria de ações por
            telemetria, laudos e notas fiscais.{" "}
            <strong>Transação (ETT-Ativo):</strong> a evidência gera um ativo
            digital utilizável em insumos, crédito verde e serviços conveniados.{" "}
            <strong>Transformação (Reputação):</strong> o histórico consolida um
            Score intransferível vinculado ao CPF/CNPJ.
          </Bloco>
          <Bloco n="4" titulo="Frentes do piloto">
            <strong>H2O-Perdas</strong> (água municipal): redução de perdas
            reais e aparentes nas redes de distribuição.{" "}
            <strong>H2O-Quali</strong> (qualidade ambiental): redução de carga
            poluente na fonte em indústria e agro. <strong>H2O-Circ</strong>{" "}
            (circularidade): ampliação da logística reversa de embalagens e
            resíduos.
          </Bloco>
          <Bloco n="5" titulo="Modelo de governança">
            Estruturação de um Grupo de Trabalho (GT) para a implantação de um
            ambiente regulatório em modelo sandbox, com participação de órgãos
            governamentais, consórcios intermunicipais e empresas, no Sul de
            Minas Gerais.
          </Bloco>
          <Bloco n="6" titulo="Próximos passos">
            Formalização do GT, definição dos indicadores de MRV por frente,
            seleção de municípios e empresas-piloto e cronograma de implantação.
            O contato com o proponente pode ser feito pelos canais informados
            abaixo.
          </Bloco>
        </section>

        <section className="mt-10 rounded-2xl bg-slate-900 text-slate-100 p-8">
          <p className="font-semibold">
            Proponente: Marcos Fernando C. dos Santos — Pouso Alegre - MG
          </p>
          <p className="mt-1 text-slate-300">WhatsApp: (35) 99934-0088</p>
        </section>

        <section className="print:hidden mt-10 rounded-2xl border-2 border-dashed border-[#008080]/40 bg-[#008080]/5 p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Acesso à Carta de Apresentação
          </h2>
          <p className="mt-2 text-slate-600">
            Para acessar a fundamentação completa do projeto e detalhes
            estruturais, insira seu e-mail institucional.
          </p>
          <form
            onSubmit={handleAccess}
            className="mt-5 flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="@email.gov.br ou empresa.com"
              className="flex-1 px-4 py-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#008080] focus:border-transparent"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-[#008080] text-white font-semibold hover:bg-[#006666] transition-colors"
            >
              Acessar Carta
            </button>
          </form>
          <p className="mt-3 text-xs text-slate-500">
            🔒 Seus dados estão protegidos.
          </p>
          <p className="mt-2 text-xs text-slate-400">
            Ou acesse diretamente:{" "}
            <Link to="/carta" className="underline hover:text-[#008080]">
              /carta
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
}

function Bloco({
  n,
  titulo,
  children,
}: {
  n: string;
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xl font-bold text-slate-900 flex items-baseline gap-3">
        <span className="text-[#008080]">{n}.</span> {titulo}
      </h2>
      <p className="mt-2 text-slate-700 leading-relaxed">{children}</p>
    </div>
  );
}
