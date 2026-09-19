# Assets · Arche Imóveis

As seis fotografias foram criadas com o **image_gen integrado**, em modo de geração, para este template demonstrativo. São imóveis e profissionais fictícios; não representam anúncios ou pessoas reais. Os arquivos utilizados estão em `public/images/`. Os PNGs originais permanecem no diretório padrão do gerador.

## Fotografias utilizadas

| Arquivo | Origem | Dimensões |
| --- | --- | --- |
| hero.webp | hero | 960 × 1200 |
| hero-640.webp | hero | 640 × 800 |
| casa-jardim.webp | hero | 720 × 480 |
| apartamento.webp | apartamento | 720 × 480 |
| cobertura.webp | cobertura | 720 × 480 |
| studio.webp | studio | 720 × 480 |
| casa-vila.webp | casa | 720 × 480 |
| equipe.webp | equipe | 1200 × 800 |
| contato.webp | cobertura | 1600 × 1000 |

Exportação local com Sharp, recorte central, WebP qualidade 82. Nove arquivos, aproximadamente 1,03 MiB no total. Hero com duas resoluções e prioridade alta; demais imagens com carregamento tardio e dimensões explícitas.

## Fontes e ícones

- Manrope variável 200–800, arquivo `public/fonts/manrope-latin.woff2`, licença OFL em `public/fonts/OFL-manrope.txt`. [Projeto Manrope](https://github.com/sharanda/manrope).
- Inter variável 100–900, arquivo `public/fonts/inter-normal.woff2`, licença OFL em `public/fonts/OFL-inter.txt`. [Projeto Inter](https://github.com/rsms/inter).
- Fontes herdadas dos assets locais da coleção, com `font-display: swap` e preload.
- [Tabler Icons](https://github.com/tabler/tabler-icons), licença MIT em `public/LICENSE-Tabler.txt`. SVGs oficiais de `icons/outline/`: home, menu-2, arrow-right, quote, brand-whatsapp, map-pin, phone, mail, key, bed, ruler-measure e car. Caminhos preservados em `src/components/Icon.astro`, traço padronizado em 1,5. Favicon baseado em home.
- Todos os assets da página são locais; não há dependência de imagens ou fontes remotas em tempo de execução.

## Prompts e originais

### hero

Original: `C:\Users\User\.codex\generated_images\01a0b5da-07f0-79b0-8377-f83642c19e5c\exec-eafc5331-acf1-410a-94c9-6cd22075fdfa.png`

```text
Use case: photorealistic-natural. Asset type: original photographic asset for a fictional Brazilian real estate website called Arche Imóveis. High-end architectural editorial photography, believable Brazilian contemporary architecture, natural daylight, subtle blue-gray and green palette with warm natural wood. Real camera texture, accurate geometry, no fisheye, no CGI look. No text, logos, signage, watermarks, collages or graphic overlays. Vertical 4:5 composition. Inviting contemporary two-story detached house in a leafy residential neighborhood in Brazil. Warm white rendered walls, wood slat facade, upper-floor balcony, mature garden with palms, small stone path to the front door. Eye-level three-quarter angle. House centered with sufficient space around it for an arch-shaped crop. Late afternoon sunlight and soft blue sky. No pool, no people, no cars.
```

### apartamento

Original: `C:\Users\User\.codex\generated_images\01a0b5da-07f0-79b0-8377-f83642c19e5c\exec-f5e75649-64c2-4331-94e7-ead2c9cbd1d4.png`

```text
Use case: photorealistic-natural. Asset type: original photographic asset for a fictional Brazilian real estate website called Arche Imóveis. High-end architectural editorial photography, believable Brazilian contemporary architecture, natural daylight, subtle blue-gray and green palette with warm natural wood. Real camera texture, accurate geometry, no fisheye, no CGI look. No text, logos, signage, watermarks, collages or graphic overlays. Horizontal 3:2 composition. Airy two-bedroom city apartment living room, pale sofa, oak coffee table, subtle blue cushions, open dining space, large windows with leafy treetops and distant low-rise buildings. Natural Brazilian urban apartment, beautifully composed, clean but lived-in. Camera level, room corners visible.
```

### cobertura

Original: `C:\Users\User\.codex\generated_images\01a0b5da-07f0-79b0-8377-f83642c19e5c\exec-058bfb1f-2add-452f-bd6f-9e7ebe40c4e8.png`

```text
Use case: photorealistic-natural. Asset type: original photographic asset for a fictional Brazilian real estate website called Arche Imóveis. High-end architectural editorial photography, believable Brazilian contemporary architecture, natural daylight, subtle blue-gray and green palette with warm natural wood. Real camera texture, accurate geometry, no fisheye, no CGI look. No text, logos, signage, watermarks, collages or graphic overlays. Horizontal 3:2 composition. Private roof terrace of a contemporary Brazilian penthouse apartment. Outdoor wooden dining table and soft lounge seats, carefully planted pots, retractable glass doors toward living room, distant city skyline. Gentle morning sunlight, sophisticated and believable, no pool.
```

### studio

Original: `C:\Users\User\.codex\generated_images\01a0b5da-07f0-79b0-8377-f83642c19e5c\exec-73c9a597-e2a7-46e1-8366-b89409a1e10d.png`

```text
Use case: photorealistic-natural. Asset type: original photographic asset for a fictional Brazilian real estate website called Arche Imóveis. High-end architectural editorial photography, believable Brazilian contemporary architecture, natural daylight, subtle blue-gray and green palette with warm natural wood. Real camera texture, accurate geometry, no fisheye, no CGI look. No text, logos, signage, watermarks, collages or graphic overlays. Horizontal 3:2 composition. Thoughtfully designed compact studio apartment, distinct sleeping niche with bed in the background, small seating area and oak kitchenette in foreground, big window, muted blue-gray textiles, simple natural finishes. Credible attainable apartment, not extravagant. Camera level.
```

### casa

Original: `C:\Users\User\.codex\generated_images\01a0b5da-07f0-79b0-8377-f83642c19e5c\exec-a9353eb2-e7b7-41bb-b049-fa6636e3c520.png`

```text
Use case: photorealistic-natural. Asset type: original photographic asset for a fictional Brazilian real estate website called Arche Imóveis. High-end architectural editorial photography, believable Brazilian contemporary architecture, natural daylight, subtle blue-gray and green palette with warm natural wood. Real camera texture, accurate geometry, no fisheye, no CGI look. No text, logos, signage, watermarks, collages or graphic overlays. Horizontal 3:2 composition. Charming single-story Brazilian townhouse courtyard, white masonry facade, sage wooden window shutters, terracotta roof tiles, small lush garden and inviting front veranda. Dappled morning light. Human-scale residential architecture, no people or cars.
```

### equipe

Original: `C:\Users\User\.codex\generated_images\01a0b5da-07f0-79b0-8377-f83642c19e5c\exec-093234ed-7335-4a10-bea4-94ac2bd96e36.png`

```text
Use case: photorealistic-natural. Asset type: original photographic asset for a fictional Brazilian real estate website called Arche Imóveis. High-end architectural editorial photography, believable Brazilian contemporary architecture, natural daylight, subtle blue-gray and green palette with warm natural wood. Real camera texture, accurate geometry, no fisheye, no CGI look. No text, logos, signage, watermarks, collages or graphic overlays. Horizontal 3:2 composition. Candid photograph of a Brazilian female real estate broker in her late thirties wearing navy and a male colleague in his forties wearing a pale shirt in a welcoming modern real estate office. Both discussing a simple house floorplan on a wooden table, natural smiles, no camera poses. Daylight, leafy window outside, light walls, minimal styling. Documents show abstract architectural lines with no readable writing.
```

