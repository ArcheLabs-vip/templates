# Validação da Arche Pilates

Revisão do template de academias para estúdio de Pilates em 18/09/2026. Node 24.14.1 e npm 11.11.0.

## Build

- `npm run validate`: Astro/TypeScript, 22 arquivos, zero erros, avisos ou hints; build estático concluído.
- Início, privacidade, termos, robots e sitemap disponíveis.
- Sem imports para o core ou outros nichos.
- Telemetria desativada no ambiente por `ASTRO_TELEMETRY_DISABLED=1`.

## Revisão visual e responsividade

- Identidade verde-sálvia, Manrope local e novas fotografias de Pilates.
- Inspeção visual de hero, cinco aulas, estúdio e planos em desktop; hero e modal em mobile.
- Sem rolagem horizontal em 320, 390, 768, 1024 e 1440 px.
- CTA principal visível na primeira tela nas larguras verificadas.
- Nove arquivos WebP locais; todas as imagens referenciadas carregam.
- Manrope confirmada no navegador; nenhum erro de console na verificação após as alterações.
- Âncoras sem destinos ausentes; menu mobile fecha ao escolher uma seção.
- Preferência por movimento reduzido respeitada.

## Fluxo de contato

- Cinco aulas e três planos preselecionam os assuntos corretos.
- CTA principal seleciona aula experimental de Pilates.
- Mensagem editável; texto vazio ou composto apenas por espaços é recusado.
- URL de WhatsApp corresponde à mensagem revisada. A abertura foi interceptada, sem envio real.
- Escape fecha o modal e devolve o foco ao acionador; modal cabe em 390 × 844.
- Sem JavaScript: menu abre e link direto inclui Pilates em dupla e a nova marca.

## Conteúdo demonstrativo

- Planos por frequência semanal para Pilates em dupla, com preços fictícios claramente identificados.
- Privacidade e termos respondem HTTP 200 e exibem Arche Pilates.
- Aviso demonstrativo, proteção de domínio/telefone, noindex e depoimentos restritos ao modo demo preservados.
- Fotografias, licenças e prompts documentados em [ASSETS.md](ASSETS.md).
- Nenhuma publicação, matrícula, cobrança ou mensagem real realizada.
- Não foi feita auditoria formal de acessibilidade, Lighthouse ou medição de Core Web Vitals em produção.
