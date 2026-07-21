export type SectorId =
  | "resumo"
  | "carta"
  | "comofunciona"
  | "whitepaper"
  | "pcp"
  | "regulamento"
  | "governanca"
  | "riscos";

export interface Sector {
  id: SectorId;
  title: string;
  teaser: string;
  restricted: boolean;
}

export const SECTORS: Sector[] = [
  {
    id: "resumo",
    title: "Resumo — O que é o ETT",
    teaser:
      "Uma página, linguagem direta: o que é, como funciona e o que o produtor ganha.",
    restricted: false,
  },
  {
    id: "carta",
    title: "Carta de Apresentação Institucional",
    teaser:
      "Documento inominado para autoridades, cooperativas e instituições — sem destinatário fixo.",
    restricted: false,
  },
  {
    id: "comofunciona",
    title: "Como Funciona",
    teaser:
      "Fluxo em 4 passos: ação sustentável → comprovação fiscal → validação do GT-ETT → ETT Espelho.",
    restricted: false,
  },
  {
    id: "whitepaper",
    title: "White Paper — Fundamentação Técnica",
    teaser:
      "Base institucional completa: contexto, princípios, o que o ETT é e o que não é, e a fase piloto.",
    restricted: true,
  },
  {
    id: "pcp",
    title: "Proposta PCP — Pontos de Consistência Produtiva",
    teaser:
      "Metodologia técnica de pontuação: fontes de dados, cálculo, categorias e níveis de consistência.",
    restricted: true,
  },
  {
    id: "regulamento",
    title: "Regulamento de Benefícios e Elegibilidade",
    teaser:
      "Regras formais: quem pode participar, direitos, deveres, tetos de acumulação e sanções.",
    restricted: true,
  },
  {
    id: "governanca",
    title: "Protocolo de Governança — GT-ETT",
    teaser:
      "Composição do Grupo Técnico, atribuições, limites de atuação e regras de decisão.",
    restricted: true,
  },
  {
    id: "riscos",
    title: "Anexo: Riscos e Mitigações",
    teaser:
      "Análise técnica de riscos operacionais, econômicos, de fraude, jurídicos e geopolíticos.",
    restricted: true,
  },
];

export function getSector(id: string): Sector | undefined {
  return SECTORS.find((s) => s.id === id);
}
