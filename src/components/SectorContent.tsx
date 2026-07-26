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
              className="text-[#008080] underline hover:text-[#006666]"
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

    case "whitepaper":
      return (
        <div className="space-y-5 text-slate-700 leading-relaxed">
          <p className="font-semibold text-slate-900">Resumo Executivo</p>
          <p>
            O Programa ETT é um modelo de <strong>infraestrutura pública</strong>{" "}
            para validação de práticas produtivas sustentáveis, voltado a
            pequenos e médios produtores, cooperativas e empresas. Não cria
            nova moeda, novo órgão nem nova burocracia — utiliza dados fiscais
            já existentes (NF e NFP) para construir um histórico validado de
            consistência produtiva.
          </p>

          <h3 className="text-lg font-bold text-slate-900 pt-2">
            1. Contexto e justificativa
          </h3>
          <p>
            <strong>Problema global:</strong> Oxford Martin School &amp; Leiden
            University (<em>Nature Communications Sustainability</em>, 2026)
            estimam entre US$ 1,7 e US$ 5,7 trilhões anuais os danos ambientais
            atribuídos aos 10% maiores consumidores do planeta. A resposta não
            pode depender apenas de grandes corporações — é preciso incluir e
            reconhecer a base da cadeia produtiva.
          </p>
          <p>
            <strong>Problema local:</strong> pequenos produtores brasileiros já
            praticam ações sustentáveis, mas não conseguem comprová-las de
            forma padronizada, o que os exclui de linhas de crédito
            diferenciadas, editais ESG (PAA, PNAE) e contratos com grandes
            empresas exigentes de Scope 3.
          </p>
          <p>
            <strong>Base do mecanismo de reconhecimento:</strong> a literatura
            sobre governança de recursos comuns (Elinor Ostrom, Nobel de
            Economia 2009) demonstra que arranjos institucionais locais, com
            regras claras e monitoramento validado por pares, produzem melhores
            resultados de sustentabilidade que comando-e-controle centralizado.
            Complementarmente, a economia comportamental (Richard Thaler,
            Nobel 2017) mostra que reconhecimento tempestivo e visível eleva a
            adesão a comportamentos desejáveis mais do que sanções abstratas.
            Trabalho recente do INET Oxford (2026) sobre intervenções
            pró-ambientais reforça a eficácia de mecanismos que combinam
            informação, feedback e reconhecimento.
          </p>

          <h3 className="text-lg font-bold text-slate-900 pt-2">
            2. Solução
          </h3>
          <p>
            Uso da Nota Fiscal e da Nota de Produtor Rural como evidência
            primária, validada por cruzamento entre: <strong>SEFAZ</strong>{" "}
            (regularidade), <strong>Emater</strong> (amostragem de campo),{" "}
            <strong>cooperativas/associações</strong> (canal de adesão) e{" "}
            <strong>universidade</strong> (auditoria metodológica).
          </p>

          <h3 className="text-lg font-bold text-slate-900 pt-2">
            3. Princípios do modelo
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Gratuidade no piloto: sem custo de adesão para o produtor.</li>
            <li>Uso de estrutura já existente: sem novo órgão ou orçamento relevante.</li>
            <li>Validação cruzada: nenhum dado é aceito isoladamente.</li>
            <li>Amostragem estatística de campo, não verificação 100%.</li>
            <li>Transparência pública: documentos e regras publicados abertamente.</li>
          </ul>

          <h3 className="text-lg font-bold text-slate-900 pt-2">
            4. O que o ETT NÃO é
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Não é criptomoeda, token ou ativo financeiro.</li>
            <li>Não é certificação ou selo comercial pago.</li>
            <li>Não substitui licenças/outorgas — complementa com histórico.</li>
            <li>Não é operado por empresa privada — arranjo institucional via Portaria.</li>
          </ul>

          <h3 className="text-lg font-bold text-slate-900 pt-2">
            5. Fase Piloto
          </h3>
          <p>
            Duração de 12 meses, escopo definido por adesão de cooperativas
            parceiras. Meta: validar a metodologia de PCP e o fluxo de emissão
            do ETT Espelho antes de eventual expansão.
          </p>

          <p className="text-xs text-slate-500 pt-4">
            Referências: Oxford Martin School &amp; Leiden University,{" "}
            <em>Environmental damages of the top ten percent consumers…</em>,
            Nature Communications Sustainability (2026); Ostrom, E.,{" "}
            <em>Governing the Commons</em> (Cambridge, 1990); Thaler &amp;
            Sunstein, <em>Nudge</em> (Yale, 2008); INET Oxford Working Paper
            2026-13 sobre intervenções pró-ambientais; documentação legal do
            PAA e PNAE.
          </p>
        </div>
      );

    case "pcp":
      return (
        <div className="space-y-5 text-slate-700 leading-relaxed">
          <h3 className="text-lg font-bold text-slate-900">
            O que é o PCP
          </h3>
          <p>
            O PCP é o mecanismo técnico que converte práticas sustentáveis
            comprovadas em <strong>indicadores objetivos</strong>, usados para
            compor o ETT Espelho. <em>Não é moeda, não é pontuação de
            gamificação, não é selo comercial</em> — é um indicador
            estatístico de consistência ao longo do tempo.
          </p>

          <h3 className="text-lg font-bold text-slate-900 pt-2">
            Fontes de dados
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>NF-e</strong> — compra de insumos sustentáveis (adubo orgânico, embalagem biodegradável, energia renovável).</li>
            <li><strong>Nota de Produtor Rural</strong> — venda de produção com origem rastreável.</li>
            <li><strong>Amostragem de campo</strong> — Emater / extensão rural.</li>
            <li><strong>Bases públicas</strong> — cadastro ambiental e fiscal já existente (CAR, SEFAZ).</li>
          </ul>

          <h3 className="text-lg font-bold text-slate-900 pt-2">
            Como a pontuação é calculada
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Frequência:</strong> recorrência de compras/vendas com padrão sustentável ao longo de 12 meses.</li>
            <li><strong>Consistência:</strong> proporção entre insumos declarados e produção emitida (evita inflar dados isolados).</li>
            <li><strong>Validação cruzada:</strong> cada indicador só é confirmado com concordância entre pelo menos duas fontes (NF+NFP ou NF+campo).</li>
          </ul>

          <h3 className="text-lg font-bold text-slate-900 pt-2">
            Categorias de PCP
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>PCP-Água:</strong> reuso, captação, tratamento.</li>
            <li><strong>PCP-Solo:</strong> manejo regenerativo, rotação de cultura, adubação orgânica.</li>
            <li><strong>PCP-Energia:</strong> fontes renováveis, eficiência energética.</li>
            <li><strong>PCP-Embalagem:</strong> materiais biodegradáveis ou reciclados.</li>
            <li><strong>PCP-Social:</strong> mão de obra local, cooperativismo.</li>
          </ul>

          <h3 className="text-lg font-bold text-slate-900 pt-2">
            Níveis de consistência
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Inicial:</strong> menos de 6 meses de dado consistente.</li>
            <li><strong>Intermediário:</strong> 6 a 12 meses, sem inconsistência relevante.</li>
            <li><strong>Consolidado:</strong> 12+ meses, validado por amostragem de campo.</li>
          </ul>

          <h3 className="text-lg font-bold text-slate-900 pt-2">
            Exemplos ilustrativos de lastro (revisão semestral)
          </h3>
          <p className="text-sm text-slate-600 italic">
            Os valores abaixo são <strong>ilustrativos</strong>, destinados
            apenas a demonstrar o método de ancoragem. Os parâmetros
            definitivos serão fixados pelo GT-ETT após calibração técnica no
            piloto, com base em orçamentos regionais e revisão acadêmica.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>1 PCP ≈ custo médio verificado de reuso de 1 m³ de água industrial em ciclo fechado.</li>
            <li>1 PCP ≈ diferença de custo comprovada na aquisição de 100 embalagens biodegradáveis certificadas.</li>
            <li>5 PCP ≈ implementação verificada de agricultura regenerativa em 1 hectare por safra.</li>
          </ul>

          <p className="text-sm text-slate-500 italic pt-2">
            O PCP não mede impacto ambiental absoluto — apenas consistência
            declarativa validada por dado fiscal e amostragem. Está sujeito a
            revisão metodológica pela auditoria acadêmica do GT-ETT.
          </p>
        </div>
      );

    case "regulamento":
      return (
        <div className="space-y-5 text-slate-700 leading-relaxed">
          <h3 className="text-lg font-bold text-slate-900">
            Capítulo I — Disposições preliminares
          </h3>
          <p>
            <strong>Art. 1º</strong> O Programa Regional tem por finalidade
            reconhecer, registrar e incentivar práticas produtivas
            sustentáveis em pequenos e médios produtores, cooperativas e
            empresas, através de validação contínua baseada em dados fiscais e
            operacionais já existentes.
          </p>
          <p>
            <strong>Art. 3º</strong> O PCP <strong>não é moeda</strong>, não
            pode ser utilizado como meio de pagamento e não gera direito a
            resgate em espécie. Seu valor reside na{" "}
            <strong>elegibilidade</strong> a benefícios regulados pelo GT-ETT
            e por parceiros institucionais.
          </p>

          <h3 className="text-lg font-bold text-slate-900 pt-2">
            Capítulo II — Valoração e geração de PCP
          </h3>
          <p>
            <strong>Art. 4º</strong> Valoração baseada no custo real
            verificado de regeneração ambiental ou transição operacional no
            território, calculado com base em estudos técnicos de Emater/Idaf,
            orçamentos de mercado e índices regionais de disponibilidade
            hídrica.
          </p>
          <p>
            <strong>Art. 6º</strong> Geração de PCP ocorre apenas após: (I)
            comprovação da ação por documentação fiscal ou relatório técnico;
            (II) validação por técnico credenciado; (III) registro no ETT
            Espelho do participante.
          </p>

          <h3 className="text-lg font-bold text-slate-900 pt-2">
            Capítulo III — Benefícios e elegibilidade
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Linhas de crédito diferenciadas</strong> — PRONAF, BNDES, cooperativas de crédito parceiras.</li>
            <li><strong>Prioridade em editais públicos</strong> — pontuação adicional em fomento sustentável.</li>
            <li><strong>Descontos em insumos</strong> — negociação via cooperativas usando PCP como comprovante.</li>
            <li><strong>Acesso a mercados diferenciados</strong> — ETT Espelho como requisito em cadeias de grandes compradores.</li>
          </ul>
          <p>
            <strong>Art. 8º</strong> Os benefícios são <em>acessórios</em> e
            dependem de parcerias ativas. O Programa não garante benefício
            financeiro direto — garante reconhecimento de elegibilidade.
          </p>

          <h3 className="text-lg font-bold text-slate-900 pt-2">
            Capítulo IV — Controle e limites
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Art. 9º — Teto de acumulação</strong> proporcional ao faturamento bruto anual (microprodutor / pequena / média empresa), evitando concentração.</li>
            <li><strong>Art. 10º — Período de consistência:</strong> PCP gerados em um trimestre só podem ser usados após 90 dias de validação.</li>
            <li><strong>Art. 11º — Revisão semestral</strong> da tabela de valoração, tetos e critérios, com ata publicada.</li>
          </ul>

          <h3 className="text-lg font-bold text-slate-900 pt-2">
            Capítulo V — Disposições finais
          </h3>
          <p>
            <strong>Art. 12º</strong> Participação voluntária e gratuita
            durante o piloto de 12 meses.
          </p>
          <p>
            <strong>Art. 13º</strong> Fraude ou adulteração de dados: sanção
            de exclusão por 24 meses, publicada em ata do GT-ETT.
          </p>
        </div>
      );

    case "governanca":
      return (
        <div className="space-y-5 text-slate-700 leading-relaxed">
          <h3 className="text-lg font-bold text-slate-900">
            Natureza jurídica
          </h3>
          <p>
            O <strong>GT-ETT não é um novo órgão público</strong>, autarquia
            ou pessoa jurídica. É um arranjo de cooperação
            interinstitucional, formalizado por <strong>Portaria conjunta ou
            Termo de Cooperação Técnica</strong>, sem criação de cargos,
            estrutura ou orçamento próprio permanente.
          </p>

          <h3 className="text-lg font-bold text-slate-900 pt-2">
            Composição
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>SEFAZ</strong> — validação de dados fiscais (NF/NFP).</li>
            <li><strong>Emater / extensão rural</strong> — amostragem e verificação de campo.</li>
            <li><strong>Cooperativas / associações</strong> — canal de adesão e suporte ao produtor.</li>
            <li><strong>Instituição acadêmica</strong> — auditoria metodológica do PCP.</li>
            <li><strong>Coordenação técnica</strong> — integração entre as partes e relatórios.</li>
            <li><strong>Observador independente</strong> — ONG de transparência ou auditor.</li>
          </ul>

          <h3 className="text-lg font-bold text-slate-900 pt-2">
            Atribuições
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Definir e revisar a metodologia de PCP.</li>
            <li>Aprovar e revisar o Regulamento de Benefícios.</li>
            <li>Homologar instituições financeiras e compradores públicos parceiros.</li>
            <li>Analisar recursos de produtores em caso de suspensão do ETT Espelho.</li>
            <li>Publicar atas trimestrais e relatório semestral de resultados.</li>
          </ul>

          <h3 className="text-lg font-bold text-slate-900 pt-2">
            Limites de atuação
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Sem poder de autuação, multa ou sanção</strong> — atua apenas na esfera do próprio programa (emissão/suspensão do Espelho).</li>
            <li>Não acessa dados sigilosos além do estritamente necessário e previamente autorizado pelo produtor.</li>
            <li>Decisões não substituem obrigações legais/ambientais existentes.</li>
          </ul>

          <h3 className="text-lg font-bold text-slate-900 pt-2">
            Tomada de decisão
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Decisões técnicas exigem consenso entre pelo menos 4 das 5 representações.</li>
            <li>Recursos individuais decididos por comissão de 3 membros rotativos, evitando conflito de interesse.</li>
          </ul>

          <h3 className="text-lg font-bold text-slate-900 pt-2">
            Transparência
          </h3>
          <p>
            Todas as atas são públicas. Relatórios semestrais incluem número
            de aderentes, PCPs validados, ETT Espelhos emitidos/suspensos e
            resultado das auditorias amostrais.
          </p>

          <p className="text-sm text-slate-500 italic pt-2">
            Integração federal (Receita Federal, SUFRAMA, Banco Central) não é
            prevista no piloto — será avaliada como meta de médio prazo após
            consolidação dos resultados.
          </p>
        </div>
      );

    case "riscos":
      return (
        <div className="space-y-5 text-slate-700 leading-relaxed">
          <h3 className="text-lg font-bold text-slate-900">
            1. Risco tecnológico-operacional
          </h3>
          <p>
            <strong>Descrição:</strong> validação pode exigir sensores e
            relatórios que o pequeno produtor não tem condições de custear —
            recriando a barreira de entrada dos selos tradicionais.
          </p>
          <p>
            <strong>Mitigação:</strong> validação híbrida priorizando dados já
            existentes (NF, fatura de água, laudo Emater); quando hardware for
            necessário, modelo "As-a-Service" financiado por cooperativas,
            grandes compradores (Scope 3) ou editais de inovação. Piloto
            autofinanciado, sem custo obrigatório ao ente público.
          </p>

          <h3 className="text-lg font-bold text-slate-900 pt-2">
            2. Risco econômico-liquidez: aceitação pelo mercado
          </h3>
          <p>
            <strong>Descrição:</strong> se grandes marcas e bancos não
            reconhecerem o ETT Espelho como critério de desconto ou seleção
            de fornecedores, o incentivo desaparece.
          </p>
          <p>
            <strong>Mitigação:</strong> Termos de Cooperação Técnica prévios
            com pelo menos uma cooperativa de crédito e uma grande compradora
            antes do lançamento; Fundo de Estabilização de Elegibilidade
            setorial; priorizar cadeias com demanda preexistente (café
            especial, leite orgânico).
          </p>

          <h3 className="text-lg font-bold text-slate-900 pt-2">
            3. Risco de fraude e dados falsos
          </h3>
          <p>
            <strong>Descrição:</strong> relatórios podem ser adulterados,
            dados podem não refletir realidade, mesma ação pode ser contada
            duas vezes.
          </p>
          <p>
            <strong>Mitigação:</strong> auditoria híbrida (SEFAZ + visitas
            Emater/Idaf); serialização de ações — código único vinculado ao
            CPF/CNPJ e à NF, impedindo dupla contagem; sistema de denúncia
            comunitária validada pelo GT-ETT; sanção exemplar de exclusão por
            24 meses.
          </p>

          <h3 className="text-lg font-bold text-slate-900 pt-2">
            4. Risco jurídico-regulatório: integração tributária
          </h3>
          <p>
            <strong>Descrição:</strong> prometer integração direta com
            Receita Federal ou SUFRAMA em um piloto de 12 meses é inviável e
            expõe o programa a bloqueios institucionais.
          </p>
          <p>
            <strong>Mitigação:</strong> limitar integração ao nível estadual e
            municipal no piloto (SEFAZ, NFSe, Nota de Produtor Rural, guias
            municipais); ETT como <em>camada de informação adicional</em>,
            nunca substituto ou modificador de guias fiscais; GT-ETT como
            observador e articulador, não órgão arrecadador.
          </p>

          <h3 className="text-lg font-bold text-slate-900 pt-2">
            5. Risco geopolítico e de interoperabilidade
          </h3>
          <p>
            <strong>Descrição:</strong> a longo prazo há interesse em
            reconhecimento em outras jurisdições (Scope 3 para exportação) —
            risco de barreiras técnicas ou protecionismo verde.
          </p>
          <p>
            <strong>Mitigação:</strong> no piloto, não prometer
            interoperabilidade internacional; estruturar documentação técnica
            padrão (relatórios, metadados) mapeável no futuro a padrões ISO ou
            taxonomias europeias; interoperabilidade como meta de médio prazo
            (24–36 meses).
          </p>
        </div>
      );
  }
}
