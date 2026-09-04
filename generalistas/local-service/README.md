# Local Service

Template interno da Arche Labs para criar sites de serviços locais sob medida. A demonstração usa uma empresa fictícia de manutenção residencial, mas a estrutura atende eletricistas, encanadores, instaladores, assistência técnica, limpeza e negócios semelhantes.

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
npm run validate
```

## Personalização

1. Substitua os dados e textos de demonstração em `src/data/site.ts`.
2. Em `site.demo`, defina `enabled: false` para remover o aviso de demonstração e permitir indexação.
3. Em `homePage.sections`, desative as seções que não fizerem sentido para o cliente.
4. Ajuste cores, tipografia, espaçamento e raios em `src/styles/tokens.css`.
5. Troque as imagens em `public/images` e atualize as referências em `homePage` e nas listas de conteúdo.
6. Revise telefone, WhatsApp, e-mail, domínio, imagem social, localização, horários e dados estruturados.
7. Se as avaliações vierem do Google, use `showGoogleBrand: true`, informe o texto da fonte e substitua todos os relatos ilustrativos.
8. Execute `npm run validate` antes de publicar.

Os projetos, números, depoimentos, contatos e condições comerciais incluídos são exemplos. Enquanto `site.demo.enabled` estiver ativo, a página exibe um aviso e recebe `noindex` automaticamente. Esses dados nunca devem ser publicados como informações reais de um cliente.

## Checklist de publicação para cada cliente

- [ ] Nome, título, descrição, domínio e imagem social
- [ ] Telefone, WhatsApp, e-mail e horários
- [ ] Endereço, cidade, estado, CEP e bairros atendidos
- [ ] Serviços, benefícios, projetos, processo, avaliações e FAQ
- [ ] Imagens e textos alternativos
- [ ] Métricas e avaliações comprováveis
- [ ] Voz consistente: profissional individual ou equipe
- [ ] `site.demo.enabled: false`
- [ ] Teste em mobile, desktop, teclado e zoom de 200%
- [ ] `npm run validate`

## Componentes reutilizados do Core

- UI: Button, Container, Section e SectionTitle
- Layout: BaseLayout, Header e Footer
- Seções: HeroService, TrustMetrics, ServicesGrid, BenefitsChecklist, ProjectsShowcase, ProcessSteps, TestimonialsFeatured, FAQAccordion e CTABanner
- Comércio local: QuickContact, ServiceArea e WhatsAppFloating

`WhatsAppFab` é a opção ativa no layout. `WhatsAppFloating` e `QuickContact` permanecem como variantes disponíveis para projetos de cliente.

O projeto é uma cópia autônoma do Core e não depende de caminhos externos à sua pasta.
