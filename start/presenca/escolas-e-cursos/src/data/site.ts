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
  icon?: "book" | "globe" | "brain" | "target" | "user" | "sparkle";
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
  name: "Instituto Luminar",
  title: "Instituto Luminar | Cursos de idiomas, reforço escolar e preparatório em São Paulo",
  description:
    "Escola de idiomas, reforço escolar e preparatório para vestibular com metodologia ativa, turmas reduzidas e acompanhamento individual em São Paulo.",
  url: "https://escola.example.com",
  locale: "pt-BR",
  demo: {
    enabled: true,
    notice: "Modelo demonstrativo — dados, programas e depoimentos são ilustrativos.",
  },
  seo: {
    socialImage: "/images/hero-escola.jpg",
  },
  business: {
    schemaType: "EducationalOrganization",
    priceRange: "$$",
    openingHours: ["Mo-Fr 07:30-21:00", "Sa 08:00-13:00"],
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
    email: "contato@institutoluminar.example",
    phone: "(99) 99999-9999",
    phoneHref: "tel:+5599999999999",
    whatsapp: "5599999999999",
    whatsappHref:
      "https://wa.me/5599999999999?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20cursos.",
    hours: "Segunda a sexta, 7h30 às 21h; sábado, 8h às 13h",
    schedule: [
      { days: "Segunda a sexta", hours: "7h30–21h" },
      { days: "Sábado", hours: "8h–13h" },
      { days: "Domingo e feriados", hours: "Fechado" },
    ],
  },
  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
  },
  navigation: [
    { label: "Programas", href: "/#programas" },
    { label: "Estrutura", href: "/#estrutura" },
    { label: "Equipe", href: "/#equipe" },
    { label: "Depoimentos", href: "/#depoimentos" },
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
    eyebrow: "Cursos de idiomas, reforço escolar e preparatório em São Paulo",
    title: "Ensino que transforma futuros.",
    description:
      "Metodologia ativa, turmas reduzidas e professores dedicados. Aqui, cada aluno encontra o suporte que precisa para alcançar seus objetivos.",
    image: "/images/hero-escola.jpg",
    imageAlt: "Sala de aula moderna do Instituto Luminar com alunos estudando em grupo",
    primaryActionLabel: "Quero me matricular",
    secondaryActionLabel: "Ligar agora",
  },
  services: {
    title: "Nossos programas",
    description:
      "Do reforço escolar ao preparatório para vestibular, com turmas reduzidas e acompanhamento individual em todos os cursos.",
  },
  benefits: {
    title: "Por que escolher o Instituto Luminar",
    description: "Estrutura, método e dedicação pensados para o desenvolvimento de cada aluno.",
    image: "/images/sala-aula.jpg",
    imageAlt: "Professor orientando aluno em sala de aula com quadro digital",
  },
  results: {
    title: "Nossa estrutura",
    description:
      "Conheça os espaços do Instituto Luminar — salas climatizadas, biblioteca e área de convivência.",
    actionLabel: "Agendar visita",
  },
  process: {
    title: "Como funciona a matrícula",
    description: "Desde o primeiro contato até o início das aulas, cada etapa é simples e transparente.",
  },
  team: {
    title: "Nossa equipe",
    description:
      "Professores com experiência, formação continuada e compromisso real com o aprendizado dos alunos.",
  },
  testimonials: {
    title: "O que dizem sobre nós",
    description:
      "Relatos ilustrativos de alunos e responsáveis sobre a experiência no Instituto Luminar.",
    sourceLabel: "Modelo de avaliações",
    showGoogleBrand: false,
  },
  faq: {
    title: "Dúvidas frequentes",
    description: "Informações sobre matrículas, turmas, material didático e funcionamento.",
  },
  finalCta: {
    title: "Matricule-se e dê o próximo passo no seu aprendizado.",
    description:
      "Envie uma mensagem pelo WhatsApp ou ligue para conhecer nossos programas. Agende uma aula experimental gratuita.",
    phoneLabel: "Prefere ligar?",
    primaryActionLabel: "Quero me matricular",
  },
} satisfies HomePageContent;

export const services: ServiceItem[] = [
  {
    title: "Inglês",
    description:
      "Curso de inglês do básico ao avançado com foco em conversação, leitura e preparação para certificações internacionais.",
    detail: "Do básico ao avançado",
    icon: "globe",
    includes: ["Conversação", "Gramática aplicada", "Preparação TOEFL/IELTS", "Material digital incluso", "Turmas de até 10 alunos"],
  },
  {
    title: "Espanhol",
    description:
      "Aulas de espanhol com professores nativos e metodologia comunicativa. Turmas para adultos, adolescentes e crianças.",
    detail: "Professores nativos",
    icon: "globe",
    includes: ["Conversação prática", "Cultura hispânica", "Preparação DELE", "Grupos e individuais", "Material didático"],
  },
  {
    title: "Reforço Escolar",
    description:
      "Acompanhamento pedagógico personalizado em matemática, português, ciências e demais disciplinas do ensino fundamental e médio.",
    detail: "Fundamental e médio",
    icon: "book",
    includes: ["Matemática", "Português", "Ciências", "História e Geografia", "Resolução de exercícios"],
  },
  {
    title: "Preparatório ENEM e Vestibular",
    description:
      "Programa intensivo com simulados, revisões temáticas, redação e orientação vocacional para os principais vestibulares.",
    detail: "Aprovação garantida",
    icon: "target",
    includes: ["Simulados semanais", "Correção de redação", "Revisões temáticas", "Orientação vocacional", "Material atualizado"],
  },
  {
    title: "Aulas Particulares",
    description:
      "Atendimento individual com horários flexíveis para alunos que buscam foco total em uma disciplina ou objetivo específico.",
    detail: "Horários flexíveis",
    icon: "user",
    includes: ["Agenda personalizada", "Plano de estudos individual", "Relatórios de progresso", "Online ou presencial", "Todas as disciplinas"],
  },
  {
    title: "Programa Kids",
    description:
      "Inglês lúdico para crianças de 4 a 10 anos com atividades criativas, jogos educativos e imersão natural no idioma.",
    detail: "4 a 10 anos",
    icon: "sparkle",
    includes: ["Atividades lúdicas", "Jogos educativos", "Músicas e histórias", "Turmas por faixa etária", "Acompanhamento aos pais"],
  },
];

export const trustMetrics: MetricItem[] = [
  {
    value: "3.200+",
    label: "alunos formados",
    detail: "em cursos regulares e intensivos",
  },
  {
    value: "4,9",
    label: "nota de satisfação",
    detail: "metodologia, professores e estrutura",
  },
  {
    value: "15",
    label: "anos de experiência",
    detail: "em educação e ensino de idiomas",
  },
];

export const results: ResultItem[] = [
  {
    title: "Salas modernas com quadros digitais",
    category: "Salas de aula",
    image: "/images/quadro-digital.jpg",
    imageAlt: "Sala de aula moderna com quadro digital interativo e carteiras organizadas",
  },
  {
    title: "Biblioteca com acervo digital e físico",
    category: "Biblioteca",
    image: "/images/sala-aula.jpg",
    imageAlt: "Biblioteca do instituto com estantes de livros e mesas de estudo",
  },
  {
    title: "Área de convivência e estudo em grupo",
    category: "Convivência",
    image: "/images/convivencia.jpg",
    imageAlt: "Espaço de convivência com sofás e mesas para estudo colaborativo",
  },
];

export const benefits: BenefitItem[] = [
  {
    title: "Metodologia ativa",
    description: "Aulas dinâmicas com participação constante do aluno, projetos práticos e aprendizagem baseada em problemas reais.",
  },
  {
    title: "Turmas reduzidas",
    description: "No máximo 10 alunos por turma para garantir atenção individualizada e maior interação com os professores.",
  },
  {
    title: "Acompanhamento individual",
    description: "Relatórios periódicos de progresso, reuniões com responsáveis e plano de estudos adaptado ao ritmo de cada aluno.",
  },
];

export const process: ProcessItem[] = [
  {
    title: "Contato",
    description: "Envie uma mensagem pelo WhatsApp ou ligue para tirar suas dúvidas sobre os programas e horários disponíveis.",
  },
  {
    title: "Avaliação",
    description: "Agendamos uma avaliação de nível gratuita para identificar o melhor programa e turma para o aluno.",
  },
  {
    title: "Matrícula",
    description: "Processo de matrícula rápido e digital, com opções de pagamento flexíveis e material didático incluso.",
  },
  {
    title: "Início das aulas",
    description: "O aluno começa as aulas com plano de estudos personalizado e acesso à plataforma digital de exercícios.",
  },
];

export const team: TeamMember[] = [
  {
    name: "Profa. Carolina Mendes",
    role: "Coordenadora Pedagógica — Ensino de Idiomas",
    bio: "Mestre em Linguística Aplicada com 12 anos de experiência em ensino de inglês e espanhol para jovens e adultos.",
  },
  {
    name: "Prof. André Oliveira",
    role: "Professor — Matemática e Exatas",
    bio: "Licenciado em Matemática com especialização em preparação para vestibulares. Mais de 800 alunos aprovados.",
  },
  {
    name: "Profa. Beatriz Santos",
    role: "Professora — Programa Kids e Inglês Infantil",
    bio: "Pedagoga com certificação Cambridge para ensino infantil. Especialista em aprendizagem lúdica e imersão.",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "Meu filho saiu do zero em inglês e hoje conversa com fluência. A metodologia do Instituto Luminar fez toda a diferença.",
    name: "Fernanda Rodrigues",
    context: "Mãe de aluno — Inglês intermediário",
    rating: 5,
  },
  {
    quote: "Fui aprovado em medicina graças ao preparatório. Os simulados e a correção de redação são excepcionais.",
    name: "Lucas Martins",
    context: "Aluno — Preparatório ENEM",
    rating: 5,
  },
  {
    quote: "As turmas reduzidas e o acompanhamento individual fizeram minha filha recuperar as notas em menos de dois meses.",
    name: "Roberto Silva",
    context: "Pai de aluna — Reforço Escolar",
    rating: 5,
  },
];

export const faq: FAQItem[] = [
  {
    question: "Como funciona o processo de matrícula?",
    answer:
      "Entre em contato pelo WhatsApp ou telefone para agendar uma avaliação de nível gratuita. Após a avaliação, fazemos a matrícula digital em poucos minutos com opções de pagamento flexíveis.",
  },
  {
    question: "Qual o tamanho das turmas?",
    answer:
      "Nossas turmas regulares têm no máximo 10 alunos, garantindo atenção individualizada. Para aulas particulares, o atendimento é totalmente individual.",
  },
  {
    question: "O material didático está incluso?",
    answer:
      "Sim. Todos os cursos incluem material didático digital. Para cursos de idiomas, o material impresso também é fornecido sem custo adicional.",
  },
  {
    question: "Quais são os horários das aulas?",
    answer:
      "Oferecemos turmas em diversos horários: manhã, tarde e noite durante a semana, e manhã aos sábados. Aulas particulares têm horários flexíveis conforme disponibilidade.",
  },
  {
    question: "Posso fazer uma aula experimental?",
    answer:
      "Com certeza! Oferecemos uma aula experimental gratuita em qualquer curso. Basta agendar pelo WhatsApp ou telefone. Não há compromisso de matrícula.",
  },
];
