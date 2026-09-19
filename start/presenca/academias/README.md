# Arche Pilates | Presença Academias

Template autônomo do plano Start, coleção Presença. A base Aura aprovada foi adaptada para um estúdio de Pilates com identidade verde-sálvia, Manrope + Inter, fotografia em arco, modalidades, apresentação do espaço, planos, depoimentos, FAQ e contato.

## Executar

Requer Node compatível com Astro 7. Validado com Node 24.

```sh
npm ci
npm run dev
```

Prévia local: http://localhost:4325.

```sh
npm run validate
npm run preview
```

`validate` executa a checagem Astro/TypeScript e o build estático. O resultado para hospedagem fica em `dist/`.

## Estrutura e personalização

- `src/data/site.ts`: identidade, contatos, metadados, modalidades, planos, textos, FAQ e relatos.
- `src/components/`: seções, navegação e fluxo de contato.
- `src/styles/tokens.css`: fontes, cores, raios e espaçamentos.
- `src/styles/global.css`: composição, responsividade e interações.
- `src/pages/`: início, privacidade, termos, robots e sitemap.
- `public/`: fontes, fotografias WebP, ícones e licenças.
- [ASSETS.md](ASSETS.md): arquivos de imagem, ferramenta e prompts.
- [VALIDATION.md](VALIDATION.md): verificações e limites.

Direção visual: estúdio de Pilates acolhedor, com luz natural, verde-sálvia e tipografia leve. `DESIGN_VARIANCE: 5`, `MOTION_INTENSITY: 3`, `VISUAL_DENSITY: 3`. Manrope nos títulos, marca e preços; Inter no corpo e controles. Mantém a fotografia em arco e a estrutura Presença. Conteúdo para aparelhos, solo, individual, dupla e mobilidade. Planos demonstrativos por frequência semanal.

A implementação usa a base Presença já adaptada em veterinárias como ponto de partida técnico. Nenhum import depende do core ou de outro nicho. Não requer React, CMS, backend ou serviço de agenda.

## Contato, planos e demonstração

Os botões abrem um modal para escolher o assunto e revisar a mensagem. Modalidades e planos preselecionam a opção correspondente. O visitante continua no WhatsApp e faz o envio dentro desse serviço. Não há confirmação automática de aula, matrícula ou cobrança.

Telefone padrão: `(99) 99999-9999`. WhatsApp: `5599999999999`. Os três planos e seus valores são exemplos, identificados pelo aviso demonstrativo no topo. A grade de aulas e as condições contratuais são consultadas com a equipe.

Sem JavaScript, menu, FAQ e links diretos de contato continuam disponíveis. O site não armazena as mensagens digitadas, nem usa cookies de rastreamento.

Com `demo: true`, a página recebe `noindex, nofollow`, robots restritivo e sitemap vazio. Relatos fictícios só aparecem em modo demo. A publicação real exige domínio e WhatsApp diferentes dos padrões.

## Preparar para um estúdio real

1. Configure nome, URL HTTPS, WhatsApp, telefone, endereço, e-mail e horário em `src/data/site.ts`.
2. Ajuste `Brand.astro`, favicon, tokens, fotos, modalidades, preços e benefícios dos planos.
3. Confirme grade de aulas, condições de matrícula, permanência, pagamento e cancelamento.
4. Substitua os relatos por depoimentos autorizados e adapte `Testimonials.astro` para exibi-los fora do modo demo.
5. Revise privacidade e termos conforme os canais efetivamente utilizados.
6. Defina `demo: false` e execute `npm run validate`.
