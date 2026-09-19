# Validação | Start Presença Advocacia

Executada em 19/09/2026, Windows, Node 24.14.1 e npm 11.11.0.

## Build

`npm run validate` concluído: 24 arquivos analisados, zero erros, avisos ou sugestões. Build estático com cinco páginas HTML e endpoints de robots e sitemap. Em ambiente restrito, foi usado `ASTRO_TELEMETRY_DISABLED=1` para evitar a escrita da configuração global de telemetria.

## Navegador

- Verificação visual em desktop e mobile; larguras 320, 375, 390, 768, 1024 e 1440 px sem transbordamento horizontal.
- Hero com chamada principal visível sem rolagem em 1366 × 768.
- Fotografias locais carregadas; versões de 640 px selecionadas em mobile. Fontes locais e ícones incorporados no HTML.
- Âncoras existentes, menu mobile abre e fecha ao navegar, FAQ funcional.
- Contato preseleciona a área, foca o campo de assunto e permite editar a mensagem.
- Mensagem formada apenas por espaços é rejeitada. Acentos e `&` preservados no endereço de WhatsApp.
- Destino de WhatsApp interceptado no teste, sem enviar mensagens ou abrir conversa externa.
- Escape fecha o modal e devolve foco ao link. Tab e Shift+Tab permanecem dentro do diálogo.
- Sem JavaScript: menu, FAQ e links de WhatsApp por assunto funcionam.
- Redução de movimento respeitada. Tema claro mantido também com preferência de sistema escura, conforme a base aprovada da coleção.
- Páginas de conteúdo, privacidade, termos, robots e sitemap respondem HTTP 200.
- Modal e navegação para conteúdo também verificados na versão estática de produção.
- Nenhum erro de console observado durante a revisão.

## Demonstração e publicação

- `noindex, nofollow`, robots restritivo e sitemap vazio confirmados no build demonstrativo.
- Tentativa de desativar o modo demo mantendo dados de exemplo rejeitada pela validação de configuração.
- Conteúdo de estética removido; nenhuma importação entre projetos da biblioteca.
- Sem registros OAB fictícios, depoimentos, estatísticas ou promessas de resultado.

## Lighthouse

Medição mobile sobre `dist/`, servido localmente na porta 4339. Relatório local: `.cache/lighthouse-final.json`.

| Métrica | Resultado |
|---|---:|
| Desempenho | 98 |
| Acessibilidade | 100 |
| Boas práticas | 100 |
| SEO | 66 |
| LCP | 2,4 s |
| CLS | 0 |
| Total Blocking Time | 10 ms |

SEO reduzido pelo bloqueio intencional de indexação em modo demo. Pontuações e tempos são medições de laboratório local, sem dados de usuários reais. Configuração de cache, compressão e hospedagem ainda influencia o desempenho publicado.

O Lighthouse gerou o relatório completo sem `runtimeError`. O processo retornou erro ao limpar a pasta temporária do Chrome no Windows (`EPERM`), após concluir e salvar a auditoria. O relatório foi lido diretamente e os resultados acima conferidos. A instalação de ferramentas de QA permanece apenas no cache; nenhuma dependência de Lighthouse foi adicionada ao projeto.
