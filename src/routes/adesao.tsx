import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

import { EttLogo } from "@/components/EttLogo";
import { SITE_URL } from "@/lib/site";

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
        content: `${SITE_URL}/adesao`,
      },
    ],
    links: [
      {
        rel: "canonical",
        href: `${SITE_URL}/adesao`,
      },
    ],
  }),
  component: AdesaoPage,
});

function AdesaoPage() {
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
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Imprimir / Salvar PDF
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-xs uppercase tracking-[0.25em] text-[#1a5f2a] font-semibold">
          Proposta Institucional · 2026
        </p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
          Modelo de Adesão ao<br />
          <span className="text-[#1a5f2a]">Programa ETT</span>
        </h1>
        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
          O Programa ETT é obra autoral. Sua utilização por município, estado,
          cooperativa, indústria ou organização se dá mediante{" "}
          <strong className="text-slate-800">contrato de cessão de uso</strong>{" "}
          firmado com o proponente, sem prejuízo da autonomia técnica e
          decisória do aderente.
        </p>

        {/* Titularidade e autoria */}
        <section className="mt-8 rounded-2xl border-l-4 border-[#1a5f2a] bg-[#1a5f2a]/5 p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#1a5f2a] font-semibold">
            Titularidade e autoria
          </p>
          <p className="mt-3 text-slate-700 leading-relaxed">
            O <strong>Programa ETT — Espelho de Trajetória e Transparência</strong>{" "}
            é de autoria de <strong>Marcos Fernando C. dos Santos</strong>{" "}
            (Pouso Alegre/MG), sendo obra intelectual originária protegida pela{" "}
            <strong>Lei nº 9.610/1998</strong> (Lei de Direitos Autorais).
            A anterioridade da concepção, dos documentos institucionais, da
            metodologia PCP e da denominação "Programa ETT" é comprovada pela
            proteção autoral, por publicação datada nesta página institucional
            e por repositório versionado.
          </p>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Qualquer uso, adaptação, replicação regional ou derivação — por
            entes públicos, cooperativas, indústrias, organizações ou pessoas
            físicas — requer <strong>autorização formal do autor</strong> e
            preservação da atribuição de autoria em todos os documentos
            derivados. O interesse em participar, financiar ou implementar o
            Programa não transfere titularidade da obra.
          </p>
          <p className="mt-3">
            <Link
              to="/termo-interesse"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#1a5f2a] hover:underline"
            >
              Ver Termo de Interesse (documento não vinculante) →
            </Link>
          </p>
        </section>

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
        <section className="mt-14 rounded-2xl border border-[#1a5f2a]/30 bg-[#1a5f2a]/5 p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[#1a5f2a] font-semibold">
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
              <span className="text-[#1a5f2a] font-bold">→</span>
              Participa das reuniões e deliberações do GT-ETT com voz técnica.
            </li>
            <li className="flex gap-2">
              <span className="text-[#1a5f2a] font-bold">→</span>
              Zela pela integridade metodológica do Programa (PCP,
              Regulamento, Governança).
            </li>
            <li className="flex gap-2">
              <span className="text-[#1a5f2a] font-bold">→</span>
              Não assume responsabilidade técnica registrada por atos
              executivos ou fiscalizatórios dos órgãos partícipes.
            </li>
            <li className="flex gap-2">
              <span className="text-[#1a5f2a] font-bold">→</span>
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
            serviços técnicos, com proteção dos direitos autorais do Programa.
          </p>
        </section>

        {/* Modalidades de vinculação */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-slate-900">
            Modalidades de vinculação do proponente
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            A retribuição prevista na Camada II pode ser formalizada por
            diferentes instrumentos, conforme a natureza jurídica do aderente e
            a orientação de sua assessoria jurídica. As vias abaixo são
            alternativas entre si — não cumulativas.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <ModoCard
              tag="Via principal"
              title="Licenciamento de propriedade intelectual"
              body="Contrato de licença de uso não exclusiva do Programa ETT, obra autoral protegida, com remuneração periódica, prazo determinado e escopo territorial definido. Não transfere titularidade."
            />
            <ModoCard
              tag="Via principal"
              title="Bolsa de pesquisa e inovação"
              body="Vinculação do proponente a instituição de ensino ou pesquisa partícipe do GT-ETT, com bolsa custeada por editais de fomento à inovação. Fortalece a validação técnica independente do piloto."
            />
            <ModoCard
              tag="Alternativa"
              title="Prestação de serviço técnico"
              body="Contratação direta de serviço técnico especializado pelo aderente, observados os limites, a publicidade e o processo seletivo documentado exigidos pela legislação aplicável ao contratante."
            />
          </div>

          <p className="mt-6 text-sm text-slate-500 leading-relaxed">
            A escolha da modalidade é decisão do aderente. O proponente não
            condiciona a adesão ao Programa a nenhuma via específica de
            remuneração.
          </p>
        </section>

        {/* Salvaguardas de integridade */}
        <section className="mt-14 rounded-2xl border border-slate-300 bg-slate-50 p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-600 font-semibold">
            Integridade
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            Salvaguardas aplicáveis à remuneração do proponente
          </h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Qualquer vínculo remunerado entre o proponente e o aderente observa,
            desde a origem, as seguintes salvaguardas — assumidas de forma
            voluntária e verificável:
          </p>
          <ol className="mt-5 space-y-3 text-sm text-slate-700">
            {[
              [
                "Processo seletivo documentado",
                "Ainda que simplificado, precedido de edital ou chamamento público quando o contratante for ente da administração pública.",
              ],
              [
                "Contrato formal",
                "Com escopo, prazo, valor, forma de pagamento e obrigação de prestação de contas expressamente definidos.",
              ],
              [
                "Limite temporal",
                "Vínculo atrelado à vigência do GT-ETT, com prazo determinado (referência: 24 meses), renovável mediante avaliação de resultados.",
              ],
              [
                "Prestação de contas trimestral",
                "Relatório das entregas do período: reuniões, documentos produzidos, articulação institucional e marcos metodológicos.",
              ],
              [
                "Isenção de conflito de interesse",
                "O proponente se abstém de votar ou deliberar em matéria que afete direta ou indiretamente a sua própria remuneração.",
              ],
            ].map(([t, d], i) => (
              <li key={t} className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1a5f2a] text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span>
                  <strong className="text-slate-900">{t}</strong> — {d}
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-xs text-slate-500 leading-relaxed">
            As salvaguardas acima integram, por referência, qualquer instrumento
            contratual firmado com base neste Modelo de Adesão.
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
              hash="contato"
              className="rounded-lg bg-[#1a5f2a] text-white text-sm font-semibold px-5 py-3 hover:bg-[#164f23] transition"
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

        {/* Rodapé jurídico */}
        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 text-xs text-slate-600 leading-relaxed">
          <p className="font-semibold text-slate-800 mb-2">
            Titularidade e enquadramento fiscal
          </p>
          <p>
            Titular contratante:{" "}
            <strong>Marcos Fernando C. dos Santos</strong>, inscrito no CNPJ sob
            nº <strong>55.536.716/0001-08</strong> (Microempreendedor
            Individual — MEI), com sede em Pouso Alegre/MG.
          </p>
          <p className="mt-2">
            Valores das camadas I e II do modelo de adesão são, nesta fase
            inicial, de caráter <strong>simbólico</strong>, negociados
            individualmente e compatíveis com os limites legais do
            enquadramento MEI (Lei Complementar nº 123/2006 e alterações).
            Havendo necessidade de contratação de porte superior ao permitido
            pelo MEI, o proponente promoverá, previamente à assinatura, a
            migração para enquadramento tributário adequado (ME ou EPP), sem
            prejuízo da continuidade da negociação.
          </p>
          <p className="mt-2">
            A emissão de nota fiscal observará o regime vigente na data da
            contratação. Contratos com entes públicos poderão exigir
            documentação complementar (CND, regularidade FGTS, certidões
            municipais), fornecida sob demanda.
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
      <span className="text-3xl font-bold text-[#1a5f2a]/80 leading-none">
        {n}
      </span>
      <h3 className="mt-3 text-base font-bold text-slate-900">{title}</h3>
      <p className="text-xs uppercase tracking-wider text-slate-500 mt-1">
        {subtitle}
      </p>
      <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">
        {body}
      </p>
      <span className="mt-4 self-start inline-flex text-[10px] font-semibold uppercase tracking-wider text-[#1a5f2a] bg-[#1a5f2a]/10 px-2 py-1 rounded-full">
        {pill}
      </span>
    </div>
  );
}

function ModoCard({
  tag,
  title,
  body,
}: {
  tag: string;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <span className="inline-block rounded-full bg-[#1a5f2a]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#1a5f2a]">
        {tag}
      </span>
      <h3 className="mt-3 text-base font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-700">{body}</p>
    </div>
  );
}
