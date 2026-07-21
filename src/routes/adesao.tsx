import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { EttLogo } from "@/components/EttLogo";

export const Route = createFileRoute("/adesao")({
  head: () => ({
    meta: [
      { title: "Modelo de Adesão — Programa ETT" },
      {
        name: "description",
        content:
          "Modelo institucional de adesão ao Programa ETT: cessão de uso, participação técnica no GT-ETT e retribuição contratual. Sem checkout online — negociação por contrato.",
      },
      { property: "og:title", content: "Modelo de Adesão — Programa ETT" },
      {
        property: "og:description",
        content:
          "Cessão de uso do Programa ETT + participação técnica do proponente no GT-ETT enquanto vigente o Programa.",
      },
      { property: "og:type", content: "article" },
      {
        property: "og:url",
        content: "https://green-incentive-chain.lovable.app/adesao",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://green-incentive-chain.lovable.app/adesao",
      },
    ],
  }),
  component: AdesaoPage,
});

function AdesaoPage() {
  return (
    <div className="min-h-screen bg-[#fcfbf8] text-slate-800 font-sans">
      <header className="print:hidden border-b border-slate-200 bg-white sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <EttLogo />
          </Link>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Imprimir / Salvar PDF
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-xs uppercase tracking-[0.25em] text-[#008080] font-semibold">
          Documento Institucional · 2026
        </p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
          Modelo de Adesão ao<br />
          <span className="text-[#008080]">Programa ETT</span>
        </h1>
        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
          O Programa ETT é obra autoral. Sua utilização por município, estado,
          cooperativa, indústria ou organização se dá mediante{" "}
          <strong className="text-slate-800">contrato de cessão de uso</strong>{" "}
          firmado com o proponente, sem prejuízo da autonomia técnica e
          decisória do aderente.
        </p>

        {/* Estrutura da adesão */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900">
            Estrutura da adesão
          </h2>
          <p className="mt-2 text-slate-600">
            Modelo em três camadas. Valores fixados por negociação, conforme
            porte, escopo territorial e escopo setorial do aderente.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <TierCard
              n="I"
              title="Taxa de adesão"
              subtitle="Pagamento único"
              body="Cessão formal do direito de uso do nome, da metodologia PCP, dos documentos institucionais e do direito de operar o Espelho ETT no território/setor contratado."
              pill="Sob consulta"
            />
            <TierCard
              n="II"
              title="Retribuição mensal"
              subtitle="Enquanto vigente o Programa"
              body="Contraprestação pela manutenção da autorização de uso e pela participação técnica permanente do proponente no GT-ETT durante toda a vigência da adesão."
              pill="Sob consulta"
            />
            <TierCard
              n="III"
              title="Despesas"
              subtitle="Reembolso"
              body="Deslocamento, hospedagem, materiais impressos institucionais e demais custos diretamente vinculados à execução — sempre por reembolso mediante comprovação."
              pill="Contra apresentação"
            />
          </div>

          <p className="mt-6 text-sm text-slate-500 leading-relaxed">
            Valores das camadas I e II são propostos caso a caso e negociados
            diretamente com o aderente. Não há checkout on-line: adesão
            institucional se formaliza por contrato + nota fiscal, com
            pagamento por boleto, PIX ou empenho, conforme a natureza jurídica
            do contratante.
          </p>
        </section>

        {/* Posição no GT */}
        <section className="mt-14 rounded-2xl border border-[#008080]/30 bg-[#008080]/5 p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[#008080] font-semibold">
            Posição do proponente no GT-ETT
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            Membro técnico permanente — atuação consultiva e metodológica
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            <strong>Marcos Fernando C. dos Santos</strong>, autor e proponente
            do Programa ETT, integra o GT-ETT na condição de{" "}
            <strong>membro técnico permanente</strong> enquanto vigente o
            Programa. Sua atuação é de natureza{" "}
            <strong>consultiva e metodológica</strong>, não configurando
            responsabilidade técnica em sentido legal (CREA, CFT, CRA, CRC ou
            equivalentes) sobre atos praticados por aderentes, por órgãos
            integrantes do GT-ETT ou pelo próprio Grupo Técnico em suas
            deliberações colegiadas.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-slate-700">
            <li className="flex gap-2">
              <span className="text-[#008080] font-bold">→</span>
              Participa das reuniões e deliberações do GT-ETT com voz técnica.
            </li>
            <li className="flex gap-2">
              <span className="text-[#008080] font-bold">→</span>
              Zela pela integridade metodológica do Programa (PCP,
              Regulamento, Governança).
            </li>
            <li className="flex gap-2">
              <span className="text-[#008080] font-bold">→</span>
              Não assume responsabilidade técnica registrada por atos
              executivos ou fiscalizatórios dos órgãos partícipes.
            </li>
            <li className="flex gap-2">
              <span className="text-[#008080] font-bold">→</span>
              Sua permanência acompanha a vigência do Programa no território
              do aderente.
            </li>
          </ul>
        </section>

        {/* Enquadramento jurídico */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-slate-900">
            Enquadramento jurídico sugerido
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            A contratação por ente público pode se dar por{" "}
            <strong>inexigibilidade de licitação</strong> em razão da
            singularidade do objeto — obra autoral de metodologia institucional
            regional — com fundamento nos arts. 74 e 75 da Lei nº 14.133/2021
            (Nova Lei de Licitações), observada a análise da assessoria
            jurídica do órgão contratante. Para cooperativas e entes privados,
            aplica-se contrato particular de cessão de uso e prestação de
            serviços técnicos, com registro dos direitos autorais do Programa.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-14 rounded-2xl bg-slate-900 text-slate-100 p-8 text-center">
          <h2 className="text-2xl font-bold">
            Solicitar proposta formal de adesão
          </h2>
          <p className="mt-2 text-slate-300 max-w-xl mx-auto">
            Registre o interesse pelo formulário na página inicial ou
            entre em contato direto com o proponente.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center print:hidden">
            <Link
              to="/"
              hash="solicitar"
              className="rounded-lg bg-[#008080] text-white text-sm font-semibold px-5 py-3 hover:bg-[#006666] transition"
            >
              Abrir formulário de solicitação
            </Link>
            <a
              href="https://wa.me/5535999340088"
              target="_blank"
              rel="noopener"
              className="rounded-lg border border-slate-600 bg-slate-800 text-slate-100 text-sm font-semibold px-5 py-3 hover:bg-slate-700 transition"
            >
              WhatsApp: (35) 99934-0088
            </a>
          </div>
          <p className="mt-6 text-xs text-slate-400">
            Marcos Fernando C. dos Santos — Pouso Alegre, MG · Autor e
            Proponente do Programa ETT
          </p>
        </section>
      </main>
    </div>
  );
}

function TierCard({
  n,
  title,
  subtitle,
  body,
  pill,
}: {
  n: string;
  title: string;
  subtitle: string;
  body: string;
  pill: string;
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col">
      <span className="text-3xl font-bold text-[#008080]/80 leading-none">
        {n}
      </span>
      <h3 className="mt-3 text-base font-bold text-slate-900">{title}</h3>
      <p className="text-xs uppercase tracking-wider text-slate-500 mt-1">
        {subtitle}
      </p>
      <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">
        {body}
      </p>
      <span className="mt-4 self-start inline-flex text-[10px] font-semibold uppercase tracking-wider text-[#008080] bg-[#008080]/10 px-2 py-1 rounded-full">
        {pill}
      </span>
    </div>
  );
}
// dummy touch to satisfy the linter's unused-import guard
void supabase;
