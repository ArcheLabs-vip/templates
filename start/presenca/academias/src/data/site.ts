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

export interface ModalityItem {
  title: string;
  description: string;
  detail?: string;
  icon?: "dumbbell" | "flame" | "heart" | "zap" | "shield" | "music";
  includes?: string[];
}

export interface MetricItem {
  value: string;
  label: string;
  detail?: string;
}

export interface InfrastructureItem {
  title: string;
  category: string;
  image: string;
  imageAlt: string;
}

export interface PricingPlan {
  title: string;
  price: string;
  period: string;
  highlighted?: boolean;
  badge?: string;
  features: string[];
}

export interface ScheduleClass {
  modality: string;
  time: string;
}

export interface ScheduleDay {
  day: string;
  classes: ScheduleClass[];
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
    modalities: boolean;
    benefits: boolean;
    infrastructure: boolean;
    schedule: boolean;
    pricing: boolean;
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
  modalities: { title: string; description: string };
  benefits: { title: string; description: string; image: string; imageAlt: string };
  infrastructure: { title: string; description: string; actionLabel: string };
  schedule: { title: string; description: string };
  pricing: { title: string; description: string };
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
  name: "Titan Fitness",
  title: "Titan Fitness | Academia completa em São Paulo — Musculação, CrossFit, Funcional e mais",
  description:
    "Academia com musculação, CrossFit, funcional, dança e artes marciais. Equipamentos de ponta, professores qualificados e aula experimental gratuita em São Paulo.",
  url: "https://academia.example.com",
  locale: "pt-BR",
  demo: {
    enabled: true,
    notice: "Modelo demonstrativo — dados, modalidades e depoimentos são ilustrativos.",
  },
  seo: {
    socialImage: "/images/hero-academia.jpg",
  },
  business: {
    schemaType: "SportsActivityLocation",
    priceRange: "$$",
    openingHours: ["Mo-Fr 05:30-23:00", "Sa 07:00-18:00", "Su 08:00-14:00"],
  },
  location: {
    streetAddress: "Avenida Fictícia, 1200",
    locality: "São Paulo",
    region: "SP",
    postalCode: "00000-000",
    country: "BR",
    displayAddress: "Avenida Fictícia, 1200 - São Paulo, SP",
  },
  contact: {
    email: "contato@titanfitness.example",
    phone: "(99) 99999-9999",
    phoneHref: "tel:+5599999999999",
    whatsapp: "5599999999999",
    whatsappHref:
      "https://wa.me/5599999999999?text=Olá%2C%20quero%20agendar%20uma%20aula%20experimental%20gratuita!",
    hours: "Segunda a sexta, 5h30 às 23h; sábado, 7h às 18h; domingo, 8h às 14h",
    schedule: [
      { days: "Segunda a sexta", hours: "5h30–23h" },
      { days: "Sábado", hours: "7h–18h" },
      { days: "Domingo e feriados", hours: "8h–14h" },
    ],
  },
  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
  },
  navigation: [
    { label: "Modalidades", href: "/#modalidades" },
    { label: "Estrutura", href: "/#estrutura" },
    { label: "Horários", href: "/#horarios" },
    { label: "Planos", href: "/#planos" },
    { label: "Equipe", href: "/#equipe" },
    { label: "Dúvidas", href: "/#duvidas" },
  ],
} satisfies SiteConfig;

export const homePage = {
  sections: {
    trustMetrics: true,
    modalities: true,
    benefits: true,
    infrastructure: true,
    schedule: true,
    pricing: true,
    process: true,
    team: true,
    testimonials: true,
    faq: true,
    finalCta: true,
  },
  hero: {
    eyebrow: "Musculação · CrossFit · Funcional · Dança · Artes Marciais",
    title: "Supere seus limites.",
    description:
      "Equipamentos de última geração, professores especializados e o ambiente que você precisa para transformar seu corpo e sua mente.",
    image: "/images/hero-academia.jpg",
    imageAlt: "Interior da academia Titan Fitness com equipamentos modernos e iluminação neon",
    primaryActionLabel: "Agendar aula experimental",
    secondaryActionLabel: "Ligar agora",
  },
  modalities: {
    title: "Nossas modalidades",
    description:
      "Da musculação ao CrossFit, cada programa é pensado para levar você ao próximo nível, independente do seu objetivo.",
  },
  benefits: {
    title: "Por que treinar na Titan Fitness",
    description: "Estrutura, método e acompanhamento pensados para resultados reais.",
    image: "/images/treino-beneficios.jpg",
    imageAlt: "Aluna realizando treino funcional com acompanhamento de personal trainer",
  },
  infrastructure: {
    title: "Nossa estrutura",
    description:
      "Mais de 800m² com equipamentos importados, climatização e ambientes projetados para o seu melhor desempenho.",
    actionLabel: "Agendar visita",
  },
  schedule: {
    title: "Grade de horários",
    description: "Confira os horários das aulas coletivas durante a semana.",
  },
  pricing: {
    title: "Planos e valores",
    description: "Escolha o plano ideal e comece hoje mesmo. Todos incluem acesso a todas as modalidades.",
  },
  process: {
    title: "Como começar",
    description: "Um processo simples para você dar o primeiro passo hoje mesmo.",
  },
  team: {
    title: "Nossos professores",
    description:
      "Profissionais certificados, experientes e prontos para guiar seu treino com segurança e eficiência.",
  },
  testimonials: {
    title: "O que dizem nossos alunos",
    description:
      "Relatos ilustrativos de alunos sobre a experiência na Titan Fitness.",
    sourceLabel: "Modelo de avaliações",
    showGoogleBrand: false,
  },
  faq: {
    title: "Dúvidas frequentes",
    description: "Tudo o que você precisa saber antes de começar.",
  },
  finalCta: {
    title: "Comece sua transformação agora.",
    description:
      "Agende uma aula experimental gratuita pelo WhatsApp ou ligue para conhecer nossos planos. Sem compromisso.",
    phoneLabel: "Prefere ligar?",
    primaryActionLabel: "Agendar aula experimental",
  },
} satisfies HomePageContent;

export const modalities: ModalityItem[] = [
  {
    title: "Musculação",
    description:
      "Área de musculação com mais de 120 equipamentos, incluindo estações de cabos, racks de agachamento e área de peso livre.",
    detail: "Equipamentos importados",
    icon: "dumbbell",
    includes: ["Área de peso livre", "Estações de cabos", "Racks de agachamento", "Área de alongamento", "Orientação de série"],
  },
  {
    title: "CrossFit",
    description:
      "Box afiliado com WODs diários, coaching em tempo real e programação periodizada para todos os níveis.",
    detail: "Box afiliado oficial",
    icon: "flame",
    includes: ["WODs diários", "Coaching em tempo real", "Programação periodizada", "Turmas de até 15 alunos", "Rigs e equipamentos Rogue"],
  },
  {
    title: "Funcional",
    description:
      "Treino de alta intensidade com foco em movimentos naturais, resistência e condicionamento cardiovascular.",
    detail: "Turmas reduzidas",
    icon: "zap",
    includes: ["Circuitos variados", "Kettlebells e TRX", "Condicionamento cardio", "Turmas de até 12 alunos", "Acompanhamento individual"],
  },
  {
    title: "Dança",
    description:
      "Aulas de dança fitness, zumba, ritmos e hip hop para quem quer se exercitar de forma divertida e energizante.",
    detail: "Ritmos variados",
    icon: "music",
    includes: ["Zumba", "Ritmos brasileiros", "Hip Hop", "Fit Dance", "Aberto a todos os níveis"],
  },
  {
    title: "Artes Marciais",
    description:
      "Aulas de muay thai, jiu-jitsu e boxe com professores faixa preta e ambiente seguro para iniciantes e avançados.",
    detail: "Muay Thai · Jiu-Jitsu · Boxe",
    icon: "shield",
    includes: ["Muay Thai", "Jiu-Jitsu", "Boxe", "Defesa pessoal", "Equipamentos fornecidos"],
  },
  {
    title: "Cardio & HIIT",
    description:
      "Esteiras, bicicletas, elípticos e aulas de HIIT em grupo para quem quer queimar gordura e melhorar o condicionamento.",
    detail: "Queima máxima",
    icon: "heart",
    includes: ["Esteiras Technogym", "Bicicletas Spinning", "Elípticos", "HIIT em grupo", "Monitoramento cardíaco"],
  },
];

export const trustMetrics: MetricItem[] = [
  {
    value: "5.000+",
    label: "alunos ativos",
    detail: "em todas as modalidades",
  },
  {
    value: "4,9",
    label: "nota de satisfação",
    detail: "estrutura, professores e resultados",
  },
  {
    value: "800m²",
    label: "de área total",
    detail: "equipamentos e espaços exclusivos",
  },
];

export const infrastructure: InfrastructureItem[] = [
  {
    title: "Sala de musculação com equipamentos Technogym",
    category: "Musculação",
    image: "/images/sala-musculacao.jpg",
    imageAlt: "Sala de musculação ampla com equipamentos modernos e iluminação controlada",
  },
  {
    title: "Box de CrossFit com rigs completos",
    category: "CrossFit",
    image: "/images/box-crossfit.jpg",
    imageAlt: "Box de CrossFit com rigs, barras olímpicas e piso emborrachado",
  },
  {
    title: "Vestiários com armários e chuveiros individuais",
    category: "Vestiários",
    image: "/images/vestiarios.jpg",
    imageAlt: "Vestiário limpo e moderno com armários individuais e duchas",
  },
];

export const benefits: BenefitItem[] = [
  {
    title: "Equipamentos de ponta",
    description: "Linha completa Technogym e Rogue, mantida em perfeitas condições com manutenção preventiva semanal.",
  },
  {
    title: "Acompanhamento personalizado",
    description: "Avaliação física completa e prescrição de treino individual inclusa em todos os planos, com reavaliação periódica.",
  },
  {
    title: "Ambiente climatizado 24h",
    description: "Sistema de climatização em todas as áreas, incluindo musculação, salas de aula e vestiários.",
  },
];

export const schedule: ScheduleDay[] = [
  {
    day: "Segunda",
    classes: [
      { modality: "Funcional", time: "06:00" },
      { modality: "CrossFit", time: "07:00" },
      { modality: "Dança", time: "18:00" },
      { modality: "Muay Thai", time: "19:00" },
      { modality: "HIIT", time: "20:00" },
    ],
  },
  {
    day: "Terça",
    classes: [
      { modality: "Funcional", time: "06:00" },
      { modality: "CrossFit", time: "07:00" },
      { modality: "Jiu-Jitsu", time: "18:00" },
      { modality: "Boxe", time: "19:00" },
      { modality: "Spinning", time: "20:00" },
    ],
  },
  {
    day: "Quarta",
    classes: [
      { modality: "Funcional", time: "06:00" },
      { modality: "CrossFit", time: "07:00" },
      { modality: "Dança", time: "18:00" },
      { modality: "Muay Thai", time: "19:00" },
      { modality: "HIIT", time: "20:00" },
    ],
  },
  {
    day: "Quinta",
    classes: [
      { modality: "Funcional", time: "06:00" },
      { modality: "CrossFit", time: "07:00" },
      { modality: "Jiu-Jitsu", time: "18:00" },
      { modality: "Boxe", time: "19:00" },
      { modality: "Spinning", time: "20:00" },
    ],
  },
  {
    day: "Sexta",
    classes: [
      { modality: "Funcional", time: "06:00" },
      { modality: "CrossFit", time: "07:00" },
      { modality: "Dança", time: "18:00" },
      { modality: "HIIT", time: "19:00" },
    ],
  },
  {
    day: "Sábado",
    classes: [
      { modality: "Funcional", time: "08:00" },
      { modality: "CrossFit", time: "09:00" },
      { modality: "Dança", time: "10:00" },
    ],
  },
];

export const pricing: PricingPlan[] = [
  {
    title: "Mensal",
    price: "R$ 149",
    period: "/mês",
    features: [
      "Acesso a todas as modalidades",
      "Avaliação física",
      "Prescrição de treino",
      "Armário diário",
    ],
  },
  {
    title: "Semestral",
    price: "R$ 119",
    period: "/mês",
    highlighted: true,
    badge: "Mais popular",
    features: [
      "Acesso a todas as modalidades",
      "Avaliação física trimestral",
      "Prescrição de treino",
      "Armário fixo incluso",
      "1 sessão de personal/mês",
      "Sem taxa de adesão",
    ],
  },
  {
    title: "Anual",
    price: "R$ 99",
    period: "/mês",
    features: [
      "Acesso a todas as modalidades",
      "Avaliação física trimestral",
      "Prescrição de treino",
      "Armário fixo incluso",
      "2 sessões de personal/mês",
      "Sem taxa de adesão",
      "Acesso a unidades parceiras",
    ],
  },
];

export const process: ProcessItem[] = [
  {
    title: "Contato",
    description: "Envie uma mensagem pelo WhatsApp ou ligue para agendar sua aula experimental gratuita.",
  },
  {
    title: "Aula experimental",
    description: "Venha conhecer a estrutura, converse com os professores e treine sem compromisso por um dia.",
  },
  {
    title: "Avaliação física",
    description: "Realizamos uma avaliação completa de composição corporal e condicionamento para montar seu treino ideal.",
  },
  {
    title: "Início do treino",
    description: "Escolha seu plano, receba sua ficha de treino personalizada e comece sua transformação.",
  },
];

export const team: TeamMember[] = [
  {
    name: "Prof. Rafael Costa",
    role: "Coordenador Técnico — Musculação e Funcional",
    bio: "CREF ativo, especialista em treinamento de força com 10 anos de experiência e mais de 2.000 alunos orientados.",
  },
  {
    name: "Profa. Camila Souza",
    role: "Coach — CrossFit e HIIT",
    bio: "CrossFit Level 2 Trainer, competidora estadual e responsável pela programação dos WODs e turmas de alta intensidade.",
  },
  {
    name: "Prof. Lucas Mendes",
    role: "Professor — Muay Thai e Boxe",
    bio: "Faixa preta em muay thai com 8 anos de competição. Abordagem técnica e acessível para iniciantes e avançados.",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "Em 6 meses perdi 15kg e ganhei uma disposição que nunca tive. Os professores fazem toda a diferença.",
    name: "Juliana Almeida",
    context: "Aluna — Funcional e Musculação",
    rating: 5,
  },
  {
    quote: "O box de CrossFit é impecável. Equipamentos Rogue, coaching de verdade e uma comunidade que te puxa pra cima.",
    name: "Diego Ferreira",
    context: "Aluno — CrossFit",
    rating: 5,
  },
  {
    quote: "Comecei no muay thai com zero experiência e hoje me sinto confiante e em forma. O ambiente é acolhedor mesmo sendo intenso.",
    name: "Mariana Santos",
    context: "Aluna — Muay Thai",
    rating: 5,
  },
];

export const faq: FAQItem[] = [
  {
    question: "Posso fazer uma aula experimental gratuita?",
    answer:
      "Sim! Agende pelo WhatsApp ou telefone e venha treinar um dia inteiro sem compromisso. Você pode experimentar qualquer modalidade.",
  },
  {
    question: "Preciso ter experiência para começar?",
    answer:
      "Não. Todas as modalidades aceitam iniciantes. Nossos professores adaptam os exercícios ao seu nível e acompanham sua evolução desde o primeiro dia.",
  },
  {
    question: "O que está incluso nos planos?",
    answer:
      "Todos os planos incluem acesso a todas as modalidades, avaliação física, prescrição de treino personalizada e armário. Os planos semestrais e anuais têm benefícios adicionais como sessões de personal trainer.",
  },
  {
    question: "A academia possui estacionamento?",
    answer:
      "Sim, temos estacionamento gratuito com vagas cobertas para alunos. Também contamos com bicicletário coberto.",
  },
  {
    question: "Quais são os horários de funcionamento?",
    answer:
      "Funcionamos de segunda a sexta das 5h30 às 23h, sábados das 7h às 18h e domingos e feriados das 8h às 14h.",
  },
];
