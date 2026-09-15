# Start — Coleção Essencial — Escolas e Cursos

Template de presença digital para **escolas, cursos livres, idiomas, reforço escolar e preparatórios**, parte da Coleção Essencial do plano Start.

## Stack

- **Astro 7** — geração estática (output: `static`)
- **TypeScript** — tipagem strict
- **Vanilla CSS** — design tokens + custom properties

## Instalação

```bash
npm install
npm run dev          # servidor local
npm run build        # build de produção
npm run check        # validação TypeScript
npm run validate     # check + build
```

## Estrutura

```
src/
├── components/
│   ├── layout/       # Header, Footer
│   ├── sections/     # HeroService, TrustMetrics, ServicesGrid,
│   │                 # BenefitsChecklist, ProjectsShowcase,
│   │                 # ProcessSteps, TeamGrid, TestimonialsFeatured,
│   │                 # FAQAccordion, CTABanner
│   └── ui/           # Button, Container, Section, SectionTitle,
│                     # WhatsAppFab, ServiceIcon
├── data/
│   └── site.ts       # ← conteúdo editável (dados, textos, programas)
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   └── index.astro
└── styles/
    ├── tokens.css    # design tokens (cores, fontes, espaçamentos)
    └── global.css    # estilos globais e animações
```

## Conteúdo editável

Todos os dados estão centralizados em [`src/data/site.ts`](src/data/site.ts):

- **site** — nome, contato, localização, horários, WhatsApp, navegação
- **homePage** — textos de cada seção + toggles de visibilidade
- **services** — programas do instituto (idiomas, reforço, preparatório)
- **trustMetrics** — números de destaque
- **benefits** — diferenciais da escola
- **results** — fotos da estrutura
- **process** — etapas da matrícula
- **team** — equipe de professores
- **testimonials** — depoimentos de alunos/pais
- **faq** — perguntas frequentes

## Personalização

1. Edite `src/data/site.ts` com os dados reais do cliente
2. Substitua as imagens em `public/images/`
3. Ajuste as cores em `src/styles/tokens.css`
4. Ative/desative seções em `homePage.sections`

## Schema.org

O template inclui schema `EducationalOrganization` automaticamente na página inicial.
