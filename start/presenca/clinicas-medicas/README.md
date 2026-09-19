# Arche Saúde | Presença Clínicas Médicas

Template autônomo do plano Start, coleção Presença. Clínica multiespecialidades demonstrativa com azul-petróleo, Manrope + Inter, fotografia em arco e estrutura responsiva.

## Executar

Requer Node compatível com Astro 7. Validado com Node 24.

```sh
npm ci
npm run dev
```

Prévia: http://localhost:4326.

```sh
npm run validate
npm run preview
```

O comando `validate` executa a checagem Astro/TypeScript e o build estático. Arquivos de hospedagem em `dist/`.

## Conteúdo

Hero, cinco especialidades e CTA, equipe, estrutura e diferenciais, três etapas do atendimento, relatos demonstrativos, FAQ, contato e rodapé. Clínica Médica, Cardiologia, Pediatria, Dermatologia e Ginecologia.

A aplicação parte da estrutura Presença de veterinárias, com conteúdo e identidade próprios, sem imports para outros projetos. `DESIGN_VARIANCE: 5`, `MOTION_INTENSITY: 3`, `VISUAL_DENSITY: 4`. Tema claro da coleção, Manrope para títulos e Inter para textos. Motion limitado à entrada do hero e feedback dos controles, com suporte a movimento reduzido.

## Personalizar

- `src/data/site.ts`: marca, contatos, textos, especialidades, equipe, identificação médica e perguntas.
- `src/styles/tokens.css`: paleta, fontes, raios e espaçamentos.
- `src/components/`: seções e contato.
- `public/`: imagens, fontes, ícone e licenças locais.
- [ASSETS.md](ASSETS.md): arquivos e prompts das imagens geradas.
- [VALIDATION.md](VALIDATION.md): verificações realizadas.

## Contato

Os botões abrem um modal com especialidade e mensagem editável. A pessoa revisa o texto antes de continuar no WhatsApp; o envio acontece nesse serviço. Os links mantêm o assunto correto sem JavaScript. Não há agenda automática, backend, cobrança ou armazenamento da mensagem.

Telefone demonstrativo: `(99) 99999-9999`. O WhatsApp é um canal de recepção e agendamento, sem consulta ou atendimento de emergência.

## Demonstração e publicação

O aviso no topo identifica clínica, profissionais, fotografias e relatos ilustrativos. Perfis de exemplo também são marcados individualmente. Nenhum número de CRM ou RQE foi inventado. Relatos de demonstração ficam ocultos fora do modo demo.

Antes de publicar:

1. Substitua marca, domínio HTTPS, telefone, WhatsApp, endereço e horários.
2. Confirme especialidades, equipe, convênios e condições de atendimento.
3. Preencha `medicalRegistration` com registro da clínica no CRM, nome e CRM/UF da direção técnica e RQE quando aplicável.
4. Substitua os perfis fictícios; informe CRM/UF e RQE reais e defina `demoProfile: false`.
5. Revise imagens, termos, privacidade e os relatos autorizados, se forem incluídos.
6. Defina `demo: false` e execute `npm run validate`.

O build impede desativar a demonstração com domínio/telefone de exemplo, identificação médica vazia ou perfis fictícios. Isso verifica preenchimento, não autenticidade dos registros. A identificação da clínica e da direção técnica é exibida no rodapé quando preenchida; CRM e RQE aparecem nos perfis.

Referência para os campos de identificação: [Manual de Publicidade Médica do CFM, capítulo II](https://publicidademedica.cfm.org.br/manual/resolucao-comentada/capitulo-2). O cliente deve revisar a aplicação ao seu estabelecimento e manter os dados atualizados.

Modo demo usa `noindex, nofollow`, robots restritivo e sitemap vazio. Nenhuma publicação é realizada automaticamente.
