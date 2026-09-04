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
  name: "Instituto Presença",
  title: "Instituto Presença | Psicologia Clínica em São Paulo",
  description:
    "Psicoterapia humanizada com abordagem individualizada, atendimento presencial e online em São Paulo.",
  url: "https://psicologia.example.com",
  locale: "pt-BR",
  demo: {
    enabled: true,
    notice: "Modelo demonstrativo — dados, depoimentos e avaliações são ilustrativos.",
  },
  seo: {
    socialImage: "/images/hero-esteticista.jpg",
  },
  business: {
    schemaType: "MedicalBusiness",
    priceRange: "$$",
    openingHours: ["Mo-Fr 08:00-20:00", "Sa 09:00-14:00"],
  },
  location: {
    streetAddress: "Rua Fictícia, 200",
    locality: "São Paulo",
    region: "SP",
    postalCode: "00000-000",
    country: "BR",
    displayAddress: "Rua Fictícia, 200 - São Paulo, SP",
  },
  contact: {
    email: "contato@institutopresenca.example",
    phone: "(11) 99999-9999",
    phoneHref: "tel:+5511999999999",
    whatsapp: "5511999999999",
    whatsappHref:
      "https://wa.me/5511999999999?text=Olá%2C%20gostaria%20de%20agendar%20uma%20sessão.",
    hours: "Segunda a sexta, das 8h às 20h; sábado, das 9h às 14h",
    schedule: [
      { days: "Segunda a sexta", hours: "8h às 20h" },
      { days: "Sábado", hours: "9h às 14h" },
      { days: "Domingo", hours: "Fechado" },
    ],
  },
  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
  },
  navigation: [
    { label: "Especialidades", href: "/#servicos" },
    { label: "Como Funciona", href: "/#como-funciona" },
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
    results: false,
    process: true,
    team: true,
    testimonials: true,
    faq: true,
    finalCta: true,
  },
  hero: {
    eyebrow: "Psicologia clínica em São Paulo",
    title: "Um espaço seguro para você ser.",
    description:
      "Psicoterapia focada no seu bem-estar emocional, autoconhecimento e qualidade de vida, com escuta ética e acolhedora.",
    image: "/images/hero-psicologia.jpg",
    imageAlt: "Consultório de psicologia com ambiente calmo e acolhedor",
    primaryActionLabel: "Agendar sessão",
    secondaryActionLabel: "Ligar agora",
  },
  services: {
    title: "Especialidades",
    description:
      "Atendimentos focados nas suas necessidades e no seu momento de vida atual.",
  },
  benefits: {
    title: "Por que investir em psicoterapia?",
    description: "A terapia é uma ferramenta contínua de desenvolvimento pessoal, não apenas para momentos de crise.",
    image: "/images/ambiente-psicologia.jpg",
    imageAlt: "Ambiente de consultório acolhedor e organizado",
  },
  results: {
    title: "Histórias de transformação",
    description: "Depoimentos ilustrativos que refletem o potencial do acompanhamento psicológico.",
    actionLabel: "Quero começar",
  },
  process: {
    title: "Como funciona o atendimento",
    description: "Um processo cuidadoso para que você se sinta seguro desde o primeiro contato.",
  },
  team: {
    title: "Profissionais especializados",
    description:
      "Equipe de psicólogos com formação sólida, supervisão contínua e compromisso ético.",
  },
  testimonials: {
    title: "O que nossos pacientes dizem",
    description:
      "Relatos ilustrativos sobre a experiência de atendimento e os resultados do processo terapêutico.",
    sourceLabel: "Modelo de avaliações",
    showGoogleBrand: false,
  },
  faq: {
    title: "Dúvidas frequentes",
    description: "Respostas que ajudam a dar o primeiro passo com mais segurança.",
  },
  finalCta: {
    title: "Pronto para dar o primeiro passo?",
    description:
      "Envie uma mensagem pelo WhatsApp ou ligue para agendar. O primeiro contato é acolhedor e sem compromisso.",
    phoneLabel: "Prefere falar por telefone?",
    primaryActionLabel: "Agendar sessão",
  },
} satisfies HomePageContent;

export const services: ServiceItem[] = [
  {
    title: "Psicoterapia individual",
    description:
      "Espaço seguro e sigiloso para lidar com ansiedade, depressão, luto e buscar autoconhecimento.",
    detail: "Escuta e autoconhecimento",
    icon: "face",
    includes: ["Ansiedade e estresse", "Depressão", "Luto e perdas", "Autoconhecimento"],
  },
  {
    title: "Terapia de casal",
    description:
      "Melhore a comunicação, resolva conflitos e fortaleça o vínculo afetivo com o seu parceiro.",
    detail: "Comunicação e vínculo",
    icon: "sparkle",
    includes: ["Resolução de conflitos", "Comunicação não-violenta", "Fortalecimento de vínculos", "Separação saudável"],
  },
  {
    title: "Avaliação psicológica",
    description:
      "Testagem e diagnóstico clínico para compreensão de quadros como TDAH, autismo e dificuldades de aprendizagem.",
    detail: "Diagnóstico e compreensão",
    icon: "leaf",
    includes: ["Testes psicométricos", "Entrevista clínica", "Devolutiva detalhada", "Encaminhamento interdisciplinar"],
  },
  {
    title: "Orientação de carreira",
    description:
      "Apoio para escolhas profissionais, transição de carreira e planejamento de vida pessoal.",
    detail: "Propósito e direção",
    icon: "hand",
    includes: ["Perfil comportamental", "Planejamento de carreira", "Transição profissional", "Equilíbrio vida-trabalho"],
  },
  {
    title: "Psicoterapia infantil",
    description:
      "Acompanhamento terapêutico para crianças através de técnicas lúdicas e orientação parental.",
    detail: "Acolhimento e desenvolvimento",
    icon: "body",
    includes: ["Ludoterapia", "Orientação parental", "Dificuldades escolares", "Desenvolvimento emocional"],
  },
  {
    title: "Atendimento online",
    description:
      "Sessões por videochamada com a mesma qualidade do atendimento presencial, de onde você estiver.",
    detail: "Flexibilidade e acesso",
    icon: "brow",
    includes: ["Plataforma segura", "Horários flexíveis", "Mesma qualidade clínica", "De qualquer lugar"],
  },
];

export const trustMetrics: MetricItem[] = [
  {
    value: "1.500+",
    label: "sessões realizadas",
    detail: "com escuta individualizada",
  },
  {
    value: "4,9",
    label: "avaliação média",
    detail: "satisfação com o atendimento",
  },
  {
    value: "8",
    label: "anos de experiência",
    detail: "em psicologia clínica",
  },
];

export const results: ResultItem[] = [];

export const benefits: BenefitItem[] = [
  {
    title: "Autoconhecimento",
    description: "Compreender seus padrões de pensamento e comportamento para agir de forma mais consciente.",
  },
  {
    title: "Inteligência emocional",
    description: "Aprender a identificar, nomear e regular emoções difíceis como raiva, medo e frustração.",
  },
  {
    title: "Relacionamentos saudáveis",
    description: "Melhorar a comunicação interpessoal e fortalecer vínculos afetivos.",
  },
];

export const process: ProcessItem[] = [
  {
    title: "Primeiro contato",
    description: "Agende sua sessão por WhatsApp ou telefone. Vamos entender sua demanda inicial e marcar um horário.",
  },
  {
    title: "Sessão de acolhimento",
    description: "Na primeira sessão, nos conhecemos. Conversamos sobre seus objetivos e combinamos frequência e modalidade.",
  },
  {
    title: "Processo terapêutico",
    description: "Sessões semanais focadas no seu processo de mudança, autoconhecimento e bem-estar emocional.",
  },
  {
    title: "Acompanhamento",
    description: "Reavaliamos juntos o andamento da terapia e ajustamos o plano terapêutico conforme sua evolução.",
  },
];

export const team: TeamMember[] = [
  {
    name: "Dra. Marina Alves",
    role: "Psicóloga — Terapia Cognitivo-Comportamental",
    bio: "CRP 06/XXXXX. Especialista em TCC com foco em ansiedade, depressão e regulação emocional. Mais de 10 anos de experiência clínica.",
  },
  {
    name: "Dr. Rafael Costa",
    role: "Psicólogo — Terapia de Casal e Família",
    bio: "CRP 06/XXXXX. Formação em terapia sistêmica, focado em comunicação e resolução de conflitos nos relacionamentos.",
  },
  {
    name: "Dra. Juliana Neves",
    role: "Psicóloga — Avaliação Neuropsicológica",
    bio: "CRP 06/XXXXX. Especialista em avaliação psicológica e neuropsicológica infantil e adulta.",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "A terapia me ajudou a entender padrões que eu repetia há anos. Hoje me sinto mais presente e segura nas minhas escolhas.",
    name: "Camila Fernandes",
    context: "Psicoterapia individual",
    rating: 5,
  },
  {
    quote: "O ambiente é muito acolhedor e a escuta é genuína. Saio de cada sessão com mais clareza sobre mim mesma.",
    name: "Renata Oliveira",
    context: "Terapia Cognitivo-Comportamental",
    rating: 5,
  },
  {
    quote: "A terapia de casal transformou nossa comunicação. Recomendo de coração para quem está passando por dificuldades.",
    name: "André e Paula Mendes",
    context: "Terapia de casal",
    rating: 5,
  },
];

export const faq: FAQItem[] = [
  {
    question: "Qual a duração de cada sessão?",
    answer:
      "As sessões individuais têm duração média de 50 minutos. A terapia de casal pode durar até 1 hora e 15 minutos, conforme a necessidade.",
  },
  {
    question: "O atendimento pode ser online?",
    answer:
      "Sim. Oferecemos atendimento online por videochamada com a mesma eficácia e sigilo do atendimento presencial, regulamentado pelo CFP.",
  },
  {
    question: "Atendem por plano de saúde?",
    answer:
      "Trabalhamos de forma particular, mas fornecemos recibo para que você possa solicitar o reembolso junto ao seu convênio.",
  },
  {
    question: "Como funciona o sigilo profissional?",
    answer:
      "Tudo o que é dito em sessão é estritamente confidencial, amparado pelo Código de Ética Profissional do Psicólogo e pela legislação vigente.",
  },
  {
    question: "Preciso de encaminhamento médico?",
    answer:
      "Não. Você pode agendar diretamente com o psicólogo. Se necessário, trabalharemos em conjunto com outros profissionais da sua saúde.",
  },
];
