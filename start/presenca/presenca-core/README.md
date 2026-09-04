# Start — Coleção Presença — Core

Base técnica e estrutural exclusiva da Coleção Presença. O projeto usa Astro, TypeScript e CSS nativo e origina as aplicações de nicho desta coleção.

Este core não é uma base visual universal da Arche Labs. As outras coleções terão cores próprios, preservando apenas os padrões técnicos descritos em [`referencias/cores-de-colecao.md`](../../../referencias/cores-de-colecao.md).

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
│   ├── local-business/ Componentes para negócios locais
│   ├── sections/       Seções reutilizáveis de página
│   └── ui/             Button, Container, Section e SectionTitle
├── data/          Conteúdo e configuração do site
├── layouts/       BaseLayout e metadados globais
├── pages/         Rotas Astro
└── styles/        Design tokens e estilos globais
```

## Criando um nicho da Coleção Presença

1. Atualize `src/data/site.ts` com os dados reais do cliente.
2. Ajuste os tokens em `src/styles/tokens.css` para a identidade visual.
3. Monte as páginas combinando os componentes existentes.
4. Crie componentes novos apenas quando houver reutilização ou diferença estrutural real.
5. Remova da cópia final tudo o que o projeto não utiliza.

O valor padrão de `site.url` é apenas um placeholder. Substitua-o pelo domínio de produção antes do deploy para gerar URLs canônicas corretas.

## Seções disponíveis

- `HeroService`
- `ServicesGrid`
- `BenefitsChecklist`
- `ProcessSteps`
- `TestimonialsFeatured`
- `FAQAccordion`
- `CTABanner`

## Componentes para negócios locais

- `QuickContact`
- `ServiceArea`
- `WhatsAppFloating`

Todos recebem conteúdo por propriedades e não dependem dos dados de um nicho específico. Ao iniciar uma aplicação da Coleção Presença, copie apenas os componentes usados para manter o resultado independente do `presenca-core`.

## Princípios

- HTML semântico primeiro.
- JavaScript somente quando resolver uma necessidade real.
- Conteúdo separado dos componentes.
- Dependências externas mínimas.
- Código completo e transferível dentro de cada projeto de cliente.
