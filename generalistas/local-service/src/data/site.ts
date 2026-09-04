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
  icon?: "repair" | "install" | "preventive" | "mount" | "electric" | "hydraulic";
  includes?: string[];
}

export interface MetricItem {
  value: string;
  label: string;
  detail?: string;
}

export interface ProjectItem {
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
    services: boolean;
    benefits: boolean;
    projects: boolean;
    process: boolean;
    testimonials: boolean;
    serviceArea: boolean;
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
  projects: { title: string; description: string; actionLabel: string };
  process: { title: string; description: string };
  testimonials: {
    title: string;
    description: string;
    sourceLabel: string;
    showGoogleBrand: boolean;
  };
  serviceArea: { title: string; description: string; image: string; imageAlt: string; actionLabel: string };
  faq: { title: string; description: string };
  finalCta: {
    title: string;
    description: string;
    phoneLabel: string;
    primaryActionLabel: string;
  };
}

export const site = {
  name: "Arruma Casa",
  title: "Arruma Casa | Manutenção residencial em São Paulo",
  description:
    "Reparos, instalações e manutenção residencial com agendamento claro e orçamento antes do serviço em São Paulo.",
  url: "https://local-service.example.com",
  locale: "pt-BR",
  demo: {
    enabled: true,
    notice: "Modelo demonstrativo — dados, projetos e avaliações são ilustrativos.",
  },
  seo: {
    socialImage: "/images/hero-atendimento-v2.webp",
  },
  business: {
    schemaType: "HomeAndConstructionBusiness",
    priceRange: "$$",
    openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-14:00"],
  },
  location: {
    streetAddress: "Rua Fictícia, 123",
    locality: "São Paulo",
    region: "SP",
    postalCode: "00000-000",
    country: "BR",
    displayAddress: "Rua Fictícia, 123 - São Paulo, SP",
  },
  contact: {
    email: "contato@arrumacasa.example",
    phone: "(99) 99999-9999",
    phoneHref: "tel:+5599999999999",
    whatsapp: "5599999999999",
    whatsappHref:
      "https://wa.me/5599999999999?text=Olá%2C%20quero%20pedir%20um%20orçamento.",
    hours: "Segunda a sexta, das 8h às 18h; sábado, das 8h às 14h",
    schedule: [
      { days: "Segunda a sexta", hours: "8h às 18h" },
      { days: "Sábado", hours: "8h às 14h" },
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
    { label: "Projetos", href: "/#projetos" },
    { label: "Como funciona", href: "/#como-funciona" },
    { label: "Avaliações", href: "/#avaliacoes" },
    { label: "Dúvidas", href: "/#duvidas" },
  ],
} satisfies SiteConfig;

export const homePage = {
  sections: {
    trustMetrics: true,
    services: true,
    benefits: true,
    projects: true,
    process: true,
    testimonials: true,
    serviceArea: true,
    faq: true,
    finalCta: true,
  },
  hero: {
    eyebrow: "Manutenção residencial em São Paulo",
    title: "Sua casa em ordem.",
    description:
      "Reparos e instalações com agendamento claro, cuidado e orçamento antes do serviço.",
    image: "/images/hero-atendimento-v2.webp",
    imageAlt: "Profissional de manutenção cumprimenta moradora antes do atendimento",
    primaryActionLabel: "Pedir orçamento",
    secondaryActionLabel: "Ligar agora",
  },
  services: {
    title: "Manutenção sem complicação",
    description:
      "Dos pequenos reparos às instalações, encontre o atendimento certo para cada necessidade.",
  },
  benefits: {
    title: "Cuidado do primeiro contato ao acabamento",
    description: "Informação clara, execução responsável e respeito pela sua rotina.",
    image: "/images/servico-eletrico-v2.webp",
    imageAlt: "Técnico faz a troca cuidadosa de uma tomada em um apartamento",
  },
  projects: {
    title: "Serviços que já realizamos",
    description:
      "Alguns trabalhos que mostram como cuidamos da execução, do acabamento e da organização em cada atendimento.",
    actionLabel: "Quero um serviço assim",
  },
  process: {
    title: "Você sabe o que acontece em cada etapa",
    description: "Um processo simples para reduzir espera, dúvida e surpresa no atendimento.",
  },
  testimonials: {
    title: "Experiências de clientes",
    description:
      "Relatos ilustrativos que mostram como avaliações reais podem destacar o atendimento, o cuidado e a organização do serviço.",
    sourceLabel: "Modelo de avaliações",
    showGoogleBrand: false,
  },
  serviceArea: {
    title: "Atendimento perto de você",
    description: "Confira os bairros atendidos e consulte a disponibilidade para o seu endereço.",
    image: "/images/area-atendida-v2.webp",
    imageAlt: "Técnico organiza suas ferramentas em um veículo de serviço numa rua arborizada",
    actionLabel: "Consultar meu bairro",
  },
  faq: {
    title: "Dúvidas antes de agendar",
    description: "Respostas diretas ajudam você a decidir com mais segurança.",
  },
  finalCta: {
    title: "Conte o que precisa. Nós orientamos o próximo passo.",
    description:
      "Envie uma foto pelo WhatsApp ou ligue para conversar. Você recebe uma orientação inicial e combina o melhor horário, sem compromisso.",
    phoneLabel: "Prefere falar por telefone?",
    primaryActionLabel: "Pedir orçamento",
  },
} satisfies HomePageContent;

export const services: ServiceItem[] = [
  {
    title: "Reparos do dia a dia",
    description:
      "Pequenos consertos que devolvem conforto e segurança à rotina da casa.",
    detail: "Ajustes e consertos gerais",
    icon: "repair",
    includes: ["Portas e dobradiças", "Fechaduras", "Vedação", "Pequenos acabamentos"],
  },
  {
    title: "Instalações",
    description:
      "Instalação cuidadosa de luminárias, torneiras, suportes, prateleiras e acessórios.",
    detail: "Luminárias, suportes e acessórios",
    icon: "install",
    includes: ["Luminárias", "Suportes de TV", "Prateleiras", "Acessórios de banheiro"],
  },
  {
    title: "Manutenção preventiva",
    description:
      "Revisões para identificar desgaste antes que ele vire um problema maior.",
    detail: "Vistoria e correções preventivas",
    icon: "preventive",
    includes: ["Revisão de pontos críticos", "Ajustes preventivos", "Orientação de manutenção"],
  },
  {
    title: "Montagem e fixação",
    description:
      "Móveis, quadros e itens de parede instalados com alinhamento e acabamento.",
    detail: "Montagem, nivelamento e fixação",
    icon: "mount",
    includes: ["Móveis desmontados", "Quadros e espelhos", "Varões e cortinas", "Nichos e painéis"],
  },
  {
    title: "Elétrica",
    description:
      "Trocas e instalações elétricas feitas com atenção às condições do ambiente.",
    detail: "Tomadas, interruptores e iluminação",
    icon: "electric",
    includes: ["Tomadas e interruptores", "Chuveiros", "Luminárias", "Diagnóstico de falhas"],
  },
  {
    title: "Hidráulica",
    description:
      "Correção de vazamentos e troca de peças para manter tudo funcionando bem.",
    detail: "Torneiras, sifões e pequenos vazamentos",
    icon: "hydraulic",
    includes: ["Torneiras e registros", "Sifões", "Descargas", "Pequenos vazamentos"],
  },
];

export const trustMetrics: MetricItem[] = [
  {
    value: "500+",
    label: "serviços concluídos",
    detail: "em residências e pequenos negócios",
  },
  {
    value: "4,9",
    label: "média de avaliação",
    detail: "atendimento recomendado pelos clientes",
  },
  {
    value: "6",
    label: "bairros atendidos",
    detail: "com agenda de segunda a sábado",
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Cozinha pronta para a rotina",
    category: "Reparo e instalação",
    image: "/images/reparo-cozinha.webp",
    imageAlt: "Profissional realiza reparo cuidadoso em uma cozinha residencial",
  },
  {
    title: "Elétrica revisada com segurança",
    category: "Elétrica",
    image: "/images/servico-eletrico-v2.webp",
    imageAlt: "Técnico revisa uma tomada com ferramentas apropriadas",
  },
  {
    title: "Atendimento organizado do início ao fim",
    category: "Manutenção residencial",
    image: "/images/area-atendida-v2.webp",
    imageAlt: "Profissional organiza ferramentas no veículo de atendimento",
  },
];

export const benefits: BenefitItem[] = [
  {
    title: "Horário combinado",
    description: "Você recebe a janela de atendimento antes da visita.",
  },
  {
    title: "Orçamento transparente",
    description: "O serviço começa somente depois da sua aprovação.",
  },
  {
    title: "Cuidado com o espaço",
    description: "Proteção da área de trabalho e organização ao finalizar.",
  },
];

export const process: ProcessItem[] = [
  {
    title: "Conte o que precisa",
    description: "Envie uma mensagem com fotos e uma breve descrição do problema.",
  },
  {
    title: "Receba a orientação",
    description: "Confirmamos o tipo de atendimento, a faixa de valor e o melhor horário.",
  },
  {
    title: "Aprove o serviço",
    description: "No local, validamos o orçamento antes de iniciar qualquer trabalho.",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "Explicaram o reparo com clareza, chegaram no horário e deixaram tudo organizado.",
    name: "Marina Alves",
    context: "Reparo hidráulico no apartamento",
    rating: 5,
  },
  {
    quote: "Consegui agendar rápido e soube o valor antes do serviço começar.",
    name: "Carlos Nogueira",
    context: "Instalação de luminárias",
    rating: 5,
  },
  {
    quote: "Atendimento cuidadoso e sem aquela surpresa no orçamento final.",
    name: "Renata Matsumoto",
    context: "Manutenção residencial",
    rating: 5,
  },
];

export const serviceAreas = [
  "Pinheiros",
  "Vila Madalena",
  "Perdizes",
  "Lapa",
  "Butantã",
  "Alto de Pinheiros",
];

export const faq: FAQItem[] = [
  {
    question: "Como funciona o orçamento?",
    answer:
      "Quando possível, fazemos uma estimativa por mensagem. Se o serviço exigir diagnóstico, agendamos uma visita técnica e informamos o valor antes de começar.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "Aceitamos Pix, cartão e dinheiro. A forma de pagamento é combinada na confirmação do serviço.",
  },
  {
    question: "Vocês levam os materiais?",
    answer:
      "Podemos orientar a compra ou incluir materiais no orçamento, dependendo do tipo de reparo.",
  },
  {
    question: "Atendem condomínios e pequenos comércios?",
    answer:
      "Sim. Atendemos residências, condomínios, escritórios e pequenos comércios nos bairros cobertos.",
  },
  {
    question: "Existe garantia do serviço?",
    answer:
      "Sim. O prazo varia conforme o tipo de serviço e é informado junto com o orçamento.",
  },
];
