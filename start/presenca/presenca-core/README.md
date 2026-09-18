# Presença | Core

Base Astro autônoma da coleção Presença, alinhada ao nicho `estetica` e à referência `completa_clinica_de_estetica.html`. Aura é a marca demonstrativa usada para apresentar a composição: tema claro rosado, Playfair Display + Inter, retrato em arco, cards de tratamentos, Nossa Essência, depoimentos, contato e rodapé.

Base aprovada e sincronizada em 18/09/2026: modal com seleção de tratamento e revisão da mensagem antes do WhatsApp, verde `#25D366`, telefone padrão de noves e aviso de demonstração concentrado na faixa superior. Os arquivos de `src/` e `public/` correspondem integralmente à versão aprovada de `estetica`.

## Executar

Requer Node compatível com Astro 7. Validado com Node 24.

```sh
npm install
npm run dev
```

Endereço: http://localhost:4320.

```sh
npm run validate
npm run preview
```

`validate` executa Astro/TypeScript e o build estático. Os arquivos para hospedagem são gerados em `dist/`.

## Estrutura

- `src/data/site.ts`: identidade, metadados, contatos, navegação, tratamentos, textos e depoimentos ilustrativos.
- `src/components/`: seções e componentes compartilhados.
- `src/styles/tokens.css`: fontes locais, paleta, raios e espaçamentos.
- `src/styles/global.css`: layouts, responsividade e interações.
- `src/pages/`: página inicial, privacidade, termos, robots e sitemap.
- `public/`: fontes, imagens WebP e favicon.
- `ASSETS.md`: origem das imagens e licenças das fontes.

## Contato

Os botões abrem um modal para escolher o tratamento e revisar ou editar a mensagem. A ação “Continuar no WhatsApp” abre a conversa; o envio é feito pelo visitante dentro do WhatsApp. O telefone padrão é `(99) 99999-9999`, com destino `5599999999999`. Telefone, endereço, e-mail e horários ficam em `site.ts`. Não há confirmação automática de agendamento. Sem JavaScript, os links abrem diretamente o WhatsApp.

Com `demo: true`, uma única faixa no topo informa que os dados, resultados e avaliações são ilustrativos. O restante do site apresenta a clínica normalmente, inclusive as páginas de privacidade e termos. Menu e links de contato funcionam sem JavaScript.

Para configurar uma clínica real:

1. Preencha `url` e `whatsapp` (DDI + DDD + número, somente dígitos) em `site.ts`.
2. Revise a identidade, as descrições, as imagens e as páginas de privacidade e termos.
3. Substitua os contatos de exemplo: `phone`, `phoneHref`, `address`, `email` e `hours`. Preencha `instagram` se houver.
4. Substitua os depoimentos por relatos autorizados e adapte `Testimonials.astro`. Os relatos ilustrativos são ocultados automaticamente fora do modo demo.
5. Defina `demo: false` e execute `npm run validate`.

O build recusa a desativação do modo demo sem domínio e WhatsApp reais, incluindo a tentativa de manter o número padrão de noves.

## Adaptação da referência

Leitura visual: landing page de estética acolhedora, preservando o desenho fornecido. `DESIGN_VARIANCE: 5`, `MOTION_INTENSITY: 3`, `VISUAL_DENSITY: 4`. Tema claro único; a chamada fotográfica escura e a grade do original foram mantidas por fidelidade à referência.

- CSS nativo substitui o Tailwind carregado por CDN.
- Fontes e imagens são locais; a foto quebrada do CTA usa a imagem válida do espaço.
- Menu mobile, âncoras, páginas do rodapé e contato funcionam.
- Indicadores fictícios de volume, nota e segurança deram lugar a mensagens de acolhimento.
- A faixa superior concentra a identificação dos dados e depoimentos ilustrativos.
- Contatos preenchidos com dados de exemplo; telefone e WhatsApp usam o padrão de noves da biblioteca.
- `noindex, nofollow`, robots restritivo e sitemap vazio no modo demo.
- Foco visível, skip link, navegação por teclado, redução de movimento e imagens com dimensões.

Não depende de imports de outros projetos da coleção, de React, de serviços de agenda ou de um backend.

## Criar outro nicho

Copie esta pasta sem `node_modules`, `dist`, `.astro` ou `.cache`. Renomeie o pacote e o campo raiz do lockfile para `@arche-labs/start-presenca-<nicho>`, escolha a porta de desenvolvimento e adapte os dados, a marca, os textos de seção, as páginas legais e os assets ao mercado de destino. Execute `npm install` e `npm run validate`.

A composição visual e os componentes são a base comum; a identidade Aura e os tratamentos são conteúdo de demonstração. Cada aplicação deve permanecer autônoma, sem imports para este core. Mudanças posteriores não se propagam automaticamente entre projetos.
