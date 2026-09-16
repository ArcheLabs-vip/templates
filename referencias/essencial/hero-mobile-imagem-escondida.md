# Arche Labs — HeroService: Imagem escondida no mobile

## Contexto

O componente `HeroService` usa um layout grid com duas colunas no desktop: texto à esquerda e imagem decorativa à direita. No mobile (≤ 47.99rem), a imagem é **removida visualmente** para priorizar o conteúdo e o CTA.

## O problema

A Coleção Essencial utiliza animações de **reveal on scroll** via `IntersectionObserver`, aplicando as classes `reveal-on-scroll` e `reveal-delay-*` nos elementos. No `global.css`, a regra:

```css
.motion-enabled .reveal-on-scroll {
  opacity: 0;
  transform: translateY(30px);
}
```

Essa regra tem **especificidade suficiente para competir** com o `display: none` do breakpoint mobile do `HeroService`. O resultado é que, mesmo com `display: none !important`, o **grid container** pode reservar espaço para a row/column do elemento — especialmente quando `opacity` e `transform` são declarados por outra regra sem `!important`.

Visualmente, o usuário vê um **bloco vazio/cinza** entre os botões do hero e a próxima seção (ex: TrustMetrics).

## A solução

No breakpoint mobile do `HeroService`, o `.hero-service__media` deve incluir **todas** as propriedades necessárias para anular tanto o layout quanto a animação:

```css
@media (max-width: 47.99rem) {
  .hero-service__media {
    position: absolute;
    width: 0;
    height: 0;
    display: none !important;
    overflow: hidden;
    aspect-ratio: auto;
    visibility: hidden;
    /* ↓ Anula o reveal-on-scroll para evitar espaço fantasma */
    opacity: 0 !important;
    transform: none !important;
    transition: none !important;
    pointer-events: none;
  }

  .hero-service__media::before,
  .hero-service__media::after {
    display: none !important;
    content: none;
  }

  .hero-service__media picture,
  .hero-service__media img {
    display: none !important;
  }
}
```

### Por que cada propriedade é necessária

| Propriedade | Motivo |
|---|---|
| `display: none !important` | Remove o elemento do layout |
| `position: absolute` | Retira do fluxo normal do grid |
| `width: 0; height: 0` | Garante que não ocupe espaço |
| `visibility: hidden` | Redundância para leitores de tela |
| `opacity: 0 !important` | Anula o `opacity: 0` do reveal (que mantém espaço) |
| `transform: none !important` | Anula o `translateY(30px)` do reveal |
| `transition: none !important` | Evita transições residuais |
| `pointer-events: none` | Impede interação com área fantasma |
| `aspect-ratio: auto` | Remove o aspect-ratio que força dimensões |

## Regra para novos templates

> **Sempre que um elemento com `reveal-on-scroll` for escondido no mobile, é necessário anular explicitamente `opacity`, `transform` e `transition` com `!important` no mesmo breakpoint.**

O simples `display: none` não é suficiente quando há animações CSS aplicadas por classes globais com especificidade igual ou superior.

## Arquivos afetados em cada nicho

```text
src/components/sections/HeroService.astro
```

Ao criar um novo nicho da Coleção Essencial, copie o `HeroService.astro` de um template já corrigido (ex: `psicologia`, `estetica`, `servicos-residenciais`) e verifique o mobile antes de considerar o template concluído.
