# Start — Coleção Presença — Psicologia

Aplicação da Coleção Presença para psicólogos e clínicas de psicologia. Prioriza abordagens terapêuticas, públicos atendidos, modalidades de consulta, acolhimento e contato ético.

Derivação técnica: `../presenca-core`, com arquitetura de componentes alinhada ao padrão de `../estetica`.

## Requisitos

- Node.js 22 ou superior
- npm 10 ou superior

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

## Verificação

```bash
npm run check
npm run build
```

O build estático é gerado em `dist/`.

## Estrutura

```text
src/
├── components/
│   ├── layout/          Header e Footer
│   ├── sections/        HeroService, ServicesGrid, BenefitsChecklist, ProcessSteps, TeamGrid, TestimonialsFeatured, FAQAccordion, CTABanner, TrustMetrics
│   └── ui/              Button, Container, Section, SectionTitle, ServiceIcon, WhatsAppFab
├── data/                Conteúdo e configuração do site
├── layouts/             BaseLayout e metadados globais
├── pages/               Rotas Astro
└── styles/              Design tokens e estilos globais
```

## Identidade Visual

- **Paleta:** Verde sálvia e marfim quente, transmitindo calma, confiança e acolhimento.
- **Tipografia:** Playfair Display (títulos) e DM Sans (corpo).
- **Tom de voz:** Acolhedor, ético, claro e empático.

## Princípios

- HTML semântico primeiro.
- JavaScript somente quando resolver uma necessidade real.
- Conteúdo separado dos componentes.
- Dependências externas mínimas.
- Código completo e transferível dentro de cada projeto de cliente.
