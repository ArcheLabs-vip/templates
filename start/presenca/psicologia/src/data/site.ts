// Conteúdo demonstrativo: substituir identidade e dados antes de publicar para uma clínica real.
export const site = {
  "name": "Instituto Presença",
  "title": "Instituto Presença | Psicologia e escuta",
  "description": "Um espaço de escuta para a sua história. Conheça a psicoterapia individual, presencial e online do Instituto Presença.",
  "demo": true,
  "demoNotice": "Modelo demonstrativo. Dados de atendimento e contatos são ilustrativos.",
  "url": "https://institutopresenca.example",
  "whatsapp": "5599999999999",
  "phone": "(99) 99999-9999",
  "phoneHref": "tel:+5599999999999",
  "email": "contato@institutopresenca.example",
  "address": "Rua das Acácias, 200, São Paulo, SP",
  "hours": "Segunda a sexta, das 8h às 20h. Sábado, das 9h às 14h.",
  "instagram": "",
  "hero": {
    "eyebrow": "Psicologia & Escuta",
    "title": "Um espaço",
    "emphasis": "para você.",
    "description": "Você não precisa ter todas as respostas. Aqui, há tempo e espaço para conversar sobre o que importa.",
    "primaryCta": "Agendar Sessão",
    "secondaryCta": "Conhecer Atendimentos",
    "badgeTitle": "Escuta com acolhimento",
    "badgeText": "Respeito à sua história"
  },
  "about": {
    "title": "Cada história merece ser ouvida",
    "emphasis": "com atenção.",
    "paragraphs": [
      "O Instituto Presença é um espaço de psicologia pensado para acolher pessoas e suas diferentes formas de viver, sentir e se relacionar.",
      "A conversa começa pelo que faz sentido para você. No primeiro encontro, há espaço para apresentar suas dúvidas, conhecer a proposta de atendimento e combinar como seguir."
    ],
    "values": [
      {
        "title": "Escuta",
        "text": "Espaço para falar no seu ritmo"
      },
      {
        "title": "Respeito",
        "text": "Atenção à sua singularidade"
      }
    ]
  },
  "cta": {
    "title": "Podemos começar com uma conversa.",
    "description": "Fale com a equipe para saber sobre os atendimentos, consultar horários e agendar sua primeira sessão.",
    "label": "Conversar pelo WhatsApp"
  }
};

export const navigation = [
  {
    "label": "Atendimentos",
    "href": "#atendimentos"
  },
  {
    "label": "Nosso Espaço",
    "href": "#sobre"
  },
  {
    "label": "Dúvidas",
    "href": "#duvidas"
  }
];

export const treatments = [
  {
    "id": "individual",
    "title": "Psicoterapia Individual",
    "image": "individual",
    "alt": "Duas pessoas conversando em um consultório acolhedor",
    "description": "Um espaço de conversa para olhar para suas experiências, emoções e relações, a partir da sua história e do seu momento."
  },
  {
    "id": "presencial",
    "title": "Atendimento Presencial",
    "image": "presencial",
    "alt": "Consultório com poltronas, plantas e iluminação natural",
    "description": "Encontros em um ambiente tranquilo, com privacidade e um tempo reservado para você. Consulte a disponibilidade de horários."
  },
  {
    "id": "online",
    "title": "Atendimento Online",
    "image": "online",
    "alt": "Computador com uma videochamada na tela",
    "description": "Encontros por videochamada para quem prefere ou precisa estar em outro lugar. Converse com a equipe sobre essa modalidade."
  }
];

export const steps = [
  {
    "title": "Entre em contato",
    "text": "Consulte modalidades, valores e horários. Não é preciso compartilhar detalhes pessoais para agendar."
  },
  {
    "title": "Conheça o espaço",
    "text": "No primeiro encontro, você pode falar sobre o que busca e tirar dúvidas sobre a proposta de atendimento."
  },
  {
    "title": "Combinem os próximos passos",
    "text": "A continuidade, a frequência e os acordos do atendimento são conversados com a profissional."
  }
];

export const faqs = [
  {
    "question": "Preciso saber o que falar na primeira sessão?",
    "answer": "Não é preciso chegar com uma fala pronta. O primeiro encontro é um momento para se conhecerem, tirar dúvidas e conversar sobre o que levou você a procurar atendimento."
  },
  {
    "question": "Como escolho entre presencial e online?",
    "answer": "Você pode conversar com a equipe sobre sua preferência, rotina e disponibilidade. As condições de cada modalidade são esclarecidas antes do agendamento."
  },
  {
    "question": "Como consulto valores e horários?",
    "answer": "Entre em contato pelo WhatsApp. A equipe informa os valores das sessões, as condições de pagamento e os horários disponíveis antes de confirmar o agendamento."
  },
  {
    "question": "Qual é a frequência dos encontros?",
    "answer": "A frequência é combinada com a profissional ao longo do atendimento, considerando a proposta de acompanhamento e a sua disponibilidade."
  },
  {
    "question": "Preciso contar minha história pelo WhatsApp?",
    "answer": "Não. O contato pode ser usado apenas para dúvidas sobre horários, modalidades e agendamento. Você pode reservar os assuntos pessoais para o encontro com a profissional."
  }
];

export const contactReady = /^\d{10,15}$/.test(site.whatsapp);
export const contactHref = contactReady ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Olá! Gostaria de saber sobre os atendimentos do ${site.name}.`)}` : "#contato";
if (!site.demo && (!contactReady || site.whatsapp === "5599999999999" || !site.url.startsWith("https://") || site.url.includes(".example"))) throw new Error("Configure domínio e WhatsApp reais antes de desativar o modo demo.");
