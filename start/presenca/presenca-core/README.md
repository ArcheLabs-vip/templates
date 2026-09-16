# Presença · Core

Base da coleção Presença, com bootstrap técnico do essencial-core e composição visual própria. A aplicação de referência é uma clínica de estética. Para criar outro nicho, copie esta pasta sem node_modules, dist e .astro, renomeie o pacote e adapte os dados. Não importe arquivos externos à pasta do novo nicho. Clínica fictícia Alva, direção Dark Premium: carvão quente, areia, Cormorant Garamond e Manrope.

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

Para ativar o contato, configure whatsapp com DDI, DDD e número e altere demo para false. Ajuste site.url para o domínio final, título, descrição e mensagem. Robots, sitemap e noindex seguem demo automaticamente. Na demonstração, o CTA abre um aviso local, sem enviar mensagens.

Substitua a marca e as imagens conceituais por material autorizado da clínica. Confirme tratamentos, equipe, credenciais, endereço e informações de atendimento. Depoimentos, profissionais e resultados não foram inventados; acrescente essas seções apenas com dados reais aprovados. Não há formulário, coleta de dados, cookies, analytics ou reserva automática.

## Acessibilidade

Menu mobile com aria-expanded, fechamento por Escape e links; navegação disponível sem JavaScript. Tratamentos e FAQ usam details/summary nativos. Link para pular ao conteúdo, foco visível e respeito a movimento reduzido. Tema escuro intencional conforme a variante Dark Premium.

## Assets

Imagens criadas com image_gen integrada e otimizadas em WebP. São conceituais e não representam pacientes, profissionais, instalações ou resultados reais. Prompts completos e origem em ASSETS.md. Fontes locais com licenças SIL OFL incluídas.
