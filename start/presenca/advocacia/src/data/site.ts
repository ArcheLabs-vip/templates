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
  icon?: "scale" | "shield" | "file" | "building" | "family" | "briefcase";
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
  name: "Borges & Leal Advogados",
  title: "Borges & Leal Advogados | Assessoria jurídica em São Paulo",
  description:
    "Escritório de advocacia com atuação em direito civil, trabalhista, empresarial e de família. Atendimento personalizado e comprometido com a defesa dos seus direitos em São Paulo.",
  url: "https://advocacia.example.com",
  locale: "pt-BR",
  demo: {
    enabled: true,
    notice: "Modelo demonstrativo — dados, resultados e avaliações são ilustrativos.",
  },
  seo: {
    socialImage: "/images/hero-escritorio.jpg",
  },
  business: {
    schemaType: "LegalService",
    priceRange: "$$",
    openingHours: ["Mo-Fr 09:00-18:00"],
  },
  location: {
    streetAddress: "Av. Fictícia, 1200, Sala 804",
    locality: "São Paulo",
    region: "SP",
    postalCode: "00000-000",
    country: "BR",
    displayAddress: "Av. Fictícia, 1200, Sala 804 - São Paulo, SP",
  },
  contact: {
    email: "contato@borgesleal.example",
    phone: "(99) 99999-9999",
    phoneHref: "tel:+5599999999999",
    whatsapp: "5599999999999",
    whatsappHref:
      "https://wa.me/5599999999999?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta.",
    hours: "Segunda a sexta, das 9h às 18h",
    schedule: [
      { days: "Segunda a sexta", hours: "9h às 18h" },
      { days: "Sábado", hours: "Mediante agendamento" },
      { days: "Domingo", hours: "Fechado" },
    ],
  },
  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
  },
  navigation: [
    { label: "Áreas de atuação", href: "/#areas-de-atuacao" },
    { label: "Casos", href: "/#casos" },
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
    eyebrow: "Assessoria jurídica em São Paulo",
    title: "Direito com clareza e compromisso.",
    description:
      "Orientação jurídica personalizada para proteger seus interesses com segurança, ética e dedicação.",
    image: "/images/hero-escritorio.jpg",
    imageAlt: "Escritório de advocacia elegante com estantes de livros jurídicos e mesa de trabalho",
    primaryActionLabel: "Falar com advogado",
    secondaryActionLabel: "Ligar agora",
  },
  services: {
    title: "Áreas de atuação",
    description:
      "Atuação especializada nas principais áreas do direito, com atendimento personalizado e comprometido com a defesa dos seus interesses.",
  },
  benefits: {
    title: "Compromisso com a qualidade do atendimento",
    description: "Estrutura preparada, equipe qualificada e atenção individualizada.",
    image: "/images/ambiente-escritorio.jpg",
    imageAlt: "Sala de reunião do escritório de advocacia com vista para a cidade",
  },
  results: {
    title: "Atuação em casos relevantes",
    description:
      "Registros ilustrativos que demonstram a seriedade e a dedicação do nosso escritório em diferentes áreas do direito.",
    actionLabel: "Consultar sobre meu caso",
  },
  process: {
    title: "Como funciona nosso atendimento",
    description: "Um processo transparente para oferecer a melhor orientação jurídica.",
  },
  team: {
    title: "Nossa equipe",
    description:
      "Advogados com formação sólida e experiência em diferentes áreas do direito, comprometidos com a excelência.",
  },
  testimonials: {
    title: "O que nossos clientes dizem",
    description:
      "Relatos ilustrativos sobre a experiência de atendimento, a condução dos casos e a dedicação da equipe.",
    sourceLabel: "Modelo de avaliações",
    showGoogleBrand: false,
  },
  faq: {
    title: "Dúvidas frequentes",
    description: "Respostas sobre o funcionamento do escritório e o processo de atendimento.",
  },
  finalCta: {
    title: "Agende uma consulta e entenda seus direitos.",
    description:
      "Entre em contato pelo WhatsApp ou telefone para conversar sobre seu caso. A consulta inicial é sigilosa e sem compromisso.",
    phoneLabel: "Prefere falar por telefone?",
    primaryActionLabel: "Falar com advogado",
  },
} satisfies HomePageContent;

export const services: ServiceItem[] = [
  {
    title: "Direito Civil",
    description:
      "Assessoria em contratos, responsabilidade civil, direito do consumidor, cobranças e questões patrimoniais.",
    detail: "Contratos e obrigações",
    icon: "scale",
    includes: ["Contratos", "Responsabilidade civil", "Direito do consumidor", "Cobranças judiciais"],
  },
  {
    title: "Direito Trabalhista",
    description:
      "Defesa de direitos trabalhistas, rescisões, verbas devidas, assédio e relações de emprego.",
    detail: "Relações de trabalho",
    icon: "briefcase",
    includes: ["Rescisões", "Verbas trabalhistas", "Assédio moral", "Acidente de trabalho"],
  },
  {
    title: "Direito Empresarial",
    description:
      "Constituição de empresas, contratos societários, recuperação judicial e consultoria preventiva.",
    detail: "Assessoria corporativa",
    icon: "building",
    includes: ["Constituição societária", "Contratos empresariais", "Recuperação judicial", "Compliance"],
  },
  {
    title: "Direito de Família",
    description:
      "Divórcio, guarda, pensão alimentícia, inventário e planejamento sucessório com sensibilidade.",
    detail: "Família e sucessões",
    icon: "family",
    includes: ["Divórcio", "Guarda de filhos", "Pensão alimentícia", "Inventário e partilha"],
  },
  {
    title: "Direito Imobiliário",
    description:
      "Compra e venda de imóveis, locação, usucapião, regularização fundiária e análise de documentos.",
    detail: "Transações e regularização",
    icon: "file",
    includes: ["Compra e venda", "Contratos de locação", "Usucapião", "Regularização fundiária"],
  },
  {
    title: "Direito Penal",
    description:
      "Defesa criminal, medidas protetivas, habeas corpus e acompanhamento em delegacias e audiências.",
    detail: "Defesa e garantias",
    icon: "shield",
    includes: ["Defesa criminal", "Habeas corpus", "Medidas protetivas", "Audiências de custódia"],
  },
];

export const trustMetrics: MetricItem[] = [
  {
    value: "15+",
    label: "anos de atuação",
    detail: "em diversas áreas do direito",
  },
  {
    value: "3.000+",
    label: "casos assessorados",
    detail: "com dedicação e ética profissional",
  },
  {
    value: "4,9",
    label: "avaliação média",
    detail: "satisfação com atendimento e condução",
  },
];

export const results: ResultItem[] = [
  {
    title: "Assessoria completa em reestruturação empresarial",
    category: "Direito Empresarial",
    image: "/images/ambiente-escritorio.jpg",
    imageAlt: "Sala de reunião do escritório durante assessoria empresarial",
  },
  {
    title: "Acompanhamento dedicado em caso de família",
    category: "Direito de Família",
    image: "/images/consulta-juridica.jpg",
    imageAlt: "Advogado em consulta com cliente sobre questão familiar",
  },
  {
    title: "Estrutura preparada para cada atendimento",
    category: "Escritório e infraestrutura",
    image: "/images/hero-escritorio.jpg",
    imageAlt: "Interior do escritório de advocacia com ambiente profissional",
  },
];

export const benefits: BenefitItem[] = [
  {
    title: "Atendimento personalizado",
    description: "Cada caso é analisado individualmente, com atenção às particularidades e aos objetivos do cliente.",
  },
  {
    title: "Sigilo e ética profissional",
    description: "Todas as informações são tratadas com absoluta confidencialidade, conforme as normas da OAB.",
  },
  {
    title: "Equipe multidisciplinar",
    description: "Advogados especializados em diferentes áreas, permitindo uma assessoria integrada e abrangente.",
  },
];

export const process: ProcessItem[] = [
  {
    title: "Consulta inicial",
    description: "Ouvimos seu caso, analisamos os documentos e apresentamos as possibilidades jurídicas de forma clara.",
  },
  {
    title: "Estratégia jurídica",
    description: "Definimos a melhor abordagem para o seu caso, com transparência sobre prazos, custos e etapas.",
  },
  {
    title: "Acompanhamento",
    description: "Conduzimos o processo com dedicação, mantendo o cliente informado sobre cada andamento.",
  },
  {
    title: "Conclusão",
    description: "Buscamos a melhor resolução possível, com foco na proteção dos seus direitos e interesses.",
  },
];

export const team: TeamMember[] = [
  {
    name: "Dr. Ricardo Borges",
    role: "Advogado — Direito Civil e Empresarial",
    bio: "OAB/SP 000.000. Especialista em direito contratual e societário com mais de 18 anos de experiência.",
  },
  {
    name: "Dra. Marina Leal",
    role: "Advogada — Direito de Família e Sucessões",
    bio: "OAB/SP 000.000. Mestre em direito civil, com atuação dedicada em questões familiares e sucessórias.",
  },
  {
    name: "Dr. Henrique Almeida",
    role: "Advogado — Direito Trabalhista e Penal",
    bio: "OAB/SP 000.000. Pós-graduado em direito do trabalho, com experiência em defesa criminal e trabalhista.",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "Fui muito bem atendido desde o primeiro contato. Explicaram tudo com clareza e conduziram meu caso com muita dedicação.",
    name: "Carlos Eduardo",
    context: "Direito Trabalhista",
    rating: 5,
  },
  {
    quote: "Profissionais sérios, éticos e sempre disponíveis. Resolveram meu inventário com agilidade e sensibilidade.",
    name: "Mariana Fonseca",
    context: "Direito de Família",
    rating: 5,
  },
  {
    quote: "A assessoria empresarial foi essencial para regularizar minha empresa. Recomendo o escritório sem ressalvas.",
    name: "Roberto Nascimento",
    context: "Direito Empresarial",
    rating: 5,
  },
];

export const faq: FAQItem[] = [
  {
    question: "Como funciona a consulta inicial?",
    answer:
      "A consulta inicial é o primeiro contato para entender o seu caso. Ouvimos sua situação, analisamos documentos quando necessário e apresentamos as possibilidades jurídicas. É sigilosa e pode ser presencial ou online.",
  },
  {
    question: "Quais áreas do direito o escritório atende?",
    answer:
      "Atuamos em direito civil, trabalhista, empresarial, de família e sucessões, imobiliário e penal. Cada área conta com advogados especializados para oferecer a melhor orientação.",
  },
  {
    question: "Como são cobrados os honorários?",
    answer:
      "Os honorários são definidos com transparência na consulta inicial, conforme a complexidade do caso e a tabela da OAB. Trabalhamos com diferentes modalidades de pagamento.",
  },
  {
    question: "Quanto tempo dura um processo judicial?",
    answer:
      "O tempo varia conforme a área, a complexidade e o volume do tribunal. Na consulta, informamos estimativas realistas e as alternativas disponíveis, como negociação e mediação.",
  },
  {
    question: "O escritório atende online?",
    answer:
      "Sim. Oferecemos consultas por videoconferência para clientes de qualquer localidade. Também utilizamos ferramentas digitais seguras para troca de documentos e acompanhamento processual.",
  },
];
