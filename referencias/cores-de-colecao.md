# Arche Labs — Cores de Coleção

## 1. Objetivo

Cada coleção da Arche Labs deve possuir um core próprio. O core representa a base técnica, estrutural e visual usada para criar os nichos daquela coleção.

Não existe um único core universal para todas as coleções.

```text
Plano
└── Coleção
    ├── <colecao>-core/
    ├── nicho-a/
    └── nicho-b/
```

O primeiro core implementado é:

```text
start/presenca/presenca-core/
```

Ele origina apenas os nichos da Coleção Presença.

## 2. Cores previstos

```text
start/
└── presenca/
    └── presenca-core/

pro/
├── editorial/
│   └── editorial-core/
├── signature/
│   └── signature-core/
└── vanguard/
    └── vanguard-core/
```

O nome do pacote deve seguir:

```text
@arche-labs/<plano>-<colecao>-core
```

Exemplos:

- `@arche-labs/start-presenca-core`;
- `@arche-labs/pro-editorial-core`;
- `@arche-labs/pro-signature-core`;
- `@arche-labs/pro-vanguard-core`.

## 3. Base técnica compartilhada

Os próximos cores podem usar o `presenca-core` como bootstrap técnico. Devem ser preservados os fundamentos que não determinam a identidade de uma coleção:

- Astro com TypeScript;
- geração estática por padrão;
- scripts `dev`, `build`, `preview` e `check`;
- HTML semântico;
- acessibilidade por teclado e foco visível;
- metadados de SEO, canonical e Open Graph;
- suporte a dados estruturados quando aplicável;
- separação entre conteúdo, componentes e estilos;
- conteúdo centralizado em `src/data/`;
- design tokens organizados por categorias;
- CSS nativo e JavaScript somente quando necessário;
- dependências externas mínimas;
- comportamento de demonstração com `noindex`;
- projeto final autônomo e transferível;
- validação com `astro check` e build estático.

Esses fundamentos são padrões técnicos da Arche Labs, não elementos visuais da Coleção Presença.

## 4. Estrutura mínima de um core

```text
<colecao>-core/
├── public/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── package.json
├── README.md
└── tsconfig.json
```

Pastas específicas, como `local-business/`, só devem existir nos cores que realmente precisarem delas.

## 5. O que não deve ser herdado automaticamente

Ao criar uma nova coleção, não transportar por padrão:

- composição da página inicial da Presença;
- ordem ou quantidade de seções;
- `HeroService` e demais seções específicas;
- Header e Footer sem revisão;
- paleta, tipografia, espaçamento e raios;
- componentes de negócios locais;
- animações e interações características da coleção;
- conteúdo, imagens ou dados fictícios da Presença.

Uma nova coleção precisa ter diferença estrutural ou visual real. Caso contrário, trata-se de mais um nicho ou variante da coleção existente.

## 6. Elementos que podem ser reaproveitados após revisão

Alguns arquivos do `presenca-core` podem acelerar a criação de outro core:

- `astro.config.mjs`;
- `tsconfig.json`;
- scripts e dependências mínimas do `package.json`;
- estrutura técnica de `BaseLayout.astro`;
- tipos básicos de configuração do site;
- reset e fundamentos de acessibilidade de `global.css`;
- categorias e convenções de `tokens.css`;
- primitivas como `Button`, `Container`, `Section` e `SectionTitle`.

Mesmo esses elementos devem ser revisados e renomeados quando a nova direção exigir outra API ou comportamento.

## 7. Processo para criar um novo core

1. Criar a pasta da nova coleção dentro do plano correspondente.
2. Copiar o `presenca-core` como ponto de partida técnico.
3. Renomear a pasta e o pacote para a nova coleção.
4. Remover conteúdo, imagens e componentes exclusivos da Presença.
5. Definir a proposta, a composição e a linguagem visual da nova coleção.
6. Criar ou adaptar tokens, layouts, seções e interações.
7. Atualizar dados de exemplo, metadados e README.
8. Confirmar que o core não importa arquivos externos à própria pasta.
9. Executar `npm run check` e `npm run build`.
10. Criar os nichos como cópias autônomas do novo core.

## 8. Criação de nichos

Um nicho deve ser criado a partir do core da própria coleção:

```text
presenca-core → Estética
presenca-core → Serviços Residenciais
editorial-core → Arquitetura
editorial-core → Fotografia
```

O nicho adapta:

- identidade visual;
- textos e tom de voz;
- imagens;
- serviços;
- CTAs;
- prova social;
- seções necessárias ao mercado.

Depois da cópia, o nicho não deve depender do core por imports relativos ou por um pacote privado. Ele precisa permanecer executável e transferível de maneira independente.

## 9. Critério para um novo core

Criar outro core somente quando houver uma direção de coleção distinta em aspectos como:

- arquitetura das páginas;
- hierarquia de conteúdo;
- composição das seções;
- sistema visual;
- estratégia de conversão;
- comportamento e interações.

Uma simples troca de cores, fontes ou imagens não justifica um novo core.

## 10. Regra final

> O padrão técnico é compartilhado; a composição e a identidade pertencem a cada coleção.

O `presenca-core` inaugura esse padrão, mas não limita o desenho dos cores Editorial, Signature e Vanguard.
