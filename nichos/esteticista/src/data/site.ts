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
  icon?: "face" | "sparkle" | "leaf" | "hand" | "body" | "brow";
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
  name: "Pele & Forma",
  title: "Pele & Forma | Estética facial e corporal em São Paulo",
  description:
    "Procedimentos estéticos com protocolos personalizados, produtos dermatológicos e ambiente acolhedor em São Paulo.",
  url: "https://esteticista.example.com",
  locale: "pt-BR",
  demo: {
    enabled: true,
    notice: "Modelo demonstrativo — dados, resultados e avaliações são ilustrativos.",
  },
  seo: {
    socialImage: "/images/hero-esteticista.jpg",
  },
  business: {
    schemaType: "HealthAndBeautyBusiness",
    priceRange: "$$",
    openingHours: ["Mo-Fr 09:00-19:00", "Sa 09:00-15:00"],
  },
  location: {
    streetAddress: "Rua Fictícia, 456",
    locality: "São Paulo",
    region: "SP",
    postalCode: "00000-000",
    country: "BR",
    displayAddress: "Rua Fictícia, 456 - São Paulo, SP",
  },
  contact: {
    email: "contato@peleeforma.example",
    phone: "(99) 99999-9999",
    phoneHref: "tel:+5599999999999",
    whatsapp: "5599999999999",
    whatsappHref:
      "https://wa.me/5599999999999?text=Olá%2C%20gostaria%20de%20agendar%20uma%20avaliação.",
    hours: "Segunda a sexta, das 9h às 19h; sábado, das 9h às 15h",
    schedule: [
      { days: "Segunda a sexta", hours: "9h às 19h" },
      { days: "Sábado", hours: "9h às 15h" },
      { days: "Domingo", hours: "Fechado" },
    ],
  },
  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
  },
  navigation: [
    { label: "Serviços", href: "/#servicos" },
    { label: "Resultados", href: "/#resultados" },
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
    eyebrow: "Estética facial e corporal em São Paulo",
    title: "Beleza que respeita você.",
    description:
      "Protocolos personalizados para cuidar da sua pele com ciência, conforto e atenção.",
    image: "/images/hero-esteticista.jpg",
    imageAlt: "Esteticista acolhe paciente em clínica de estética elegante",
    primaryActionLabel: "Agendar avaliação",
    secondaryActionLabel: "Ligar agora",
  },
  services: {
    title: "Protocolos para cada necessidade",
    description:
      "Tratamentos faciais e corporais com tecnologia, produtos de qualidade e acompanhamento personalizado.",
  },
  benefits: {
    title: "Cuidado em cada etapa do seu tratamento",
    description: "Ambiente preparado, protocolos seguros e atenção individualizada.",
    image: "/images/ambiente-clinica.jpg",
    imageAlt: "Recepção da clínica de estética com ambiente acolhedor e moderno",
  },
  results: {
    title: "Resultados reais",
    description:
      "Registros ilustrativos que mostram como nossos protocolos podem transformar a aparência e a autoestima.",
    actionLabel: "Quero esse resultado",
  },
  process: {
    title: "Como funciona o atendimento",
    description: "Um processo cuidadoso para entregar resultado com segurança.",
  },
  team: {
    title: "Profissionais especializados",
    description:
      "Equipe qualificada com formação em estética avançada e atualização constante.",
  },
  testimonials: {
    title: "O que nossas clientes dizem",
    description:
      "Relatos ilustrativos sobre a experiência de atendimento, os resultados e o cuidado durante os procedimentos.",
    sourceLabel: "Modelo de avaliações",
    showGoogleBrand: false,
  },
  faq: {
    title: "Dúvidas frequentes",
    description: "Respostas que ajudam a escolher o tratamento ideal com mais segurança.",
  },
  finalCta: {
    title: "Agende sua avaliação e descubra o protocolo ideal.",
    description:
      "Envie uma mensagem pelo WhatsApp ou ligue para conversar. A avaliação é individual e sem compromisso.",
    phoneLabel: "Prefere falar por telefone?",
    primaryActionLabel: "Agendar avaliação",
  },
} satisfies HomePageContent;

export const services: ServiceItem[] = [
  {
    title: "Limpeza de pele",
    description:
      "Limpeza profunda com extração, hidratação e calmantes para devolver a luminosidade da pele.",
    detail: "Higienização e revitalização",
    icon: "face",
    includes: ["Higienização", "Esfoliação", "Extração", "Máscara calmante"],
  },
  {
    title: "Harmonização facial",
    description:
      "Protocolos com bioestimuladores, preenchimento e toxina botulínica para equilíbrio e naturalidade.",
    detail: "Equilíbrio e naturalidade",
    icon: "sparkle",
    includes: ["Avaliação facial", "Bioestimuladores", "Preenchimento", "Toxina botulínica"],
  },
  {
    title: "Peeling",
    description:
      "Renovação celular controlada para tratar manchas, textura e sinais de envelhecimento.",
    detail: "Renovação e uniformização",
    icon: "leaf",
    includes: ["Peeling químico", "Peeling enzimático", "Despigmentantes", "Proteção pós"],
  },
  {
    title: "Microagulhamento",
    description:
      "Estímulo ao colágeno com microagulhas para firmeza, cicatrizes e rejuvenescimento.",
    detail: "Colágeno e firmeza",
    icon: "hand",
    includes: ["Drug delivery", "Indução percutânea", "Associação com ativos", "Protocolo seriado"],
  },
  {
    title: "Drenagem linfática",
    description:
      "Massagem especializada para reduzir retenção, edema e melhorar o contorno corporal.",
    detail: "Redução de edema e contorno",
    icon: "body",
    includes: ["Drenagem facial", "Drenagem corporal", "Pós-operatório", "Protocolo detox"],
  },
  {
    title: "Design de sobrancelha",
    description:
      "Visagismo e design personalizado para valorizar a expressão do seu rosto.",
    detail: "Visagismo e expressão",
    icon: "brow",
    includes: ["Visagismo", "Design com pinça", "Henna", "Laminação"],
  },
];

export const trustMetrics: MetricItem[] = [
  {
    value: "2.000+",
    label: "procedimentos realizados",
    detail: "com protocolos personalizados",
  },
  {
    value: "4,9",
    label: "avaliação média",
    detail: "satisfação com resultados e atendimento",
  },
  {
    value: "5",
    label: "anos de experiência",
    detail: "em estética facial e corporal",
  },
];

export const results: ResultItem[] = [
  {
    title: "Pele revitalizada com protocolo completo",
    category: "Limpeza de pele + Peeling",
    image: "/images/tratamento-facial.jpg",
    imageAlt: "Profissional realizando tratamento facial em paciente relaxada",
  },
  {
    title: "Contorno facial natural e harmonioso",
    category: "Harmonização facial",
    image: "/images/hero-esteticista.jpg",
    imageAlt: "Esteticista avaliando paciente durante consulta de harmonização",
  },
  {
    title: "Ambiente acolhedor para cada sessão",
    category: "Estrutura e conforto",
    image: "/images/ambiente-clinica.jpg",
    imageAlt: "Interior da clínica de estética com sala de procedimentos",
  },
];

export const benefits: BenefitItem[] = [
  {
    title: "Protocolo individualizado",
    description: "Cada tratamento é planejado de acordo com sua pele e seus objetivos.",
  },
  {
    title: "Ambiente climatizado e acolhedor",
    description: "Sala preparada para seu conforto durante todo o procedimento.",
  },
  {
    title: "Produtos dermatológicos",
    description: "Utilizamos marcas reconhecidas e aprovadas pela Anvisa.",
  },
];

export const process: ProcessItem[] = [
  {
    title: "Avaliação",
    description: "Analisamos sua pele, ouvimos seus objetivos e indicamos o melhor protocolo.",
  },
  {
    title: "Protocolo personalizado",
    description: "Montamos um plano de tratamento com número de sessões, intervalos e cuidados.",
  },
  {
    title: "Procedimento",
    description: "Cada sessão é realizada com atenção, segurança e acompanhamento constante.",
  },
  {
    title: "Acompanhamento",
    description: "Orientamos os cuidados pós-procedimento e ajustamos o protocolo quando necessário.",
  },
];

export const team: TeamMember[] = [
  {
    name: "Dra. Camila Ferreira",
    role: "Esteticista — Estética facial avançada",
    bio: "Especialista em harmonização e protocolos de rejuvenescimento com mais de 8 anos de experiência.",
  },
  {
    name: "Ana Beatriz Lima",
    role: "Esteticista — Estética corporal",
    bio: "Focada em drenagem linfática, modelagem e protocolos pós-operatórios.",
  },
  {
    name: "Juliana Santos",
    role: "Design de sobrancelha e visagismo",
    bio: "Especialista em visagismo personalizado, henna e laminação de sobrancelhas.",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "Minha pele nunca esteve tão bonita. O protocolo foi pensado exatamente para mim.",
    name: "Fernanda Oliveira",
    context: "Limpeza de pele + Peeling",
    rating: 5,
  },
  {
    quote: "Ambiente lindo, equipe atenciosa e resultado natural. Recomendo demais.",
    name: "Patrícia Mendes",
    context: "Harmonização facial",
    rating: 5,
  },
  {
    quote: "A drenagem me ajudou muito no pós-operatório. Profissionais excelentes.",
    name: "Carolina Dias",
    context: "Drenagem linfática",
    rating: 5,
  },
];

export const faq: FAQItem[] = [
  {
    question: "Como funciona a avaliação?",
    answer:
      "A avaliação é individual. Analisamos sua pele, conversamos sobre seus objetivos e indicamos o protocolo mais adequado, com clareza sobre sessões e valores.",
  },
  {
    question: "Os procedimentos são seguros?",
    answer:
      "Sim. Utilizamos produtos aprovados pela Anvisa, seguimos protocolos de biossegurança e contamos com profissionais qualificados e em constante atualização.",
  },
  {
    question: "Quantas sessões são necessárias?",
    answer:
      "Depende do tratamento e da resposta da sua pele. Na avaliação, informamos a quantidade estimada e os intervalos recomendados.",
  },
  {
    question: "Posso fazer mais de um procedimento no mesmo dia?",
    answer:
      "Alguns protocolos podem ser combinados na mesma sessão. Avaliamos a compatibilidade e informamos durante a consulta.",
  },
  {
    question: "Existe contraindicação?",
    answer:
      "Alguns procedimentos possuem restrições para gestantes, lactantes ou pessoas com condições específicas. Informamos tudo na avaliação.",
  },
];
