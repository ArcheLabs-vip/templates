# Arche Vet | Presença Veterinárias

Aplicação autônoma do plano Start, coleção Presença, derivada de `presenca-core`. Identidade verde-floresta, Playfair Display + Inter, fotografia em arco e conteúdo para clínicas veterinárias com atendimento de cães e gatos.

## Executar

Requer Node compatível com Astro 7; validado com Node 24.

```sh
npm ci
npm run dev
```

Prévia local: http://localhost:4324.

```sh
npm run validate
npm run preview
```

`validate` executa Astro/TypeScript e o build estático. Saída de hospedagem: `dist/`.

## Conteúdo e estrutura

- `src/data/site.ts`: identidade, SEO, contatos, textos, cuidados, FAQ e relatos ilustrativos.
- `src/components/`: Hero, Cuidados, A clínica, Depoimentos, FAQ, Contato, navegação e modal.
- `src/styles/tokens.css`: fontes, paleta e tokens.
- `src/styles/global.css`: composição e responsividade.
- `src/pages/`: início, privacidade, termos, robots e sitemap.
- `public/`: favicon, fontes e imagens locais. Origem e prompts em [ASSETS.md](ASSETS.md).
- [VALIDATION.md](VALIDATION.md): verificações e limites da entrega.

A direção preserva a base Aura aprovada: `DESIGN_VARIANCE: 5`, `MOTION_INTENSITY: 3`, `VISUAL_DENSITY: 4`. A tipografia editorial, a grade de cinco serviços e um CTA, a imagem em arco e o CTA fotográfico fazem parte da coleção. O hero foi simplificado para manter a leitura e os botões em destaque. CSS nativo e JavaScript apenas no menu e no modal; o FAQ usa `details`.

## Contato e demonstração

Botões de contato abrem um modal com seleção de assunto e mensagem editável. Links dos serviços preselecionam o cuidado correspondente. O WhatsApp só é aberto após a ação “Continuar no WhatsApp”; o visitante faz o envio nesse serviço. Não há confirmação automática de horário. Sem JavaScript, os links abrem diretamente a conversa com a mensagem e o assunto.

Telefone padrão: `(99) 99999-9999`. WhatsApp: `5599999999999`. O canal serve para agendamento; o template não oferece nem anuncia plantão 24 horas.

O modo `demo: true` mantém um único aviso no topo, `noindex, nofollow`, robots restritivo e sitemap vazio. Os relatos de exemplo só aparecem em modo demo. O build recusa desativar esse modo com domínio de exemplo ou WhatsApp padrão.

## Personalizar para uma clínica

1. Atualize marca, domínio HTTPS, WhatsApp, telefone, endereço, e-mail e horários em `src/data/site.ts`.
2. Ajuste a marca em `Brand.astro`, o favicon e os tokens.
3. Revise os serviços e o FAQ conforme os atendimentos disponíveis e inclua os dados reais da clínica e do responsável técnico onde necessário.
4. Substitua as imagens ilustrativas e use apenas relatos autorizados. Adapte `Testimonials.astro` para os relatos reais.
5. Revise privacidade e termos para os canais e serviços usados pelo cliente.
6. Desative `demo` e execute `npm run validate`.

Nenhum import depende do core ou de outro nicho. Não há agenda externa, CMS, backend, rastreamento ou armazenamento dos textos digitados.

