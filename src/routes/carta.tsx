import { createFileRoute, Link } from "@tanstack/react-router";
import { EttLogo } from "@/components/EttLogo";

export const Route = createFileRoute("/carta")({
  head: () => ({
    meta: [
      { title: "Carta de Apresentação — Sistema ETT" },
      {
        name: "description",
        content:
          "Carta de Apresentação Estratégica do Eco-Token de Transição (ETT).",
      },
      { property: "og:title", content: "Carta de Apresentação — Sistema ETT" },
      {
        property: "og:description",
        content:
          "Fundamentação estratégica do ETT: Impact-to-Earn, MRV, blockchain permissionada e Banco Central Verde.",
      },
    ],
  }),
  component: CartaPage,
});

function CartaPage() {
  return (
    <div className="min-h-screen bg-[#fcfbf8] text-slate-800 font-sans">
      <header className="print:hidden border-b border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <EttLogo />
            <Link
              to="/"
              className="text-sm font-medium text-slate-600 hover:text-[#008080]"
            >
              ← Voltar à proposta
            </Link>
          </div>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-lg bg-[#008080] px-4 py-2 text-sm font-semibold text-white hover:bg-[#006666]"
          >
            Salvar PDF
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
            Documento Estratégico
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
            Carta de Apresentação Estratégica
          </h1>
        </div>


        <article className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm space-y-5 leading-relaxed text-slate-700">
          <p className="font-semibold text-slate-900">
            Prezado(a) Senhor(a),
          </p>

          <p>
            Com os meus melhores cumprimentos, dirijo-me a Vossa
            Excelência/Senhor(a) com uma proposta que redefine a relação entre
            prosperidade econômica e sustentabilidade ambiental. Em um cenário
            global onde os danos ambientais atingem a cifra alarmante de{" "}
            <strong>US$ 5,7 trilhões anuais</strong> — um custo superior ao PIB
            da maioria das nações<sup>[1]</sup> — torna-se imperativo
            transcender abordagens tradicionais e adotar soluções que
            transformem este passivo em um ativo estratégico.
          </p>

          <p>
            Tenho a honra de apresentar o conceito do{" "}
            <strong>Eco-Token de Transição (ETT)</strong>, um modelo inovador de
            engenharia econômica e governança que utiliza a tecnologia{" "}
            <em>blockchain</em> para catalisar uma verdadeira revolução verde. O
            ETT não é apenas uma ideia; é um{" "}
            <strong>sistema completo e pragmático</strong> desenhado para:
          </p>

          <ol className="space-y-4 pl-0 list-none">
            <Item n={1} titulo="Democratizar a Sustentabilidade">
              Ao contrário dos selos tradicionais, que impõem barreiras de custo
              e burocracia, o ETT permite que pequenos e médios produtores
              (PMEs) sejam recompensados financeiramente por cada ação ambiental
              positiva (ex: uso de embalagens biodegradáveis, reuso de água
              industrial). Isso cria um modelo <em>"Impact-to-Earn"</em> que
              inclui a base da cadeia produtiva, garantindo que a transição
              verde seja justa e inclusiva.
            </Item>
            <Item n={2} titulo="Garantir Rastreabilidade e Integridade Inquestionáveis">
              Através de uma <em>blockchain</em> permissionada, Oráculos
              Descentralizados e sensores de Internet das Coisas (IoT), o ETT
              assegura a verificação em tempo real do impacto ambiental. Cada
              token representa uma ação real e auditável, combatendo eficazmente
              o <em>greenwashing</em> e estabelecendo um novo padrão de
              transparência na cadeia de suprimentos.
            </Item>
            <Item n={3} titulo="Promover Estabilidade Econômica e Prevenir Especulação">
              Um <strong>"Banco Central Verde" (BCV)</strong> multissetorial
              atuará como guardião do sistema, controlando a emissão de tokens
              lastreados no custo real da regeneração ambiental. Mecanismos
              antiespeculação, como Tokens Soulbound e tetos de acumulação,
              garantirão que o ETT mantenha sua função de moeda de utilidade e
              impacto, protegendo-o da volatilidade e da manipulação por
              "baleias".
            </Item>
            <Item n={4} titulo="Integrar o Estado como Validador e Impulsionador">
              A proposta inclui a integração do ETT com a Nota Fiscal Eletrônica
              (NF-e) e sistemas tributários, permitindo o cruzamento de dados
              para prevenir evasão fiscal e garantir que incentivos cheguem a
              quem realmente gera impacto. Além disso, a cooperação
              internacional e a criação de <em>"Green Lanes"</em> aduaneiras são
              previstas para facilitar o comércio de produtos sustentáveis.
            </Item>
          </ol>

          <p>
            O Eco-Token de Transição representa uma oportunidade sem
            precedentes para transformar a sustentabilidade de um custo em um{" "}
            <strong>diferencial competitivo e um motor de lucratividade</strong>
            . Para empresas, significa redução de riscos, acesso a capital ESG e
            fortalecimento da marca. Para governos, implica em maior eficiência
            na gestão ambiental, redução de gastos públicos e liderança na
            economia verde.
          </p>

          <p>
            Este é o momento de liderar a transição para uma nova era de valor
            e impacto, onde a prosperidade econômica e a regeneração ambiental
            caminham lado a lado.
          </p>

          <p>
            Coloco-me à disposição para apresentar os detalhes deste modelo e
            discutir como ele pode ser implementado em sua esfera de atuação.
          </p>

          <p className="pt-4">
            Atenciosamente,
            <br />
            <strong className="text-slate-900">Marcos Carvalho</strong>
            <br />
            <span className="text-sm text-slate-500">
              Proponente do Eco-Token de Transição (ETT)
            </span>
          </p>

          <hr className="my-8 border-slate-200" />

          <div className="text-xs text-slate-500 leading-relaxed">
            <p className="font-semibold mb-1">Referências:</p>
            <p>
              [1] Schrijver, I., Hoekstra, R., & Behrens, P. (2026).
              Environmental damages of the top ten percent consumers exceed
              global climate and biodiversity funding gaps.{" "}
              <em>Communications Sustainability</em>, 1, Article number: 94.{" "}
              <a
                href="https://www.nature.com/articles/s44458-026-00079-x"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#008080] underline break-all"
              >
                https://www.nature.com/articles/s44458-026-00079-x
              </a>
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}

function Item({
  n,
  titulo,
  children,
}: {
  n: number;
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4 pl-4 border-l-4 border-[#008080]/30">
      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#008080] text-white text-sm font-bold flex items-center justify-center">
        {n}
      </span>
      <div>
        <strong className="text-slate-900 block mb-1">{titulo}</strong>
        <span>{children}</span>
      </div>
    </li>
  );
}
