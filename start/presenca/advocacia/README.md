# Start · Presença · Advocacia

Template Astro autônomo derivado de `presenca-core`, com a marca demonstrativa **Almeida & Prado Advocacia**. Mantém a fotografia em arco, Playfair Display + Inter e composição clara da coleção, adaptadas para verde profundo e conteúdo institucional.

## Executar

Node 24.14.1 utilizado na validação. Instale as dependências e inicie:

```sh
npm install
npm run dev
```

Disponível em **http://localhost:4329**.

```sh
npm run validate
npm run preview
```

`validate` reúne Astro/TypeScript e build estático. Hospede o conteúdo de `dist/` em um serviço de arquivos estáticos, como Cloudflare Pages. Não há backend, CMS ou dependência de outra pasta da biblioteca.

## Conteúdo e estrutura

- `src/data/site.ts`: identidade, contatos, áreas, profissionais, registros OAB, etapas, FAQ e conteúdos.
- `src/components/`: header, hero, áreas de atuação, escritório, equipe, processo, conteúdos, FAQ, contato, footer e modal.
- `src/pages/conteudos/[slug].astro`: duas páginas completas sobre preparação e formato do atendimento.
- `src/pages/privacidade.astro` e `termos.astro`: informações sobre navegação, dados e contato.
- `src/styles/`: tokens e CSS responsivo.
- `src/components/Brand.astro` e `public/favicon.svg`: identidade tipográfica.
- `public/images/` e `public/fonts/`: assets locais. Origem e prompts em [ASSETS.md](ASSETS.md).

## Contato

Os links abrem um modal com o assunto preselecionado, conforme a área de atuação. O visitante revisa ou edita a mensagem antes de continuar no WhatsApp. O envio acontece dentro do WhatsApp, por iniciativa do visitante. Não há agendamento automático nem formulário enviado a um servidor.

Telefone padrão: `(99) 99999-9999`. WhatsApp: `5599999999999`. Sem JavaScript, os links de contato abrem diretamente a mensagem correspondente; menu e FAQ continuam funcionando com HTML nativo.

## Personalizar para publicação

1. Substitua identidade, domínio, contatos, endereço e horários em `site.ts`, assim como o logo em `Brand.astro` e o favicon.
2. Configure a denominação jurídica e os registros verdadeiros em `officeRegistration`; substitua os profissionais, preencha sua OAB e altere `illustrative` para `false`.
3. Revise as áreas efetivamente atendidas, os textos, a política de privacidade conforme a hospedagem e os canais reais, e os termos de atendimento.
4. Substitua as imagens ilustrativas por fotografias autorizadas; ajuste também os textos alternativos.
5. Defina `demo: false` e execute `npm run validate` antes de publicar.

O build bloqueia a saída do modo demo com domínio, e-mail ou WhatsApp de exemplo, identificação profissional incompleta ou profissionais ilustrativos. Essas verificações não validam a autenticidade dos registros ou a adequação jurídica do conteúdo. A revisão final pertence ao profissional responsável.

No modo demo, o site inclui aviso superior, `noindex, nofollow`, robots restritivo e sitemap vazio. No modo real, canonical e sitemap incluem a página inicial, privacidade, termos e conteúdos.

## Direção visual e editorial

Site institucional para pessoas e empresas, com linguagem sóbria e editorial, a partir da base Presença. `DESIGN_VARIANCE: 4`, `MOTION_INTENSITY: 2`, `VISUAL_DENSITY: 4`. Tema claro único preservado da coleção aprovada, Playfair Display + Inter, verde profundo e fundos claros. Interações discretas com suporte a redução de movimento. Botões em cápsula, blocos com raio de 12px e imagens com raio de 20px, com arco reservado ao hero.

Sem estatísticas, depoimentos, registros ou resultados inventados. A demonstração identifica os profissionais fictícios na faixa superior. A comunicação foi orientada pelo caráter informativo e sóbrio do [Provimento 205/2021 da OAB](https://www.oab.org.br/leisnormas/legislacao/provimentos/205-2021), consultado em 19/09/2026. Isso não constitui certificação de conformidade para uma publicação real.

Resultados de verificação em [VALIDATION.md](VALIDATION.md).
