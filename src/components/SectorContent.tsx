import type { SectorId } from "@/lib/sectors";

export function SectorContent({ id }: { id: SectorId }) {
  switch (id) {
    case "resumo":
      return (
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>
            O <strong>ETT (Espelho de Trajetória e Transparência)</strong> é um
            programa regional que reconhece formalmente práticas produtivas
            sustentáveis de pequenos e médios produtores, cooperativas e
            empresas — <em>sem criar moeda, sem novo órgão e sem custo
            obrigatório ao Estado</em> na fase piloto.
          </p>
          <p>
            Em vez de exigir selos caros ou tecnologia complexa, o ETT usa
            documentos que o produtor <strong>já emite</strong>: Nota Fiscal
            Eletrônica (NF-e), Nota de Produtor Rural e NFSe. Cada ação
            sustentável comprovada gera <strong>Pontos de Consistência
            Produtiva (PCP)</strong>, que compõem um histórico validado
            chamado <strong>ETT Espelho</strong>.
          </p>
          <p>
            <strong>O que o produtor ganha:</strong> acesso a crédito com juros
            menores em bancos e cooperativas parceiras, prioridade em compras
            públicas (PAA, PNAE), comprovação de origem sustentável para
            grandes compradoras e regularidade fiscal/ambiental reconhecida —
            sem pagar por certificação.
          </p>
          <p className="text-sm text-slate-500 italic">
            A sustentabilidade da sua propriedade já existe. Agora ela pode
            ser reconhecida.
          </p>
        </div>
      );

    case "carta":
      return (
        <div className="space-y-5 text-slate-700 leading-relaxed">
          <p className="font-semibold text-slate-900">Prezado(a) Senhor(a),</p>
          <p>
            Com os meus melhores cumprimentos, dirijo-me a Vossa
            Excelência/Senhoria para apresentar uma proposta de{" "}
            <strong>infraestrutura pública</strong> que transforma
            sustentabilidade em instrumento concreto de desenvolvimento
            territorial.
          </p>
          <p>
            Estudo conjunto do <strong>Oxford Martin School</strong> e da{" "}
            <strong>Leiden University</strong>, publicado na{" "}
            <em>Nature Communications Sustainability</em> em 2026 (
            <a
              href="https://www.nature.com/commsenv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a5f2a] underline hover:text-[#164f23]"
            >
              nature.com/commsenv
            </a>
            ), quantifica entre <strong>US$ 1,7 e US$ 5,7 trilhões
            anuais</strong> os danos ambientais atribuíveis aos 10% maiores
            consumidores do planeta — valor superior aos compromissos globais
            de financiamento climático e de biodiversidade somados. No Brasil,
            isso se traduz em risco de crédito para produtores, pressão sobre
            recursos hídricos e exclusão de pequenos e médios produtores dos
            mercados exigentes por falta de rastreabilidade formal.
          </p>
          <p>
            Nossa proposta é <strong>regional e imediata</strong>. Em vez de
            aguardar soluções globais, criamos um sistema de{" "}
            <strong>Identificação de Validação (ID ETT)</strong> vinculado à
            NF-e e à Nota de Produtor Rural, já existentes na operação diária
            de cooperativas e indústrias. Por meio de um{" "}
            <strong>Grupo Técnico Regional (GT-ETT)</strong>, composto por
            representantes públicos, cooperativas e academia, estruturamos um
            histórico validado de consistência produtiva para cada CPF/CNPJ.
          </p>
          <p className="font-semibold text-slate-900">
            O que o destinatário ganha:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Acesso a crédito produtivo:</strong> bancos públicos e
              cooperativas recebem indicador de risco ambiental e regularidade
              fiscal integrado — menor inadimplência, juros menores para quem
              opera corretamente.
            </li>
            <li>
              <strong>Regularidade fiscal transparente:</strong> cruzamento
              SEFAZ + nota fiscal valida a origem da produção e blinda ente
              público e produtor contra autuações futuras.
            </li>
            <li>
              <strong>Inclusão em fomento:</strong> produtores com ID ETT
              ativo tornam-se elegíveis a PRONAF, BNDES Socioambiental e
              linhas de crédito verde.
            </li>
          </ul>
          <p>
            A governança é <strong>estatal</strong>, sem custo obrigatório de
            tecnologia exótica e <strong>sem criar moeda paralela</strong>.
            Trata-se de um <em>registro público de validação</em> — um selo
            dinâmico de consistência produtiva.
          </p>
          <p>
            <strong>O que solicito:</strong> uma reunião de 40 minutos para
            apresentar a minuta de Portaria que institui o GT-ETT e autoriza o
            projeto piloto de 12 meses. A Portaria é infralegal, não requer
            lei, e pode ser adaptada ao perfil da gestão ou instituição.
          </p>
          <p className="pt-2">
            Atenciosamente,
            <br />
            <strong className="text-slate-900">Marcos Fernando C. dos Santos</strong>
            <br />
            <span className="text-sm text-slate-500">
              Cidadão e Proponente do Modelo ETT — Infraestrutura Regional de
              Validação Produtiva
            </span>
          </p>
        </div>
      );

    case "comofunciona":
      return (
        <div className="space-y-6 text-slate-700 leading-relaxed">
          <p>
            O ETT opera em <strong>quatro passos simples</strong>, apoiados em
            instrumentos que o produtor já usa no dia a dia:
          </p>
          <ol className="space-y-4 pl-5 list-decimal">
            <li>
              <strong>Você age.</strong> Realiza uma prática sustentável:
              reuso de água, embalagem biodegradável, adubação orgânica,
              agricultura regenerativa, energia renovável.
            </li>
            <li>
              <strong>Você comprova.</strong> Com Nota Fiscal Eletrônica de
              compra de insumo, Nota de Produtor Rural ou laudo técnico da
              Emater. Nada de nova burocracia.
            </li>
            <li>
              <strong>O GT-ETT valida.</strong> O Grupo Técnico Regional
              (SEFAZ, Emater, cooperativa, academia) cruza os dados fiscais e
              — quando aplicável — realiza amostragem de campo. Cada ação
              recebe um código único, impedindo dupla contagem.
            </li>
            <li>
              <strong>Seu ETT Espelho é emitido.</strong> Um relatório público
              de consistência produtiva vinculado ao seu CPF/CNPJ. É esse
              documento que bancos, cooperativas e grandes compradoras leem
              para conceder crédito, prioridade em editais e contratos de
              fornecimento.
            </li>
          </ol>
          <p className="text-sm text-slate-500 italic">
            Não é moeda. Não é selo pago. É um registro público de trajetória.
          </p>
        </div>
      );

  }
}
