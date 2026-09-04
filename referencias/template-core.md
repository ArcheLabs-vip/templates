# Arche Labs — Template Core

## 1. Objetivo

O Arche Template Core será a base técnica reutilizável para os sites desenvolvidos pela Arche Labs.

Ele não será um framework proprietário.

Será uma coleção organizada de:

- componentes;
- seções;
- layouts;
- estilos;
- design tokens;
- padrões;
- estruturas de dados;
- integrações comuns.

O objetivo é acelerar produção sem criar sites idênticos ou prender o cliente à Arche Labs.

---

# 2. Princípio central

A lógica do Template Core é:

```text
Componentes reutilizáveis
+
Variações visuais
+
Design tokens
+
Conteúdo específico
+
Composição diferente
=
Sites distintos com desenvolvimento rápido
```

---

# 3. O que o Template Core não deve ser

Não deve ser:

- um page builder próprio;
- um framework fechado;
- uma dependência obrigatória externa;
- um pacote difícil de remover;
- um sistema que somente a Arche Labs compreende;
- uma arquitetura excessivamente abstrata.

Após criar um projeto de cliente, ele deve poder existir independentemente do Core.

---

# 4. Estrutura inicial

```text
arche-template-core/
│
├── src/
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── forms/
│   │
│   ├── layouts/
│   │
│   ├── pages/
│   │
│   ├── data/
│   │
│   ├── styles/
│   │
│   ├── assets/
│   │
│   ├── icons/
│   │
│   └── integrations/
│
├── public/
│
├── README.md
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

# 5. Componentes UI

Componentes pequenos e genéricos.

Primeira biblioteca:

```text
UI
├── Button
├── Badge
├── Card
├── Container
├── Section
├── SectionTitle
├── Eyebrow
├── Icon
├── Logo
├── Avatar
├── Divider
├── Breadcrumb
├── Tag
└── SocialLinks
```

---

# 6. Layout

```text
Layout
├── Header
├── HeaderTransparent
├── HeaderCentered
├── HeaderMinimal
├── MobileMenu
├── Footer
├── FooterSimple
├── FooterColumns
└── BaseLayout
```

---

# 7. Heroes

O Hero é uma das áreas com maior impacto na percepção visual.

Criar várias alternativas.

```text
Hero
├── HeroCentered
├── HeroSplit
├── HeroImageRight
├── HeroImageLeft
├── HeroBackground
├── HeroMinimal
├── HeroCard
├── HeroProduct
├── HeroService
└── HeroCampaign
```

---

# 8. Serviços

```text
Services
├── ServicesCards
├── ServicesGrid
├── ServicesIcons
├── ServicesList
├── ServicesFeatured
├── ServicesAlternating
└── ServicesCompact
```

---

# 9. Benefícios

```text
Benefits
├── BenefitsGrid
├── BenefitsIcons
├── BenefitsSplit
├── BenefitsChecklist
└── BenefitsNumbers
```

---

# 10. Sobre

```text
About
├── AboutSimple
├── AboutImage
├── AboutSplit
├── AboutTimeline
├── AboutFounder
└── AboutNumbers
```

---

# 11. Prova social

```text
SocialProof
├── TestimonialsGrid
├── TestimonialsCards
├── TestimonialsFeatured
├── TestimonialsCarousel
├── ReviewsSummary
├── ClientLogos
└── Stats
```

---

# 12. Cases e portfólio

```text
Portfolio
├── PortfolioGrid
├── PortfolioCards
├── PortfolioGallery
├── CaseStudies
├── BeforeAfter
└── ProjectsFeatured
```

---

# 13. Galerias

```text
Gallery
├── GalleryGrid
├── GalleryMasonry
├── GalleryFeatured
├── GallerySlider
└── GalleryBeforeAfter
```

---

# 14. Processo

```text
Process
├── ProcessSteps
├── ProcessTimeline
├── ProcessCards
└── ProcessHorizontal
```

---

# 15. Equipe

```text
Team
├── TeamGrid
├── TeamCards
├── TeamCompact
├── TeamFeatured
└── SpecialistProfile
```

---

# 16. FAQ

```text
FAQ
├── FAQAccordion
├── FAQColumns
├── FAQSimple
└── FAQCategory
```

---

# 17. CTA

```text
CTA
├── CTASimple
├── CTABanner
├── CTASplit
├── CTAWhatsApp
├── CTAContact
└── CTAFinal
```

---

# 18. Contato

```text
Contact
├── ContactSimple
├── ContactForm
├── ContactSplit
├── ContactWhatsApp
├── ContactMap
└── ContactInfo
```

---

# 19. Pricing

```text
Pricing
├── PricingCards
├── PricingComparison
├── PricingFeatured
└── PricingSimple
```

---

# 20. Conteúdo

```text
Content
├── RichText
├── FeatureList
├── Quote
├── ImageText
├── ContentColumns
└── ArticlePreview
```

---

# 21. Blog

```text
Blog
├── BlogGrid
├── BlogFeatured
├── BlogList
├── ArticleLayout
└── RelatedPosts
```

---

# 22. Componentes específicos para comércio local

```text
LocalBusiness
├── BusinessHours
├── ServiceArea
├── MapSection
├── WhatsAppFloating
├── GoogleReviews
├── LocationCard
└── EmergencyCTA
```

---

# 23. Componentes para alimentação

```text
Food
├── MenuCategories
├── MenuItem
├── MenuHighlights
├── OpeningHours
├── ReservationCTA
└── DeliveryCTA
```

---

# 24. Componentes para profissionais

```text
Professional
├── Credentials
├── Specialties
├── ExperienceTimeline
├── ProfessionalProfile
└── ConsultationCTA
```

---

# 25. Componentes para imóveis

```text
RealEstate
├── PropertyCard
├── PropertyGrid
├── PropertyFeatures
├── PropertyGallery
├── PropertyCTA
└── BrokerProfile
```

---

# 26. Componentes para eventos

```text
Events
├── Countdown
├── Schedule
├── Speakers
├── Location
├── Sponsors
└── TicketCTA
```

---

# 27. Forms

```text
Forms
├── ContactForm
├── LeadForm
├── QuoteForm
├── BookingForm
└── NewsletterForm
```

Sempre utilizar a infraestrutura definida pela Arche Labs para segurança e envio.

---

# 28. Design Tokens

Todos os templates devem usar o mesmo sistema conceitual de tokens.

Categorias:

```text
colors
typography
spacing
radius
shadows
containers
breakpoints
transitions
```

Exemplo:

```css
:root {
  --color-primary: #121212;
  --color-secondary: #5f6368;
  --color-accent: #6c5ce7;
  --color-bg: #ffffff;
  --color-surface: #f7f7f8;

  --font-heading: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;

  --radius-sm: .5rem;
  --radius-md: 1rem;
  --radius-lg: 1.5rem;

  --container: 1200px;

  --section-space: 7rem;
}
```

---

# 29. Presets visuais

Criar presets que alterem os tokens.

Exemplos:

## Corporate

- cores sóbrias;
- radius menor;
- tipografia formal;
- alto contraste.

## Modern

- bastante espaço;
- cards;
- radius médio;
- tipografia contemporânea.

## Premium

- tipografia elegante;
- grandes imagens;
- espaçamento maior;
- detalhes sutis.

## Friendly

- cores mais leves;
- radius maior;
- cards;
- linguagem visual amigável.

## Bold

- títulos grandes;
- contraste;
- composições assimétricas;
- CTAs destacados.

---

# 30. Estrutura de dados

Conteúdo deve ser fácil de trocar.

Exemplo:

```ts
export const company = {
  name: "Empresa Exemplo",
  description: "Descrição da empresa",
  phone: "",
  email: "",
  whatsapp: "",
  address: "",
  social: {
    instagram: "",
    facebook: ""
  }
};
```

---

# 31. Dados de serviços

```ts
export const services = [
  {
    title: "Serviço 1",
    description: "Descrição",
    icon: "icon"
  }
];
```

---

# 32. Dados do FAQ

```ts
export const faq = [
  {
    question: "Pergunta",
    answer: "Resposta"
  }
];
```

---

# 33. Variantes

Não criar um único componente gigante cheio de condições.

Preferir componentes separados quando a diferença visual for relevante.

Bom:

```text
HeroCentered.astro
HeroSplit.astro
HeroBackground.astro
```

Evitar:

```text
Hero.astro
com 50 props alterando toda a estrutura
```

---

# 34. Modularidade

As páginas devem ser montadas combinando seções.

Exemplo:

```astro
<Header />
<HeroSplit />
<Stats />
<ServicesGrid />
<AboutSplit />
<ProcessSteps />
<TestimonialsGrid />
<FAQAccordion />
<CTABanner />
<Footer />
```

Outro projeto:

```astro
<HeaderTransparent />
<HeroBackground />
<BenefitsIcons />
<GalleryMasonry />
<ServicesList />
<ReviewsSummary />
<CTAWhatsApp />
<FooterSimple />
```

Mesmo Core, aparência diferente.

---

# 35. Generalização versus especificidade

O Core deve conter componentes generalistas.

Templates específicos devem ser composições desses componentes.

Exemplo:

```text
Template Eletricista

HeroService
ServicesCards
BenefitsChecklist
EmergencyCTA
GoogleReviews
ServiceArea
FAQAccordion
CTAWhatsApp
```

Não é necessário criar componentes exclusivos para eletricistas se componentes genéricos resolvem.

---

# 36. Quando criar um novo componente

Criar quando:

- será reutilizado;
- existe diferença estrutural real;
- reduz repetição;
- melhora consistência;
- simplifica projetos futuros.

Não criar apenas para abstrair poucas linhas.

---

# 37. Biblioteca interna

O Core pode ser organizado internamente como catálogo.

Cada componente deve possuir:

- nome;
- screenshot;
- categoria;
- descrição;
- casos de uso;
- dependências;
- variantes.

Isso facilita a seleção durante novos projetos.

---

# 38. Processo de criação de um novo site

```text
1. escolher template base;
2. duplicar projeto;
3. aplicar identidade visual;
4. editar design tokens;
5. preencher dados;
6. selecionar variantes;
7. remover seções desnecessárias;
8. adicionar customizações;
9. integrar formulários;
10. integrar CMS, se contratado;
11. revisar mobile;
12. revisar performance;
13. revisar SEO;
14. publicar.
```

---

# 39. Regra de independência

O Template Core serve para acelerar a Arche Labs.

Ele não deve se tornar obrigatório para manter o site depois da entrega.

Todo projeto de cliente deve possuir tudo que precisa dentro do próprio repositório.

---

# 40. Evolução futura

Futuramente o Core poderá possuir:

- biblioteca visual;
- Storybook ou equivalente;
- documentação de componentes;
- preview interno;
- CLI para iniciar projetos;
- automação para geração de boilerplate;
- presets de nicho;
- schemas Sanity pré-prontos.

Essas melhorias devem ser adicionadas apenas quando o volume de projetos justificar.
