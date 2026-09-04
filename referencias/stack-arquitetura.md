# Arche Labs — Stack, Arquitetura e Diretrizes Técnicas

## 1. Objetivo

Este documento define a stack padrão, a arquitetura técnica e as regras de desenvolvimento dos sites produzidos pela Arche Labs.

O objetivo principal é equilibrar:

- velocidade de desenvolvimento;
- alta qualidade visual;
- excelente performance;
- facilidade de manutenção;
- facilidade de transferência para outro desenvolvedor;
- independência do cliente;
- baixo custo de infraestrutura;
- compatibilidade com Cloudflare;
- possibilidade de adicionar CMS quando necessário;
- reutilização eficiente de código entre projetos.

A Arche Labs não deve criar dependência artificial do cliente em relação à agência. O código deve ser organizado, documentado e transferível.

---

# 2. Princípios técnicos

Todo projeto da Arche Labs deve seguir os seguintes princípios:

1. simplicidade antes de complexidade;
2. JavaScript apenas quando necessário;
3. HTML semântico;
4. CSS organizado e reutilizável;
5. excelente responsividade;
6. boa acessibilidade;
7. performance como padrão;
8. SEO técnico básico implementado;
9. código fácil de assumir por outro desenvolvedor;
10. dependências externas reduzidas;
11. nada de frameworks pesados sem necessidade;
12. nada de arquitetura proprietária que prenda o cliente à Arche Labs;
13. documentação de handoff sempre que o projeto for transferido;
14. separação clara entre conteúdo, estilo e componentes;
15. preferência por soluções abertas e amplamente documentadas.

---

# 3. Stack padrão

## 3.1 Stack principal

A stack principal recomendada é:

- Astro;
- TypeScript;
- HTML;
- CSS;
- JavaScript pontual;
- Cloudflare;
- Git;
- GitHub;
- Sanity, quando contratado como CMS.

Estrutura conceitual:

```text
Astro
├── TypeScript
├── HTML semântico
├── CSS
├── Componentes Astro
├── JavaScript somente onde necessário
│
├── Cloudflare
│   ├── Hosting
│   ├── Workers
│   ├── Turnstile
│   └── funcionalidades adicionais quando necessário
│
└── Integrações opcionais
    ├── Sanity CMS
    ├── analytics
    ├── formulários
    ├── mapas
    └── APIs externas
```

---

# 4. Por que Astro

Astro deve ser a principal tecnologia usada pela Arche Labs para sites institucionais, landing pages e sites orientados a conteúdo.

Principais vantagens:

- gera HTML otimizado;
- envia pouco ou nenhum JavaScript ao navegador por padrão;
- trabalha muito bem com componentes;
- facilita criação de templates;
- permite reaproveitamento de seções;
- possui boa integração com CMS headless;
- funciona muito bem com Cloudflare;
- permite adicionar JavaScript apenas onde necessário;
- mantém a estrutura relativamente simples para outros desenvolvedores.

A Arche Labs não deve transformar Astro em uma dependência complexa.

O código Astro deve permanecer próximo de HTML convencional sempre que possível.

---

# 5. HTML, CSS e JavaScript puro

HTML, CSS e JavaScript puro continuam sendo tecnologias totalmente válidas.

Podem ser utilizados diretamente em:

- landing pages extremamente simples;
- páginas únicas;
- microsites;
- páginas temporárias;
- projetos com pouquíssimas seções;
- páginas sem necessidade de reaproveitamento complexo.

Mesmo quando Astro for utilizado internamente, os componentes devem permanecer simples e próximos de HTML/CSS convencional.

---

# 6. Quando usar cada abordagem

## HTML + CSS

Usar quando:

- a página é praticamente estática;
- não existem interações relevantes;
- o projeto possui apenas uma página simples;
- não existe necessidade de CMS;
- o ganho de usar Astro seria mínimo.

## HTML + CSS + JavaScript

Usar quando:

- existem menus;
- modais;
- accordions;
- galerias;
- filtros simples;
- formulários;
- pequenas interações.

## Astro + CSS + JavaScript pontual

Usar como padrão para:

- sites institucionais;
- landing pages comerciais;
- sites com múltiplas páginas;
- sites baseados em templates;
- projetos que utilizam componentes reutilizáveis;
- projetos que podem futuramente receber CMS.

## Astro + Sanity

Usar quando o cliente contratar gerenciamento de conteúdo.

Exemplos:

- blog;
- notícias;
- equipe;
- serviços;
- portfólio;
- projetos;
- imóveis;
- cardápio;
- depoimentos;
- páginas administráveis.

---

# 7. Tecnologias que não devem ser usadas como padrão

## React

Não utilizar React como base para sites institucionais simples.

Pode ser usado apenas quando algum componente realmente justificar sua utilização.

## Next.js

Não utilizar Next.js como stack padrão.

A complexidade normalmente não é necessária para o tipo de projeto comercial oferecido pela Arche Labs.

## Tailwind

Não é proibido, porém não deve ser obrigatório na primeira arquitetura dos templates.

A preferência inicial será:

- CSS tradicional;
- CSS scoped;
- design tokens;
- classes claras;
- organização consistente.

Isso facilita transferência do projeto para outros desenvolvedores.

---

# 8. Filosofia sobre JavaScript

A Arche Labs deve seguir o princípio:

> JavaScript somente quando ele resolve um problema real.

Exemplos de elementos que podem precisar de JavaScript:

- menu mobile;
- modal;
- formulário;
- accordion;
- slider;
- carousel;
- filtros;
- tabs;
- integração dinâmica;
- animações avançadas.

Elementos que normalmente não precisam:

- hero;
- cards;
- serviços;
- benefícios;
- CTA;
- seção sobre;
- depoimentos estáticos;
- preços;
- rodapé.

---

# 9. CSS

## Diretrizes

O CSS deve ser:

- organizado;
- legível;
- previsível;
- responsivo;
- reutilizável;
- baseado em tokens;
- sem especificidade desnecessária.

Evitar:

- arquivos gigantes sem divisão;
- seletores excessivamente complexos;
- `!important` sem justificativa;
- dependência de hacks;
- valores repetidos sem variáveis;
- CSS acoplado demais ao conteúdo.

---

# 10. Design Tokens

Todo template deve possuir tokens centrais.

Exemplo:

```css
:root {
  --color-primary: #111111;
  --color-secondary: #666666;
  --color-accent: #6c5ce7;

  --color-background: #ffffff;
  --color-surface: #f6f6f6;

  --font-heading: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;

  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;

  --container-width: 1200px;

  --space-section: 7rem;
}
```

Isso deve permitir mudar rapidamente:

- identidade visual;
- arredondamento;
- espaçamento;
- tipografia;
- cores;
- sensação geral do projeto.

---

# 11. Arquitetura recomendada

Estrutura base:

```text
src/
├── components/
│   ├── ui/
│   ├── layout/
│   └── sections/
│
├── layouts/
│
├── pages/
│
├── data/
│
├── styles/
│
├── assets/
│
└── integrations/
```

---

# 12. Separação de responsabilidades

## components/ui

Elementos pequenos e reutilizáveis.

Exemplos:

- Button;
- Badge;
- Card;
- Container;
- SectionTitle;
- Icon;
- Divider.

## components/layout

Estrutura global.

Exemplos:

- Header;
- Footer;
- Navigation;
- MobileMenu.

## components/sections

Seções completas.

Exemplos:

- Hero;
- Services;
- About;
- Testimonials;
- FAQ;
- CTA;
- Gallery;
- Contact;
- Pricing.

## data

Conteúdo estruturado do cliente.

Exemplo:

```ts
export const site = {
  company: "Empresa XYZ",
  phone: "(11) 99999-9999",
  whatsapp: "5511999999999",

  hero: {
    title: "Título principal",
    subtitle: "Descrição"
  }
};
```

---

# 13. Conteúdo separado da estrutura

Sempre que possível, o conteúdo não deve ficar espalhado dentro dos componentes.

Preferir:

```text
data/
├── site.ts
├── services.ts
├── testimonials.ts
└── faq.ts
```

Isso permite modificar conteúdo sem alterar a estrutura.

---

# 14. Cloudflare

A Cloudflare será a infraestrutura padrão sempre que tecnicamente adequada.

Possíveis usos:

- hospedagem;
- DNS;
- CDN;
- SSL;
- Workers;
- Turnstile;
- funções serverless;
- cache;
- proteção básica.

O domínio do cliente deve preferencialmente permanecer sob controle do próprio cliente.

A Arche Labs pode administrar o ambiente enquanto existir contrato de manutenção.

---

# 15. Sanity CMS

Sanity será oferecido como upsell quando o cliente desejar editar conteúdo.

O CMS não deve ser instalado automaticamente para todos.

Utilizar apenas quando houver valor real.

Possíveis conteúdos administráveis:

- textos;
- blog;
- serviços;
- equipe;
- avaliações;
- projetos;
- portfólio;
- produtos;
- cardápio;
- imóveis;
- banners.

---

# 16. Formulários

Os formulários criados pela Arche Labs devem seguir a infraestrutura definida separadamente para formulários.

Princípios:

- validação no cliente;
- validação no servidor quando necessário;
- proteção contra spam;
- Cloudflare Turnstile;
- mensagens claras de erro;
- mensagens claras de sucesso;
- dados mínimos necessários;
- atenção à LGPD.

---

# 17. Performance

Todo template deve buscar:

- poucas requisições;
- imagens otimizadas;
- lazy loading;
- fontes controladas;
- JavaScript mínimo;
- CSS enxuto;
- boa pontuação de Core Web Vitals;
- evitar bibliotecas pesadas.

---

# 18. SEO técnico

Todo projeto deve possuir pelo menos:

- `title`;
- `meta description`;
- canonical;
- Open Graph;
- favicon;
- sitemap quando aplicável;
- robots.txt;
- headings organizados;
- HTML semântico;
- alt em imagens;
- dados estruturados quando fizer sentido.

---

# 19. Acessibilidade

A Arche Labs deve adotar como padrão:

- contraste adequado;
- foco visível;
- uso correto de headings;
- labels em formulários;
- navegação por teclado;
- atributos ARIA apenas quando necessários;
- HTML semântico primeiro.

---

# 20. Portabilidade

Portabilidade é uma regra de produto da Arche Labs.

O cliente deve poder:

- receber o código;
- transferir hospedagem;
- contratar outro desenvolvedor;
- manter o domínio;
- assumir contas externas;
- continuar o projeto sem depender da Arche Labs.

---

# 21. Handoff

Quando o cliente não contratar manutenção, entregar:

- código-fonte;
- README;
- instruções para execução;
- instruções de build;
- instruções de deploy;
- lista de serviços utilizados;
- acessos transferíveis;
- explicação do CMS, se existir;
- informações sobre domínio;
- informações sobre hospedagem;
- dependências utilizadas.

README mínimo:

```text
REQUISITOS
Node.js

INSTALAÇÃO
npm install

DESENVOLVIMENTO
npm run dev

BUILD
npm run build

CONTEÚDO
src/data/

ESTILOS
src/styles/

COMPONENTES
src/components/
```

---

# 22. Dependências

Evitar bibliotecas quando uma implementação pequena e confiável puder resolver.

Antes de adicionar uma dependência, perguntar:

1. realmente precisamos disso?
2. é bem mantida?
3. adiciona muito peso?
4. outro desenvolvedor entenderá?
5. podemos remover facilmente?
6. cria dependência desnecessária?

---

# 23. Git e versionamento

Cada projeto deve possuir Git.

Preferencialmente:

- repositório próprio;
- commits claros;
- branch principal estável;
- releases ou tags em entregas importantes.

Após handoff definitivo, o cliente pode receber propriedade ou acesso ao repositório.

---

# 24. Arquitetura ideal para a operação

```text
Arche Template Core
        ↓
Template escolhido
        ↓
Duplicação
        ↓
Conteúdo do cliente
        ↓
Design tokens
        ↓
Componentes necessários
        ↓
Customizações
        ↓
Testes
        ↓
Deploy
        ↓
Manutenção ou Handoff
```

---

# 25. Regra final

A stack deve servir ao projeto.

O projeto não deve existir para justificar a stack.

A Arche Labs deve entregar sites bonitos, rápidos, simples de manter e fáceis de transferir.
