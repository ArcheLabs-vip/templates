# Validação · Presença Imobiliárias

Verificação local em 18/09/2026, Node 24.14.1, npm 11.11.0 e Astro 7.3.0.

## Compilação

`npm run validate`: Astro/TypeScript sem erros, avisos ou sugestões; build estático concluído. Rotas `/`, `/privacidade/`, `/termos/`, `/robots.txt` e `/sitemap.xml` geradas. Sem importações para outro nicho ou core.

## Navegador

Playwright/Chromium, prévia em `http://127.0.0.1:4328/`:

- Larguras 320, 390, 768, 1024 e 1440 px sem rolagem horizontal ou transbordamento em títulos e botões. CTAs do hero visíveis na primeira tela.
- Todas as oito imagens da página carregadas; hero utiliza `srcset`. Revisão visual de desktop, celular, cartão de imóvel e modal.
- Filtros: todos = 5, comprar = 3, alugar = 2; região Jardins = 1. Contagem e estado dos botões sincronizados; “Todos” restaura a seleção.
- Detalhes expansíveis e encargos conferidos. Apartamento Horizonte: aluguel R$ 4.200 + condomínio R$ 780 + IPTU R$ 190 = R$ 5.170 mensais.
- Os cinco imóveis preselecionam título e referência no modal. O CTA para proprietários seleciona “anunciar meu imóvel”.
- Mensagem em branco bloqueada; mensagem editada gera URL correta do WhatsApp. `window.open` interceptado no teste, sem envio ou abertura de conversa real.
- Escape fecha o modal, restaura foco no acionador e libera rolagem; Tab mantém foco dentro do modal. Modal cabe na tela de 390 × 844.
- Menu móvel abre e fecha após escolher um link; FAQ funciona com `details` nativo.
- Sem JavaScript: cinco imóveis visíveis, filtros ocultos, menu funcional e links diretos do WhatsApp com referência e marca.
- Páginas auxiliares retornam HTTP 200. Nenhum erro de JavaScript ou console durante os testes.
- `prefers-reduced-motion: reduce` utilizado na revisão; animações e transições desativadas por CSS.

## Lighthouse

Auditoria móvel, modo navigation, via Chrome DevTools:

| Categoria | Pontuação |
| --- | --- |
| Acessibilidade | 100 |
| Boas práticas | 100 |
| SEO | 66 |
| Agentic Browsing | 100 |

53 verificações passaram. A única falha final é o bloqueio intencional de indexação em modo demo (`noindex, nofollow` e robots com `Disallow: /`), que reduz a nota de SEO. A auditoria identificou contraste insuficiente em textos secundários e divergências entre rótulos visíveis e nomes acessíveis; ambos foram corrigidos e a auditoria repetida.

A ferramenta não inclui avaliação de desempenho. Não foi realizada medição de Core Web Vitals em produção nem auditoria manual completa com leitor de tela. Relatórios e screenshots locais ficam em `.cache/`, fora do versionamento.

## Dados demonstrativos

Marca, imóveis, valores, fotografias, relatos e contatos ilustrativos identificados na interface. Registros CRECI vazios por padrão. Relatos limitados ao modo demo. Domínio `.example`, telefone fictício e proteção no build contra desativar a demonstração sem configurar domínio e WhatsApp.
