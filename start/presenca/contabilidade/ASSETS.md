# Assets da Arche Contábil

## Fotografias

Seis imagens ilustrativas geradas com a ferramenta integrada `image_gen` (skill imagegen), sem CLI/API. As nove versões finais estão em `public/images/`; os originais permanecem no diretório de imagens geradas do Codex. Pessoas e escritório são fictícios.

| Arquivo | Dimensões | Uso |
|---|---|---|
| hero.webp | 960 × 1200 | Hero |
| hero-640.webp | 640 × 800 | Hero responsivo |
| contabilidade.webp | 720 × 480 | Derivação do hero |
| abertura.webp | 720 × 480 | Abertura de empresas |
| fiscal.webp | 720 × 480 | Fiscal e tributário |
| pessoal.webp | 720 × 480 | Departamento pessoal |
| financeiro.webp | 720 × 480 | Gestão financeira |
| escritorio.webp | 1200 × 800 | Apresentação do escritório |
| contato.webp | 1600 × 1000 | Derivação da imagem do escritório |

Exportação com Sharp, WebP qualidade 82. Hero prioritário com srcset; demais imagens usam lazy loading e dimensões explícitas.

## Prompts utilizados

### hero

Use case: photorealistic-natural. Asset type: editorial photography for a fictional Brazilian accounting office website. Contemporary practical office, light neutral grey walls, graphite furniture, walnut desks, very restrained copper details. Natural diffused daylight, authentic approachable professional mood, realistic faces and hands, premium but understated photography. No text, no readable financial data, no logos, no watermark, no collage, no webpage mockup. Portrait 4:5 photograph. Brazilian female accountant around 40 with medium brown skin and shoulder-length dark hair, wearing a charcoal blazer over a light blouse, seated at a walnut desk speaking attentively to an entrepreneur whose shoulder is subtly visible in foreground. A closed notebook, simple calculator and laptop side profile on desk. Main face central upper third, ample headroom, medium shot with hands and workspace visible. No staged handshake, no medical clothes.

### abertura

Use case: photorealistic-natural. Asset type: editorial photography for a fictional Brazilian accounting office website. Contemporary practical office, light neutral grey walls, graphite furniture, walnut desks, very restrained copper details. Natural diffused daylight, authentic approachable professional mood, realistic faces and hands, premium but understated photography. No text, no readable financial data, no logos, no watermark, no collage, no webpage mockup. Landscape 3:2 photograph. Brazilian accountant and small business owner seated across a desk discussing the start of a business. Two people in smart casual graphite and light neutral clothing, engaged natural expressions. A closed folder and laptop on desk, no readable paperwork, medium wide view.

### fiscal

Use case: photorealistic-natural. Asset type: editorial photography for a fictional Brazilian accounting office website. Contemporary practical office, light neutral grey walls, graphite furniture, walnut desks, very restrained copper details. Natural diffused daylight, authentic approachable professional mood, realistic faces and hands, premium but understated photography. No text, no readable financial data, no logos, no watermark, no collage, no webpage mockup. Landscape 3:2 photograph. Brazilian accounting professional with short dark hair and subtle glasses reviewing a document beside an open laptop and calculator at a tidy walnut desk. Three-quarter side view, focused but relaxed, report text too small to read, light grey office.

### pessoal

Use case: photorealistic-natural. Asset type: editorial photography for a fictional Brazilian accounting office website. Contemporary practical office, light neutral grey walls, graphite furniture, walnut desks, very restrained copper details. Natural diffused daylight, authentic approachable professional mood, realistic faces and hands, premium but understated photography. No text, no readable financial data, no logos, no watermark, no collage, no webpage mockup. Landscape 3:2 photograph. Female accounting professional in a graphite blouse speaking with a small business manager at a meeting table about a team administrative process. Natural eye contact, a folder and a closed notebook on table, no readable data. Medium wide view, calm office atmosphere.

### financeiro

Use case: photorealistic-natural. Asset type: editorial photography for a fictional Brazilian accounting office website. Contemporary practical office, light neutral grey walls, graphite furniture, walnut desks, very restrained copper details. Natural diffused daylight, authentic approachable professional mood, realistic faces and hands, premium but understated photography. No text, no readable financial data, no logos, no watermark, no collage, no webpage mockup. Landscape 3:2 photograph. Two Brazilian business professionals reviewing simple printed charts at a walnut meeting desk. One lightly points at a document while the other listens, laptop seen from the side. No readable numbers, natural hands, honest office photography, no triumphant gesture or fake growth arrows.

### escritorio

Use case: photorealistic-natural. Asset type: editorial photography for a fictional Brazilian accounting office website. Contemporary practical office, light neutral grey walls, graphite furniture, walnut desks, very restrained copper details. Natural diffused daylight, authentic approachable professional mood, realistic faces and hands, premium but understated photography. No text, no readable financial data, no logos, no watermark, no collage, no webpage mockup. Landscape 3:2 editorial photograph of a small Brazilian accounting team of three adults working together around a walnut meeting table in a bright contemporary office. Diverse men and women aged 30 to 50 in charcoal and neutral smart casual outfits, natural conversation, a few laptops and notebooks, pale grey architectural background, subtle indoor plants, no posing at camera.

## Fontes

Manrope variável nos títulos e marca; Inter variável nos textos. Arquivos locais WOFF2 com preload e `font-display: swap`, copiados da aplicação Presença/Clínicas Médicas.

- [Manrope, arquivo oficial](https://fonts.gstatic.com/s/manrope/v20/xn7gYHE41ni1AdIRggexSg.woff2).
- Licenças SIL OFL em `public/fonts/OFL-manrope.txt` e `public/fonts/OFL-inter.txt`.

## Ícones

Novos ícones do [Tabler Icons](https://github.com/tabler/tabler-icons), licença MIT em `public/LICENSE-Tabler.txt`:

- [calculator](https://github.com/tabler/tabler-icons/blob/main/icons/outline/calculator.svg): marca e chamada dos serviços.
- [briefcase](https://github.com/tabler/tabler-icons/blob/main/icons/outline/briefcase.svg): prestadores de serviços.
- [building-store](https://github.com/tabler/tabler-icons/blob/main/icons/outline/building-store.svg): comércio.
- [file-description](https://github.com/tabler/tabler-icons/blob/main/icons/outline/file-description.svg): novos negócios.

Originais em `public/`, paths integrados em `Icon.astro`. Favicon derivado do calculator com a cor grafite. Demais ícones preservados da base da coleção.
