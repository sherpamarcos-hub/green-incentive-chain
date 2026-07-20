import type { SectorId } from "@/lib/sectors";

export function SectorContent({ id }: { id: SectorId }) {
  switch (id) {
    case "mrv":
      return (
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>
            A camada de <strong>MRV (Mensuração, Relato e Verificação)</strong> é o núcleo
            de credibilidade do ETT. Toda emissão de token é ancorada em evidência
            objetiva — nada é atribuído por autodeclaração.
          </p>
          <p>
            Três fontes de dados compõem o registro: <strong>telemetria de campo</strong>
            {" "}(sensores IoT em redes de água, ETEs e pontos de reuso),
            <strong> laudos técnicos</strong> assinados por profissionais habilitados, e
            <strong> notas fiscais eletrônicas</strong> que comprovam o fluxo físico de
            insumos e resíduos.
          </p>
          <p>
            Oráculos descentralizados consolidam essas fontes e assinam a evidência
            na blockchain permissionada, produzindo um registro rastreável ponta a
            ponta. O cruzamento com a NF-e federal impede duplicidade de crédito e
            simulações.
          </p>
        </div>
      );
    case "economico":
      return (
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>
            O <strong>ETT-Ativo</strong> é uma moeda de utilidade, não um instrumento
            especulativo. Sua emissão é lastreada no <em>custo real</em> de
            regeneração ambiental verificada.
          </p>
          <p>
            Um <strong>Banco Central Verde (BCV)</strong> multissetorial governa a
            política monetária do ecossistema: define parâmetros de emissão, tetos
            de acumulação por CPF/CNPJ e mecanismos antiespeculação como
            <strong> Tokens Soulbound</strong> (intransferíveis) para reputação e
            queima programada para ações de alto impacto.
          </p>
          <p>
            O token é utilizável em insumos conveniados, crédito verde subsidiado e
            serviços dentro da rede — nunca como derivativo financeiro puro. Isso
            preserva sua função como incentivo à ação e o blinda contra manipulação
            por baleias.
          </p>
        </div>
      );
    case "governanca":
      return (
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>
            A implantação prevê a formação de um <strong>Grupo de Trabalho (GT)</strong>
            {" "}multi-institucional no Sul de Minas Gerais, operando em regime de
            <strong> sandbox regulatório</strong>.
          </p>
          <p>
            Composição prevista: órgãos ambientais estaduais e municipais,
            consórcios intermunicipais de saneamento, universidades públicas,
            empresas do agro e da indústria, e representantes da sociedade civil.
          </p>
          <p>
            O sandbox permite testar métricas de MRV, parâmetros de emissão e
            arranjos jurídicos sem exigir alteração legal prévia. Ao final do
            piloto, os resultados subsidiam uma proposta normativa consolidada para
            escala estadual ou federal.
          </p>
        </div>
      );
    case "carta":
      return (
        <div className="space-y-5 text-slate-700 leading-relaxed">
          <p className="font-semibold text-slate-900">Prezado(a) Senhor(a),</p>
          <p>
            Com os meus melhores cumprimentos, dirijo-me a Vossa Excelência/Senhor(a)
            com uma proposta que redefine a relação entre prosperidade econômica e
            sustentabilidade ambiental. Em um cenário global onde os danos ambientais
            atingem a cifra alarmante de <strong>US$ 5,7 trilhões anuais</strong> —
            um custo superior ao PIB da maioria das nações — torna-se imperativo
            transcender abordagens tradicionais e adotar soluções que transformem
            este passivo em um ativo estratégico.
          </p>
          <p>
            Tenho a honra de apresentar o conceito do{" "}
            <strong>Eco-Token de Transição (ETT)</strong>, um modelo inovador de
            engenharia econômica e governança que utiliza a tecnologia blockchain
            para catalisar uma verdadeira revolução verde.
          </p>
          <ol className="space-y-3 pl-5 list-decimal">
            <li>
              <strong>Democratizar a Sustentabilidade:</strong> modelo
              Impact-to-Earn que recompensa PMEs por cada ação ambiental positiva.
            </li>
            <li>
              <strong>Rastreabilidade Inquestionável:</strong> blockchain
              permissionada, oráculos descentralizados e IoT combatendo o
              greenwashing.
            </li>
            <li>
              <strong>Estabilidade Econômica:</strong> Banco Central Verde,
              tokens Soulbound e tetos de acumulação contra a especulação.
            </li>
            <li>
              <strong>Integração com o Estado:</strong> conexão com NF-e, sistemas
              tributários e Green Lanes aduaneiras.
            </li>
          </ol>
          <p>
            Coloco-me à disposição para apresentar os detalhes deste modelo e
            discutir como ele pode ser implementado em sua esfera de atuação.
          </p>
          <p className="pt-2">
            Atenciosamente,
            <br />
            <strong className="text-slate-900">Marcos Carvalho</strong>
            <br />
            <span className="text-sm text-slate-500">
              Proponente do Eco-Token de Transição (ETT)
            </span>
          </p>
        </div>
      );
  }
}
