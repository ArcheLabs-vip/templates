export interface NavigationItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  locale: string;
  demo: {
    enabled: boolean;
    notice: string;
  };
  seo: {
    socialImage: string;
  };
  business: {
    schemaType: string;
    priceRange: string;
    openingHours: string[];
    servesCuisine: string;
  };
  location: {
    streetAddress: string;
    locality: string;
    region: string;
    postalCode: string;
    country: string;
    displayAddress: string;
  };
  contact: {
    email: string;
    phone: string;
    phoneHref: string;
    whatsapp: string;
    whatsappHref: string;
    hours: string;
    schedule: Array<{
      days: string;
      hours: string;
    }>;
  };
  social: {
    instagram: string;
    facebook: string;
    linkedin: string;
  };
  navigation: NavigationItem[];
}

export interface ServiceItem {
  title: string;
  description: string;
  detail?: string;
  icon?: "flame" | "wine" | "plate" | "cake" | "cocktail" | "leaf";
  includes?: string[];
}

export interface MetricItem {
  value: string;
  label: string;
  detail?: string;
}

export interface ResultItem {
  title: string;
  category: string;
  image: string;
  imageAlt: string;
}

export interface BenefitItem {
  title: string;
  description: string;
}

export interface ProcessItem {
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  context: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface HomePageContent {
  sections: {
    trustMetrics: boolean;
    services: boolean;
    benefits: boolean;
    results: boolean;
    process: boolean;
    team: boolean;
    testimonials: boolean;
    faq: boolean;
    finalCta: boolean;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    primaryActionLabel: string;
    secondaryActionLabel: string;
  };
  services: { title: string; description: string };
  benefits: { title: string; description: string; image: string; imageAlt: string };
  results: { title: string; description: string; actionLabel: string };
  process: { title: string; description: string };
  team: { title: string; description: string };
  testimonials: {
    title: string;
    description: string;
    sourceLabel: string;
    showGoogleBrand: boolean;
  };
  faq: { title: string; description: string };
  finalCta: {
    title: string;
    description: string;
    phoneLabel: string;
    primaryActionLabel: string;
  };
}

export const site = {
  name: "Fogo & Brasa",
  title: "Fogo & Brasa | Carnes grelhadas e gastronomia artesanal em São Paulo",
  description:
    "Restaurante de carnes grelhadas na brasa com ingredientes selecionados, carta de vinhos e ambiente acolhedor em São Paulo.",
  url: "https://restaurante.example.com",
  locale: "pt-BR",
  demo: {
    enabled: true,
    notice: "Modelo demonstrativo — dados, cardápio e avaliações são ilustrativos.",
  },
  seo: {
    socialImage: "/images/hero-restaurante.jpg",
  },
  business: {
    schemaType: "Restaurant",
    priceRange: "$$$",
    openingHours: ["Tu-Fr 12:00-15:00", "Tu-Sa 19:00-23:00", "Su 12:00-16:00"],
    servesCuisine: "Brazilian Steakhouse",
  },
  location: {
    streetAddress: "Rua Fictícia, 789",
    locality: "São Paulo",
    region: "SP",
    postalCode: "00000-000",
    country: "BR",
    displayAddress: "Rua Fictícia, 789 - São Paulo, SP",
  },
  contact: {
    email: "contato@fogoebrasa.example",
    phone: "(99) 99999-9999",
    phoneHref: "tel:+5599999999999",
    whatsapp: "5599999999999",
    whatsappHref:
      "https://wa.me/5599999999999?text=Olá%2C%20gostaria%20de%20fazer%20uma%20reserva.",
    hours: "Terça a sexta, almoço e jantar; sábado, jantar; domingo, almoço",
    schedule: [
      { days: "Terça a sexta", hours: "12h–15h / 19h–23h" },
      { days: "Sábado", hours: "19h–23h" },
      { days: "Domingo", hours: "12h–16h" },
      { days: "Segunda", hours: "Fechado" },
    ],
  },
  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
  },
  navigation: [
    { label: "Cardápio", href: "/#cardapio" },
    { label: "Ambiente", href: "/#ambiente" },
    { label: "Equipe", href: "/#equipe" },
    { label: "Avaliações", href: "/#avaliacoes" },
    { label: "Dúvidas", href: "/#duvidas" },
  ],
} satisfies SiteConfig;

export const homePage = {
  sections: {
    trustMetrics: true,
    services: true,
    benefits: true,
    results: true,
    process: true,
    team: true,
    testimonials: true,
    faq: true,
    finalCta: true,
  },
  hero: {
    eyebrow: "Carnes grelhadas e gastronomia artesanal em São Paulo",
    title: "Sabor que marca presença.",
    description:
      "Cortes nobres preparados na brasa, ingredientes selecionados e um ambiente feito para celebrar bons momentos.",
    image: "/images/hero-restaurante.jpg",
    imageAlt: "Interior do restaurante Fogo & Brasa com grelha ao fundo e mesas elegantes",
    primaryActionLabel: "Fazer reserva",
    secondaryActionLabel: "Ligar agora",
  },
  services: {
    title: "Nosso cardápio",
    description:
      "Cortes selecionados, acompanhamentos artesanais, entradas para compartilhar e uma carta de vinhos escolhidos a dedo.",
  },
  benefits: {
    title: "Cuidado em cada detalhe da sua experiência",
    description: "Ingredientes selecionados, preparo artesanal e ambiente pensado para você.",
    image: "/images/prato-destaque.jpg",
    imageAlt: "Prato de picanha grelhada com acompanhamentos e taça de vinho",
  },
  results: {
    title: "Nosso ambiente",
    description:
      "Registros ilustrativos dos nossos espaços — salão principal, área do bar e espaço reservado.",
    actionLabel: "Quero conhecer",
  },
  process: {
    title: "Sua experiência conosco",
    description: "Desde a reserva até a sobremesa, cada etapa é planejada com cuidado.",
  },
  team: {
    title: "Nossa cozinha",
    description:
      "Equipe comandada pelo Chef Ricardo, com experiência em gastronomia brasileira e técnicas de fogo.",
  },
  testimonials: {
    title: "O que nossos clientes dizem",
    description:
      "Relatos ilustrativos sobre a comida, o atendimento e a experiência no Fogo & Brasa.",
    sourceLabel: "Modelo de avaliações",
    showGoogleBrand: false,
  },
  faq: {
    title: "Dúvidas frequentes",
    description: "Informações sobre reservas, horários, estacionamento e eventos.",
  },
  finalCta: {
    title: "Faça sua reserva e viva uma experiência gastronômica única.",
    description:
      "Envie uma mensagem pelo WhatsApp ou ligue para garantir sua mesa. Aceitamos reservas para grupos e eventos.",
    phoneLabel: "Prefere ligar?",
    primaryActionLabel: "Fazer reserva",
  },
} satisfies HomePageContent;

export const services: ServiceItem[] = [
  {
    title: "Carnes na brasa",
    description:
      "Cortes nobres como picanha, ancho, costela e fraldinha, preparados na brasa com técnica e ponto perfeito.",
    detail: "Especialidade da casa",
    icon: "flame",
    includes: ["Picanha", "Ancho", "Costela premium", "Fraldinha", "Cordeiro"],
  },
  {
    title: "Entradas e petiscos",
    description:
      "Para compartilhar: bruschetta de tomate, bolinho de carne, carpaccio e queijos artesanais.",
    detail: "Para começar bem",
    icon: "plate",
    includes: ["Bruschetta", "Bolinho de carne", "Carpaccio", "Queijos artesanais", "Pão de fermentação natural"],
  },
  {
    title: "Acompanhamentos",
    description:
      "Vegetais grelhados, arroz de brasa, farofa artesanal, purês e saladas frescas.",
    detail: "Frescos e artesanais",
    icon: "leaf",
    includes: ["Vegetais grelhados", "Arroz de brasa", "Farofa artesanal", "Purê de mandioquinha", "Salada da casa"],
  },
  {
    title: "Sobremesas",
    description:
      "Doces autorais para encerrar: petit gâteau, pudim de leite, sorvete artesanal e crème brûlée.",
    detail: "O doce final perfeito",
    icon: "cake",
    includes: ["Petit gâteau", "Pudim de leite", "Sorvete artesanal", "Crème brûlée"],
  },
  {
    title: "Carta de vinhos",
    description:
      "Rótulos nacionais e importados, selecionados para harmonizar com cada prato do cardápio.",
    detail: "Harmonização perfeita",
    icon: "wine",
    includes: ["Tintos encorpados", "Tintos leves", "Brancos", "Rosés", "Espumantes"],
  },
  {
    title: "Drinks e coquetéis",
    description:
      "Coquetéis clássicos e autorais, cervejas artesanais e drinks sem álcool preparados no bar.",
    detail: "Bar completo",
    icon: "cocktail",
    includes: ["Negroni da casa", "Old Fashioned", "Caipirinha premium", "Cervejas artesanais", "Drinks sem álcool"],
  },
];

export const trustMetrics: MetricItem[] = [
  {
    value: "12.000+",
    label: "refeições servidas",
    detail: "com ingredientes selecionados",
  },
  {
    value: "4,8",
    label: "avaliação média",
    detail: "sabor, atendimento e ambiente",
  },
  {
    value: "8",
    label: "anos de tradição",
    detail: "em gastronomia na brasa",
  },
];

export const results: ResultItem[] = [
  {
    title: "Salão principal com grelha aberta",
    category: "Salão principal",
    image: "/images/hero-restaurante.jpg",
    imageAlt: "Vista do salão principal do restaurante com grelha ao fundo",
  },
  {
    title: "Espaço intimista com adega climatizada",
    category: "Área reservada",
    image: "/images/ambiente-restaurante.jpg",
    imageAlt: "Área reservada do restaurante com bancos de couro e adega",
  },
  {
    title: "Pratos preparados com técnica e carinho",
    category: "Gastronomia",
    image: "/images/prato-destaque.jpg",
    imageAlt: "Prato de carne grelhada apresentado sobre tábua de madeira",
  },
];

export const benefits: BenefitItem[] = [
  {
    title: "Ingredientes selecionados",
    description: "Trabalhamos com fornecedores cuidadosamente escolhidos para garantir frescor e qualidade.",
  },
  {
    title: "Preparo artesanal na brasa",
    description: "Cada corte é preparado na hora, com técnica de fogo direto e ponto personalizado.",
  },
  {
    title: "Ambiente acolhedor e sofisticado",
    description: "Iluminação intimista, mobiliário confortável e música ambiente para uma experiência completa.",
  },
];

export const process: ProcessItem[] = [
  {
    title: "Reserva",
    description: "Garanta sua mesa pelo WhatsApp ou telefone. Aceitamos reservas para casais, grupos e eventos.",
  },
  {
    title: "Recepção",
    description: "Ao chegar, nossa equipe acomoda você e apresenta a carta de vinhos e o cardápio do dia.",
  },
  {
    title: "Experiência",
    description: "Cada prato é servido com cuidado, no tempo certo, para que você aproveite cada momento.",
  },
  {
    title: "Fidelidade",
    description: "Clientes que voltam recebem sugestões personalizadas e acesso a jantares especiais.",
  },
];

export const team: TeamMember[] = [
  {
    name: "Chef Ricardo Almeida",
    role: "Chef executivo — Gastronomia de fogo",
    bio: "Mais de 15 anos de experiência em gastronomia brasileira e técnicas de brasa, com passagens por casas renomadas.",
  },
  {
    name: "Marina Costa",
    role: "Sous Chef — Pratos e acompanhamentos",
    bio: "Especialista em acompanhamentos artesanais e vegetais grelhados com formação em gastronomia contemporânea.",
  },
  {
    name: "Carlos Eduardo",
    role: "Sommelier — Carta de vinhos",
    bio: "Sommelier certificado responsável pela curadoria de rótulos nacionais e importados da casa.",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "A melhor picanha que já comi. Ponto perfeito, ambiente incrível e atendimento impecável.",
    name: "Marcos Oliveira",
    context: "Jantar a dois",
    rating: 5,
  },
  {
    quote: "Comemorei meu aniversário aqui e foi inesquecível. Comida excelente e equipe super atenciosa.",
    name: "Ana Paula Santos",
    context: "Evento comemorativo",
    rating: 5,
  },
  {
    quote: "A carta de vinhos é muito bem curada. O sommelier indicou o rótulo perfeito para acompanhar a costela.",
    name: "Roberto Mendes",
    context: "Jantar com amigos",
    rating: 5,
  },
];

export const faq: FAQItem[] = [
  {
    question: "É necessário fazer reserva?",
    answer:
      "Recomendamos reserva, especialmente para sextas, sábados e domingos. Envie mensagem pelo WhatsApp ou ligue para garantir sua mesa.",
  },
  {
    question: "Vocês atendem grupos e eventos?",
    answer:
      "Sim. Temos área reservada para grupos de até 20 pessoas e oferecemos menu personalizado para eventos e confraternizações.",
  },
  {
    question: "Qual é o horário de funcionamento?",
    answer:
      "Funcionamos de terça a sexta para almoço (12h–15h) e jantar (19h–23h), sábado apenas jantar (19h–23h) e domingo para almoço (12h–16h). Segunda é nosso dia de descanso.",
  },
  {
    question: "O restaurante possui estacionamento?",
    answer:
      "Temos convênio com estacionamento a 50 metros da entrada. Apresente o ticket na recepção para obter o desconto.",
  },
  {
    question: "Existe opção vegetariana ou vegana?",
    answer:
      "Sim. Nosso cardápio inclui entradas, acompanhamentos e pratos principais vegetarianos. Consulte a equipe sobre opções veganas disponíveis no dia.",
  },
];
