# Arche Contábil | Presença Contabilidade

Template autônomo do plano Start, coleção Presença. Identidade grafite e cobre, Manrope + Inter e fotografia em arco.

## Executar

Requer Node compatível com Astro 7; validado com Node 24.

```sh
npm ci
npm run dev
```

Prévia local: http://localhost:4327.

```sh
npm run validate
npm run preview
```

`validate` reúne Astro/TypeScript e build estático. Os arquivos de hospedagem ficam em `dist/`.

## Conteúdo

Hero, cinco serviços e CTA, escritório e diferenciais, segmentos atendidos, etapas do atendimento, relatos ilustrativos, FAQ, contato e rodapé.

Serviços: abertura de empresas, contabilidade mensal, fiscal e tributário, departamento pessoal e gestão financeira. Segmentos demonstrativos: prestadores de serviços, comércio e novos negócios. Honorários e escopo são tratados na conversa com a equipe.

O projeto deriva da estrutura técnica Presença de clínicas médicas, com seções e conteúdo adaptados ao escritório contábil. É independente, sem imports para outro nicho ou core.

Direção visual: `DESIGN_VARIANCE: 5`, `MOTION_INTENSITY: 3`, `VISUAL_DENSITY: 4`. Mantém a base clara da coleção, fotografia em arco, botões arredondados e grade de cinco serviços com CTA. Manrope em títulos e marca, Inter nos textos. Movimento restrito à entrada do hero e feedback dos controles, com suporte a movimento reduzido.

## Personalizar

- `src/data/site.ts`: marca, contatos, serviços, segmentos, textos, FAQ, relatos e identificação profissional.
- `src/components/`: seções e modal de contato.
- `src/styles/tokens.css`: fontes, paleta, raios e espaçamentos.
- `src/styles/global.css`: composição e responsividade.
- `src/pages/`: início, privacidade, termos, robots e sitemap.
- `public/`: fontes, imagens e ícones locais, com licenças.
- [ASSETS.md](ASSETS.md): fotografias geradas e prompts.
- [VALIDATION.md](VALIDATION.md): verificações realizadas.

## Contato

O botão de cada serviço abre o modal com o assunto correspondente. O visitante revisa a mensagem e escolhe continuar no WhatsApp; o envio ocorre dentro desse serviço. Sem JavaScript, os links levam diretamente à conversa com o assunto e a marca.

Não há contratação, cobrança, cálculo tributário, envio de documentos ou autenticação no site. Não são solicitadas senhas ou certificados digitais. Não há cookies de rastreamento, armazenamento da mensagem ou backend.

## Demonstração e publicação

O aviso superior identifica escritório, imagens, contatos e relatos fictícios. Os relatos só aparecem em modo demo. Nenhum registro profissional, número de clientes, percentual de economia ou resultado foi inventado.

1. Configure nome, domínio HTTPS, WhatsApp, telefone, endereço, e-mail e horários.
2. Confirme serviços, segmentos, condições de atendimento e conteúdo com o escritório.
3. Preencha `officeRegistration` com os dados reais do escritório e do responsável técnico. Campos preenchidos aparecem no rodapé.
4. Ajuste marca, favicon, fotografias e relatos autorizados, se forem publicados.
5. Revise termos e privacidade conforme os canais utilizados.
6. Defina `demo: false` e execute `npm run validate`.

O build exige domínio e WhatsApp diferentes dos exemplos antes de desativar o modo demo. Os campos de registro profissional são opcionais no código e precisam ser revisados pelo escritório antes da publicação.

No modo demo, o site usa `noindex, nofollow`, robots restritivo e sitemap vazio. Telefone padrão `(99) 99999-9999`; WhatsApp `5599999999999`.
