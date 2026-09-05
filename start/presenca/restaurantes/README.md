# Start — Coleção Presença — Restaurantes

Aplicação da Coleção Presença, do plano Start, para restaurantes, cafés, bares e negócios gastronômicos. Derivada do `presenca-core`.

## Requisitos

- Node.js 18+

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Estrutura

```
src/
├── components/
│   ├── layout/         Header e Footer
│   ├── sections/       Seções da página (Hero, Services, Team, etc.)
│   └── ui/             Componentes reutilizáveis (Button, Container, etc.)
├── data/
│   └── site.ts         Conteúdo e configurações do site
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   └── index.astro
└── styles/
    ├── global.css      Estilos globais e reset
    └── tokens.css      Design tokens (cores, tipografia, espaçamento)
```

## Conteúdo

Todo o conteúdo editável está em `src/data/site.ts`.

## Estilos

Os design tokens em `src/styles/tokens.css` controlam cores, tipografia, espaçamento e bordas.

## Nicho

Adaptável para: restaurante, churrascaria, casa de carnes, bar, café, bistrô, hamburgueria, pizzaria e negócios gastronômicos em geral.
