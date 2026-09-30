import { createFileRoute, Link } from "@tanstack/react-router";
import { Printer } from "lucide-react";
import { EttLogo } from "@/components/EttLogo";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/avaliacao-academica")({
  head: () => ({
    meta: [
      { title: "Convite para avaliação acadêmica — Programa ETT" },
      { name: "description", content: "Minuta de convite e escopo de avaliação acadêmica exploratória do Programa ETT." },
      { property: "og:title", content: "Convite para avaliação acadêmica — Programa ETT" },
      { property: "og:description", content: "Minuta de convite e escopo de avaliação acadêmica exploratória do Programa ETT." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AvaliacaoAcademica,
});

function AvaliacaoAcademica() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border print:hidden">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-5 py-4">
          <Link to="/" aria-label="Página inicial"><EttLogo /></Link>
          <Button variant="outline" onClick={() => window.print()}><Printer aria-hidden="true" /> Salvar PDF</Button>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-5 py-12 leading-relaxed print:max-w-none print:py-0">
        <p className="text-sm font-semibold uppercase text-primary">Minuta para envio individual</p>
        <h1 className="mt-2 text-3xl font-semibold">Convite para avaliação acadêmica exploratória</h1>
        <p className="mt-3 text-sm text-muted-foreground">Programa ETT — Espelho de Trajetória e Transparência · Material de estudo, não validado</p>

        <section className="mt-9 space-y-4">
          <p>Prezado professor,</p>
          <p>Convido-o a considerar o Programa ETT como objeto de trabalho acadêmico para estudantes de Economia. A proposta é que grupos atuem <strong>como avaliadores externos em uma simulação didática</strong>, testando criticamente as premissas e os parâmetros do modelo, sem compromisso de confirmar sua viabilidade.</p>
          <p>O estudo pode utilizar cenários hipotéticos, dados públicos ou dados expressamente autorizados. Não pressupõe acesso a informações fiscais individuais, vínculo com órgãos públicos ou implantação do programa.</p>
        </section>

        <section className="mt-9">
          <h2 className="text-xl font-semibold">Questões para os grupos</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-6">
            <li>Formalizar as fórmulas de pontuação propostas; identificar variáveis, unidades, pesos, fontes de dados e parâmetros que ainda não estão definidos.</li>
            <li>Aplicar cenários simulados a diferentes portes de produtor e verificar sensibilidade, incentivos distorcidos e risco de dupla contagem.</li>
            <li>Examinar se documentos fiscais comprovam a prática alegada ou apenas uma compra ou venda; propor evidências complementares e custos de verificação.</li>
            <li>Estimar custos operacionais e condições mínimas de viabilidade econômica, separando hipóteses de dados observados.</li>
            <li>Apontar afirmações que dependem de convênios, decisão pública, análise jurídica ou aceite de bancos e compradores, sem tratá-las como benefícios garantidos.</li>
            <li>Entregar parecer fundamentado com achados favoráveis, objeções, fontes verificáveis, limitações e sugestões de teste em piloto.</li>
          </ol>
          <p className="mt-4 text-sm text-muted-foreground">O material técnico contém parâmetros ilustrativos, não uma fórmula fechada ou validada. A ausência de dados suficientes também é um resultado legítimo do estudo.</p>
        </section>

        <section className="mt-9 border-t border-border pt-7">
          <h2 className="text-xl font-semibold">Permissão proposta para esta atividade</h2>
          <p className="mt-3">Após a liberação nominal ao professor, autorizo, sem cobrança e exclusivamente para esta atividade didática, que ele consulte, imprima e distribua cópias dos materiais aos grupos participantes. As cópias devem manter a autoria de Marcos Fernando Carvalho dos Santos e a indicação de versão de estudo. Esta permissão não inclui publicação aberta, redistribuição fora da turma, exploração comercial nem uso do material como endosso institucional.</p>
          <p className="mt-3">Os pareceres pertencem a seus respectivos autores. Seu eventual compartilhamento externo pelo proponente depende de autorização dos autores e atribuição dos créditos correspondentes. A realização do trabalho não constitui validação oficial da universidade nem parceria institucional.</p>
          <p className="mt-3 text-sm text-muted-foreground">Esta página é uma minuta de escopo e autorização; a liberação efetiva depende da identificação do professor e de confirmação direta entre as partes.</p>
        </section>
        <p className="mt-10">Atenciosamente,<br /><strong>Marcos Fernando Carvalho dos Santos</strong><br />Autor e proponente do Programa ETT</p>
      </main>
    </div>
  );
}