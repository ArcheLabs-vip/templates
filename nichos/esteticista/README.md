# Pele & Forma — Template Esteticista

Template demonstrativo de nicho para clínicas e profissionais de estética. Desenvolvido com a arquitetura Arche Template Core.

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

Adaptável para: salão de beleza, clínica de estética, design de sobrancelha, maquiagem, estética corporal e facial.
