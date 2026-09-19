# Assets da Arche Pilates

Revisão de Pilates do template `start/presenca/academias`. As imagens e os dados representam um estúdio fictício.

## Fotografias

Seis imagens criadas com a ferramenta integrada `image_gen` (skill imagegen), sem CLI/API, e exportadas com Sharp para nove arquivos WebP locais em `public/images/`. Os originais permanecem no diretório de imagens geradas do Codex. Não são fotografias de um estabelecimento real.

| Arquivo | Dimensões | Uso |
|---|---|---|
| pilates-hero.webp | 960 × 1200 | Hero |
| pilates-hero-640.webp | 640 × 800 | Hero responsivo |
| pilates-aparelhos.webp | 720 × 480 | Aparelhos, derivação do hero com recorte ajustado |
| pilates-solo.webp | 720 × 480 | Pilates no solo |
| pilates-individual.webp | 720 × 480 | Aula individual |
| pilates-duo.webp | 720 × 480 | Pilates em dupla |
| pilates-mobilidade.webp | 720 × 480 | Mobilidade |
| pilates-espaco.webp | 1200 × 800 | Apresentação do estúdio |
| pilates-contato.webp | 1600 × 1000 | Chamada final, derivação do espaço |

As imagens anteriores de musculação foram arquivadas em `.cache/previous-academia/`, fora dos arquivos publicados.

## Prompts utilizados

### hero

Use case: photorealistic-natural. Asset type: photography for a welcoming contemporary Brazilian Pilates studio website. Bright serene Pilates studio with pale grey-green walls, natural oak Pilates equipment, soft ivory upholstery, large windows, leafy trees outside, natural diffused daylight, quiet candid editorial photography. Sage, forest green, silver grey and wood palette. Authentic adult subjects with natural body proportions, realistic hands, believable Pilates equipment. No text, no logos, no watermark, no collage, no website mockup. Portrait 4:5 photograph. A Brazilian woman around 40 in sage green sportswear seated sideways upright on a wooden Pilates reformer, taking a calm moment before an exercise, bare feet resting on the floor. Her body and the clearly recognizable reformer occupy the central area. Comfortable natural expression, looking slightly off camera. Show the full wooden carriage and some studio around her. Mid-distance full body photograph, not a face close-up.

### solo

Use case: photorealistic-natural. Asset type: photography for a welcoming contemporary Brazilian Pilates studio website. Bright serene Pilates studio with pale grey-green walls, natural oak Pilates equipment, soft ivory upholstery, large windows, leafy trees outside, natural diffused daylight, quiet candid editorial photography. Sage, forest green, silver grey and wood palette. Authentic adult subjects with natural body proportions, realistic hands, believable Pilates equipment. No text, no logos, no watermark, no collage, no website mockup. Landscape 3:2 photograph. Two adult women in their thirties and fifties sitting on separate sage green Pilates mats in a spacious bright studio. Simple seated spine stretch, legs comfortably forward and hands reaching toward shins, anatomically natural gentle movement. Medium wide view with both complete bodies and space between the mats.

### individual

Use case: photorealistic-natural. Asset type: photography for a welcoming contemporary Brazilian Pilates studio website. Bright serene Pilates studio with pale grey-green walls, natural oak Pilates equipment, soft ivory upholstery, large windows, leafy trees outside, natural diffused daylight, quiet candid editorial photography. Sage, forest green, silver grey and wood palette. Authentic adult subjects with natural body proportions, realistic hands, believable Pilates equipment. No text, no logos, no watermark, no collage, no website mockup. Landscape 3:2 photograph. Adult female Pilates instructor in dark forest green shirt beside an adult female student seated upright on a wooden reformer. Instructor offers a calm open-hand demonstration, student listens, no touching. A thoughtful individual lesson, medium wide shot showing both people and the reformer.

### duo

Use case: photorealistic-natural. Asset type: photography for a welcoming contemporary Brazilian Pilates studio website. Bright serene Pilates studio with pale grey-green walls, natural oak Pilates equipment, soft ivory upholstery, large windows, leafy trees outside, natural diffused daylight, quiet candid editorial photography. Sage, forest green, silver grey and wood palette. Authentic adult subjects with natural body proportions, realistic hands, believable Pilates equipment. No text, no logos, no watermark, no collage, no website mockup. Landscape 3:2 photograph. Adult woman and adult man around 45 sitting upright on two separate parallel wooden Pilates reformers, both feet on the floor, arms comfortably held forward at chest height in a simple coordinated movement. Natural inclusive unposed mood, full body view showing separate well-formed reformer frames, bright studio.

### mobilidade

Use case: photorealistic-natural. Asset type: photography for a welcoming contemporary Brazilian Pilates studio website. Bright serene Pilates studio with pale grey-green walls, natural oak Pilates equipment, soft ivory upholstery, large windows, leafy trees outside, natural diffused daylight, quiet candid editorial photography. Sage, forest green, silver grey and wood palette. Authentic adult subjects with natural body proportions, realistic hands, believable Pilates equipment. No text, no logos, no watermark, no collage, no website mockup. Landscape 3:2 photograph. Brazilian woman in her fifties wearing muted sage top and graphite leggings doing a gentle seated side stretch on a sage Pilates mat. One arm overhead, legs comfortably folded, authentic natural body. Minimal airy Pilates studio, wooden reformer subtly visible far in the background, realistic and calm.

### espaco

Use case: photorealistic-natural. Asset type: photography for a welcoming contemporary Brazilian Pilates studio website. Bright serene Pilates studio with pale grey-green walls, natural oak Pilates equipment, soft ivory upholstery, large windows, leafy trees outside, natural diffused daylight, quiet candid editorial photography. Sage, forest green, silver grey and wood palette. Authentic adult subjects with natural body proportions, realistic hands, believable Pilates equipment. No text, no logos, no watermark, no collage, no website mockup. Landscape 3:2 architectural editorial photograph of a beautiful practical Pilates studio without people. Three organized natural oak reformer machines with ivory padded carriages, a wooden ladder barrel in the back, soft sage wall, silver-grey floor, large windows with linen curtains and garden greenery. Bright inviting daylight, clean spacious practical design, realistic equipment, no gym weights, no treadmills.

## Fontes

Manrope variável, pesos 200–800, nos títulos, marca e preços. Hero em peso 400 e demais títulos em 500; marca em 600. Inter variável para corpo e controles. Arquivos locais WOFF2 com `font-display: swap` e preload.

- Manrope: [arquivo latino oficial](https://fonts.gstatic.com/s/manrope/v20/xn7gYHE41ni1AdIRggexSg.woff2), salvo em `public/fonts/manrope-latin.woff2`.
- [Licença SIL OFL da Manrope](https://github.com/google/fonts/blob/main/ofl/manrope/OFL.txt), salva em `public/fonts/OFL-manrope.txt`.
- Inter preservada da base, com licença em `public/fonts/OFL-inter.txt`.
- Fontes Barlow anteriores arquivadas em `.cache/previous-academia/`.

## Ícones

Marca, chamada de aula e favicon usam [stretching do Tabler Icons](https://github.com/tabler/tabler-icons/blob/main/icons/outline/stretching.svg), licença MIT em `public/LICENSE-Tabler.txt`. Original em `public/stretching.svg`, paths em `Icon.astro` e favicon com a cor da marca. Demais ícones preservados da base Presença.
