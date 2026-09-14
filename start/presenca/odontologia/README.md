# Start — Coleção Presença — Odontologia

Aplicação da Coleção Presença para clínicas e consultórios odontológicos. Prioriza tratamentos, equipe, estrutura, dúvidas frequentes e solicitação de avaliação.

Derivação técnica: `../presenca-core`.

## Seções incluídas

| Seção | Componente | Descrição |
|-------|-----------|-----------|
| Hero | `HeroService.astro` | Chamada principal com CTA de agendamento |
| Tratamentos | `ServicesGrid.astro` | Grid de especialidades odontológicas |
| Corpo Clínico | `Team.astro` | **Novo** — cards com foto, nome, especialidade e CRO |
| Nossa Estrutura | `StructureGallery.astro` | **Novo** — galeria de fotos da clínica |
| Diferenciais | `BenefitsChecklist.astro` | Checklist de diferenciais da clínica |
| Jornada do Paciente | `ProcessSteps.astro` | Etapas do agendamento ao resultado |
| Depoimentos | `TestimonialsFeatured.astro` | Avaliações de pacientes |
| Dúvidas Frequentes | `FAQAccordion.astro` | Perguntas comuns sobre tratamentos |
| CTA Final | `CTABanner.astro` | Banner de conversão com telefone e horários |

## Como rodar

```bash
npm install
npm run dev
```

## Personalização

Edite `src/data/site.ts` para alterar textos, tratamentos, equipe, imagens e dados de contato.
Edite `src/styles/tokens.css` para ajustar cores e tipografia.
