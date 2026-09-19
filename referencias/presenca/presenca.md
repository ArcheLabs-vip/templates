# Arche Labs — Coleção Presença

## 1. Escopo e referências

Presença é uma coleção do **plano Start**, voltada a marcas, profissionais e empresas que precisam transmitir autoridade, sofisticação, confiança e percepção de valor desde o primeiro contato.

Este documento reúne as decisões específicas de posicionamento, identidade visual, composição, nichos e produção da coleção. O `presenca-core` e os nichos `estetica`, `odontologia`, `psicologia`, `veterinarias`, `academias`, `clinicas-medicas`, `contabilidade` e `imobiliarias` estão implementados em `start/presenca/`. A base Aura aprovada usa títulos em Playfair Display, corpo em Inter e fotografia em arco; estética mantém o tema rosado e odontologia adapta a identidade para azul-petróleo, com a marca Arche Odonto. Psicologia usa tons de sálvia e a marca Instituto Presença, com modalidades, primeiro encontro e dúvidas frequentes. Veterinárias usa verde-floresta e a marca Arche Vet, com cuidados para cães e gatos, imagens ilustrativas próprias e dúvidas sobre a primeira visita. Academias foi adaptado para um estúdio de Pilates: verde-sálvia, marca Arche Pilates, Manrope nos títulos, Inter no corpo, aulas, planos por frequência e solicitação de aula experimental. As demais variantes, componentes e aplicações descritas abaixo continuam planejadas.

### Base implementada e referência vigente

A aplicação Aura é a referência visual e técnica atual. Sua composição é: Header, Hero, Tratamentos, Nossa Essência, Depoimentos, Contato e Footer. O core contém a mesma base, com dados demonstrativos para personalização, assets locais, CSS nativo e JavaScript pontual. Core e nicho são autônomos, sem imports entre pastas.

Os componentes atuais são `Header`, `Hero`, `Treatments`, `About`, `Testimonials`, `Contact`, `Footer`, `Booking`, `Brand`, `ContactLink` e `Icon`. Os contatos abrem um modal para escolher o assunto e revisar a mensagem antes de continuar no WhatsApp; o telefone padrão é `(99) 99999-9999`. Uma faixa superior concentra o aviso de que dados, resultados e avaliações são ilustrativos. O modo real exige substituir domínio e número de exemplo. Depoimentos de exemplo são ocultados fora do modo demo.

As propostas Dark Premium e outras composições mais abaixo não substituem essa base aprovada. Novos nichos devem partir de `presenca-core` e adaptar o conteúdo ao segmento. A anterior direção escura não é mais a implementação padrão.

As regras compartilhadas ficam em:

- [Arquitetura da Biblioteca de Templates](../geral/templates.md): planos, coleções, nichos, organização documental e regras de conteúdo, confiança e conversão.
- [Cores de Coleção](../geral/cores-de-colecao.md): estrutura técnica, bootstrap, autonomia e processo de criação e evolução dos projetos.
- [Stack e Arquitetura](../geral/stack-arquitetura.md): tecnologias, componentes, tokens, acessibilidade, SEO, performance e responsividade.

## 2. Posicionamento

> **Design que comunica autoridade.**

Enquanto a Essencial prioriza clareza, leveza e apresentação direta, a Presença enfatiza impacto visual, composição editorial e autoridade. A diferença deve ser perceptível na hierarquia, nas seções e na experiência da página.

A coleção deve ajudar a marca a parecer estabelecida, confiável, especializada, valorizada e memorável. Sua personalidade é segura, elegante, madura, refinada, contemporânea e intencional.

O público inclui clínicas, estética, odontologia, advocacia, arquitetura, consultoria, profissionais liberais, especialistas, marcas pessoais, escritórios, imobiliárias e serviços B2B de maior valor.

A proposta comercial combina posicionamento, percepção de qualidade, comunicação refinada e experiência visual. Frases alternativas:

- Presença visual para marcas de alto valor.
- Posicionamento, sofisticação e impacto.
- Sites que elevam percepção e confiança.

## 3. Princípios da coleção

- Autoridade antes de decoração: cada recurso deve reforçar confiança ou posicionamento.
- Menos elementos, mais impacto: composição controlada e pouco ruído visual.
- Tipografia protagonista: títulos fortes, com identidade e escala generosa.
- Fotografia marcante: imagens grandes, enquadramento forte e luz dramática ou natural bem controlada.
- Prova de autoridade cedo: credenciais, reconhecimento e resultados ajudam a sustentar a primeira impressão.
- Conteúdo estratégico: cada seção contribui para a narrativa e para a percepção de valor.

A percepção premium deve vir de **tipografia, composição, imagem, espaço e consistência**.

## 4. Identidade visual

### Tipografia e composição

Preferir serif elegante nos títulos e sans-serif neutra no corpo e na interface. Para aplicações corporativas, combinar uma sans-serif forte nos títulos com outra neutra no corpo.

A escala tem Hero muito grande, H2 grande, H3 médio, corpo confortável e metadados discretos. Usar colunas amplas, assimetria controlada, alinhamento preciso e espaço negativo. Dar respiro entre seções, entre título e texto e ao redor de imagens.

### Variações internas

As três direções abaixo são possibilidades de evolução da coleção e preservam os princípios da Presença. A implementação vigente é a base Aura descrita na seção 1; essas variantes não estão disponíveis como alternâncias prontas no core.

| Variação | Paleta e composição | Aplicações indicadas |
|---|---|---|
| Light Editorial | Off-white, bege, cinza claro, preto, marrom suave e destaque refinado; serif elegante, imagens grandes, bordas finas e bastante respiro | Advocacia, arquitetura, odontologia, consultoria e marcas pessoais |
| Dark Premium | Preto, grafite, off-white, cinza quente, bronze ou dourado discreto; alto contraste e fotografia dramática | Estética, clínicas premium, harmonização, imobiliárias e marcas de luxo |
| Modern Authority | Branco, grafite, azul ou verde profundo, cinzas e destaque controlado; sans forte, grid limpo, dados e números, menos dramatização | B2B, consultoria, engenharia, escritórios e serviços especializados |

Light Editorial é uma variação da Presença; a futura Coleção Editorial do plano Pro possui escopo próprio.

### Superfícies e detalhes

- Fundos claros com textura muito sutil ou escuros profundos; blocos alternados e superfícies neutras.
- Cards com bordas discretas, espaçamento generoso e sombra mínima ou inexistente.
- Bordas preferencialmente de 1px, em tons neutros e baixo contraste.
- Raios de referência: pequeno de 4px, médio de 8px e grande de 16px. Modern Authority pode usar raios um pouco maiores.
- Ícones simples, lineares, consistentes e discretos.
- Dourado restrito a linhas, bordas, ícones e pequenos destaques.
- Botões primários, secundários e links com fundo sólido ou contorno discreto, tipografia limpa e pequenas transições.

### Imagens e movimento

A fotografia deve sustentar a proposta editorial. Evitar imagens genéricas, saturação excessiva, baixa resolução e estética artificial sem coerência.

Usar fade, reveal, pequenos deslocamentos e stagger controlado. No hover, admitir mudança sutil de opacidade ou borda, underline animado e escala mínima de imagem. Evitar zoom excessivo, elementos voando, efeitos de scroll invasivos e animações gratuitas.

### O que evitar

Excesso de dourado, brilho artificial, ornamentos, sombras pesadas, blur exagerado, glassmorphism gratuito, tipografia decorativa demais, excesso de cards e aparência de luxo artificial. Evitar aparência de dashboard sem relação com o nicho, de landing page de infoproduto ou de clínica genérica de Instagram.

## 5. Composição e componentes

Estrutura-base:

```text
Header
Hero marcante
Autoridade / números / credenciais
Serviços ou especialidades
Diferenciais
Sobre / posicionamento
Processo
Cases, resultados ou prova social
FAQ
CTA final
Footer
```

A ordem e as seções podem variar conforme o nicho, mantendo a narrativa de autoridade.

### Hero

Headline curta e forte, subtítulo objetivo, CTA principal refinado, imagem dominante e bastante respiro. Incluir CTA secundário somente quando necessário e prova de autoridade compacta quando disponível.

Composições previstas:

- **Editorial Split:** texto forte à esquerda e imagem marcante à direita.
- **Full Bleed:** imagem ocupando grande parte da tela, com texto sobreposto ou encaixado.
- **Composition:** texto, imagem e detalhes tipográficos em composição mais autoral.

Variantes propostas: `HeroPresenceSplit`, `HeroPresenceEditorial`, `HeroPresenceDark` e `HeroPresenceAuthority`.

### Componentes planejados para o core

| Grupo | Componentes propostos |
|---|---|
| Estrutura global | `HeaderTransparent`, `HeaderMinimal`, `FooterColumns` |
| Composições de Hero | `HeroSplit`, `HeroBackground`, `HeroEditorial`, como referências para as variantes Presença |
| Autoridade | `Stats`, `Credentials` |
| Serviços | `ServicesGrid`, `ServicesAlternating` |
| Sobre | `AboutSplit`, `AboutFounder` |
| Processo e cases | `ProcessSteps`, `CaseStudies` |
| Prova social | `TestimonialsFeatured`, `ReviewsSummary` |
| FAQ e contato | `FAQAccordion`, `CTABanner`, `CTAContact` |

Para serviços, priorizar listas editoriais, grids numerados, blocos alternados, imagem com texto, cards grandes ou accordion conforme o conteúdo. Sobre pode destacar retrato, filosofia e trajetória. Nos depoimentos, preferir poucos destaques fortes a dezenas de cards.

## 6. Nichos e estruturas previstas

A primeira fase inclui Estética, Odontologia, Advocacia, Arquitetura, Consultoria e Clínicas Médicas. As estruturas abaixo descrevem o conteúdo principal; todas usam Header e Footer da coleção.

### Nicho — Estética

#### Objetivo
Transmitir sofisticação, confiança e percepção premium.

#### Estrutura

```text
Hero Dark Premium
Tratamentos
Resultados
Diferenciais
Sobre
Estrutura
Especialistas
Depoimentos
FAQ
Agendamento
```

#### Direção visual

- dark premium ou light editorial;
- fotografia forte;
- serif sofisticada;
- detalhes discretos;
- foco em transformação e confiança.

---

### Nicho — Odontologia

#### Objetivo
Transmitir segurança, tecnologia e autoridade clínica.

#### Estrutura

```text
Hero
Credenciais
Especialidades
Tecnologia
Profissionais
Estrutura
Resultados
Avaliações
FAQ
Agendamento
```

#### Direção visual

Preferência:

- Light Editorial;
- branco/off-white;
- grafite;
- accent discreto;
- fotografia profissional.

Evitar estética clínica genérica excessivamente azul.

---

### Nicho — Advocacia

#### Objetivo
Transmitir confiança, discrição e especialização.

#### Estrutura

```text
Hero
Áreas de atuação
Autoridade
Sobre o escritório
Profissionais
Método de trabalho
Conteúdo
FAQ
Contato
```

#### Direção visual

- editorial;
- sóbria;
- serif forte;
- cores neutras;
- estrutura institucional.

A comunicação deve respeitar regras profissionais aplicáveis.

---

### Nicho — Arquitetura

#### Objetivo
Transformar portfólio visual em autoridade.

#### Estrutura

```text
Hero visual
Projetos em destaque
Serviços
Portfólio
Filosofia
Processo
Sobre
Depoimentos
Contato
```

#### Direção visual

- editorial;
- imagens grandes;
- grid assimétrico;
- muito espaço;
- tipografia elegante.

---

### Nicho — Consultoria

#### Objetivo
Transmitir domínio, método e resultados.

#### Estrutura

```text
Hero
Empresas atendidas
Problemas solucionados
Serviços
Método
Cases
Resultados
Sobre
Depoimentos
CTA
```

#### Direção visual

Preferência:

- Modern Authority;
- tipografia forte;
- gráficos ou números quando fizer sentido;
- composição corporativa premium.

---

### Nicho implementado — Clínicas Médicas

Aplicação `start/presenca/clinicas-medicas/`, com a marca Arche Saúde, azul-petróleo, Manrope + Inter e fotografia em arco. Inclui cinco especialidades, equipe, estrutura e diferenciais, etapas do atendimento, relatos demonstrativos, FAQ e contato com revisão da mensagem. Identificação médica configurável, sem números de registros inventados. Consulte o [README do nicho](../../start/presenca/clinicas-medicas/README.md).

#### Objetivo
Transmitir segurança, estrutura e cuidado profissional.

#### Estrutura

```text
Hero
Especialidades
Profissionais
Estrutura
Diferenciais
Como funciona
Avaliações
FAQ
Agendamento
```

#### Direção visual

- Light Editorial;
- clean sofisticado;
- fotografia real;
- credenciais visíveis;
- navegação simples.

---

### Nicho implementado — Veterinárias

Aplicação `start/presenca/veterinarias/`, com a marca Arche Vet. Mantém a base Aura com Hero em arco, grade de cinco cuidados e CTA, clínica, relatos de tutores, FAQ, contato e rodapé. Identidade verde-floresta, Playfair Display e Inter, imagens locais e layout responsivo.

O contato permite selecionar o cuidado e revisar a mensagem antes do WhatsApp. O escopo demonstrativo atende cães e gatos durante os horários informados, sem anunciar plantão 24 horas. Não há dados inventados de experiência ou credenciais; os relatos e imagens são identificados na faixa de demonstração. Leia o [README do nicho](../../start/presenca/veterinarias/README.md) para personalização e validação.

### Nicho implementado — Academias

Aplicação `start/presenca/academias/`, adaptada para a marca Arche Pilates. Mantém a fotografia em arco e a composição da base Aura, com identidade verde-sálvia. Usa Manrope nos títulos e Inter no corpo. Inclui Pilates em aparelhos e no solo, aulas individuais e em dupla, mobilidade, apresentação do estúdio, três planos demonstrativos por frequência semanal, relatos, FAQ, contato e rodapé.

Modalidades e planos preselecionam o assunto no modal antes da revisão da mensagem para o WhatsApp. Não há cobrança, matrícula ou agendamento automático. Os valores, relatos e fotografias são ilustrativos, identificados na faixa superior. Consulte o [README do nicho](../../start/presenca/academias/README.md).

### Nicho implementado — Contabilidade

Aplicação `start/presenca/contabilidade/`, com a marca Arche Contábil, grafite e cobre, Manrope + Inter e fotografia em arco. Inclui cinco serviços, escritório, segmentos atendidos, etapas da parceria, relatos demonstrativos, FAQ e contato com revisão da mensagem. Os assuntos são preselecionados conforme o serviço. Registros profissionais configuráveis no rodapé, sem números inventados. Consulte o [README do nicho](../../start/presenca/contabilidade/README.md).

### Nicho implementado — Imobiliárias

Aplicação `start/presenca/imobiliarias/`, com a marca Arche Imóveis, azul profundo, Manrope + Inter e fotografia em arco. Inclui cinco imóveis demonstrativos, filtros de compra e aluguel, seleção por região, detalhes e encargos, apresentação da imobiliária, etapas do atendimento, relatos, FAQ e contato com revisão da mensagem. Cada imóvel preseleciona título e referência no WhatsApp. Inclui assunto para proprietários e campos configuráveis de CRECI, sem registros inventados. Consulte o [README do nicho](../../start/presenca/imobiliarias/README.md).

---

### Nicho futuro — Marca Pessoal

Para:
- consultores;
- especialistas;
- mentores;
- executivos;
- palestrantes.

```text
Hero pessoal
Autoridade
Sobre
Áreas de atuação
Conteúdo
Cases
Mídia
Depoimentos
CTA
```

---

Outras expansões futuras: Harmonização, Engenharia, Agência Premium e Serviços B2B. Suas estruturas serão definidas quando entrarem em produção.

## 7. Organização dos projetos

A coleção possui seu próprio `presenca-core`, atualizado a partir da aplicação Aura de estética. O padrão técnico segue as referências gerais; composição, assets e identidade pertencem à Presença.

A Presença pertence ao plano Start, ao lado da Essencial. Seus projetos ficam em `start/presenca/`. Na estrutura abaixo, `presenca-core`, `estetica`, `odontologia`, `psicologia`, `veterinarias`, `academias`, `clinicas-medicas`, `contabilidade` e `imobiliarias` estão implementados; os demais nichos são planejados.

```text
templates/
└── start/
    └── presenca/
        ├── presenca-core/
        ├── estetica/
        ├── odontologia/
        ├── psicologia/
        ├── veterinarias/
        ├── academias/
        ├── advocacia/
        ├── arquitetura/
        ├── consultoria/
        ├── clinicas-medicas/
        ├── contabilidade/
        └── imobiliarias/
```

Pacote do core: `@arche-labs/start-presenca-core`. Pacotes dos nichos: `@arche-labs/start-presenca-<nicho>`. A aplicação imobiliária usa `imobiliarias`.

## 8. Ordem de produção

1. Base técnica e direção visual do `presenca-core`.
2. Variantes de Hero.
3. Blocos de autoridade e credenciais.
4. Estética.
5. Odontologia.
6. Advocacia.
7. Consultoria.
8. Arquitetura.
9. Clínicas Médicas.

Estética é o primeiro nicho implementado e a referência aprovada para a base Aura. Novas aplicações devem seguir o processo de criação e validação definido nas referências gerais, preservando a autonomia de cada pasta.

## 9. Critério de resultado

A coleção deve comunicar autoridade antes mesmo de o visitante terminar de ler o Hero e provocar a percepção:

> “Essa empresa parece referência no que faz.”

Sem exagero, ostentação artificial ou poluição visual.
