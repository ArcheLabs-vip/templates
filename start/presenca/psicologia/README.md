# Presença · Psicologia

Projeto Astro autônomo do Instituto Presença, derivado do presenca-core aprovado. Identidade sálvia, Playfair Display e Inter locais, fotografia em arco e conteúdo próprio para psicologia.

## Executar

Requer Node compatível com Astro 7. Validado com Node 24.

- Instalar: npm install
- Desenvolvimento: npm run dev — http://localhost:4323
- Validar tipos e gerar: npm run validate
- Prévia do build: npm run preview

## Conteúdo e funcionamento

Edite src/data/site.ts para identidade, contatos, modalidades, primeiro encontro e perguntas frequentes. Cores e fontes ficam em src/styles/tokens.css. O projeto funciona sem importar arquivos dos outros nichos.

Os botões de contato abrem um modal com assunto e mensagem editável. O botão Continuar no WhatsApp abre a conversa; o envio acontece no próprio WhatsApp. Sem JavaScript, os links de contato continuam disponíveis. O verde do WhatsApp é #25D366.

O aviso demonstrativo aparece somente na faixa superior. Telefone padrão: (99) 99999-9999. O modo demo bloqueia indexação. Antes de publicar para um consultório real, configure domínio, contatos, endereço e informações profissionais aprovadas, revise os textos e então desative site.demo. Não há avaliações de pacientes nem credenciais profissionais inventadas.

Consulte ASSETS.md para a origem dos arquivos e VALIDATION.md para as verificações.
