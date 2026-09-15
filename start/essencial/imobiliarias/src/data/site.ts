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

export interface MetricItem {
  value: string;
  label: string;
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

export interface HomePageContent {
  sections: {
    trustMetrics: boolean;
    services: boolean;
    benefits: boolean;
    hero: boolean;
    properties: boolean;
    regions: boolean;
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
  benefits: { title: string; description: string; image: string; imageAlt: string };
  properties: { title: string; description: string; actionLabel: string };
  regions: { title: string; description: string };
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

export interface PropertyItem {
  id: string;
  title: string;
  neighborhood: string;
  type: string;
  price: string;
  beds: number;
  baths: number;
  parking: number;
  area: number;
  image: string;
}

export interface RegionItem {
  id: string;
  name: string;
  image: string;
  propertyCount: number;
}

export const site = {
  "name": "Arche Imóveis",
  "title": "Arche Imóveis | Compra, venda e avaliação de imóveis em São Paulo",
  "description": "Encontre seu próximo imóvel em São Paulo e região. Assessoria para comprar, vender e avaliar imóveis com acompanhamento em cada etapa.",
  "url": "https://imobiliaria.example.com",
  "locale": "pt-BR",
  "demo": {
    "enabled": true,
    "notice": "Modelo demonstrativo — imóveis, preços, indicadores, contatos e depoimentos são ilustrativos."
  },
  "seo": {
    "socialImage": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1536&q=80"
  },
  "business": {
    "schemaType": "RealEstateAgent",
    "priceRange": "$$$",
    "openingHours": [
      "Mo-Fr 09:00-18:00",
      "Sa 09:00-13:00"
    ]
  },
  "location": {
    "streetAddress": "Rua Fictícia, 123",
    "locality": "São Paulo",
    "region": "SP",
    "postalCode": "00000-000",
    "country": "BR",
    "displayAddress": "Rua Fictícia, 123 — São Paulo, SP"
  },
  "contact": {
    "email": "contato@archeimoveis.example",
    "phone": "(99) 99999-9999",
    "phoneHref": "tel:+5599999999999",
    "whatsapp": "5599999999999",
    "whatsappHref": "https://wa.me/5599999999999?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20corretor%20da%20Arche%20Im%C3%B3veis.",
    "hours": "Segunda a sexta, 9h às 18h; sábado, 9h às 13h",
    "schedule": [
      {
        "days": "Segunda a sexta",
        "hours": "9h–18h"
      },
      {
        "days": "Sábado",
        "hours": "9h–13h"
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
      "label": "Imóveis",
      "href": "/#imoveis-destaque"
    },
    {
      "label": "Regiões",
      "href": "/#regioes-atendidas"
    },
    {
      "label": "Serviços",
      "href": "/#servicos"
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

export const homePage: HomePageContent = {
  "sections": {
    "hero": true,
    "trustMetrics": true,
    "properties": true,
    "regions": true,
    "services": true,
    "benefits": true,
    "process": true,
    "testimonials": true,
    "faq": true,
    "finalCta": true
  },
  "hero": {
    "eyebrow": "Imóveis em São Paulo e região",
    "title": "Seu próximo endereço começa aqui.",
    "description": "Especialistas em conectar você aos melhores imóveis da cidade, com segurança, agilidade e um atendimento exclusivo.",
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1536&q=80",
    "imageAlt": "Fachada de uma casa moderna de alto padrão",
    "primaryActionLabel": "Buscar imóveis",
    "secondaryActionLabel": "Falar com um corretor"
  },
  "properties": {
    "title": "Imóveis em destaque",
    "description": "Conheça uma seleção ilustrativa de oportunidades para sua próxima conquista.",
    "actionLabel": "Consultar outros imóveis"
  },
  "regions": {
    "title": "As melhores regiões",
    "description": "Atuamos nos bairros mais desejados e em condomínios de alto padrão."
  },
  "services": {
    "title": "Nossos serviços",
    "description": "Soluções completas para quem deseja comprar, vender ou avaliar imóveis."
  },
  "benefits": {
    "title": "Seu imóvel, nossa atenção em cada detalhe.",
    "description": "Acompanhamento próximo para você decidir com clareza.",
    "image": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1536&q=80",
    "imageAlt": "Ambiente integrado de um imóvel residencial moderno"
  },
  "process": {
    "title": "Da primeira conversa às chaves",
    "description": "Conheça as etapas do atendimento para encontrar seu próximo imóvel."
  },
  "testimonials": {
    "title": "Histórias de novos endereços",
    "description": "Relatos ilustrativos de compradores e vendedores sobre o atendimento da Arche Imóveis.",
    "sourceLabel": "Depoimentos demonstrativos",
    "showGoogleBrand": false
  },
  "faq": {
    "title": "Dúvidas frequentes",
    "description": "Saiba como iniciar sua busca ou anunciar seu imóvel."
  },
  "finalCta": {
    "title": "Quer vender ou avaliar seu imóvel?",
    "description": "Converse com nossa equipe sobre seu imóvel e conheça as próximas etapas do atendimento.",
    "phoneLabel": "Prefere ligar?",
    "primaryActionLabel": "Solicitar avaliação"
  }
};

export const properties: PropertyItem[] = [
  {
    "id": "prop-1",
    "title": "Cobertura Duplex com Terraço",
    "neighborhood": "Vila Mariana",
    "type": "Cobertura",
    "price": "R$ 3.500.000",
    "beds": 4,
    "baths": 5,
    "parking": 3,
    "area": 320,
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1536&q=80"
  },
  {
    "id": "prop-2",
    "title": "Casa em Condomínio Fechado",
    "neighborhood": "Alphaville",
    "type": "Casa",
    "price": "R$ 2.800.000",
    "beds": 4,
    "baths": 4,
    "parking": 4,
    "area": 280,
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1536&q=80"
  },
  {
    "id": "prop-3",
    "title": "Apartamento Alto Padrão",
    "neighborhood": "Itaim Bibi",
    "type": "Apartamento",
    "price": "R$ 1.950.000",
    "beds": 3,
    "baths": 3,
    "parking": 2,
    "area": 145,
    "image": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1536&q=80"
  },
  {
    "id": "prop-4",
    "title": "Casa de Campo Moderna",
    "neighborhood": "Serra da Cantareira",
    "type": "Casa",
    "price": "R$ 1.600.000",
    "beds": 3,
    "baths": 2,
    "parking": 4,
    "area": 210,
    "image": "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=1536&q=80"
  }
];

export const regions: RegionItem[] = [
  {
    "id": "zona-sul",
    "name": "Zona Sul",
    "image": "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "propertyCount": 142
  },
  {
    "id": "zona-oeste",
    "name": "Zona Oeste",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "propertyCount": 89
  },
  {
    "id": "centro",
    "name": "Centro Expandido",
    "image": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "propertyCount": 215
  },
  {
    "id": "alphaville",
    "name": "Alphaville",
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "propertyCount": 64
  }
];

export const services: ServiceItem[] = [
  {
    "title": "Assessoria Completa",
    "description": "Acompanhamos todo o processo de compra ou venda, desde a busca pelo imóvel ideal até a assinatura da escritura.",
    "detail": "Sem burocracia"
  },
  {
    "title": "Avaliação Profissional",
    "description": "Realizamos a avaliação do seu imóvel baseada no valor real de mercado e em tendências atualizadas.",
    "detail": "Precificação exata"
  },
  {
    "title": "Financiamento Facilitado",
    "description": "Temos parcerias com os principais bancos para aprovar seu crédito imobiliário com as melhores taxas.",
    "detail": "Aprovação rápida"
  },
  {
    "title": "Gestão de Contratos",
    "description": "Nosso departamento jurídico garante a segurança de todas as transações e contratos firmados.",
    "detail": "Segurança jurídica"
  },
  {
    "title": "Marketing Estratégico",
    "description": "Destacamos seu imóvel com fotos profissionais e anúncios nos principais portais para acelerar a negociação.",
    "detail": "Maior visibilidade"
  }
];

export const trustMetrics: MetricItem[] = [
  {
    "value": "12",
    "label": "anos de experiência",
    "detail": "indicador ilustrativo"
  },
  {
    "value": "500+",
    "label": "negócios acompanhados",
    "detail": "indicador ilustrativo"
  },
  {
    "value": "4,9",
    "label": "nota de satisfação",
    "detail": "indicador ilustrativo"
  }
];

export const benefits: BenefitItem[] = [
  {
    "title": "Seleção personalizada",
    "description": "Imóveis selecionados conforme sua localização, orçamento e prioridades."
  },
  {
    "title": "Clareza em cada etapa",
    "description": "Informações sobre visitas, propostas e documentos organizadas em um só atendimento."
  },
  {
    "title": "Acompanhamento próximo",
    "description": "Um corretor acompanha sua busca e mantém você informado sobre os próximos passos."
  }
];

export const process: ProcessItem[] = [
  {
    "title": "Conte o que procura",
    "description": "Compartilhe suas preferências de localização, tipo de imóvel e orçamento."
  },
  {
    "title": "Conheça os imóveis",
    "description": "Receba uma seleção de opções e combine as visitas com seu corretor."
  },
  {
    "title": "Apresente sua proposta",
    "description": "Nossa equipe acompanha a negociação e a organização dos documentos."
  },
  {
    "title": "Prepare a mudança",
    "description": "Após a conclusão das etapas da negociação, combinamos a entrega das chaves."
  }
];

export const testimonials: TestimonialItem[] = [
  {
    "quote": "A equipe entendeu perfeitamente o que buscávamos e encontrou a casa dos nossos sonhos em menos de um mês. O processo foi transparente e muito seguro.",
    "name": "Roberto Almeida",
    "context": "Comprou uma casa em São Paulo",
    "rating": 5
  },
  {
    "quote": "Vendi meu apartamento com eles. Fizeram fotos profissionais e a avaliação foi muito precisa. Vendemos rápido e pelo valor esperado.",
    "name": "Mariana Costa",
    "context": "Vendeu apartamento no Itaim Bibi",
    "rating": 5
  },
  {
    "quote": "Excelente atendimento! O suporte jurídico durante a assinatura do contrato nos deixou muito tranquilos. Recomendamos fortemente.",
    "name": "Carlos e Paula",
    "context": "Compraram o primeiro imóvel",
    "rating": 5
  }
];

export const faq: FAQItem[] = [
  {
    "question": "Como agendar uma visita?",
    "answer": "Entre em contato pelo WhatsApp indicando o imóvel desejado. Nossa equipe confirma a disponibilidade e combina o melhor horário."
  },
  {
    "question": "Posso anunciar meu imóvel?",
    "answer": "Sim. Envie uma mensagem com a localização, o tipo e as principais características do imóvel para iniciar o atendimento."
  },
  {
    "question": "Como funciona a avaliação?",
    "answer": "A equipe conhece as características do imóvel e apresenta as etapas da avaliação. Converse com um corretor para consultar condições e prazos."
  },
  {
    "question": "Vocês auxiliam na compra financiada?",
    "answer": "A equipe orienta sobre as etapas e os documentos solicitados. Condições, taxas e aprovação dependem da análise da instituição financeira."
  },
  {
    "question": "Os imóveis desta página estão disponíveis?",
    "answer": "Esta é uma demonstração de template. Fotos, imóveis, preços, quantidades e depoimentos são ilustrativos e devem ser substituídos pelo catálogo real da imobiliária."
  }
];

// Keep navigation consistent when sections are disabled or emptied.
const visibleAnchors: Record<string, boolean> = {
  '/#imoveis-destaque': homePage.sections.properties && properties.length > 0,
  '/#regioes-atendidas': homePage.sections.regions && regions.length > 0,
  '/#servicos': homePage.sections.services && services.length > 0,
  '/#depoimentos': homePage.sections.testimonials && testimonials.length > 0,
  '/#duvidas': homePage.sections.faq && faq.length > 0,
};
export const navigation = site.navigation.filter(item => visibleAnchors[item.href] !== false);

export function whatsappInquiry(message: string): string {
  const url = new URL(site.contact.whatsappHref);
  url.searchParams.set('text', message);
  return url.toString();
}
