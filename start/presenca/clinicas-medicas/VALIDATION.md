# Validação da Arche Saúde

## Build e autonomia

- Dependências instaladas pelo lockfile, com `npm ci --offline` e cache local.
- `npm run validate`: 23 arquivos, zero erros, avisos ou hints.
- Build estático concluído para início, privacidade, termos, robots e sitemap.
- Projeto autônomo em `start/presenca/clinicas-medicas`, sem imports para outros nichos.
- Prévia disponível em `http://localhost:4326`.

## Navegador

- Hero, especialidades, equipe, estrutura e etapas inspecionados visualmente no desktop; hero e modal conferidos no mobile.
- Sem rolagem horizontal em 320, 390, 768, 1024 e 1440 px; CTA principal visível na primeira tela.
- Fontes locais carregadas; todas as imagens referenciadas carregadas; nenhum erro de console na verificação final.
- Âncoras válidas, menu mobile fecha ao selecionar seção e FAQ expande nativamente.
- Movimento reduzido respeitado.

## Contato

- Cinco especialidades preselecionam a opção correta no modal.
- CTA principal abre com consulta genérica selecionada.
- Texto composto apenas por espaços é recusado; mensagem revisada compõe corretamente a URL do WhatsApp.
- Abertura do WhatsApp interceptada durante a verificação, sem envio real.
- Escape fecha e restaura o foco; modal cabe em 390 × 844.
- Sem JavaScript, menu e link de Pediatria funcionam com o assunto e a marca corretos.

## Demonstração

- Privacidade, termos, robots e sitemap respondem HTTP 200.
- Meta noindex, robots com Disallow e sitemap vazio confirmados.
- Campos de identificação médica presentes; nenhum CRM ou RQE inventado.
- Cinco cenários do bloqueio de publicação verificados em memória: demo válida, contatos ausentes, identificação médica ausente, perfis demonstrativos e campos preenchidos. Os dados do projeto não foram alterados pelos cenários.
- O bloqueio valida preenchimento; não autentica registros profissionais.
- Relatos de exemplo restritos ao modo demo.

Não houve publicação, consulta, cobrança ou envio de mensagem real. Não foi realizada auditoria formal de acessibilidade, Lighthouse ou medição de desempenho em produção. Arquivos, licenças e prompts em [ASSETS.md](ASSETS.md).
