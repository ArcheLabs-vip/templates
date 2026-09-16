# Verificação

- Astro check e build: sem erros, avisos ou hints nos dois projetos.
- Layout: 320, 390, 768, 1024 e 1440 px sem overflow horizontal.
- Menu: abrir, fechar por Escape, navegação com JavaScript desabilitado.
- Tratamentos e FAQ: abertura nativa validada.
- CTA demonstrativo: aviso local visível, sem contato externo.
- Âncoras internas e imagens: destinos existentes e assets carregados.
- Lighthouse mobile no build estático local: performance 99, acessibilidade 100, boas práticas 100; LCP 2,2 s e CLS 0. Resultados de laboratório, sujeitos ao ambiente de hospedagem. Indexação desativada intencionalmente na demonstração (SEO 69).
- O relatório Lighthouse foi produzido; a CLI retornou EPERM ao limpar seu diretório temporário no Windows após a auditoria.
- Revisão posterior removeu um aria-label redundante da marca apontado na auditoria experimental de correspondência de rótulos.
