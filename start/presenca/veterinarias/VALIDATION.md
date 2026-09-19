# Validação da Arche Vet

Validado em 18/09/2026, com Node 24.14.1 e npm 11.11.0.

## Build

- Dependências instaladas a partir do lockfile com `npm ci`.
- `npm run validate`: 21 arquivos verificados, zero erros, avisos ou hints.
- Build estático concluído: início, privacidade, termos, robots e sitemap.
- No ambiente restrito de desenvolvimento, os comandos foram executados com `ASTRO_TELEMETRY_DISABLED=1` e cache npm em `.cache/npm`.

## Navegador

- Inspeção visual em desktop (1440 × 1000) e mobile (390 × 844).
- Sem rolagem horizontal em 320, 390, 768, 1024, 1366 e 1440 px.
- CTA principal visível na primeira tela mobile.
- Imagens locais carregadas, sem erros de console.
- Âncoras de navegação e serviços apontam para elementos existentes.
- Menu mobile abre e fecha ao escolher um destino.
- FAQ expande e recolhe com HTML nativo.
- Modal preseleciona o serviço acionado, permite editar a mensagem e rejeita texto vazio ou formado apenas por espaços.
- URL do WhatsApp inclui exatamente a mensagem revisada. A abertura foi interceptada durante a verificação; nenhuma mensagem foi enviada.
- Tab permanece nos controles do modal; Escape fecha e devolve o foco ao botão de origem.
- Modal cabe no viewport mobile.
- Sem JavaScript: menu, FAQ e links diretos ao WhatsApp continuam disponíveis.
- Privacidade e termos respondem HTTP 200, com título da Arche Vet e link de retorno.
- Redução de movimento respeitada; fontes locais carregadas antes das capturas finais.

## Demonstração e entrega

- `noindex, nofollow`, robots com `Disallow: /` e sitemap vazio em modo demo.
- Contatos padrão e domínio `.example` devem ser substituídos antes de desativar o modo demo.
- Dados e imagens ilustrativos sinalizados na faixa superior; relatos fictícios ocultos fora do modo demo.
- Paleta, textos e imagens de estética removidos do novo nicho.
- Imagens WebP otimizadas e fontes locais com licenças. Detalhes em [ASSETS.md](ASSETS.md).
- Core e demais nichos preservados; novo projeto sem imports externos à própria pasta.

As verificações cobrem a experiência demonstrativa local. Não houve publicação, confirmação de agenda ou teste de envio real no WhatsApp. Não foi executada auditoria formal de acessibilidade ou medição de Core Web Vitals em produção.
