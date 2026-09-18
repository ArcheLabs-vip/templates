# Arche Odonto | Presença Odontologia

Aplicação autônoma da coleção Presença, derivada do core aprovado. Mantém a composição com fotografia em arco, grade de tratamentos, clínica, depoimentos e contato, agora com identidade azul-petróleo, Playfair Display e Inter.

## Executar

Requer Node compatível com Astro 7; validado com Node 24.

```sh
npm install
npm run dev
```

Prévia local: http://localhost:4322.

```sh
npm run validate
npm run preview
```

O build estático é gerado em `dist/`.

## Personalização

- `src/data/site.ts`: marca, textos, tratamentos, contatos e depoimentos de exemplo.
- `src/components/`: seções, marca e modal de contato.
- `src/styles/tokens.css`: paleta, fontes e espaçamento.
- `public/images/`: fotografias odontológicas locais em WebP.
- `ASSETS.md`: fontes dos assets e licenças.

Direção preservada do core: DESIGN_VARIANCE 5, MOTION_INTENSITY 3, VISUAL_DENSITY 4. Tema claro com azul-petróleo; verde do WhatsApp preservado.

## Contato e demonstração

O telefone padrão é (99) 99999-9999. Os botões abrem um modal para selecionar o tratamento e revisar ou editar a mensagem. A ação “Continuar no WhatsApp” abre a conversa; o envio ocorre dentro do WhatsApp. Sem JavaScript, os links abrem diretamente o WhatsApp.

A identificação da demonstração fica somente na faixa superior. Os dados de contato e depoimentos são exemplos. O modo demo mantém noindex, robots restritivo e sitemap vazio. Para publicar, substitua os dados, revise as páginas legais, use relatos autorizados e configure domínio e número reais antes de definir `demo: false`.

Não há envio automático, confirmação de agendamento ou coleta de dados pelo site. O projeto não depende de imports do core nem de outras pastas da biblioteca.
