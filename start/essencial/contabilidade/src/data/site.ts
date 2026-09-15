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
  icon?: "scale" | "shield" | "file" | "building" | "family" | "briefcase" | "calculator" | "chart" | "document" | "money";
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
  name: "Prado & Associados Contabilidade",
  title: "Prado & Associados Contabilidade | Inteligência e Segurança Tributária",
  description:
    "Escritório de contabilidade especializado em contabilidade digital, BPO financeiro e gestão tributária para impulsionar o seu negócio.",
  url: "https://contabilidade.exemplo.com",
  locale: "pt-BR",
  demo: {
    enabled: true,
    notice: "Modelo demonstrativo — dados e valores são ilustrativos.",
  },
  seo: {
    socialImage: "/images/hero-escritorio.jpg",
  },
  business: {
    schemaType: "AccountingService",
    priceRange: "$$",
    openingHours: ["Mo-Fr 08:30-17:30"],
  },
  location: {
    streetAddress: "Av. Paulista, 1000",
    locality: "São Paulo",
    region: "SP",
    postalCode: "01310-100",
    country: "BR",
    displayAddress: "Av. Paulista, 1000 - Bela Vista, São Paulo, SP",
  },
  contact: {
    email: "contato@exatocontabilidade.example",
    phone: "(99) 99999-9999",
    phoneHref: "tel:+5599999999999",
    whatsapp: "5599999999999",
    whatsappHref:
      "https://wa.me/5599999999999?text=Olá%2C%20gostaria%20de%20agendar%20um%20diagnóstico%20contábil.",
    hours: "Segunda a sexta, das 8h30 às 17h30",
    schedule: [
      { days: "Segunda a sexta", hours: "8h30 às 17h30" },
      { days: "Sábado e Domingo", hours: "Fechado" },
    ],
  },
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
  },
  navigation: [
    { label: "Soluções", href: "/#solucoes" },
    { label: "Vantagens", href: "/#vantagens" },
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
    eyebrow: "Assessoria Contábil Especializada",
    title: "Gestão inteligente para o seu negócio crescer.",
    description:
      "Terceirize a burocracia, otimize sua carga tributária e foque no que realmente importa: os resultados da sua empresa.",
    image: "/images/hero-escritorio.jpg",
    imageAlt: "Equipe de contadores analisando planilhas financeiras",
    primaryActionLabel: "Falar com especialista",
    secondaryActionLabel: "Conhecer soluções",
  },
  services: {
    title: "Nossas Soluções",
    description:
      "Serviços desenhados para trazer clareza financeira e segurança fiscal, independentemente do porte da sua empresa.",
  },
  benefits: {
    title: "Por que escolher a Exato Contabilidade?",
    description: "Unimos ferramentas digitais inovadoras a um atendimento próximo e proativo.",
    image: "/images/ambiente-escritorio.jpg",
    imageAlt: "Profissional verificando relatórios de fechamento em tablet",
  },
  results: {
    title: "Resultados que entregamos",
    description:
      "Nosso compromisso é transformar a complexidade contábil em economia e agilidade para os nossos clientes.",
    actionLabel: "Ver todos os casos",
  },
  process: {
    title: "Como funciona a nossa migração",
    description: "Um processo estruturado, sem dor de cabeça, para trazer a contabilidade da sua empresa para nós.",
  },
  team: {
    title: "Quem faz acontecer",
    description:
      "Uma equipe técnica atualizada com a legislação e pronta para oferecer a melhor orientação financeira.",
  },
  testimonials: {
    title: "O que dizem sobre nós",
    description:
      "A transparência e o compromisso refletidos na visão dos empresários que confiam na Exato.",
    sourceLabel: "Avaliações Reais",
    showGoogleBrand: true,
  },
  faq: {
    title: "Dúvidas comuns",
    description: "Tudo o que você precisa saber antes de iniciar sua parceria conosco.",
  },
  finalCta: {
    title: "Dê o próximo passo para organizar sua empresa.",
    description:
      "Agende uma avaliação inicial gratuita e descubra o que podemos fazer pela sua saúde financeira.",
    phoneLabel: "Prefere nos ligar?",
    primaryActionLabel: "Solicitar diagnóstico",
  },
} satisfies HomePageContent;

export const services: ServiceItem[] = [
  {
    title: "Contabilidade Digital",
    description:
      "Sua contabilidade 100% online, com acesso rápido a guias e balancetes através do nosso portal exclusivo.",
    detail: "Agilidade e Praticidade",
    icon: "document",
    includes: ["Escrituração contábil", "Fechamento mensal", "Relatórios gerenciais", "Suporte via portal"],
  },
  {
    title: "Gestão Tributária",
    description:
      "Análise profunda para identificar o regime de tributação mais vantajoso e garantir economia segura.",
    detail: "Planejamento e Revisão",
    icon: "calculator",
    includes: ["Planejamento tributário", "Recuperação de créditos", "Apuração de impostos", "Compliance fiscal"],
  },
  {
    title: "BPO Financeiro",
    description:
      "Terceirização das rotinas de contas a pagar, receber e conciliação bancária do seu negócio.",
    detail: "Financeiro Terceirizado",
    icon: "money",
    includes: ["Contas a pagar e receber", "Conciliação bancária", "Fluxo de caixa", "Emissão de notas fiscais"],
  },
  {
    title: "Abertura de Empresa",
    description:
      "Cuidamos de toda a documentação, do CNPJ ao alvará, de forma rápida para você começar a operar.",
    detail: "Legalização",
    icon: "building",
    includes: ["Emissão de CNPJ", "Contrato social", "Alvará de funcionamento", "Inscrições estaduais"],
  },
  {
    title: "Consultoria Trabalhista",
    description:
      "Gestão de folha de pagamento, encargos sociais e admissões, com rigoroso cumprimento do e-Social.",
    detail: "DP e RH",
    icon: "family",
    includes: ["Folha de pagamento", "Férias e rescisões", "Obrigações acessórias", "Suporte ao RH"],
  },
  {
    title: "Assessoria Estratégica",
    description:
      "Acompanhamento focado no crescimento, projetando cenários e definindo metas claras com base nos seus números.",
    detail: "Inteligência de Negócios",
    icon: "chart",
    includes: ["Projeção financeira", "Análise de DRE", "Redução de custos", "Indicadores de performance"],
  },
];

export const trustMetrics: MetricItem[] = [
  {
    value: "12+",
    label: "anos no mercado",
    detail: "simplificando negócios",
  },
  {
    value: "500+",
    label: "empresas ativas",
    detail: "confiando em nossa gestão",
  },
  {
    value: "R$ 2M+",
    label: "em impostos economizados",
    detail: "através de planejamento",
  },
];

export const results: ResultItem[] = [
  {
    title: "Redução de 30% da carga tributária para clínica médica",
    category: "Gestão Tributária",
    image: "/images/ambiente-escritorio.jpg",
    imageAlt: "Reunião de consultoria médica",
  },
  {
    title: "Implementação de BPO Financeiro em Agência de Marketing",
    category: "BPO Financeiro",
    image: "/images/consulta-juridica.jpg",
    imageAlt: "Equipe trabalhando em métricas",
  },
  {
    title: "Abertura simplificada e planejamento para rede de franquias",
    category: "Assessoria Societária",
    image: "/images/hero-escritorio.jpg",
    imageAlt: "Aperto de mãos após acordo comercial",
  },
];

export const benefits: BenefitItem[] = [
  {
    title: "Atendimento Proativo",
    description: "Não apenas enviamos as guias para pagamento. Analisamos seus números e sugerimos melhorias financeiras constantemente.",
  },
  {
    title: "Tecnologia de Ponta",
    description: "Integração do nosso sistema contábil diretamente com a conta bancária da sua empresa, reduzindo falhas manuais.",
  },
  {
    title: "Time Especializado",
    description: "Contadores, auditores e especialistas fiscais em constante atualização sobre as leis do país.",
  },
];

export const process: ProcessItem[] = [
  {
    title: "Diagnóstico Gratuito",
    description: "Analisamos a situação atual da sua empresa, identificando gargalos e oportunidades de economia.",
  },
  {
    title: "Proposta Personalizada",
    description: "Apresentamos um plano de serviços contábeis desenhado exatamente para o que o seu negócio precisa.",
  },
  {
    title: "Migração Sem Dores",
    description: "Nós mesmos cuidamos do distrato com a contabilidade antiga e transferimos os dados de forma segura.",
  },
  {
    title: "Onboarding Digital",
    description: "Treinamos sua equipe a utilizar nossas plataformas e abrimos nosso canal direto de comunicação.",
  },
];

export const team: TeamMember[] = [
  {
    name: "Roberto Silva",
    role: "Sócio e Especialista Tributário",
    bio: "CRC/SP 123456/O. Contador com MBA em Planejamento Tributário. Atua na redução legal de impostos para médias empresas.",
  },
  {
    name: "Camila Fernandes",
    role: "Gestora de BPO Financeiro",
    bio: "Especialista em finanças corporativas e automatização de fluxo de caixa com certificações em ferramentas de ERP.",
  },
  {
    name: "Lucas Menezes",
    role: "Coordenador de Departamento Pessoal",
    bio: "Sólida experiência em legislação trabalhista, garantindo compliance e segurança para as relações de emprego dos nossos clientes.",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "A Exato transformou a forma como vejo os números da minha empresa. Os relatórios são fáceis de ler e o atendimento é impecável.",
    name: "Jorge Amado",
    context: "CEO, TechLog",
    rating: 5,
  },
  {
    quote: "Trocar de contador sempre dá medo, mas a migração para a Exato foi tranquila. O suporte de Departamento Pessoal é rápido.",
    name: "Fernanda Costa",
    context: "Fundadora, Clínica Sorrir",
    rating: 5,
  },
  {
    quote: "A consultoria tributária deles nos salvou muito dinheiro. Conseguimos investir os recursos poupados na expansão do negócio.",
    name: "Marcelo Almeida",
    context: "Diretor, Varejo Mais",
    rating: 5,
  },
];

export const faq: FAQItem[] = [
  {
    question: "Como funciona a troca de contador?",
    answer:
      "O processo é simples e legalmente garantido. Você só precisa informar ao antigo contador, e nossa equipe assume toda a transferência do banco de dados e procurações digitais, sem interrupção dos serviços.",
  },
  {
    question: "A Exato Contabilidade atende empresas do Simples Nacional?",
    answer:
      "Sim. Atendemos Simples Nacional, Lucro Presumido e Lucro Real. Fazemos análises anuais para garantir que você esteja sempre no melhor regime.",
  },
  {
    question: "O que é o BPO Financeiro?",
    answer:
      "BPO (Business Process Outsourcing) significa terceirizar as rotinas financeiras do seu negócio, como agendamento de contas a pagar, emissão de boletos e conciliação bancária, deixando você livre para focar nas vendas.",
  },
  {
    question: "Vocês atendem clientes de outras cidades?",
    answer:
      "Atendemos empresas de todo o Brasil através da nossa plataforma de contabilidade digital. Realizamos reuniões online e mantemos um suporte humanizado via WhatsApp e portal do cliente.",
  },
  {
    question: "Como funciona a abertura de uma nova empresa?",
    answer:
      "Cuidamos de todo o processo burocrático, desde a escolha da melhor natureza jurídica e regime tributário, elaboração do contrato social, até a emissão do CNPJ e alvará de funcionamento.",
  },
];
