# Arche Imóveis | Presença Imobiliárias

Template autônomo do plano Start, coleção Presença. Identidade azul profundo, Manrope + Inter e fotografia em arco.

## Executar

Requer Node compatível com Astro 7; validado com Node 24.

```sh
npm ci
npm run dev
```

Prévia local: http://localhost:4328.

```sh
npm run validate
npm run preview
```

`validate` executa Astro/TypeScript e build estático. Os arquivos para hospedagem ficam em `dist/`.

## Conteúdo e funcionamento

Hero, cinco imóveis, convite para proprietários, apresentação da imobiliária, três regiões, etapas do atendimento, relatos demonstrativos, FAQ, contato e rodapé.

- Filtros de compra e aluguel, contagem anunciada para leitores de tela e seleção por região. “Todos” limpa a seleção.
- Cada imóvel apresenta referência, metragem, dormitórios, vagas, descrição, preço e detalhes expansíveis. Condomínio e IPTU são separados; locações mostram a soma mensal.
- “Quero conhecer” abre o contato com título e referência do imóvel. “Quero anunciar meu imóvel” seleciona o assunto para proprietários.
- O visitante revisa a mensagem antes de abrir o WhatsApp. O envio ocorre dentro do WhatsApp; visitas dependem de confirmação da equipe.
- Sem JavaScript, todos os imóveis permanecem visíveis, detalhes e menu funcionam, e o contato abre diretamente o WhatsApp com o assunto correspondente.

Projeto derivado da estrutura técnica Presença, independente e sem imports de outro nicho ou core. Não inclui portal de gestão, cadastro de anúncios, autenticação, reserva automática, backend ou integração com CRM. Não usa rastreamento nem armazena as mensagens.

## Personalizar

- `src/data/site.ts`: marca, contatos, imóveis, regiões, textos, relatos, dúvidas e identificação profissional. Os assuntos de contato são derivados automaticamente da lista de imóveis.
- `properties`: preços em reais como números; `purpose` aceita `comprar` ou `alugar`; `region` deve corresponder ao título da região; imagens usam o nome do WebP sem extensão.
- `officeRegistration`: `officeCreci`, `responsibleName` e `responsibleCreci`. Campos preenchidos aparecem no rodapé.
- `src/components/Brand.astro` e `public/favicon.svg`: marca visual.
- `src/styles/tokens.css`: paleta, fontes, raios e espaçamentos.
- `src/components/`: seções, filtros e modal.
- `src/pages/`: início, termos, privacidade, robots e sitemap.
- [ASSETS.md](ASSETS.md): imagens, origens, prompts e licenças.
- [VALIDATION.md](VALIDATION.md): verificações realizadas.

## Direção visual

`DESIGN_VARIANCE: 5`, `MOTION_INTENSITY: 3`, `VISUAL_DENSITY: 4`. Preserva a composição da coleção: base clara, hero em arco, botões arredondados e cinco cartões com CTA. Títulos em Manrope, textos em Inter, azul profundo e cinzas frios. Imagens e ícones locais, feedback discreto nos controles e suporte a movimento reduzido. Ações de WhatsApp mantêm a cor reconhecível do canal.

## Demonstração e publicação

Imóveis, preços, fotografias, endereço, contatos e relatos são fictícios. Há aviso no topo e junto à seleção de imóveis. Relatos demonstrativos só aparecem com `demo: true`. Não há registros CRECI inventados.

1. Configure marca, domínio HTTPS, WhatsApp, telefone, e-mail, endereço e horários reais.
2. Substitua todos os imóveis, imagens, preços e características; confirme disponibilidade e encargos com a imobiliária.
3. Configure regiões e registros profissionais reais em `officeRegistration`.
4. Revise termos, privacidade e conteúdo conforme a operação da imobiliária.
5. Para usar depoimentos reais autorizados, adapte `Testimonials.astro` e a lista de relatos.
6. Defina `demo: false` e execute `npm run validate`.

O build exige domínio e WhatsApp diferentes dos exemplos antes de desativar a demonstração. No modo demo, o site usa `noindex, nofollow`, robots restritivo e sitemap vazio. O telefone `(99) 99999-9999` e o WhatsApp `5599999999999` são exemplos.
