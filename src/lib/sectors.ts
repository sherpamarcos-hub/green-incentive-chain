export type SectorId = "mrv" | "economico" | "governanca" | "carta";

export interface Sector {
  id: SectorId;
  title: string;
  teaser: string;
}

export const SECTORS: Sector[] = [
  {
    id: "mrv",
    title: "Arquitetura MRV",
    teaser:
      "Mensuração, Relato e Verificação: telemetria, laudos e notas fiscais compondo a evidência auditável do impacto.",
  },
  {
    id: "economico",
    title: "Modelo Econômico",
    teaser:
      "ETT-Ativo, Banco Central Verde, mecanismos antiespeculação e ancoragem no custo real da regeneração ambiental.",
  },
  {
    id: "governanca",
    title: "Governança & Sandbox",
    teaser:
      "Grupo de Trabalho, sandbox regulatório, integração com órgãos públicos, consórcios e empresas no Sul de Minas.",
  },
  {
    id: "carta",
    title: "Carta de Apresentação Estratégica",
    teaser:
      "Fundamentação estratégica completa do Eco-Token de Transição (ETT), com referências e visão institucional.",
  },
];

export function getSector(id: string): Sector | undefined {
  return SECTORS.find((s) => s.id === id);
}
