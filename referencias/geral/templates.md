# Arche Labs — Arquitetura da Biblioteca de Templates

## 1. Objetivo

A biblioteca da Arche Labs é organizada por três dimensões independentes:

1. **plano**, que representa a oferta comercial;
2. **coleção**, que representa o molde visual e estrutural;
3. **nicho**, que mostra a coleção aplicada a um mercado específico.

Essa organização permite que o cliente visualize o site dentro do próprio segmento sem transformar cada aplicação em um template estruturalmente diferente.

## 2. Estrutura de pastas

```text
templates/
├── start/
│   └── essencial/
│       ├── essencial-core/
│       ├── servicos-residenciais/
│       ├── estetica/
│       └── futuros-nichos/
├── pro/
│   └── futuras-colecoes/
└── referencias/
```

Os nomes de diretórios devem usar letras minúsculas, sem acentos e separados por hífen.

## 3. Planos

### Start

Reúne coleções destinadas aos projetos do plano Start. As aplicações priorizam presença digital profissional, apresentação clara dos serviços, confiança e conversão por contato.

### Pro

Reservado para coleções futuras do plano Pro. Cada coleção poderá ter composição, recursos e direção visual próprios, mantendo a mesma organização por nichos.

## 4. Coleções

Uma coleção é a família visual e estrutural do template. Ela define, entre outros aspectos:

- composição das páginas;
- hierarquia das seções;
- comportamento dos componentes;
- direção tipográfica;
- ritmo de espaçamento;
- estratégia de conversão.

Alterações de cor, texto e imagens não criam uma nova coleção. Uma nova coleção deve representar uma direção estrutural ou visual realmente diferente.

## 5. Start — Coleção Essencial

Essencial é a primeira coleção do plano Start. Seu molde é direto, completo e orientado à conversão.

Estrutura-base:

```text
Header
Hero
Indicadores de confiança
Serviços
Benefícios
Resultados ou projetos
Processo
Equipe, quando aplicável
Avaliações
FAQ
CTA
Footer
```

As seções podem ser ativadas, removidas ou reordenadas de acordo com o nicho.

Nichos atuais:

- `servicos-residenciais`;
- `estetica`.

## 6. Relação entre coleção e nicho

O nicho adapta a coleção por meio de:

- identidade visual;
- tipografia e cores;
- imagens;
- textos e tom de voz;
- serviços;
- prova social;
- CTAs;
- seções específicas do mercado.

No portfólio, cada item deve ser apresentado somente pelo nome do nicho dentro de sua coleção. Não é necessário usar o termo “demonstração”.

Exemplo:

```text
Plano Start
└── Coleção Essencial
    ├── Serviços Residenciais
    └── Estética
```

## 7. Cores de coleção

Cada coleção possui seu próprio core dentro da pasta da coleção. O core reúne a composição, os componentes e a direção visual que originam suas aplicações de nicho.

Exemplos:

```text
start/essencial/essencial-core/
pro/editorial/editorial-core/
pro/signature/signature-core/
pro/vanguard/vanguard-core/
```

O `essencial-core` é exclusivo da Coleção Essencial. Ele também funciona como primeiro bootstrap técnico para os próximos cores, mas componentes de seção e decisões visuais só devem ser mantidos quando fizerem sentido para a nova coleção.

As regras compartilhadas entre os cores estão documentadas em [`cores-de-colecao.md`](cores-de-colecao.md).

Cada nicho publicado deve continuar autônomo, sem imports que dependam de caminhos externos à sua própria pasta.

## 8. Novos templates

Para adicionar um nicho existente a uma coleção:

1. duplicar uma aplicação da mesma coleção;
2. renomear o pacote para `@arche-labs/<plano>-<colecao>-<nicho>`;
3. adaptar conteúdo, identidade, imagens e seções;
4. atualizar o README do nicho;
5. executar `npm run validate`.

Para criar um molde diferente, criar uma nova coleção dentro do plano correspondente em vez de misturá-lo à Coleção Essencial.

Para criar o core dessa nova coleção, seguir o processo definido em [`cores-de-colecao.md`](cores-de-colecao.md).

## 9. Regra final

A biblioteca deve maximizar clareza comercial e reaproveitamento técnico:

> planos contêm coleções; coleções contêm aplicações por nicho.

O cliente vê seu próprio mercado. A Arche Labs mantém uma arquitetura previsível e sustentável.
