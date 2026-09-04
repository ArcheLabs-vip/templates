# Local Service

Template generalista da Arche Labs para serviços locais. A demonstração usa uma empresa fictícia de manutenção residencial, mas a estrutura atende eletricistas, encanadores, instaladores, assistência técnica, limpeza e negócios semelhantes.

## Requisitos

- Node.js 22 ou superior
- npm 10 ou superior

## Instalação e desenvolvimento

```bash
npm install
npm run dev
```

## Verificação

```bash
npm run check
npm run build
```

## Personalização

1. Substitua os dados de demonstração em `src/data/site.ts`.
2. Ajuste cores, tipografia, espaçamento e raios em `src/styles/tokens.css`.
3. Troque as imagens em `public/images`, preservando os nomes ou atualizando as referências.
4. Revise telefone, WhatsApp, domínio canônico e dados estruturados antes da publicação.
5. Remova seções que não fizerem sentido para o cliente.

Os depoimentos, contatos e condições comerciais incluídos são exemplos. Eles não devem ser publicados como informações reais.

## Componentes reutilizados do Core

- UI: Button, Container, Section e SectionTitle
- Layout: BaseLayout, Header e Footer
- Seções: HeroService, ServicesGrid, BenefitsChecklist, ProcessSteps, TestimonialsFeatured, FAQAccordion e CTABanner
- Comércio local: QuickContact, ServiceArea e WhatsAppFloating

O projeto é uma cópia autônoma do Core e não depende de caminhos externos à sua pasta.
