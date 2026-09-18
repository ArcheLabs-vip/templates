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
│   ├── essencial/
│   │   ├── essencial-core/
│   │   ├── servicos-residenciais/
│   │   ├── estetica/
│   │   └── futuros-nichos/
│   └── presenca/
│       ├── presenca-core/
│       └── estetica/
├── pro/
│   └── futuras-colecoes/
└── referencias/
```

Os nomes de diretórios devem usar letras minúsculas, sem acentos e separados por hífen.

Manter o mesmo identificador para um mercado presente em várias coleções, como `clinicas-medicas` e `imobiliarias`.

### Organização das referências

`referencias/geral/` concentra regras compartilhadas. `referencias/<colecao>/` reúne decisões específicas daquela coleção, separadas dos projetos executáveis.

Preferir um documento principal por coleção, reunindo posicionamento, direção visual, composição, nichos e ordem de produção. Documentos adicionais devem atender a um assunto independente, como uma investigação de bug. Regras gerais devem ser referenciadas por links, sem duplicar seu conteúdo em cada coleção.

Distinguir propostas e componentes planejados de projetos já implementados. Uma direção visual premium não determina o plano comercial; o plano precisa ser definido antes da criação do projeto executável.

## 3. Planos

### Start

Reúne coleções destinadas aos projetos do plano Start. As aplicações priorizam presença digital profissional, apresentação clara dos serviços, confiança e conversão por contato.

Inclui a Essencial e a [Presença](../presenca/presenca.md). A Presença tem direção própria de impacto visual e autoridade; seu core e os nichos de estética e odontologia estão implementados. A base Aura é adaptada por identidade e conteúdo em cada segmento; os demais nichos permanecem planejados.

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

Variações internas de paleta, tipografia e apresentação podem usar tokens e variantes de componentes do mesmo core. Essas variações não criam novos planos, nichos ou cores e devem preservar os princípios da coleção.

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

Hero, hierarquia e ordem das seções podem ser adaptados às necessidades do mercado, preservando o molde da coleção. Ativar ou remover seções conforme o conteúdo disponível; evitar seções genéricas usadas apenas para preencher a página.

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
start/presenca/presenca-core/
pro/editorial/editorial-core/
pro/signature/signature-core/
pro/vanguard/vanguard-core/
```

O `essencial-core` é exclusivo da Coleção Essencial. Ele também funciona como primeiro bootstrap técnico para os próximos cores, mas componentes de seção e decisões visuais só devem ser mantidos quando fizerem sentido para a nova coleção.

As regras compartilhadas entre os cores estão documentadas em [`cores-de-colecao.md`](cores-de-colecao.md).

Cada nicho publicado deve continuar autônomo, sem imports que dependam de caminhos externos à sua própria pasta.

## 8. Novos templates

Para adicionar um nicho existente a uma coleção:

1. copiar o core da coleção ou duplicar uma aplicação da mesma coleção;
2. renomear o pacote para `@arche-labs/<plano>-<colecao>-<nicho>`;
3. adaptar conteúdo, identidade, imagens e seções;
4. atualizar o README do nicho;
5. executar `npm run validate`, reunindo a checagem Astro e o build estático.

Para criar um molde diferente, criar uma nova coleção dentro do plano correspondente em vez de misturá-lo à Coleção Essencial.

Para criar o core dessa nova coleção, seguir o processo definido em [`cores-de-colecao.md`](cores-de-colecao.md).

## 9. Conteúdo, confiança e conversão

Estas regras se aplicam a todas as coleções; cada coleção define sua apresentação visual e o destaque de cada seção.

- **Autoridade e prova social:** utilizar apenas dados verificáveis do cliente, como experiência, projetos, certificações, especializações, prêmios, parceiros, avaliações e credenciais. Não inventar números, depoimentos ou resultados. Dados de exemplo devem ser identificados como fictícios nas demonstrações e substituídos antes da entrega.
- **Cases:** apresentar contexto, desafio, solução e resultado, usando evidências disponíveis. Antes e depois e outros formatos de prova devem ser adequados ao mercado e às regras profissionais aplicáveis.
- **Sobre:** apresentar história, trajetória, filosofia, equipe e credenciais relevantes; evitar textos institucionais vazios.
- **Processo:** descrever etapas reais do serviço, com nomenclatura apropriada ao nicho.
- **Depoimentos:** priorizar relevância e qualidade. Destaques individuais, grupos pequenos, avaliações externas ou vídeos podem ser usados conforme o material disponível.
- **FAQ:** responder objeções e dúvidas reais do público.
- **CTAs:** indicar claramente a ação, como agendar consulta, solicitar proposta ou falar com um especialista. Evitar urgência artificial. O CTA final pode reunir título, texto curto, ação principal e contato alternativo quando necessário.

## 10. Regra final

A biblioteca deve maximizar clareza comercial e reaproveitamento técnico:

> planos contêm coleções; coleções contêm aplicações por nicho.

O cliente vê seu próprio mercado. A Arche Labs mantém uma arquitetura previsível e sustentável.
