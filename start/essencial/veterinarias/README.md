# Start — Coleção Essencial — Veterinárias

Aplicação da Coleção Essencial para clínicas veterinárias, hospitais e pet shops. Prioriza serviços, equipe, atendimento emergencial, localização e agendamento.

Derivação técnica: `../essencial-core`.

## Começando

```bash
npm install
npm run dev
```

## Estrutura

```
src/
├── components/
│   ├── layout/       # Header, Footer
│   ├── sections/     # Hero, ServicesGrid, Team, Benefits, etc.
│   └── ui/           # Button, Container, Section, EmergencyBanner, WhatsApp FAB
├── data/
│   └── site.ts       # Configuração central (dados, conteúdo, tokens)
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   └── index.astro
└── styles/
    ├── tokens.css    # Design tokens (paleta verde/floresta)
    └── global.css    # Reset e utilitários globais
```

## Diferenciais do template veterinário

- **Banner de Emergência 24h** acima do header com telefone direto
- **Paleta verde/floresta** transmitindo cuidado e natureza
- **Seção de equipe com CRMV** (ao invés de CRO)
- **FAQ e conteúdo** específicos para o universo pet
- **Schema.org** configurado como `VeterinaryCare`
