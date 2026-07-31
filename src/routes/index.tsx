import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  Award,
  Ban,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Download,
  FileText,
  Landmark,
  Leaf,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  Receipt,
  ShieldCheck,
  Sprout,
  TrendingUp,
  Unlock,
  Users,
  Linkedin,
} from "lucide-react";

import { supabase } from "@/integrations/supabase/client";
import { EttLogo } from "@/components/EttLogo";
import { Reveal } from "@/components/Reveal";
import { SectorContent } from "@/components/SectorContent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SECTORS, type SectorId } from "@/lib/sectors";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Programa ETT — Espelho de Trajetória e Transparência" },
      {
        name: "description",
        content:
          "Infraestrutura pública regional que reconhece práticas produtivas sustentáveis usando NF-e e Nota de Produtor Rural — sem burocracia extra e sem custo obrigatório ao Estado.",
      },
      { property: "og:title", content: "Programa ETT — Espelho de Trajetória e Transparência" },
      {
        property: "og:description",
        content:
          "Reconhecimento público de práticas sustentáveis a partir de dados fiscais já existentes. Para produtores, cooperativas, governos, empresas e investidores.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Programa ETT — Espelho de Trajetória e Transparência" },
      {
        name: "twitter:description",
        content:
          "Reconhecimento público de práticas sustentáveis sem burocracia extra, a partir de dados fiscais oficiais.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
  }),
  component: LandingPage,
});

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const NAV = [
  { id: "inicio", label: "Início" },
  { id: "como-funciona", label: "Como Funciona" },
  { id: "quem-ganha", label: "Quem Ganha" },
  { id: "documentos", label: "Documentos" },
  { id: "faq", label: "FAQ" },
  { id: "contato", label: "Contato" },
];

const PROBLEMAS = [
  {
    icon: Ban,
    tone: "text-[#c62828]/80",
    t: "Selos custam caro",
    d: "Auditorias de R$ 15–50 mil por ano excluem quem produz de forma limpa, mas sem capital.",
  },
  {
    icon: FileText,
    tone: "text-slate-400",
    t: "O SBCE ignora a produção primária",
    d: "O mercado regulado de carbono exclui o pequeno produtor rural por definição legal.",
  },
  {
    icon: AlertTriangle,
    tone: "text-amber-500",
    t: "Greenwashing sem rastreio",
    d: "Grandes marcas precisam de dados reais da cadeia. O produtor não tem como provar o que faz.",
  },
];


const PASSOS = [
  {
    n: "01",
    icon: Leaf,
    t: "Ação sustentável",
    d: "Adubação verde, plantio direto, manejo integrado.",
  },
  {
    n: "02",
    icon: Receipt,
    t: "Comprovação fiscal",
    d: "Refletida na NF-e ou Nota de Produtor Rural.",
  },
  {
    n: "03",
    icon: Users,
    t: "Validação GT-ETT",
    d: "SEFAZ, Emater, cooperativas e academia validam por amostragem.",
  },
  {
    n: "04",
    icon: Award,
    t: "ETT Espelho",
    d: "Trajetória pública, comparável e auditável.",
  },
];


const PANORAMA: { p: string; f: string; g: string }[] = [
  {
    p: "ABC+ / RenovAgro",
    f: "Financia projetos de baixo carbono de maior porte, com limite de crédito elevado e juros de mercado subsidiado.",
    g: "Não acompanha práticas operacionais no nível da propriedade. O ETT registra a ação cotidiana, de menor escala, que não chega a virar projeto financiável.",
  },
  {
    p: "Pronaf Eco / Agroecologia",
    f: "Crédito subsidiado dirigido à agricultura familiar, com taxas reduzidas.",
    g: "O acesso efetivo é minoritário e as linhas ambientais representam fração marginal da carteira. O ETT reconhece a prática sem exigir operação de crédito.",
  },
  {
    p: "CAR",
    f: "Cadastro ambiental rural obrigatório, com milhões de registros declarados.",
    g: "É instrumento de cadastro, não de reconhecimento. Muitos registros seguem pendentes de análise. O ETT não depende de validação cadastral para começar.",
  },
  {
    p: "SeloVerde MG",
    f: "Rastreabilidade socioambiental para cadeias exportadoras de café, soja e pecuária.",
    g: "Voltado à conformidade de exportação e a empresas de médio e grande porte. O ETT parte da nota fiscal do produtor que abastece o mercado local.",
  },
  {
    p: "Certificações privadas",
    f: "Selos como orgânico, comércio justo e certificações de origem, auditados por terceiros.",
    g: "Custo anual de auditoria inviável para pequenos produtores. O ETT usa registro já existente, sem taxa de certificação.",
  },
];

const BENEFICIARIOS = [
  {
    icon: Users,
    t: "Pequenos Produtores",
    d: "Acesso a mercados, crédito verde e reconhecimento sem custo de certificação.",
  },
  {
    icon: Building2,
    t: "Grandes Marcas",
    d: "Rastreabilidade de Escopo 3 e mitigação de risco de greenwashing.",
  },
  {
    icon: Landmark,
    t: "Governos",
    d: "Dados em tempo real para políticas públicas e eficiência fiscal.",
  },
  {
    icon: TrendingUp,
    t: "Investidores",
    d: "Identificação de cadeias resilientes e alinhadas a critérios ESG.",
  },
];


const FAQ = [
  {
    q: "Qual é o lastro do ETT?",
    a: "Documental e fiscal. Cada registro utiliza NF-e ou Nota de Produtor Rural já emitidas e recebidas pelo Estado. Não é ativo financeiro.",
  },
  {
    q: "O ETT é crédito de carbono?",
    a: "Não. É reconhecimento reputacional, não negociável. Pode servir de pré-qualificação para uma futura certificação.",
  },
  {
    q: "Como evita a dupla contagem?",
    a: "Cada NF-e possui chave única registrada na SEFAZ. É impossível duplicar por construção.",
  },
  {
    q: "O projeto já está em operação?",
    a: "É um conceito registrado (CBL), em busca de parceiro-âncora para um piloto de 12 meses em Minas Gerais.",
  },
  {
    q: "Quem responde tecnicamente?",
    a: "Marcos Fernando Carvalho dos Santos, proponente e autor (Pouso Alegre, MG).",
  },
];

function LandingPage() {
  const [openFree, setOpenFree] = useState<SectorId | null>(null);
  const freeSectors = SECTORS.filter((s) => !s.restricted);
  const restrictedSectors = SECTORS.filter((s) => s.restricted);

  return (
    <div className="min-h-screen bg-white text-[#212529] font-sans">
      {/* Nav */}
      <header className="print:hidden sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-5 py-3 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:justify-between">
          <button onClick={() => scrollTo("inicio")} className="min-w-0 flex items-center" aria-label="Início">
            <EttLogo />
          </button>
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-[#f5f5f5] hover:text-[#1a5f2a]"
              >
                {n.label}
              </button>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href="/adesao"
              className="hidden sm:inline-flex rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Modelo de Adesão
            </a>
            <button
              onClick={() => scrollTo("contato")}
              className="rounded-lg bg-[#1a5f2a] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#164f23]"
            >
              Solicitar acesso
            </button>
          </div>
        </div>
      </header>

      {/* 1. Hero */}
      <section
        id="inicio"
        className="relative flex min-h-[100svh] items-center overflow-hidden scroll-mt-20"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a5f2a] to-[#2d7d32]" />
        {/* pattern geométrico abstrato */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.35) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <Leaf className="absolute -left-6 top-24 h-40 w-40 -rotate-12 text-white/[0.07]" />
          <Leaf className="absolute right-10 top-1/3 h-64 w-64 rotate-12 text-white/[0.06]" />
          <Sprout className="absolute bottom-10 left-1/3 h-48 w-48 text-white/[0.05]" />
          <span className="absolute -right-24 -top-24 h-96 w-96 rounded-full border border-white/10" />
          <span className="absolute -bottom-32 -left-24 h-[28rem] w-[28rem] rounded-full border border-white/10" />
        </div>
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative mx-auto w-full max-w-7xl px-5 py-24">
          <Reveal>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-[48px]">
              Reconhecimento ambiental que o produtor já merece
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
              Sem burocracia extra. Sem custo. Sem formulário novo. O ETT
              transforma a Nota Fiscal em reputação sustentável.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                onClick={() => scrollTo("como-funciona")}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1a5f2a] px-6 py-3.5 text-sm font-semibold text-white shadow-lg ring-1 ring-white/20 transition hover:bg-[#164f23]"
              >
                Entenda em 4 passos <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => scrollTo("contato")}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white bg-transparent px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#1a5f2a]"
              >
                Solicitar documentos técnicos
              </button>
            </div>
            <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5" />
              Baseado em dados da SEFAZ · Registro CBL · Lei nº 9.610/1998
            </span>
          </Reveal>
        </div>
      </section>

      {/* 2. O problema */}
      <section id="problema" className="scroll-mt-20 bg-[#f8f9fa] py-20">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2d7d32]">
              O problema
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#212529] md:text-4xl">
              Por que o produtor sustentável não é reconhecido?
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-8 rounded-xl border border-[#1a5f2a]/15 bg-white p-8 shadow-sm md:p-10">
              <p className="text-4xl font-semibold text-[#1a5f2a] md:text-5xl">
                US$ 5,7 trilhões
              </p>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
                em danos ambientais anuais causados pelos 10% maiores
                consumidores do mundo.
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Fonte: Oxford / Leiden, 2026.
              </p>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {PROBLEMAS.map((p, i) => (
              <Reveal key={p.t} delay={i * 90} className="h-full">
                <div className="h-full rounded-xl border border-[#e0e0e0] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <p.icon className={`h-6 w-6 ${p.tone}`} />
                  <h3 className="mt-4 text-base font-semibold text-[#212529]">
                    {p.t}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {p.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* 3. Como funciona */}
      <section id="como-funciona" className="scroll-mt-20 bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2d7d32]">
              Como funciona
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              Do campo ao reconhecimento em 4 passos
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
              O produtor não precisa preencher nada novo. O ETT usa o que ele já
              emite.
            </p>
          </Reveal>

          <div className="relative mt-12">
            {/* linha conectora desktop */}
            <span
              aria-hidden
              className="absolute left-0 right-0 top-6 hidden h-0.5 bg-[#4caf50]/40 md:block"
            />
            {/* linha conectora mobile */}
            <span
              aria-hidden
              className="absolute bottom-6 left-6 top-6 w-0.5 bg-[#4caf50]/40 md:hidden"
            />
            <ol className="grid gap-8 md:grid-cols-4 md:gap-5">
              {PASSOS.map((s, i) => (
                <Reveal key={s.n} delay={i * 90} className="h-full">
                  <li className="relative flex list-none gap-5 md:block">
                    <span
                      aria-hidden
                      className="relative z-10 mt-3 flex h-3 w-3 shrink-0 rounded-full bg-[#4caf50] ring-4 ring-white md:ml-0 md:mt-0"
                      style={{ marginLeft: "1.125rem" }}
                    />
                    <div className="md:mt-8">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl font-semibold leading-none text-[#1a5f2a]">
                          {s.n}
                        </span>
                        <s.icon className="h-6 w-6 text-[#4caf50]" />
                      </div>
                      <h3 className="mt-4 text-base font-semibold text-[#212529]">
                        {s.t}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {s.d}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal delay={120}>
            <p className="mt-12 rounded-r-xl border-l-4 border-[#1a5f2a] bg-[#e8f5e9] p-6 text-base leading-relaxed text-[#212529]">
              Não criamos burocracia. Reaproveitamos o que o produtor já emite e
              o que o Estado já recebe.
            </p>
          </Reveal>
        </div>
      </section>


      {/* 3b. Complementaridade institucional */}
      <section id="complementaridade" className="scroll-mt-20 bg-white pb-20">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <div className="rounded-2xl border border-[#2d7d32]/25 bg-[#f5faf6] p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2d7d32]">
                Complementaridade institucional
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                O ETT não concorre com o SeloVerde MG
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700">
                Minas Gerais já conta com o{" "}
                <strong>SeloVerde MG</strong>, desenvolvido pelo{" "}
                <strong>IEF-MG</strong> em parceria com o{" "}
                <strong>CIT/UFMG</strong> e apoiado por cooperação
                internacional, voltado à rastreabilidade socioambiental de
                cadeias produtivas a partir do CAR e de monitoramento por
                satélite, com interface para empresas. É uma política pública
                consolidada e a referência estadual no tema.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700">
                O ETT atua em outro ponto da cadeia. Onde o SeloVerde responde
                à exigência de conformidade de cadeias exportadoras e de
                empresas de médio e grande porte, o ETT organiza o registro de
                trajetória do produtor familiar que abastece o mercado local,
                que não exporta e que muitas vezes ainda não tem o cadastro
                ambiental plenamente regularizado. São camadas
                complementares, não substitutas.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#2d7d32]">
                    Camada de entrada — ETT
                  </p>
                  <h3 className="mt-2 text-base font-semibold">
                    Inclusão e formação de trajetória
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {[
                      "Produtor familiar e mercado local, sem pauta de exportação",
                      "Parte da nota fiscal e do registro que o produtor já emite",
                      "Constrói histórico verificável antes da certificação formal",
                      "Reconhecimento por comportamento continuado, não por auditoria pontual",
                    ].map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#4caf50]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Camada de conformidade — SeloVerde MG
                  </p>
                  <h3 className="mt-2 text-base font-semibold">
                    Rastreabilidade para cadeias exportadoras
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {[
                      "Cadeias de café, soja e pecuária com exigência internacional",
                      "Base no CAR e em monitoramento por satélite",
                      "Interface técnica para empresas compradoras",
                      "Resposta a marcos regulatórios de desmatamento",
                    ].map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mt-8 max-w-3xl text-sm leading-relaxed text-slate-600">
                A proposta do ETT é de integração: servir como porta de entrada
                para produtores hoje fora do alcance dos instrumentos de
                conformidade, preparando trajetória documentada que possa,
                adiante, alimentar sistemas estaduais de rastreabilidade. Esta
                menção é de caráter informativo e não implica vínculo,
                convênio ou endosso institucional das entidades citadas.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3c. Panorama de instrumentos existentes */}
      <section id="panorama" className="scroll-mt-20 bg-white pb-20">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2d7d32]">
              Panorama
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              Onde o ETT se encaixa entre os instrumentos existentes
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700">
              O Brasil já dispõe de crédito rural sustentável, cadastro
              ambiental e selos de rastreabilidade. Nenhum deles, porém,
              reconhece a prática cotidiana do pequeno produtor a partir do
              registro fiscal que ele já emite. É esse vazio que o ETT ocupa.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                <caption className="sr-only">
                  Comparativo entre instrumentos existentes e o Programa ETT
                </caption>
                <thead>
                  <tr className="bg-[#f5faf6]">
                    <th scope="col" className="px-5 py-4 font-semibold text-slate-900">
                      Programa
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-slate-900">
                      O que faz
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-[#2d7d32]">
                      Lacuna que o ETT atende
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {PANORAMA.map((r) => (
                    <tr
                      key={r.p}
                      className="border-t border-slate-200 align-top bg-white"
                    >
                      <th
                        scope="row"
                        className="px-5 py-4 font-semibold text-slate-900"
                      >
                        {r.p}
                      </th>
                      <td className="px-5 py-4 leading-relaxed text-slate-600">
                        {r.f}
                      </td>
                      <td className="px-5 py-4 leading-relaxed text-slate-700">
                        {r.g}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-500">
              Quadro comparativo de caráter informativo, elaborado a partir de
              informações públicas dos respectivos programas. O ETT é
              complementar a todos eles e não substitui exigência legal,
              cadastro obrigatório ou certificação de mercado.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 4. Quem ganha */}


      <section id="quem-ganha" className="scroll-mt-20 bg-[#f8f9fa] py-20">

        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2d7d32]">
              Impacto
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              Valor para toda a cadeia
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {BENEFICIARIOS.map((c, i) => (
              <Reveal key={c.t} delay={i * 80} className="h-full">
                <div className="h-full rounded-xl border border-[#e0e0e0] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f5e9]">
                    <c.icon className="h-6 w-6 text-[#1a5f2a]" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-[#212529]">
                    {c.t}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {c.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </section>

      {/* 5. Materiais e documentos */}
      <section id="documentos" className="scroll-mt-20 bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2d7d32]">
              Biblioteca
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              Documentos do Programa ETT
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {/* Bloco A */}
            <Reveal>
              <div className="h-full rounded-xl border border-[#4caf50]/30 bg-[#4caf50]/8 p-7">
                <div className="flex items-center gap-3">
                  <Unlock className="h-5 w-5 text-[#1a5f2a]" />
                  <h3 className="text-lg font-semibold text-[#1a5f2a]">
                    Materiais Públicos
                  </h3>
                </div>
                <ul className="mt-5 space-y-2">
                  {freeSectors.map((s) => (
                    <li key={s.id}>
                      <button
                        onClick={() =>
                          setOpenFree((cur) => (cur === s.id ? null : s.id))
                        }
                        className="flex w-full items-start gap-3 rounded-lg border border-transparent bg-white/70 px-4 py-3 text-left transition hover:border-[#4caf50]/40 hover:bg-white"
                      >
                        <FileText className="mt-0.5 h-4 w-4 shrink-0 text-[#2d7d32]" />
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold">
                            {s.title}
                          </span>
                          <span className="block text-xs text-slate-600">
                            {s.teaser}
                          </span>
                        </span>
                      </button>
                      {openFree === s.id && (
                        <div className="mt-2 rounded-lg border border-slate-200 bg-white p-5">
                          <SectorContent id={s.id} />
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => window.print()}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#1a5f2a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#164f23]"
                >
                  <Download className="h-4 w-4" /> Baixar Gratuitamente
                </button>
              </div>
            </Reveal>

            {/* Bloco B */}
            <Reveal delay={100}>
              <div className="h-full rounded-xl border border-slate-200 bg-[#f5f5f5] p-7">
                <div className="flex items-center gap-3">
                  <Lock className="h-5 w-5 text-slate-700" />
                  <h3 className="text-lg font-semibold text-slate-800">
                    Documentos Técnicos e Regulatórios
                  </h3>
                </div>
                <ul className="mt-5 space-y-2">
                  {restrictedSectors.map((s) => (
                    <li
                      key={s.id}
                      className="flex items-start gap-3 rounded-lg bg-white px-4 py-3"
                    >
                      <Lock className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold">
                          {s.title}
                        </span>
                        <span className="block text-xs text-slate-500">
                          {s.teaser}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      aria-label="Solicitar acesso aos documentos técnicos"
                      className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#5a5a5a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#444]"
                    >
                      Solicitar Acesso <ArrowRight className="h-4 w-4" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Solicitar acesso aos documentos técnicos</DialogTitle>
                    </DialogHeader>
                    <AccessForm />
                  </DialogContent>
                </Dialog>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section id="faq" className="scroll-mt-20 bg-[#f8f9fa] py-20">
        <div className="mx-auto max-w-4xl px-5">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2d7d32]">
              Perguntas e respostas importantes
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              Perguntas Frequentes
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <Accordion type="single" collapsible className="mt-8">
              {FAQ.map((f) => (
                <AccordionItem
                  key={f.q}
                  value={f.q}
                  className="mb-3 rounded-xl border border-slate-200 bg-white px-5"
                >
                  <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-slate-600">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* 7. Contato */}
      <section id="contato" className="scroll-mt-20 bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2d7d32]">
              Contato
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              Contato e solicitação de acesso
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <AccessForm />
            </Reveal>
            <Reveal delay={100}>
              <div className="h-full rounded-xl border border-slate-200 bg-[#f5f5f5] p-7">
                <h3 className="text-base font-semibold">Proponente técnico</h3>
                <p className="mt-1 text-sm text-slate-700">
                  Marcos Fernando C. dos Santos
                </p>
                <ul className="mt-5 space-y-3 text-sm text-slate-600">
                  <li className="flex items-center gap-3">
                    <MessageCircle className="h-4 w-4 shrink-0 text-[#2d7d32]" />
                    WhatsApp: (35) 99934-0088
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 shrink-0 text-[#2d7d32]" />
                    Pouso Alegre, MG
                  </li>
                  <li className="flex items-center gap-3">
                    <ShieldCheck className="h-4 w-4 shrink-0 text-[#2d7d32]" />
                    Registro CBL — Lei nº 9.610/1998
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="border-t border-slate-200 bg-[#f8f9fa] py-12">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <EttLogo />
            <nav className="flex flex-wrap gap-4">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  onClick={() => scrollTo(n.id)}
                  className="text-sm text-slate-600 transition hover:text-[#1a5f2a]"
                >
                  {n.label}
                </button>
              ))}
              <a
                href="/adesao"
                className="text-sm text-slate-600 transition hover:text-[#1a5f2a]"
              >
                Modelo de Adesão
              </a>
              <a
                href="/termo-interesse"
                className="text-sm text-slate-600 transition hover:text-[#1a5f2a]"
              >
                Termo de Interesse
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="rounded-lg border border-slate-300 p-2 text-slate-600 transition hover:text-[#1a5f2a]"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/5535999340088"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="WhatsApp"
                className="rounded-lg border border-slate-300 p-2 text-slate-600 transition hover:text-[#1a5f2a]"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="mailto:contato@programaett.com.br"
                aria-label="E-mail"
                className="rounded-lg border border-slate-300 p-2 text-slate-600 transition hover:text-[#1a5f2a]"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-slate-500">
            Programa ETT — Modelo de Infraestrutura Regional. Registro CBL. Não
            constitui oferta de investimento, ativo financeiro negociável ou
            valor mobiliário.

          </p>
        </div>
      </footer>
    </div>
  );
}

const VINCULOS = [
  "Produtor",
  "Cooperativa",
  "Órgão Público",
  "Empresa",
  "Investidor",
  "Academia",
  "Outro",
];

function AccessForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [institution, setInstitution] = useState("");
  const [vinculo, setVinculo] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const field =
    "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#2d7d32] focus:ring-2 focus:ring-[#4caf50]/25";

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) {
      setError("Informe um e-mail válido.");
      return;
    }
    if (!vinculo) {
      setError("Selecione o tipo de vínculo.");
      return;
    }
    if (!consent) {
      setError("Confirme o interesse institucional para enviar.");
      return;
    }
    setBusy(true);
    const { error: dbError } = await supabase.from("access_requests").insert({
      name: name.trim(),
      email: email.trim(),
      institution: institution.trim(),
      role_title: vinculo,
      justification: [message.trim(), phone.trim() && `Telefone: ${phone.trim()}`]
        .filter(Boolean)
        .join("\n"),
      sectors_requested: SECTORS.filter((s) => s.restricted).map((s) => s.id),
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
      <div className="rounded-xl border border-[#4caf50]/40 bg-[#4caf50]/10 p-8">
        <CheckCircle2 className="h-6 w-6 text-[#1a5f2a]" />
        <p className="mt-3 text-lg font-semibold text-[#1a5f2a]">
          Solicitação enviada
        </p>
        <p className="mt-2 text-sm text-slate-600">
          Você receberá o link de acesso assim que o proponente aprovar a
          solicitação.
        </p>
      </div>
    );

  return (
    <form
      onSubmit={submit}
      className="grid gap-4 rounded-xl border border-slate-200 bg-white p-7 shadow-sm"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <input
          required
          maxLength={120}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome completo"
          className={field}
        />
        <input
          required
          type="email"
          maxLength={254}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          className={field}
        />
        <input
          maxLength={40}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Telefone"
          className={field}
        />
        <input
          required
          maxLength={160}
          value={institution}
          onChange={(e) => setInstitution(e.target.value)}
          placeholder="Instituição / Órgão"
          className={field}
        />
      </div>
      <select
        required
        value={vinculo}
        onChange={(e) => setVinculo(e.target.value)}
        className={field}
      >
        <option value="">Tipo de vínculo</option>
        {VINCULOS.map((v) => (
          <option key={v} value={v}>
            {v}
          </option>
        ))}
      </select>
      <textarea
        rows={4}
        maxLength={1500}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Mensagem"
        className={field}
      />
      <label className="flex items-start gap-3 text-sm text-slate-600">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 h-4 w-4 accent-[#1a5f2a]"
        />
        <span>
          Declaro interesse institucional no Programa ETT e autorizo o contato e
          o tratamento dos dados informados (LGPD).
        </span>
      </label>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={busy}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1a5f2a] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#164f23] disabled:opacity-60"
      >
        <Users className="h-4 w-4" />
        {busy ? "Enviando…" : "Enviar Solicitação"}
      </button>
    </form>
  );
}
