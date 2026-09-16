# Arche Labs — Presença | Direção de Arte

## 1. Objetivo
Este documento organiza a direção de arte da coleção **Presença** após a análise da implementação atual.

Princípio central:

> **O Core controla engenharia e consistência. A coleção controla direção de arte.**

A Presença não deve ser apenas “premium genérico”. Ela deve comunicar:
- autoridade;
- impacto;
- sofisticação;
- posicionamento;
- composição editorial;
- percepção de marca forte.

---

## 2. Diagnóstico atual
A base técnica está boa: Astro, organização por componentes, dados, layouts, styles, tokens, serif + sans, paleta refinada e serviços em formato editorial.

O problema principal está na **composição visual**.

A implementação atual ainda se aproxima demais de:

> **minimalismo premium**

quando deveria transmitir:

> **autoridade + impacto + direção de arte + posicionamento**

Se Presença puder ser confundido com Essencial apenas trocando cores e fontes, o resultado está errado.

---

## 3. Diferença entre Essencial e Presença

### Essencial
- clareza;
- minimalismo;
- neutralidade;
- simplicidade;
- estrutura direta.

### Presença
- autoridade;
- impacto;
- composição;
- caráter;
- sofisticação;
- direção de arte.

---

## 4. Princípio de composição
Presença não deve parecer uma página montada por componentes.

Ela deve parecer uma página **dirigida por intenção visual**.

Priorizar:
- composições diferentes entre seções;
- variedade de ritmo;
- imagens participando do layout;
- tipografia com contraste real de escala;
- momentos de intensidade e respiro;
- poucas caixas;
- poucos cards;
- forte uso de espaço negativo.

Evitar repetir:

```text
container
+
eyebrow
+
headline
+
parágrafo
+
3 cards
```

---

## 5. Ordem de prioridade visual

```text
1. composição
2. tipografia
3. fotografia
4. espaço
5. contraste
6. cor
7. efeitos
```

A sensação premium não deve depender de:

```text
preto + dourado + serif
```

---

## 6. Hero
O Hero deve ser a principal peça visual da página.

Características:
- ocupar grande parte da primeira viewport;
- headline muito grande;
- imagem protagonista;
- composição assimétrica;
- sobreposição sutil quando fizer sentido;
- pequenos elementos editoriais;
- microtexto;
- credencial;
- número;
- CTA integrado à composição.

Evitar um simples `texto | imagem` convencional.

---

## 7. Autoridade logo no início
Após o Hero, estabelecer credibilidade.

Exemplos:

```text
10+
anos de experiência

500+
clientes atendidos

4.9
avaliação média
```

Também podem entrar:
- certificações;
- especializações;
- mídia;
- parceiros;
- reconhecimento;
- credenciais.

### Regra visual
Não colocar esses dados em cards.

Preferir:
- números grandes;
- divisórias;
- composição horizontal;
- grid editorial;
- espaço negativo.

---

## 8. Serviços
A direção editorial atual deve ser preservada e refinada.

Preferir:

```text
01
Nome do serviço
Descrição curta

02
Nome do serviço

03
Nome do serviço
```

Evitar:
- grids de cards;
- ícone + título + texto repetido;
- caixas idênticas.

Possíveis abordagens:
- lista editorial;
- accordion refinado;
- imagem contextual;
- alternância texto + imagem;
- destaque tipográfico.

---

## 9. Philosophy / Manifesto
Não finalizar a seção em três colunas equivalentes.

Preferir composição assimétrica:

```text
label pequeno

headline muito grande

texto curto

01 — Naturalidade
02 — Precisão
03 — Individualidade
```

Os valores devem funcionar como elementos tipográficos, não como cards.

---

## 10. Full Bleed Moment
Presença deve ter pelo menos um momento visual de quebra de ritmo.

Possibilidades:
- imagem full-width;
- imagem ocupando 70–90vh;
- imagem deslocada;
- crop forte;
- close;
- composição com duas imagens.

A imagem deve funcionar como:

> pausa visual + atmosfera + impacto

---

## 11. Processo
Evitar:
- quatro cards;
- quatro colunas iguais;
- stepper genérico.

Preferir narrativa numerada:

```text
01
Escuta

        02
        Planejamento

03
Execução

        04
        Acompanhamento
```

Usar escala, posição, alinhamento, espaço e linhas.

---

## 12. Prova social
Preferir:

> 1 depoimento forte

em vez de:

> 6 cards pequenos.

Estrutura possível:

```text
“Frase de impacto do cliente.”

Nome
Contexto
Avaliação
```

---

## 13. FAQ
O FAQ deve ser funcional e discreto.

Função:
- reduzir objeções;
- criar descanso visual;
- preparar o fechamento.

---

## 14. CTA final
Evitar:

```text
card centralizado
+
headline
+
botão
```

Preferir uma composição forte, com:
- headline muito grande;
- imagem parcial;
- CTA;
- contato;
- texto curto.

Exemplo:

> Seu cuidado merece uma presença à altura.

---

## 15. Ritmo da página

```text
01 Hero — dramático
02 Authority — tipográfico
03 Services — editorial
04 Manifesto — espaçoso
05 Full Image — impacto
06 Process — numerado
07 Testimonial — emocional
08 FAQ — silencioso
09 CTA — forte
```

---

## 16. Larguras de seção

### Contained
Aproximadamente `1200–1280px`.

Uso:
- texto;
- FAQ;
- serviços;
- conteúdo.

### Wide
Aproximadamente `1440–1600px`.

Uso:
- composições visuais;
- imagens;
- grandes blocos.

### Full Bleed
`100vw`.

Uso:
- Hero;
- imagem de impacto;
- momentos especiais;
- CTA final.

---

## 17. Tipografia
A combinação atual pode ser mantida:

```text
Cormorant Garamond
+
Manrope
```

Escala sugerida:

```text
microtexto: 10–12px
corpo: 14–17px
títulos: 48–80px
display: 90–150px
```

Alguns momentos precisam ser realmente grandes.

---

## 18. Fotografia
A fotografia deve participar da composição.

Explorar:
- portrait grande;
- full bleed;
- imagem offset;
- crop forte;
- close;
- imagem ultrapassando discretamente o grid;
- duas proporções diferentes;
- imagem parcial.

Regra:

> Cada fotografia deve criar atmosfera, credibilidade ou presença.

---

## 19. Cor
A identidade pode permanecer próxima de:

```text
grafite profundo
off-white
bege quente
```

Não aumentar a sensação premium adicionando mais dourado.

---

## 20. Bordas, cards e radius
Presença deve ser orientado por:

```text
linhas
espaço
tipografia
imagem
```

e não por:

```text
cards
sombras
radius
caixas
```

Evitar:
- card em volta de tudo;
- grids de cards;
- pill badges;
- sombras grandes;
- glassmorphism;
- superfícies excessivas.

---

## 21. Motion
Permitido:
- fade;
- reveal;
- translate curto;
- hover em imagem;
- underline;
- transições suaves.

Evitar:
- animações gratuitas;
- zoom agressivo;
- parallax excessivo;
- elementos voando;
- efeitos invasivos.

---

## 22. Mobile
Não transformar a página em:

```text
card
card
card
card
```

Reinterpretar usando:
- títulos grandes;
- números;
- linhas;
- imagens;
- espaçamento;
- hierarquia.

---

## 23. Arquitetura de componentes

### Template Core
Responsável por engenharia compartilhada:

```text
Container
Button
Header
Footer
SEO
BaseLayout
tokens base
estrutura de dados
```

### Presença Core
Responsável pela linguagem visual compartilhada:

```text
DisplayHeading
EditorialContainer
AuthorityStrip
EditorialDivider
PresenceButton
ImageFrame
PresenceEyebrow
```

### Nicho
Responsável pela direção de arte específica:

```text
estetica/
└── components/
    └── sections/
        ├── HeroPresenceDark.astro
        ├── EditorialServices.astro
        ├── PresenceManifesto.astro
        ├── FullBleedMoment.astro
        ├── PresenceProcess.astro
        ├── FeaturedTestimonial.astro
        └── PresenceClosing.astro
```

---

## 24. Regra de abstração
Não transformar tudo em componente genérico.

> Só subir um componente para `presenca-core` quando ele realmente fizer sentido para mais de um template da coleção.

---

## 25. Wireframe antes do código
Antes de mudanças grandes, a IA deve apresentar um wireframe textual.

Para cada seção:
- largura;
- composição;
- posição das imagens;
- hierarquia tipográfica;
- elemento de autoridade;
- motivo da decisão.

Só depois deve implementar.

---

## 26. Prompt-base para IA

```text
Leia toda a documentação da coleção Presença.

Não interprete Presença como “premium genérico”.

O problema a resolver é DIREÇÃO DE ARTE.

Presença deve comunicar:

autoridade
impacto
sofisticação
posicionamento
composição editorial
percepção de marca forte

Antes de editar arquivos, apresente um wireframe textual completo da nova página.

Explique seção por seção:

- largura;
- composição;
- hierarquia;
- fotografia;
- elemento de autoridade;
- ritmo visual.

Não use repetidamente:

headline
texto
3 cards

Evite excesso de:

cards
radius
badges
ícones
sombras
gradientes
glassmorphism

Priorize:

tipografia
imagem
espaço
linhas
números
composição
assimetria controlada

A página deve possuir:

1. Hero marcante
2. Bloco de autoridade
3. Serviços editoriais
4. Manifesto
5. Momento full bleed
6. Processo numerado
7. Depoimento em destaque
8. FAQ discreto
9. CTA final memorável

O Core controla engenharia.
A coleção controla direção de arte.

Não force componentes genéricos se eles enfraquecerem a identidade.

Ao final, valide:

- o layout ainda parece Presença sem as cores?
- existe autoridade já na primeira viewport?
- a fotografia participa da composição?
- há contraste real de escala?
- existem momentos visuais memoráveis?
- há cards demais?
- a página parece montada por componentes ou dirigida por um designer?
- ela poderia ser confundida com Essencial?

Se puder ser confundida com Essencial, refaça a composição.
```

---

## 27. Checklist final

- [ ] O Hero é memorável?
- [ ] Existe autoridade na primeira viewport?
- [ ] A página possui narrativa visual?
- [ ] Existem pelo menos 3 tipos de composição diferentes?
- [ ] Existe uso de contained, wide e full bleed?
- [ ] A fotografia é protagonista?
- [ ] A tipografia tem contraste real de escala?
- [ ] Há espaço suficiente?
- [ ] Existem poucos cards?
- [ ] O manifesto foge do padrão de três colunas?
- [ ] O processo foge do padrão de cards?
- [ ] O depoimento tem destaque?
- [ ] O CTA final é memorável?
- [ ] O mobile mantém identidade editorial?
- [ ] O layout ainda parece Presença sem depender da paleta?
- [ ] Não parece uma versão escura do Essencial?
- [ ] Não parece template SaaS?
- [ ] Não parece landing page genérica?
- [ ] Parece uma marca de alto valor?

---

## 28. Regra final
Presença não deve ser apenas:

> bonito.

Presença deve ser:

> **marcante, autoral e convincente.**

O objetivo é fazer o visitante perceber autoridade antes mesmo de consumir todo o conteúdo.
