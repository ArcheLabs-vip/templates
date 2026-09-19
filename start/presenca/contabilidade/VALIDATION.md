# Validação da Arche Contábil

## Build e autonomia

- `npm ci --offline` concluído a partir do lockfile e cache local.
- `npm run validate`: 23 arquivos, zero erros, avisos ou hints.
- Build estático concluído; projeto independente em `start/presenca/contabilidade`.
- Prévia local em `http://localhost:4327`.

## Navegador e responsividade

- Hero, serviços, escritório e segmentos inspecionados no desktop; hero e modal conferidos no mobile.
- Sem rolagem horizontal ou overflow interno em títulos, botões e diferenciais nas larguras 320, 390, 768, 1024 e 1440 px.
- CTA principal visível na primeira tela nas larguras verificadas.
- Todas as imagens locais referenciadas carregam; nenhum erro de console.
- Navegação e âncoras válidas. Menu mobile fecha ao escolher uma seção.
- FAQ expande nativamente; movimento reduzido respeitado.

## Contato

- Cinco serviços preselecionam o assunto correto no modal.
- CTA principal abre com assunto geral sobre a empresa.
- Mensagem vazia ou composta apenas por espaços é recusada.
- Mensagem revisada corresponde à URL do WhatsApp; abertura interceptada, sem envio real.
- Escape fecha e devolve o foco ao acionador; modal cabe em 390 × 844.
- Sem JavaScript, menu e link de Gestão financeira funcionam com assunto e marca corretos.

## Demonstração e páginas

- Privacidade, termos, robots e sitemap respondem HTTP 200.
- `noindex, nofollow`, `Disallow: /` e sitemap vazio confirmados.
- Registros profissionais permanecem vazios, sem números inventados.
- Relatos fictícios restritos ao modo demo.
- Origem, licenças e prompts em [ASSETS.md](ASSETS.md).

Não houve publicação, contratação, cobrança ou envio real de mensagem. Não foi realizada auditoria formal de acessibilidade, Lighthouse ou medição de desempenho em produção.
