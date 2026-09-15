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
  emergency?: {
    enabled: boolean;
    label: string;
    phone: string;
    phoneHref: string;
    hours: string;
  };
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

export interface TeamMember {
  name: string;
  role: string;
  cro: string;
  image: string;
}

export interface HomePageContent {
  sections: {
    hero: boolean;
    services: boolean;
    team: boolean;
    structure: boolean;
    benefits: boolean;
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
  services: { title: string; description: string };
  team: { title: string; description: string };
  structure: { title: string; description: string };
  benefits: { title: string; description: string; image: string; imageAlt: string };
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

/* ──────────────────────────────────────────────────────────────────────── */
/*  Site configuration                                                     */
/* ──────────────────────────────────────────────────────────────────────── */

export const site = {
  "name": "Arche Vet",
  "title": "Arche Vet | Clínica Veterinária Completa",
  "description": "Clínica veterinária moderna com atendimento 24h, especialistas em cães, gatos e pets exóticos. Consultas, vacinas, cirurgias e pet shop. Agende agora.",
  "url": "https://vet.example.com",
  "locale": "pt-BR",
  "demo": {
    "enabled": true,
    "notice": "Modelo demonstrativo — profissionais, serviços, valores, contatos e depoimentos são ilustrativos."
  },
  "seo": {
    "socialImage": "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1536&q=80"
  },
  "business": {
    "schemaType": "VeterinaryCare",
    "priceRange": "$$",
    "openingHours": [
      "Mo-Fr 08:00-20:00",
      "Sa 08:00-18:00",
      "Su 09:00-13:00"
    ]
  },
  "location": {
    "streetAddress": "Rua dos Animais, 123",
    "locality": "São Paulo",
    "region": "SP",
    "postalCode": "00000-000",
    "country": "BR",
    "displayAddress": "Rua dos Animais, 123 — São Paulo, SP"
  },
  "contact": {
    "email": "contato@archevet.example",
    "phone": "(99) 99999-9999",
    "phoneHref": "tel:+5599999999999",
    "whatsapp": "5599999999999",
    "whatsappHref": "https://wa.me/5599999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20na%20Arche%20Vet.",
    "hours": "Segunda a sexta, 8h às 20h; sábado, 8h às 18h; domingo, 9h às 13h",
    "schedule": [
      {
        "days": "Segunda a sexta",
        "hours": "8h–20h"
      },
      {
        "days": "Sábado",
        "hours": "8h–18h"
      },
      {
        "days": "Domingo e feriados",
        "hours": "9h–13h"
      }
    ]
  },
  "social": {
    "instagram": "",
    "facebook": "",
    "linkedin": ""
  },
  "navigation": [
    {
      "label": "Serviços",
      "href": "/#servicos"
    },
    {
      "label": "Equipe",
      "href": "/#equipe"
    },
    {
      "label": "A Clínica",
      "href": "/#a-clinica"
    },
    {
      "label": "Depoimentos",
      "href": "/#depoimentos"
    },
    {
      "label": "Dúvidas",
      "href": "/#duvidas"
    }
  ],
  "emergency": {
    "enabled": true,
    "label": "Emergência 24h",
    "phone": "(99) 98888-8888",
    "phoneHref": "tel:+5599988888888",
    "hours": "Atendimento emergencial 24 horas, inclusive feriados"
  }
} satisfies SiteConfig;

/* ──────────────────────────────────────────────────────────────────────── */
/*  Home page content                                                      */
/* ──────────────────────────────────────────────────────────────────────── */

export const homePage: HomePageContent = {
  "sections": {
    "hero": true,
    "services": true,
    "team": true,
    "structure": true,
    "benefits": true,
    "process": true,
    "testimonials": true,
    "faq": true,
    "finalCta": true
  },
  "hero": {
    "eyebrow": "Clínica veterinária completa em São Paulo",
    "title": "Quem ama, cuida com quem entende.",
    "description": "Consultas, vacinas, cirurgias e emergência 24h com uma equipe apaixonada por pets. Atendimento humanizado para cães, gatos e animais exóticos.",
    "image": "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1536&q=80",
    "imageAlt": "Golden retriever saudável e feliz em ambiente externo ensolarado",
    "primaryActionLabel": "Agendar consulta",
    "secondaryActionLabel": "Fale pelo WhatsApp"
  },
  "services": {
    "title": "Nossos serviços",
    "description": "Cuidado completo para a saúde e bem-estar do seu pet em todas as fases da vida."
  },
  "team": {
    "title": "Equipe veterinária",
    "description": "Profissionais especializados e apaixonados pelo cuidado animal, em constante atualização."
  },
  "structure": {
    "title": "Nossa estrutura",
    "description": "Ambiente projetado para o conforto dos pets e seus tutores, com equipamentos de última geração."
  },
  "benefits": {
    "title": "O melhor cuidado para quem você mais ama.",
    "description": "Da primeira consulta ao acompanhamento contínuo, seu pet recebe atenção personalizada.",
    "image": "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1536&q=80",
    "imageAlt": "Dois cães correndo felizes em um parque"
  },
  "process": {
    "title": "Do agendamento ao cuidado",
    "description": "Conheça as etapas do atendimento na Arche Vet."
  },
  "testimonials": {
    "title": "O que dizem os tutores",
    "description": "Relatos ilustrativos sobre a experiência na Arche Vet.",
    "sourceLabel": "Depoimentos demonstrativos",
    "showGoogleBrand": false
  },
  "faq": {
    "title": "Dúvidas frequentes",
    "description": "Tire suas principais dúvidas sobre consultas, vacinas e atendimento."
  },
  "finalCta": {
    "title": "Cuide do seu pet agora",
    "description": "Agende uma consulta e garanta o melhor atendimento veterinário para quem você mais ama.",
    "phoneLabel": "Prefere ligar?",
    "primaryActionLabel": "Agendar consulta"
  }
};

/* ──────────────────────────────────────────────────────────────────────── */
/*  Section data                                                           */
/* ──────────────────────────────────────────────────────────────────────── */

export const services: ServiceItem[] = [
  {
    "title": "Consultas e Check-up",
    "description": "Avaliação clínica completa com anamnese detalhada, exame físico e orientações preventivas para todas as fases de vida do pet.",
    "detail": "Cães, gatos e exóticos"
  },
  {
    "title": "Vacinação e Vermifugação",
    "description": "Protocolo vacinal atualizado e programa de desparasitação personalizado para manter seu pet protegido o ano inteiro.",
    "detail": "Carteira de vacinação digital"
  },
  {
    "title": "Cirurgias e Internações",
    "description": "Centro cirúrgico equipado para procedimentos eletivos e de urgência, com monitoramento pós-operatório completo.",
    "detail": "UTI veterinária"
  },
  {
    "title": "Exames e Diagnóstico",
    "description": "Laboratório próprio com hemograma, bioquímico, ultrassonografia, raio-X digital e eletrocardiograma com resultados rápidos.",
    "detail": "Resultados no mesmo dia"
  },
  {
    "title": "Banho, Tosa e Pet Shop",
    "description": "Serviços de estética animal com produtos premium, além de uma loja completa com rações, acessórios e medicamentos.",
    "detail": "Agendamento online"
  }
];

export const team: TeamMember[] = [
  {
    "name": "Dra. Mariana Costa",
    "role": "Clínica Geral e Cirurgia",
    "cro": "CRMV-SP 00000",
    "image": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    "name": "Dr. Rafael Oliveira",
    "role": "Ortopedia e Emergência",
    "cro": "CRMV-SP 00001",
    "image": "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    "name": "Dra. Isabela Ferreira",
    "role": "Dermatologia e Animais Exóticos",
    "cro": "CRMV-SP 00002",
    "image": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

export const structureImages = [
  {
    "src": "https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "alt": "Recepção da clínica veterinária com design acolhedor e funcional"
  },
  {
    "src": "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "alt": "Sala de atendimento com equipamentos veterinários modernos"
  },
  {
    "src": "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "alt": "Área de internação com monitoramento 24 horas"
  }
];

export const benefits: BenefitItem[] = [
  {
    "title": "Emergência 24 horas",
    "description": "Plantão veterinário disponível todos os dias, incluindo feriados e madrugadas, para urgências e emergências."
  },
  {
    "title": "Diagnóstico por imagem",
    "description": "Raio-X digital, ultrassonografia e eletrocardiograma no local, com resultados rápidos para tratamentos mais assertivos."
  },
  {
    "title": "Atendimento humanizado",
    "description": "Equipe treinada para acolher pets ansiosos e seus tutores, garantindo conforto e segurança em cada consulta."
  }
];

export const process: ProcessItem[] = [
  {
    "title": "Agende a consulta",
    "description": "Entre em contato pelo WhatsApp ou telefone. Encontramos o melhor horário para você e seu pet."
  },
  {
    "title": "Primeira consulta",
    "description": "Exame clínico completo, revisão de carteira vacinal e conversa detalhada sobre a rotina e necessidades do pet."
  },
  {
    "title": "Plano de saúde",
    "description": "Apresentamos as opções de tratamento e prevenção com valores, etapas e prazos transparentes."
  },
  {
    "title": "Pet saudável e feliz",
    "description": "Acompanhamento contínuo com retornos programados para garantir a saúde a longo prazo."
  }
];

export const testimonials: TestimonialItem[] = [
  {
    "quote": "Meu cachorro precisou de cirurgia de emergência e a equipe da Arche Vet foi incrível. Atendimento rápido, profissional e cheio de carinho. Ele se recuperou super bem!",
    "name": "Ana Paula Santos",
    "context": "Cirurgia ortopédica — Golden Retriever",
    "rating": 5
  },
  {
    "quote": "Levo meus dois gatos na Arche Vet desde filhotes. A Dra. Isabela é maravilhosa e super paciente. A clínica é limpa, organizada e eles sempre saem tranquilos.",
    "name": "Carlos Medeiros",
    "context": "Acompanhamento preventivo — Gatos",
    "rating": 5
  },
  {
    "quote": "Tenho um coelho e é difícil encontrar veterinários que atendam exóticos. Na Arche Vet ele recebe o melhor cuidado possível. Recomendo de olhos fechados!",
    "name": "Letícia Moura",
    "context": "Atendimento de animal exótico — Coelho",
    "rating": 5
  }
];

export const faq: FAQItem[] = [
  {
    "question": "Vocês atendem animais exóticos?",
    "answer": "Sim! Atendemos aves, répteis, roedores e outros animais exóticos. Temos profissionais especializados para cada tipo de pet."
  },
  {
    "question": "Como funciona o atendimento de emergência?",
    "answer": "Nosso plantão funciona 24 horas, incluindo feriados. Basta ligar para o telefone de emergência ou comparecer diretamente à clínica. Casos graves são priorizados por triagem."
  },
  {
    "question": "Preciso agendar para vacinar meu pet?",
    "answer": "Recomendamos o agendamento para garantir horário e evitar esperas, mas aceitamos encaixes durante o horário comercial. Traga a carteira de vacinação anterior, se houver."
  },
  {
    "question": "Vocês trabalham com planos de saúde pet?",
    "answer": "Trabalhamos de forma particular, com condições facilitadas de pagamento. Oferecemos pacotes preventivos com valores especiais para acompanhamento contínuo."
  },
  {
    "question": "A partir de que idade devo levar meu filhote ao veterinário?",
    "answer": "O ideal é a primeira consulta entre 30 e 45 dias de vida. O veterinário avaliará a saúde geral e orientará o protocolo de vacinação e vermifugação adequado."
  },
  {
    "question": "As fotos e profissionais desta página são reais?",
    "answer": "Esta é uma demonstração de template. Fotos, profissionais, depoimentos e valores são ilustrativos e devem ser substituídos pelos dados reais da clínica."
  }
];

/* ──────────────────────────────────────────────────────────────────────── */
/*  Computed navigation (hides anchors of disabled sections)               */
/* ──────────────────────────────────────────────────────────────────────── */

const visibleAnchors: Record<string, boolean> = {
  '/#servicos': homePage.sections.services && services.length > 0,
  '/#equipe': homePage.sections.team && team.length > 0,
  '/#a-clinica': homePage.sections.structure,
  '/#depoimentos': homePage.sections.testimonials && testimonials.length > 0,
  '/#duvidas': homePage.sections.faq && faq.length > 0,
};
export const navigation = site.navigation.filter(item => visibleAnchors[item.href] !== false);

export function whatsappInquiry(message: string): string {
  const url = new URL(site.contact.whatsappHref);
  url.searchParams.set('text', message);
  return url.toString();
}
