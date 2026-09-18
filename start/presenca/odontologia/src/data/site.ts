// Conteúdo de exemplo identificado pela faixa superior. Substituir antes da publicação real.
export const site = {
  "name": "Arche Odonto",
  "title": "Arche Odonto | Cuidado para o seu sorriso",
  "description": "Odontologia com escuta, planejamento e cuidado individual. Conheça os tratamentos da Arche Odonto e agende sua avaliação.",
  "demo": true,
  "demoNotice": "Modelo demonstrativo. Dados, resultados e avaliações são ilustrativos.",
  "url": "https://archeodonto.example",
  "whatsapp": "5599999999999",
  "phone": "(99) 99999-9999",
  "phoneHref": "tel:+5599999999999",
  "email": "contato@archeodonto.example",
  "address": "Av. da Saúde, 456, São Paulo, SP",
  "hours": "Segunda a sexta, das 8h às 19h. Sábado, das 8h às 13h.",
  "instagram": "",
  "hero": {
    "eyebrow": "Odontologia & Bem-estar",
    "title": "Seu sorriso.",
    "emphasis": "Nosso cuidado.",
    "description": "Da prevenção à reabilitação, um cuidado próximo para você sorrir, conversar e viver com mais confiança.",
    "primaryCta": "Agendar Avaliação",
    "secondaryCta": "Ver Tratamentos",
    "badgeTitle": "Planejamento individual",
    "badgeText": "Clareza em cada etapa"
  },
  "about": {
    "title": "Um cuidado que começa pela escuta e respeita",
    "emphasis": "o seu tempo.",
    "paragraphs": [
      "Na Arche Odonto, cada sorriso tem uma história. Queremos conhecer a sua: ouvir suas dúvidas, entender suas expectativas e conversar sobre o que importa para você.",
      "A avaliação é o primeiro passo para planejar seu tratamento. Explicamos as opções e os cuidados de cada etapa, para que você participe das decisões com tranquilidade."
    ],
    "values": [
      {
        "title": "Clareza",
        "text": "Orientação para decidir com confiança"
      },
      {
        "title": "Proximidade",
        "text": "Atenção antes, durante e depois"
      }
    ]
  },
  "cta": {
    "title": "Vamos cuidar do seu sorriso?",
    "description": "Converse com nossa equipe, tire suas dúvidas e encontre o melhor horário para sua avaliação.",
    "label": "Agendar pelo WhatsApp"
  }
};

export const navigation = [
  {
    "label": "Tratamentos",
    "href": "#tratamentos"
  },
  {
    "label": "Nossa Clínica",
    "href": "#sobre"
  },
  {
    "label": "Depoimentos",
    "href": "#depoimentos"
  }
];

export const treatments = [
  {
    "id": "prevencao",
    "title": "Avaliação e Prevenção",
    "image": "prevencao",
    "alt": "Consultório odontológico preparado para atendimento",
    "description": "Um olhar completo para a sua saúde bucal. Avaliação, limpeza e orientação para acompanhar seu sorriso em cada fase."
  },
  {
    "id": "implantes",
    "title": "Implantes e Reabilitação",
    "image": "implantes",
    "alt": "Profissional examinando imagens de diagnóstico odontológico",
    "description": "Planejamento para repor dentes e recuperar a função do sorriso. As possibilidades são definidas a partir da avaliação individual."
  },
  {
    "id": "ortodontia",
    "title": "Ortodontia e Alinhadores",
    "image": "alinhadores",
    "alt": "Pessoa colocando um alinhador transparente nos dentes",
    "description": "Opções para o alinhamento dos dentes, com aparelhos ou alinhadores. Entenda qual abordagem combina com o seu caso."
  },
  {
    "id": "clareamento",
    "title": "Clareamento Dental",
    "image": "avaliacao",
    "alt": "Avaliação odontológica com espelho e instrumentos de exame",
    "description": "Converse sobre seus objetivos e conheça as opções de clareamento supervisionado, com orientações para o seu sorriso."
  },
  {
    "id": "restauracoes",
    "title": "Odontologia Restauradora",
    "image": "planejamento",
    "alt": "Dentista explicando uma radiografia para a paciente",
    "description": "Cuidado para preservar e restaurar os dentes, considerando função, conforto e aparência. Tudo começa com um diagnóstico cuidadoso."
  }
];

export const testimonials = [
  {
    "initials": "MC",
    "name": "Mariana Costa",
    "quote": "Cheguei com muitas dúvidas e fui ouvida com calma. Entendi cada etapa do meu plano e me senti à vontade para perguntar."
  },
  {
    "initials": "RL",
    "name": "Rafael Lima",
    "quote": "Gostei da atenção desde a primeira conversa. O atendimento foi organizado e as explicações foram muito claras."
  },
  {
    "initials": "BA",
    "name": "Beatriz Alves",
    "quote": "Eu costumava adiar as consultas. Encontrar uma equipe que respeita o meu tempo fez diferença na minha experiência."
  }
];

export const contactReady = /^\d{10,15}$/.test(site.whatsapp);
export const contactHref = contactReady ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Olá! Gostaria de agendar uma avaliação na ${site.name}.`)}` : "#contato";
if (!site.demo && (!contactReady || site.whatsapp === "5599999999999" || !site.url.startsWith("https://") || site.url.includes(".example"))) { throw new Error("Configure domínio e WhatsApp reais antes de desativar o modo demo."); }
