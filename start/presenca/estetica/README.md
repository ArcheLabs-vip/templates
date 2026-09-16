# Presença · Estética

Template Astro autônomo do plano Start, derivado do presenca-core. Clínica fictícia Alva, direção Dark Premium: carvão quente, areia, Cormorant Garamond e Manrope.

## Executar

Node.js 22.12+ (validado com Node 24) e npm.

```powershell
npm install
npm run dev
```

## Validar e publicar

```powershell
npm run validate
npm run preview
```

Validate executa astro check e build. Publique dist em hospedagem estática, como Cloudflare Pages (build: npm run build). Sem backend ou serviço pago obrigatório.

## Personalização

- src/data/site.ts: textos, navegação, imagens e contato.
- src/styles/tokens.css: cores, fontes e espaçamento.
- src/pages/index.astro: seleção e ordem das seções.
- src/components/: componentes independentes.
- public/fonts/: fontes locais e licenças OFL.
- public/images/: fotografias WebP locais.

Para ativar o contato, configure whatsapp com DDI, DDD e número. O link funciona também com demo ativo; altere demo para false somente quando o site estiver pronto para indexação. Ajuste site.url para o domínio final, título, descrição e mensagem. Robots, sitemap e noindex seguem demo automaticamente. Sem número válido configurado, os CTAs da página abrem um aviso local. O botão flutuante abre o WhatsApp com a mensagem preenchida, sem destinatário definido; nenhuma mensagem é enviada automaticamente.

Substitua a marca e as imagens conceituais por material autorizado da clínica. Confirme tratamentos, equipe, credenciais, endereço e informações de atendimento. Depoimentos, profissionais e resultados não foram inventados; acrescente essas seções apenas com dados reais aprovados. Não há formulário, coleta de dados, cookies, analytics ou reserva automática.

## Acessibilidade

Menu mobile com aria-expanded, fechamento por Escape e links; navegação disponível sem JavaScript. Tratamentos e FAQ usam details/summary nativos. Link para pular ao conteúdo, foco visível e respeito a movimento reduzido. Tema escuro intencional conforme a variante Dark Premium.

## Assets

Imagens criadas com image_gen integrada e otimizadas em WebP. São conceituais e não representam pacientes, profissionais, instalações ou resultados reais. Prompts completos e origem em ASSETS.md. Fontes locais com licenças SIL OFL incluídas.
