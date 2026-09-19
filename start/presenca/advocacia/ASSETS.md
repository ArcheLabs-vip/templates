# Assets | Almeida & Prado

## Fotografias

Três fotografias ilustrativas geradas com a ferramenta integrada `image_gen`, sem CLI/API. Pessoas e escritório são fictícios. Os arquivos finais estão em `public/images/`; os originais foram preservados no diretório de imagens geradas.

| Arquivo | Dimensões | Uso |
|---|---|---|
| `hero.webp` | 960 × 1200 | Sala de reunião no hero |
| `hero-640.webp` | 640 × 800 | Variante responsiva |
| `escritorio.webp` | 1200 × 900 | Análise de documentos |
| `equipe.webp` | 1200 × 900 | Equipe ilustrativa |
| `escritorio-640.webp` | 640 × 480 | Variante responsiva do escritório |
| `equipe-640.webp` | 640 × 480 | Variante responsiva da equipe |

Exportação WebP com Sharp, qualidade 82. Imagens com dimensões explícitas; hero prioritário com `srcset`, demais com carregamento tardio. Antes da publicação, substitua as fotografias por material autorizado da equipe e do escritório reais e revise os textos alternativos.

## Prompts finais

### hero

Use case: photorealistic-natural. Asset type: portrait hero photograph for a Brazilian law firm website template. Editorial architecture photography, a refined quiet law office meeting room in São Paulo, walnut oval meeting table, deep forest green upholstered chairs, warm white walls, tall window with linen curtains on right, a modest bookshelf, a single closed notebook. Natural soft morning daylight, realistic grain and materials, tasteful understated institutional design, no luxury excess, no people, no gavel, no scales of justice, no flags, no text, no logos, no watermark. Vertical 4:5 composition, main table and chairs centered with ample headroom for an arched crop. Only the photograph, edge to edge.

### escritorio

Use case: photorealistic-natural. Asset type: supporting photograph for a Brazilian law firm website. Candid editorial close-up of two professionals reviewing unmarked paper documents at a walnut meeting table, only hands, forearms, dark charcoal blazers visible, natural realistic gestures, fountain pen and closed olive notebook, an understated office with warm white wall and green upholstered chair softly out of focus. Camera slightly above table, soft directional daylight, muted forest green and walnut tones, realistic documentary photography. Horizontal 4:3 photograph edge to edge. No readable text, no logos, no gavel, no scales, no watermark.

### equipe

Use case: photorealistic-natural. Asset type: team photograph for a fictional Brazilian law office template. Candid editorial photograph of two Brazilian legal professionals, one Black woman in her late thirties with natural curly shoulder-length hair wearing a charcoal suit and cream blouse, one brown-skinned man in his forties with short dark hair wearing a dark forest green blazer and open-collar white shirt. They stand naturally side by side in a contemporary modest elegant office with walnut shelves and warm white walls, relaxed professional expressions, waist-up framing, hands natural, soft window light, documentary realism. Horizontal 4:3 composition, no text, logos, watermarks, scales or gavels. This is a fictional illustrative scene, not real lawyers.

## Fontes e ícones

- Playfair Display e Inter locais, herdadas do core Presença. Licenças SIL OFL em `public/fonts/`.
- Tabler Icons v3.34.1, SVGs oficiais em `src/assets/icons/`, licença MIT em `public/LICENSE-Tabler.txt`.
- Fonte dos ícones: https://github.com/tabler/tabler-icons/tree/v3.34.1/icons/outline
- Monograma tipográfico AP e favicon A criados para a identidade demonstrativa.
