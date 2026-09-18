# Arche Labs — Templates

Biblioteca de templates organizada por plano, coleção e nicho.

```text
templates/
├── start/
│   ├── essencial/
│   │   ├── essencial-core/
│   │   ├── servicos-residenciais/
│   │   └── estetica/
│   └── presenca/
│       ├── presenca-core/
│       ├── estetica/
│       └── odontologia/
├── pro/
└── referencias/
```

- **Plano** define a oferta comercial, como `start` ou futuramente `pro`.
- **Coleção** define o molde visual e estrutural, como `essencial`.
- **Nicho** apresenta esse molde aplicado a um mercado específico.

Cada pasta de nicho é um projeto Astro autônomo. Para executar um deles, entre em sua pasta e use `npm run dev`. Consulte [referencias/geral/templates.md](referencias/geral/templates.md) para as regras completas da biblioteca.

Cada coleção possui seu próprio core. Consulte [referencias/geral/cores-de-colecao.md](referencias/geral/cores-de-colecao.md) para o padrão técnico usado na criação dos próximos cores.
