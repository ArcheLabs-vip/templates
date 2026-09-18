# Validação

Atualizada em 18/09/2026 com Node 24 e Chromium.

Sincronização final conferida: os 20 arquivos de `src/` e os 15 arquivos de `public/` são idênticos aos do nicho `estetica`. Configuração Astro, TypeScript e documentação de assets também coincidem. O core preserva seu pacote próprio e a porta 4320.

- `npm run validate` aprovado no estetica e no presenca-core: 20 arquivos verificados, sem erros, avisos ou hints; três páginas geradas por projeto.
- Faixa superior conferida em 320, 390 e 1440 px: texto inteiro, sem sobreposição com o cabeçalho e sem overflow horizontal.
- Aviso de demonstração presente somente na faixa, inclusive nas páginas de privacidade e termos.
- Telefone padrão `(99) 99999-9999`, link `tel:+5599999999999` e links WhatsApp com destino `5599999999999`.
- Mensagens dos links de tratamento preservam o assunto correspondente.
- Modal restaurado para seleção do tratamento e revisão ou edição da mensagem antes de abrir o WhatsApp. Os links diretos permanecem como alternativa sem JavaScript.
- Fluxo do modal conferido em desktop e celular: tratamento pré-selecionado, mensagem editável, abertura do destino apenas após confirmação, fechamento por botão e Escape e retorno do foco ao gatilho.
- Menu mobile e navegação por âncoras conferidos com o novo deslocamento do cabeçalho.
- Fontes e imagens locais, foco visível e movimento reduzido preservados.
- Modo demonstrativo mantém `noindex, nofollow`, robots restritivo e sitemap vazio.

Os destinos dos links foram inspecionados sem enviar mensagens nem efetuar ligações. Endereço, e-mail, horários e depoimentos permanecem dados de exemplo, identificados pela faixa superior.
