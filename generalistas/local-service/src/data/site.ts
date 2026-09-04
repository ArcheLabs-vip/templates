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
  contact: {
    email: string;
    phone: string;
    phoneHref: string;
    whatsapp: string;
    whatsappHref: string;
    address: string;
    hours: string;
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

export const site = {
  name: "Arruma Casa",
  title: "Arruma Casa | Manutenção residencial em São Paulo",
  description:
    "Reparos, instalações e manutenção residencial com agendamento claro e orçamento antes do serviço em São Paulo.",
  url: "https://local-service.example.com",
  locale: "pt-BR",
  contact: {
    email: "contato@arrumacasa.example",
    phone: "(11) 4000-2040",
    phoneHref: "tel:+551140002040",
    whatsapp: "551140002040",
    whatsappHref:
      "https://wa.me/551140002040?text=Olá%2C%20quero%20pedir%20um%20orçamento.",
    address: "São Paulo, SP",
    hours: "Segunda a sábado, das 8h às 18h",
  },
  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
  },
  navigation: [
    { label: "Serviços", href: "/#servicos" },
    { label: "Como funciona", href: "/#como-funciona" },
    { label: "Avaliações", href: "/#avaliacoes" },
    { label: "Dúvidas", href: "/#duvidas" },
  ],
} satisfies SiteConfig;

export const services: ServiceItem[] = [
  {
    title: "Reparos do dia a dia",
    description:
      "Pequenos consertos que devolvem conforto e segurança à rotina da casa.",
    detail: "Elétrica, hidráulica e ajustes gerais",
  },
  {
    title: "Instalações",
    description:
      "Instalação cuidadosa de luminárias, torneiras, suportes, prateleiras e acessórios.",
  },
  {
    title: "Manutenção preventiva",
    description:
      "Revisões para identificar desgaste antes que ele vire um problema maior.",
  },
  {
    title: "Montagem e fixação",
    description:
      "Móveis, quadros e itens de parede instalados com alinhamento e acabamento.",
  },
  {
    title: "Visita técnica",
    description:
      "Avaliação no local para serviços que exigem diagnóstico antes do orçamento.",
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
