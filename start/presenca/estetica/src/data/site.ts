export const site = {
  name: "alva",
  category: "Clínica de estética",
  title: "Alva | Estética com naturalidade",
  description: "Um olhar individual para a sua beleza. Conheça a proposta de cuidado facial e corporal da Alva, clínica de estética.",
  url: "https://example.com",
  demo: true,
  // Preencha com DDI + DDD + número para ativar o contato real.
  whatsapp: "",
  message: "Olá! Gostaria de conversar sobre uma avaliação na Alva.",
  contactLabel: "Agendar uma avaliação",
  nav: [
    { label: "Tratamentos", href: "#tratamentos" },
    { label: "Nossa essência", href: "#essencia" },
    { label: "O espaço", href: "#espaco" },
  ],
  hero: {
    eyebrow: "Estética, com intenção",
    title: "Sua essência.",
    accent: "Em evidência.",
    text: "Um olhar atento para o que faz você ser você. Cuidado facial e corporal que respeita a sua individualidade.",
    image: "/images/portrait.webp",
    imageAlt: "Retrato editorial de uma mulher em luz natural suave",
    note: "Beleza singular. Cuidado por inteiro.",
    secondaryLabel: "Explore os tratamentos",
  },
  principles: ["Avaliação individual", "Escolhas conscientes", "Acompanhamento próximo"],
  services: {
    title: "O cuidado certo para o seu momento.",
    text: "Tudo começa pela escuta. Conheça nossas frentes de cuidado e descubra, na avaliação, o que faz sentido para você.",
    items: [
      { number: "01", title: "Estética facial", subtitle: "Equilíbrio, textura e vitalidade", text: "Cuidados com a pele pensados a partir da sua rotina, das suas necessidades e dos seus objetivos.", detail: "Na avaliação, conversamos sobre sua pele, hábitos e histórico para definir os cuidados indicados e suas limitações. Limpeza e hidratação são algumas das possibilidades, conforme avaliação profissional." },
      { number: "02", title: "Estética corporal", subtitle: "Bem-estar em cada detalhe", text: "Uma abordagem individual para cuidar do corpo com atenção, conforto e expectativas realistas.", detail: "O plano considera suas prioridades e a avaliação profissional. Você recebe orientações sobre possibilidades de cuidado, contraindicações e acompanhamento antes de decidir." },
      { number: "03", title: "Qualidade da pele", subtitle: "Cuidado que acompanha você", text: "Uma rotina bem orientada para valorizar a saúde e a aparência da sua pele ao longo do tempo.", detail: "Revisamos sua rotina e definimos cuidados compatíveis com seu momento. A frequência das sessões e as orientações para casa são conversadas de forma individual." },
    ],
  },
  philosophy: {
    eyebrow: "A essência Alva",
    title: "A beleza está nos detalhes que são só seus.",
    text: "Acreditamos em uma estética que começa com uma boa conversa. Entender sua história, acolher suas escolhas e respeitar seu tempo faz parte do cuidado.",
    closing: "Naturalidade como intenção. Individualidade como ponto de partida.",
    values: [
      { title: "Escuta antes de tudo", text: "Espaço para falar sobre seus desejos e esclarecer cada dúvida." },
      { title: "Clareza em cada escolha", text: "Orientações sobre possibilidades, limites e cuidados antes de começar." },
      { title: "Respeito ao seu ritmo", text: "Um plano pensado para a sua rotina, sem pressa e sem excessos." },
    ],
  },
  space: {
    title: "Um respiro na sua rotina.",
    text: "Um ambiente acolhedor, pensado para que o seu momento de cuidado também seja um momento de pausa.",
    image: "/images/space.webp",
    imageAlt: "Conceito de recepção com madeira, poltronas claras e luz natural",
    caption: "Privacidade, conforto e atenção em cada encontro.",
  },
  process: {
    title: "Seu cuidado começa com uma conversa.",
    items: [
      { title: "Nos conhecemos", text: "Você compartilha seus objetivos. Nós ouvimos sua história e esclarecemos suas dúvidas." },
      { title: "Desenhamos o plano", text: "Após a avaliação, apresentamos as opções, os cuidados e o investimento de forma clara." },
      { title: "Cuidamos de perto", text: "Acompanhamos cada etapa e ajustamos o plano de acordo com a sua evolução." },
    ],
  },
  faq: {
    title: "Antes do primeiro encontro.",
    items: [
      { question: "Como funciona a primeira avaliação?", answer: "É um momento de conversa e avaliação individual. Entendemos seus objetivos e histórico, esclarecemos dúvidas e apresentamos um plano de cuidado. A indicação de qualquer procedimento depende dessa avaliação." },
      { question: "Como saber qual tratamento escolher?", answer: "Você não precisa chegar com um tratamento definido. A avaliação ajuda a entender as possibilidades, os limites e os cuidados adequados ao seu momento." },
      { question: "Quantas sessões são necessárias?", answer: "A frequência e a quantidade de sessões variam conforme o cuidado indicado e a resposta individual. Essas expectativas são alinhadas antes de iniciar e revistas no acompanhamento." },
      { question: "Posso conhecer os valores antes de agendar?", answer: "Entre em contato para consultar o valor da avaliação e as condições de atendimento. O investimento no plano de cuidado é apresentado após a avaliação, de acordo com o que for indicado." },
    ],
  },
  contact: {
    eyebrow: "Seu próximo momento de cuidado",
    title: "Vamos olhar para você?",
    text: "Conte o que você busca. Nossa equipe orienta os primeiros passos para a sua avaliação.",
    note: "Atendimento com hora marcada.",
    demoTitle: "Você está conhecendo um template.",
    demoText: "A Alva é uma marca fictícia. O agendamento ficará disponível quando a clínica configurar seu contato.",
  },
  footer: {
    signature: "Estética com naturalidade.",
    notice: "Template demonstrativo da coleção Presença. Marca e ambientes fictícios. Imagens conceituais geradas por IA; não representam pacientes, profissionais ou resultados.",
    credits: "Design por Arche Labs",
  },
};

const digits = site.whatsapp.replace(/\D/g, "");
export const contactUrl = !site.demo && /^\d{10,15}$/.test(digits)
  ? `https://wa.me/${digits}?text=${encodeURIComponent(site.message)}`
  : "#contato-demo";
