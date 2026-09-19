# Assets da Arche Saúde

## Fotografias

Nove fotografias ilustrativas geradas com a ferramenta integrada `image_gen`, sem CLI/API, e exportadas para doze arquivos WebP em `public/images/`. Os originais permanecem no diretório de imagens geradas do Codex. As pessoas e a clínica são fictícias, identificadas no aviso de demonstração.

| Arquivos | Dimensões | Uso |
|---|---|---|
| hero.webp / hero-640.webp | 960 × 1200 / 640 × 800 | Hero responsivo |
| clinica-medica.webp | 720 × 480 | Derivação do hero |
| cardiologia.webp | 720 × 480 | Cardiologia |
| pediatria.webp | 720 × 480 | Pediatria |
| dermatologia.webp | 720 × 480 | Dermatologia |
| ginecologia.webp | 720 × 480 | Ginecologia |
| espaco.webp | 1200 × 800 | Estrutura |
| contato.webp | 1600 × 1000 | Derivação da estrutura |
| helena.webp / rafael.webp / marina.webp | 640 × 800 | Perfis demonstrativos |

Conversão com Sharp, WebP qualidade 82. Hero prioritário com srcset; demais imagens com lazy loading e dimensões explícitas.

## Prompts

### hero

Use case: photorealistic-natural. Asset type: local photography for a fictional Brazilian outpatient medical clinic website. Bright contemporary clinic, off-white and pale blue-grey architecture, understated petrol blue accents, natural diffused window light, subtle greenery. Welcoming, professional, believable everyday healthcare, natural skin texture, realistic anatomy and hands. No text, no logos, no watermark, no collage, no website. Portrait 4:5 candid photo of a female Brazilian doctor around 40, medium brown skin and shoulder length curly dark hair, in a white coat over a muted petrol blouse, seated in a bright consulting room speaking warmly with a female adult patient visible only as a softly blurred shoulder in the near foreground. Doctor face in upper central third with ample headroom, hands calmly resting on desk, no surgical masks or procedure, no dramatic hospital equipment.

### cardiologia

Use case: photorealistic-natural. Asset type: local photography for a fictional Brazilian outpatient medical clinic website. Bright contemporary clinic, off-white and pale blue-grey architecture, understated petrol blue accents, natural diffused window light, subtle greenery. Welcoming, professional, believable everyday healthcare, natural skin texture, realistic anatomy and hands. No text, no logos, no watermark, no collage, no website. Landscape 3:2 editorial photograph. Male doctor around 45 wearing white coat listening to an older male patient across a consultation desk. Small blood pressure monitor sitting unused on the desk, relaxed conversation, faces fully visible, modest clothes, natural candid moment.

### pediatria

Use case: photorealistic-natural. Asset type: local photography for a fictional Brazilian outpatient medical clinic website. Bright contemporary clinic, off-white and pale blue-grey architecture, understated petrol blue accents, natural diffused window light, subtle greenery. Welcoming, professional, believable everyday healthcare, natural skin texture, realistic anatomy and hands. No text, no logos, no watermark, no collage, no website. Landscape 3:2 editorial photograph. Female pediatrician in white coat seated at eye level with a fully clothed child around 7 and the child's mother in a bright clinic. Doctor listening, child calmly holding a small wooden toy, ordinary consultation conversation, no procedures.

### dermatologia

Use case: photorealistic-natural. Asset type: local photography for a fictional Brazilian outpatient medical clinic website. Bright contemporary clinic, off-white and pale blue-grey architecture, understated petrol blue accents, natural diffused window light, subtle greenery. Welcoming, professional, believable everyday healthcare, natural skin texture, realistic anatomy and hands. No text, no logos, no watermark, no collage, no website. Landscape 3:2 editorial photograph. Female doctor in white coat calmly talking with adult female patient, who is showing the back of her own hand. Doctor looking attentively at the hand from a comfortable seated distance. No lesions, no tools, no procedures, no cosmetics advertising.

### ginecologia

Use case: photorealistic-natural. Asset type: local photography for a fictional Brazilian outpatient medical clinic website. Bright contemporary clinic, off-white and pale blue-grey architecture, understated petrol blue accents, natural diffused window light, subtle greenery. Welcoming, professional, believable everyday healthcare, natural skin texture, realistic anatomy and hands. No text, no logos, no watermark, no collage, no website. Landscape 3:2 editorial photograph. Adult female doctor in white coat and adult female patient in everyday modest clothes sitting across a desk discussing care, professional nonsexual consultation, both faces visible, relaxed eye contact, no examinations, no anatomy posters.

### espaco

Use case: photorealistic-natural. Asset type: local photography for a fictional Brazilian outpatient medical clinic website. Bright contemporary clinic, off-white and pale blue-grey architecture, understated petrol blue accents, natural diffused window light, subtle greenery. Welcoming, professional, believable everyday healthcare, natural skin texture, realistic anatomy and hands. No text, no logos, no watermark, no collage, no website. Landscape 3:2 architectural editorial photograph of a bright outpatient medical clinic reception without people. Pale blue-grey upholstered chairs, clean off-white reception desk, glass door to a corridor, large windows, restrained petrol blue detail and a plant. Honest accessible comfortable clinic, elegant but practical, no readable signage, no spa imagery.

### helena

Use case: photorealistic-natural. Asset type: local photography for a fictional Brazilian outpatient medical clinic website. Bright contemporary clinic, off-white and pale blue-grey architecture, understated petrol blue accents, natural diffused window light, subtle greenery. Welcoming, professional, believable everyday healthcare, natural skin texture, realistic anatomy and hands. No text, no logos, no watermark, no collage, no website. Portrait 4:5 professional natural photo of a fictional Brazilian woman physician around 40 with medium brown skin and shoulder length curly dark hair, white coat over a muted petrol blouse, hands loosely together in lap, seated in bright pale blue-grey consultation room, friendly unforced smile at camera. Waist up, generous headroom, no name badge or writing.

### rafael

Use case: photorealistic-natural. Asset type: local photography for a fictional Brazilian outpatient medical clinic website. Bright contemporary clinic, off-white and pale blue-grey architecture, understated petrol blue accents, natural diffused window light, subtle greenery. Welcoming, professional, believable everyday healthcare, natural skin texture, realistic anatomy and hands. No text, no logos, no watermark, no collage, no website. Portrait 4:5 professional natural photo of a fictional Brazilian male physician around 45 with short dark hair lightly grey at temples, clean shaven, white coat over pale blue shirt, seated in bright pale blue-grey consultation room. Waist up, friendly natural expression toward camera, generous headroom, hands naturally resting in lap, no name badge or writing.

### marina

Use case: photorealistic-natural. Asset type: local photography for a fictional Brazilian outpatient medical clinic website. Bright contemporary clinic, off-white and pale blue-grey architecture, understated petrol blue accents, natural diffused window light, subtle greenery. Welcoming, professional, believable everyday healthcare, natural skin texture, realistic anatomy and hands. No text, no logos, no watermark, no collage, no website. Portrait 4:5 professional natural photo of a fictional Brazilian woman physician around 35 with dark straight shoulder length hair and light brown skin, white coat over navy blouse, seated in bright pale blue-grey consultation room. Waist up, calm approachable smile at camera, generous headroom, hands relaxed, no name badge or writing.

## Fontes e ícones

Manrope variável nos títulos e marca; Inter variável no corpo. Fontes locais WOFF2, com `font-display: swap` e preload. Arquivos copiados da aplicação Presença/Academias.

- [Manrope, arquivo oficial](https://fonts.gstatic.com/s/manrope/v20/xn7gYHE41ni1AdIRggexSg.woff2).
- Licenças SIL OFL em `public/fonts/OFL-manrope.txt` e `public/fonts/OFL-inter.txt`.
- Marca e favicon: [stethoscope do Tabler Icons](https://github.com/tabler/tabler-icons/blob/main/icons/outline/stethoscope.svg), MIT em `public/LICENSE-Tabler.txt`. Original em `public/stethoscope.svg`; paths em `Icon.astro`.
- Ícones restantes preservados da base da coleção.
