# Start — Coleção Essencial — Academias

Template de presença digital para **academias, estúdios de treino, personal trainers e boxes**, parte da Coleção Essencial do plano Start.

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
│   ├── sections/     # HeroGym, TrustMetrics, ModalitiesGrid,
│   │                 # BenefitsChecklist, InfrastructureGallery,
│   │                 # ScheduleTable, PricingPlans, ProcessSteps,
│   │                 # TeamGrid, TestimonialsFeatured,
│   │                 # FAQAccordion, CTATrial
│   └── ui/           # Button, Container, Section, SectionTitle,
│                     # WhatsAppFab, ModalityIcon
├── data/
│   └── site.ts       # ← conteúdo editável (dados, textos, modalidades)
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
- **modalities** — modalidades (Musculação, CrossFit, Funcional, Dança, Artes Marciais, Cardio)
- **trustMetrics** — números de destaque
- **benefits** — diferenciais da academia
- **infrastructure** — fotos da estrutura
- **schedule** — grade de horários das aulas coletivas
- **pricing** — planos e preços (Mensal, Semestral, Anual)
- **process** — etapas para começar a treinar
- **team** — equipe de professores
- **testimonials** — depoimentos de alunos
- **faq** — perguntas frequentes

## Personalização

1. Edite `src/data/site.ts` com os dados reais do cliente
2. Substitua as imagens em `public/images/`
3. Ajuste as cores em `src/styles/tokens.css`
4. Ative/desative seções em `homePage.sections`

## Schema.org

O template inclui schema `SportsActivityLocation` automaticamente na página inicial.

Derivação técnica: `../essencial-core`.
