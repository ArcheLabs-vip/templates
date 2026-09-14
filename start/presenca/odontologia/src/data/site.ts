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
  "name": "Arche Odonto",
  "title": "Arche Odonto | Clínica Odontológica Completa",
  "description": "Clínica odontológica moderna com especialistas em implantes, ortodontia, clareamento e estética dental. Agende sua avaliação.",
  "url": "https://odonto.example.com",
  "locale": "pt-BR",
  "demo": {
    "enabled": true,
    "notice": "Modelo demonstrativo — profissionais, tratamentos, valores, contatos e depoimentos são ilustrativos."
  },
  "seo": {
    "socialImage": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1536&q=80"
  },
  "business": {
    "schemaType": "Dentist",
    "priceRange": "$$",
    "openingHours": [
      "Mo-Fr 08:00-19:00",
      "Sa 08:00-13:00"
    ]
  },
  "location": {
    "streetAddress": "Av. da Saúde, 456",
    "locality": "São Paulo",
    "region": "SP",
    "postalCode": "00000-000",
    "country": "BR",
    "displayAddress": "Av. da Saúde, 456 — São Paulo, SP"
  },
  "contact": {
    "email": "contato@archeodonto.example",
    "phone": "(99) 99999-9999",
    "phoneHref": "tel:+5599999999999",
    "whatsapp": "5599999999999",
    "whatsappHref": "https://wa.me/5599999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20na%20Arche%20Odonto.",
    "hours": "Segunda a sexta, 8h às 19h; sábado, 8h às 13h",
    "schedule": [
      {
        "days": "Segunda a sexta",
        "hours": "8h–19h"
      },
      {
        "days": "Sábado",
        "hours": "8h–13h"
      },
      {
        "days": "Domingo e feriados",
        "hours": "Fechado"
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
      "label": "Tratamentos",
      "href": "/#tratamentos"
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
  ]
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
    "eyebrow": "Odontologia moderna em São Paulo",
    "title": "Seu sorriso merece cuidado de verdade.",
    "description": "Tratamentos personalizados com tecnologia de ponta, ambiente acolhedor e uma equipe que cuida de cada detalhe da sua saúde bucal.",
    "image": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1536&q=80",
    "imageAlt": "Consultório odontológico moderno com equipamentos de última geração",
    "primaryActionLabel": "Agendar avaliação",
    "secondaryActionLabel": "Fale pelo WhatsApp"
  },
  "services": {
    "title": "Nossos tratamentos",
    "description": "Especialidades completas para cuidar da sua saúde bucal com excelência."
  },
  "team": {
    "title": "Corpo clínico",
    "description": "Profissionais especializados e em constante atualização para oferecer o melhor tratamento."
  },
  "structure": {
    "title": "Nossa estrutura",
    "description": "Ambiente planejado para seu conforto, com equipamentos de última geração e rigoroso controle de biossegurança."
  },
  "benefits": {
    "title": "Saúde bucal com atenção em cada detalhe.",
    "description": "Do primeiro contato ao pós-tratamento, você recebe acompanhamento personalizado.",
    "image": "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=1536&q=80",
    "imageAlt": "Paciente sorrindo após tratamento odontológico"
  },
  "process": {
    "title": "Do agendamento ao sorriso",
    "description": "Conheça as etapas do seu atendimento na Arche Odonto."
  },
  "testimonials": {
    "title": "O que nossos pacientes dizem",
    "description": "Relatos ilustrativos sobre a experiência na Arche Odonto.",
    "sourceLabel": "Depoimentos demonstrativos",
    "showGoogleBrand": false
  },
  "faq": {
    "title": "Dúvidas frequentes",
    "description": "Tire suas principais dúvidas sobre tratamentos e atendimento."
  },
  "finalCta": {
    "title": "Cuide do seu sorriso agora",
    "description": "Agende uma avaliação sem compromisso e conheça o plano de tratamento ideal para você.",
    "phoneLabel": "Prefere ligar?",
    "primaryActionLabel": "Agendar avaliação"
  }
};

/* ──────────────────────────────────────────────────────────────────────── */
/*  Section data                                                           */
/* ──────────────────────────────────────────────────────────────────────── */

export const services: ServiceItem[] = [
  {
    "title": "Implantodontia",
    "description": "Reabilitação oral com implantes de titânio para substituir dentes perdidos com segurança e naturalidade.",
    "detail": "Planejamento digital 3D"
  },
  {
    "title": "Ortodontia",
    "description": "Aparelhos fixos, estéticos e alinhadores transparentes para corrigir a posição dos dentes e a mordida.",
    "detail": "Adultos e crianças"
  },
  {
    "title": "Clareamento Dental",
    "description": "Clareamento profissional em consultório ou com moldeiras personalizadas para um sorriso mais branco e uniforme.",
    "detail": "Resultado em poucas sessões"
  },
  {
    "title": "Lentes de Contato Dental",
    "description": "Laminados ultrafinos em porcelana para corrigir forma, cor e alinhamento dos dentes anteriores.",
    "detail": "Estética avançada"
  },
  {
    "title": "Endodontia",
    "description": "Tratamento de canal com tecnologia rotatória e localizador apical para preservar dentes comprometidos.",
    "detail": "Sessão única na maioria dos casos"
  }
];

export const team: TeamMember[] = [
  {
    "name": "Dra. Camila Andrade",
    "role": "Implantodontia e Prótese",
    "cro": "CRO-SP 00000",
    "image": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    "name": "Dr. Henrique Duarte",
    "role": "Ortodontia",
    "cro": "CRO-SP 00001",
    "image": "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    "name": "Dra. Beatriz Lemos",
    "role": "Endodontia e Estética",
    "cro": "CRO-SP 00002",
    "image": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

export const structureImages = [
  {
    "src": "https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "alt": "Recepção da clínica com design moderno e acolhedor"
  },
  {
    "src": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "alt": "Consultório equipado com tecnologia de última geração"
  },
  {
    "src": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "alt": "Sala de esterilização com controle rigoroso de biossegurança"
  }
];

export const benefits: BenefitItem[] = [
  {
    "title": "Planejamento digital",
    "description": "Radiografias digitais, tomografia e escaneamento intraoral para um diagnóstico preciso e tratamentos previsíveis."
  },
  {
    "title": "Atendimento humanizado",
    "description": "Equipe treinada para acolher pacientes com medo de dentista, garantindo conforto e segurança em cada consulta."
  },
  {
    "title": "Biossegurança rigorosa",
    "description": "Protocolos acima das normas da Anvisa, com esterilização monitorada e descarte correto de materiais."
  }
];

export const process: ProcessItem[] = [
  {
    "title": "Agende sua avaliação",
    "description": "Entre em contato pelo WhatsApp ou telefone. Encontramos o melhor horário para você."
  },
  {
    "title": "Avaliação completa",
    "description": "Exame clínico, radiografias e conversa detalhada sobre suas necessidades e expectativas."
  },
  {
    "title": "Plano de tratamento",
    "description": "Apresentamos as opções de tratamento com valores, etapas e prazos transparentes."
  },
  {
    "title": "Seu novo sorriso",
    "description": "Realize o tratamento com acompanhamento de perto e aproveite os resultados."
  }
];

export const testimonials: TestimonialItem[] = [
  {
    "quote": "Tinha medo de dentista desde criança. A equipe da Arche Odonto me acolheu de um jeito que fez toda a diferença. Hoje cuido dos meus dentes sem ansiedade.",
    "name": "Fernanda Souza",
    "context": "Tratamento de canal e clareamento",
    "rating": 5
  },
  {
    "quote": "Fiz implantes com a Dra. Camila e o resultado ficou incrível. Todo o processo foi explicado com calma e não senti dor em nenhum momento.",
    "name": "Ricardo Mendes",
    "context": "Implante dentário",
    "rating": 5
  },
  {
    "quote": "Meu filho adora ir ao dentista agora. O atendimento infantil é impecável, com muita paciência e carinho.",
    "name": "Juliana Prado",
    "context": "Odontopediatria",
    "rating": 5
  }
];

export const faq: FAQItem[] = [
  {
    "question": "O clareamento dental estraga o esmalte?",
    "answer": "Não. Quando realizado por um profissional qualificado e com produtos adequados, o clareamento é seguro e não causa danos ao esmalte dos dentes."
  },
  {
    "question": "Vocês aceitam planos odontológicos?",
    "answer": "Trabalhamos de forma particular para garantir qualidade no atendimento e nos materiais. Oferecemos condições de pagamento facilitadas. Consulte na avaliação."
  },
  {
    "question": "Como funciona o implante dentário?",
    "answer": "O implante é um pino de titânio colocado no osso da mandíbula ou maxila, que serve de base para uma coroa protética. O procedimento é feito com anestesia local e o resultado é muito natural."
  },
  {
    "question": "Posso colocar lentes de contato dental?",
    "answer": "Sim, desde que indicado após avaliação clínica. As lentes são laminados ultrafinos que corrigem cor, formato e pequenas irregularidades dos dentes anteriores."
  },
  {
    "question": "A partir de que idade devo levar meu filho ao dentista?",
    "answer": "O ideal é a primeira consulta a partir do nascimento do primeiro dente, por volta dos 6 meses de idade. A prevenção precoce evita problemas futuros."
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
  '/#tratamentos': homePage.sections.services && services.length > 0,
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
