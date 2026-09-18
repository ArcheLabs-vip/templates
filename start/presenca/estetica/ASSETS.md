# Assets da Aura Estética

As fotografias vêm dos URLs Unsplash presentes no HTML fornecido. Foram baixadas em WebP e são servidas localmente. São imagens ilustrativas, sem atribuição a pacientes, profissionais, resultados ou instalações de uma clínica real.

| Arquivo | URL de origem (ID da foto no Unsplash) |
| --- | --- |
| `hero.webp`, `hero-640.webp` | `https://images.unsplash.com/photo-1570172619644-dfd03ed5d881` |
| `facial.webp` | `https://images.unsplash.com/photo-1616394584738-fc6e612e71b9` |
| `botox.webp` | `https://images.unsplash.com/photo-1512290923902-8a9f81dc236c` |
| `laser.webp` | `https://images.unsplash.com/photo-1598440947619-2c35fc9aa908` |
| `skincare.webp` | `https://images.unsplash.com/photo-1552693673-1bf958298935` |
| `corporal.webp` | `https://images.unsplash.com/photo-1544161515-4ab6ce6db874` |
| `espaco.webp`, `contato.webp` | `https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2` |

A foto `photo-1615396895822-19e075051939`, usada no CTA original, retornou HTTP 404. O CTA reutiliza a foto válida do espaço, com enquadramento horizontal e sobreposição escura.

Imagens obtidas com `fm=webp`, `fit=crop`, `q=82` e larguras de 640 a 1600 pixels. Referência de uso: [licença Unsplash](https://unsplash.com/license). Não foram obtidos registros individuais de autorização de imagem dos modelos; revise o material para a marca de destino.

## Fontes

- Inter normal variável: Google Fonts, licença SIL Open Font License, cópia em `public/fonts/OFL-inter.txt`.
- Playfair Display normal variável e itálico: Google Fonts, licença SIL Open Font License, cópia em `public/fonts/OFL-playfair.txt`.
- Subconjunto latino com caracteres usados em português; arquivos WOFF2 locais e `font-display: swap`.

## Ícones

Os paths SVG do coração, menu, confirmação, seta, aspas, WhatsApp e contato foram preservados do HTML fornecido em `src/components/Icon.astro`. O favicon reutiliza o coração da referência. Não foi adicionada uma biblioteca de ícones.
