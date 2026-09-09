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
  responsibleDoctor: {
    name: string;
    crm: string;
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

export interface SpecialtyItem {
  title: string;
  description: string;
  icon?: "stethoscope" | "heart" | "brain" | "bone" | "eye" | "baby";
}

export interface MetricItem {
  value: string;
  label: string;
  detail?: string;
}

export interface TeamMember {
  name: string;
  specialty: string;
  crm: string;
  bio: string;
}

export interface InsuranceItem {
  name: string;
}

export interface InfrastructureItem {
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
    specialties: boolean;
    team: boolean;
    insurances: boolean;
    benefits: boolean;
    infrastructure: boolean;
    process: boolean;
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
  specialties: { title: string; description: string };
  team: { title: string; description: string };
  insurances: { title: string; description: string };
  benefits: { title: string; description: string; image: string; imageAlt: string };
  infrastructure: { title: string; description: string; actionLabel: string };
  process: { title: string; description: string };
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

/* ──────────────────────────────────────────────────────── */
/*  DADOS DEMO — CLÍNICA MÉDICA                            */
/* ──────────────────────────────────────────────────────── */

export const site = {
  name: "Vita Clínica Médica",
  title: "Vita Clínica Médica | Clínica Multiespecialidades em São Paulo — Agende sua Consulta",
  description:
    "Clínica médica com atendimento multiespecialidades, corpo clínico qualificado, convênios e atendimento particular. Agende sua consulta em São Paulo.",
  url: "https://clinica.example.com",
  locale: "pt-BR",
  demo: {
    enabled: true,
    notice: "Modelo demonstrativo — dados, especialidades e depoimentos são ilustrativos.",
  },
  seo: {
    socialImage: "/images/hero-clinica.jpg",
  },
  business: {
    schemaType: "MedicalBusiness",
    priceRange: "$$",
    openingHours: ["Mo-Fr 07:00-20:00", "Sa 08:00-14:00"],
  },
  responsibleDoctor: {
    name: "Dr. Ricardo Almeida",
    crm: "CRM/SP 123456",
  },
  location: {
    streetAddress: "Rua Exemplo, 500 — Sala 12",
    locality: "São Paulo",
    region: "SP",
    postalCode: "00000-000",
    country: "BR",
    displayAddress: "Rua Exemplo, 500 — Sala 12 — São Paulo, SP",
  },
  contact: {
    email: "contato@vitaclinica.example",
    phone: "(11) 99999-9999",
    phoneHref: "tel:+5511999999999",
    whatsapp: "5511999999999",
    whatsappHref:
      "https://wa.me/5511999999999?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta.",
    hours: "Segunda a sexta, 7h às 20h; sábado, 8h às 14h",
    schedule: [
      { days: "Segunda a sexta", hours: "7h–20h" },
      { days: "Sábado", hours: "8h–14h" },
      { days: "Domingo e feriados", hours: "Fechado" },
    ],
  },
  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
  },
  navigation: [
    { label: "Especialidades", href: "/#especialidades" },
    { label: "Corpo Clínico", href: "/#corpo-clinico" },
    { label: "Convênios", href: "/#convenios" },
    { label: "Estrutura", href: "/#estrutura" },
    { label: "Dúvidas", href: "/#duvidas" },
  ],
} satisfies SiteConfig;

export const homePage = {
  sections: {
    trustMetrics: true,
    specialties: true,
    team: true,
    insurances: true,
    benefits: true,
    infrastructure: true,
    process: true,
    testimonials: true,
    faq: true,
    finalCta: true,
  },
  hero: {
    eyebrow: "Clínica Geral · Cardiologia · Ortopedia · Dermatologia · Pediatria",
    title: "Sua saúde em boas mãos.",
    description:
      "Atendimento humanizado, corpo clínico experiente e infraestrutura moderna para cuidar de você e da sua família com excelência.",
    image: "/images/hero-clinica.jpg",
    imageAlt: "Recepção da Vita Clínica Médica com ambiente acolhedor e iluminação natural",
    primaryActionLabel: "Agendar consulta",
    secondaryActionLabel: "Ligar agora",
  },
  specialties: {
    title: "Nossas especialidades",
    description:
      "Oferecemos atendimento em diversas especialidades médicas, com profissionais experientes e comprometidos com o seu bem-estar.",
  },
  team: {
    title: "Corpo clínico",
    description:
      "Médicos qualificados, com registro ativo no CRM, dedicados a oferecer um atendimento seguro e acolhedor.",
  },
  insurances: {
    title: "Convênios e planos aceitos",
    description:
      "Aceitamos os principais planos de saúde. Confira abaixo se o seu convênio está na lista ou entre em contato para mais informações.",
  },
  benefits: {
    title: "Por que escolher a Vita Clínica",
    description: "Qualidade, confiança e acolhimento em cada consulta.",
    image: "/images/atendimento-beneficios.jpg",
    imageAlt: "Médica atendendo paciente com atenção e empatia em consultório moderno",
  },
  infrastructure: {
    title: "Nossa estrutura",
    description:
      "Consultórios modernos, salas de exames equipadas e ambientes projetados para o seu conforto e segurança.",
    actionLabel: "Agendar visita",
  },
  process: {
    title: "Como agendar sua consulta",
    description: "Um processo simples e rápido para você cuidar da sua saúde hoje mesmo.",
  },
  testimonials: {
    title: "O que dizem nossos pacientes",
    description:
      "Relatos ilustrativos sobre a experiência de atendimento na Vita Clínica Médica.",
    sourceLabel: "Modelo de avaliações",
    showGoogleBrand: false,
  },
  faq: {
    title: "Dúvidas frequentes",
    description: "Tudo o que você precisa saber antes da sua consulta.",
  },
  finalCta: {
    title: "Cuide da sua saúde agora.",
    description:
      "Agende sua consulta pelo WhatsApp ou ligue para nossa central. Atendimento rápido e sem complicação.",
    phoneLabel: "Prefere ligar?",
    primaryActionLabel: "Agendar consulta",
  },
} satisfies HomePageContent;

export const specialties: SpecialtyItem[] = [
  {
    title: "Clínica Geral",
    description:
      "Atendimento primário com avaliação completa, diagnóstico precoce e acompanhamento contínuo da sua saúde.",
    icon: "stethoscope",
  },
  {
    title: "Cardiologia",
    description:
      "Consultas, exames complementares e acompanhamento de doenças cardiovasculares com cardiologistas especializados.",
    icon: "heart",
  },
  {
    title: "Ortopedia",
    description:
      "Diagnóstico e tratamento de lesões e doenças do sistema musculoesquelético, com foco em qualidade de vida.",
    icon: "bone",
  },
  {
    title: "Dermatologia",
    description:
      "Cuidados com a pele, cabelos e unhas, incluindo dermatologia clínica e procedimentos estéticos.",
    icon: "eye",
  },
  {
    title: "Neurologia",
    description:
      "Avaliação e tratamento de distúrbios neurológicos, incluindo cefaleias, epilepsia e doenças degenerativas.",
    icon: "brain",
  },
  {
    title: "Pediatria",
    description:
      "Atendimento infantil com atenção especial ao desenvolvimento, vacinação e acompanhamento do crescimento.",
    icon: "baby",
  },
];

export const trustMetrics: MetricItem[] = [
  {
    value: "15+",
    label: "anos de experiência",
    detail: "cuidando da saúde da comunidade",
  },
  {
    value: "12.000+",
    label: "pacientes atendidos",
    detail: "com excelência e humanização",
  },
  {
    value: "4,9",
    label: "nota de satisfação",
    detail: "em avaliações de pacientes",
  },
];

export const team: TeamMember[] = [
  {
    name: "Dr. Ricardo Almeida",
    specialty: "Clínica Geral e Cardiologia",
    crm: "CRM/SP 123456",
    bio: "Responsável técnico. Mais de 20 anos de experiência em clínica médica e cardiologia, com foco em medicina preventiva e qualidade de vida.",
  },
  {
    name: "Dra. Carolina Mendes",
    specialty: "Dermatologia",
    crm: "CRM/SP 234567",
    bio: "Especialista em dermatologia clínica e estética. Membro da Sociedade Brasileira de Dermatologia com abordagem individualizada.",
  },
  {
    name: "Dr. Felipe Santos",
    specialty: "Ortopedia e Traumatologia",
    crm: "CRM/SP 345678",
    bio: "Ortopedista com experiência em medicina esportiva e tratamento de lesões articulares, com foco em reabilitação funcional.",
  },
  {
    name: "Dra. Marina Costa",
    specialty: "Pediatria",
    crm: "CRM/SP 456789",
    bio: "Pediatra com abordagem acolhedora e ampla experiência em acompanhamento do desenvolvimento infantil e adolescente.",
  },
];

export const insurances: InsuranceItem[] = [
  { name: "Amil" },
  { name: "Bradesco Saúde" },
  { name: "SulAmérica" },
  { name: "Unimed" },
  { name: "NotreDame Intermédica" },
  { name: "Porto Seguro Saúde" },
  { name: "Hapvida" },
  { name: "Prevent Senior" },
  { name: "São Cristóvão" },
  { name: "Particular" },
];

export const infrastructure: InfrastructureItem[] = [
  {
    title: "Recepção moderna e acolhedora",
    category: "Recepção",
    image: "/images/recepcao.jpg",
    imageAlt: "Recepção da clínica com ambiente limpo, moderno e iluminação natural",
  },
  {
    title: "Consultórios equipados com tecnologia de ponta",
    category: "Consultórios",
    image: "/images/consultorio.jpg",
    imageAlt: "Consultório médico equipado com mesa de exame e equipamentos modernos",
  },
  {
    title: "Salas de procedimentos e exames complementares",
    category: "Procedimentos",
    image: "/images/sala-procedimentos.jpg",
    imageAlt: "Sala de procedimentos com maca e equipamentos médicos preparados",
  },
];

export const benefits: BenefitItem[] = [
  {
    title: "Atendimento humanizado",
    description: "Consultas sem pressa, com escuta ativa e atenção individualizada a cada paciente, respeitando suas necessidades.",
  },
  {
    title: "Corpo clínico qualificado",
    description: "Médicos com registro ativo no CRM, especializações reconhecidas e atualização constante para oferecer o melhor cuidado.",
  },
  {
    title: "Infraestrutura moderna",
    description: "Consultórios equipados com tecnologia atual, ambiente climatizado, acessível e projetado para o seu conforto.",
  },
];

export const process: ProcessItem[] = [
  {
    title: "Entre em contato",
    description: "Envie uma mensagem pelo WhatsApp ou ligue para nossa central para agendar sua consulta na especialidade desejada.",
  },
  {
    title: "Confirmação",
    description: "Nossa equipe confirma o horário, o médico e envia as orientações de preparo, se necessário.",
  },
  {
    title: "Consulta",
    description: "Compareça à clínica no horário marcado. Você será recebido pela nossa equipe em um ambiente acolhedor e organizado.",
  },
  {
    title: "Acompanhamento",
    description: "Após a consulta, receba seus resultados e retornos de forma organizada, com acompanhamento contínuo do seu caso.",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "Fui muito bem atendida desde a recepção até a consulta. A Dra. Carolina foi extremamente atenciosa e explicou tudo com paciência.",
    name: "Ana Beatriz Oliveira",
    context: "Paciente — Dermatologia",
    rating: 5,
  },
  {
    quote: "Ambiente limpo, organizado e pontualidade no atendimento. O Dr. Ricardo passou segurança e competência desde o primeiro contato.",
    name: "Marcos Vieira",
    context: "Paciente — Cardiologia",
    rating: 5,
  },
  {
    quote: "Minha filha adora ir ao médico aqui. A Dra. Marina é incrível com crianças, muito paciente e carinhosa.",
    name: "Patrícia Lima",
    context: "Mãe de paciente — Pediatria",
    rating: 5,
  },
];

export const faq: FAQItem[] = [
  {
    question: "Preciso de encaminhamento para consultar um especialista?",
    answer:
      "Não é necessário encaminhamento para agendar uma consulta particular. Alguns convênios podem exigir guia de referência — entre em contato conosco para confirmar.",
  },
  {
    question: "Quais convênios são aceitos?",
    answer:
      "Aceitamos os principais planos de saúde como Amil, Bradesco Saúde, SulAmérica, Unimed, NotreDame Intermédica, Porto Seguro, Hapvida, Prevent Senior e outros. Também realizamos atendimento particular.",
  },
  {
    question: "A clínica realiza exames?",
    answer:
      "Realizamos alguns exames complementares no próprio local, como eletrocardiograma e exames dermatológicos. Para exames laboratoriais e de imagem, contamos com uma rede de parceiros conveniados.",
  },
  {
    question: "A clínica tem acessibilidade?",
    answer:
      "Sim. Nosso espaço é totalmente acessível, com rampa de acesso, elevador, banheiros adaptados e sinalização adequada para pessoas com mobilidade reduzida.",
  },
  {
    question: "Como faço para agendar uma consulta?",
    answer:
      "Você pode agendar pelo nosso WhatsApp, por telefone ou presencialmente na recepção. Nosso horário de funcionamento é de segunda a sexta, das 7h às 20h, e sábados das 8h às 14h.",
  },
];
