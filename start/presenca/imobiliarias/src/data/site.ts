// Marca, imóveis, preços, fotos, endereço e relatos demonstrativos. Personalize antes de publicar.
export const site = {
  "name": "Arche Imóveis",
  "title": "Arche Imóveis | Um lugar para a sua próxima história",
  "description": "Encontre casas e apartamentos para comprar ou alugar. Conheça a Arche Imóveis e converse sobre o seu próximo endereço.",
  "demo": true,
  "demoNotice": "Modelo demonstrativo. Imóveis, preços, fotos e contatos são ilustrativos.",
  "url": "https://archeimoveis.example",
  "whatsapp": "5599999999999",
  "phone": "(99) 99999-9999",
  "phoneHref": "tel:+5599999999999",
  "email": "contato@archeimoveis.example",
  "address": "Av. dos Cedros, 320, São Paulo, SP",
  "hours": "Segunda a sexta, das 9h às 18h. Visitas com horário combinado.",
  "instagram": "",
  "contactMessage": "Olá! Gostaria de encontrar meu próximo imóvel com a Arche Imóveis.",
  "footerDescription": "Imóveis para viver novas histórias. Uma conversa próxima em cada etapa da sua escolha.",
  "hero": {
    "eyebrow": "Comprar ou alugar, com cuidado",
    "title": "Seu novo lugar.",
    "emphasis": "Sua nova história.",
    "description": "Casas e apartamentos para comprar ou alugar, com uma equipe próxima em cada etapa da sua escolha.",
    "primaryCta": "Explorar imóveis",
    "secondaryCta": "Falar com um corretor",
    "imageAlt": "Casa contemporânea de dois pavimentos com fachada de madeira, varanda e jardim arborizado"
  },
  "properties": {
    "title": "Qual é o seu próximo endereço?",
    "description": "Uma seleção de casas e apartamentos para diferentes formas de viver.",
    "ctaTitle": "Seu imóvel também pode estar aqui.",
    "ctaDescription": "Quer vender ou alugar? Converse com a equipe sobre a apresentação e a divulgação do seu imóvel.",
    "ctaLabel": "Quero anunciar meu imóvel"
  },
  "about": {
    "eyebrow": "A imobiliária",
    "title": "Antes do endereço,",
    "emphasis": "entendemos você.",
    "imageAlt": "Corretora e colega conversando sobre uma planta de imóvel em um escritório iluminado",
    "paragraphs": [
      "Mudar de casa começa muito antes da entrega das chaves. Começa com planos, perguntas e uma ideia do que faz sentido para a sua rotina.",
      "Na Arche Imóveis, ouvimos o que você procura, selecionamos possibilidades e acompanhamos as visitas e a negociação. Com tempo para conversar e clareza sobre cada próximo passo."
    ],
    "values": [
      {
        "title": "Escuta",
        "text": "O seu momento orienta a nossa busca."
      },
      {
        "title": "Cuidado",
        "text": "Acompanhamento da primeira conversa às chaves."
      }
    ]
  },
  "regions": {
    "title": "Um bairro também é uma escolha.",
    "description": "Perto do trabalho, de uma praça ou de tudo o que faz parte da sua vida. Conheça os perfis da nossa seleção."
  },
  "process": {
    "title": "Do primeiro desejo à próxima chave.",
    "description": "Um caminho acompanhado, com espaço para decidir."
  },
  "testimonials": {
    "title": "Cada mudança tem uma história.",
    "description": "O cuidado aparece nos detalhes de cada escolha."
  },
  "faq": {
    "title": "Antes de dar o próximo passo",
    "description": "Algumas respostas para começar a conversa."
  },
  "booking": {
    "title": "Vamos encontrar seu lugar?",
    "description": "Escolha o assunto e revise sua mensagem antes de continuar.",
    "defaultValue": "encontrar meu próximo imóvel",
    "defaultLabel": "Quero encontrar um imóvel",
    "note": "A equipe confirma disponibilidade, valores e horários. A visita só fica agendada após a confirmação do corretor."
  },
  "cta": {
    "title": "Seu próximo capítulo começa com uma conversa.",
    "description": "Conte como imagina o seu novo lugar. Nós ajudamos a encontrar as possibilidades.",
    "label": "Conversar no WhatsApp"
  }
};

export const navigation = [
  {
    "label": "Imóveis",
    "href": "#imoveis"
  },
  {
    "label": "A imobiliária",
    "href": "#sobre"
  },
  {
    "label": "Regiões",
    "href": "#regioes"
  },
  {
    "label": "Dúvidas",
    "href": "#duvidas"
  }
];

export const properties = [
  {
    "id": "imovel-ar101",
    "reference": "AR101",
    "title": "Casa Jardim das Acácias",
    "type": "Casa",
    "purpose": "comprar",
    "region": "Jardins",
    "location": "Jardins · São Paulo",
    "image": "casa-jardim",
    "alt": "Casa contemporânea de dois pavimentos com fachada de madeira, varanda e jardim arborizado",
    "area": 240,
    "bedrooms": 3,
    "parking": 2,
    "price": 1890000,
    "condominium": 0,
    "iptu": 420,
    "description": "Jardim privativo, ambientes integrados e uma varanda para aproveitar os dias com calma.",
    "details": "3 suítes, lavabo, cozinha integrada e área de serviço. Área construída de 240 m² em terreno de 320 m²."
  },
  {
    "id": "imovel-ar102",
    "reference": "AR102",
    "title": "Apartamento Horizonte",
    "type": "Apartamento",
    "purpose": "alugar",
    "region": "Vila Nova",
    "location": "Vila Nova · São Paulo",
    "image": "apartamento",
    "alt": "Sala de apartamento com sofá claro, madeira e grandes janelas voltadas para árvores",
    "area": 86,
    "bedrooms": 2,
    "parking": 1,
    "price": 4200,
    "condominium": 780,
    "iptu": 190,
    "description": "Luz natural, sala integrada e uma planta que deixa a rotina mais leve.",
    "details": "2 dormitórios, sendo 1 suíte, 2 banheiros, varanda e área de serviço. Área privativa de 86 m²."
  },
  {
    "id": "imovel-ar103",
    "reference": "AR103",
    "title": "Cobertura Vista Aberta",
    "type": "Cobertura",
    "purpose": "comprar",
    "region": "Alto da Boa Vista",
    "location": "Alto da Boa Vista · São Paulo",
    "image": "cobertura",
    "alt": "Terraço de cobertura com mesa de madeira, jardim em vasos e vista para a cidade",
    "area": 178,
    "bedrooms": 3,
    "parking": 2,
    "price": 1650000,
    "condominium": 1450,
    "iptu": 380,
    "description": "Um terraço só seu, com espaço para receber e olhar a cidade por outro ângulo.",
    "details": "3 dormitórios, sendo 1 suíte, 3 banheiros e terraço privativo. Área privativa total de 178 m²."
  },
  {
    "id": "imovel-ar104",
    "reference": "AR104",
    "title": "Studio Essencial",
    "type": "Studio",
    "purpose": "alugar",
    "region": "Vila Nova",
    "location": "Vila Nova · São Paulo",
    "image": "studio",
    "alt": "Studio compacto com cozinha de madeira, área de estar e cama próxima à janela",
    "area": 38,
    "bedrooms": 1,
    "parking": 0,
    "price": 2600,
    "condominium": 480,
    "iptu": 90,
    "description": "Espaços bem pensados para quem busca praticidade em um endereço urbano.",
    "details": "Ambiente integrado para estar e dormir, cozinha e 1 banheiro. Área privativa de 38 m². Sem vaga de garagem."
  },
  {
    "id": "imovel-ar105",
    "reference": "AR105",
    "title": "Casa Vila do Sol",
    "type": "Casa",
    "purpose": "comprar",
    "region": "Alto da Boa Vista",
    "location": "Alto da Boa Vista · São Paulo",
    "image": "casa-vila",
    "alt": "Casa térrea com janelas verdes, telhado de cerâmica, varanda e jardim",
    "area": 156,
    "bedrooms": 3,
    "parking": 2,
    "price": 1180000,
    "condominium": 0,
    "iptu": 280,
    "description": "O charme de uma casa térrea, com varanda e verde por perto.",
    "details": "3 dormitórios, sendo 1 suíte, 2 banheiros, quintal e lavanderia. Área construída de 156 m² em terreno de 230 m²."
  }
];

export const ownerSubject = "anunciar meu imóvel";

export const propertySubject = (property: typeof properties[number]) => `${property.title} (ref. ${property.reference})`;
export const bookingSubjects = [
  ...properties.map(property => ({ value: propertySubject(property), label: `${property.reference} · ${property.title}` })),
  { value: ownerSubject, label: 'Quero anunciar meu imóvel' },
];

export const officeRegistration = {
  "officeCreci": "",
  "responsibleName": "",
  "responsibleCreci": ""
};

export const regions = [
  {
    "title": "Jardins",
    "text": "Para quem procura uma casa com jardim e espaço para viver ao ar livre."
  },
  {
    "title": "Vila Nova",
    "text": "Apartamentos e studios para uma rotina mais prática, em diferentes metragens."
  },
  {
    "title": "Alto da Boa Vista",
    "text": "Casas e coberturas para quem valoriza privacidade e espaço para receber."
  }
];

export const steps = [
  {
    "title": "Conte o que procura",
    "text": "Compartilhe seu momento, as regiões de interesse e a faixa de valor que faz sentido para você."
  },
  {
    "title": "Conheça as possibilidades",
    "text": "Selecionamos opções e combinamos as visitas para você conhecer cada espaço de perto."
  },
  {
    "title": "Decida com acompanhamento",
    "text": "Alinhamos as condições com as partes e acompanhamos as etapas até a entrega das chaves."
  }
];

export const testimonials = [
  {
    "initials": "ML",
    "name": "Marina Lopes",
    "context": "Relato ilustrativo · Compra",
    "quote": "A equipe entendeu o que era importante para a nossa rotina. Cada visita fazia sentido, e pudemos decidir com calma."
  },
  {
    "initials": "RA",
    "name": "Rafael Alves",
    "context": "Relato ilustrativo · Locação",
    "quote": "Eu precisava de um espaço prático para uma nova fase. Ter alguém por perto para explicar os próximos passos fez diferença."
  },
  {
    "initials": "HC",
    "name": "Helena Costa",
    "context": "Relato ilustrativo · Proprietária",
    "quote": "Gostei do cuidado na apresentação do imóvel e da comunicação durante as visitas. Sempre sabia em que etapa estávamos."
  }
];

export const questions = [
  {
    "question": "Como posso agendar uma visita?",
    "answer": "Escolha um imóvel e use o botão “Quero conhecer”. A referência já aparece na mensagem. O corretor confirma a disponibilidade do imóvel e combina um horário com você."
  },
  {
    "question": "Os valores incluem condomínio e IPTU?",
    "answer": "O valor principal corresponde ao preço de venda ou ao aluguel mensal. Condomínio e IPTU, quando aplicáveis, aparecem separadamente nos detalhes de cada imóvel. Consulte a equipe para confirmar todos os encargos e as condições atuais."
  },
  {
    "question": "Também posso anunciar meu imóvel?",
    "answer": "Sim. Use “Quero anunciar meu imóvel” e conte à equipe onde ele fica e se deseja vender ou alugar. O corretor conversa com você sobre as informações, a apresentação e as condições do atendimento."
  },
  {
    "question": "Não encontrei o imóvel que procuro. E agora?",
    "answer": "Conte as regiões, a quantidade de dormitórios e a faixa de valor desejada. A equipe pode conversar sobre outras possibilidades e acompanhar a sua busca."
  },
  {
    "question": "Preciso enviar documentos no primeiro contato?",
    "answer": "Não. Para começar, basta informar o que você procura ou a referência do imóvel. A equipe explica os documentos e os canais de compartilhamento quando forem necessários."
  }
];

export const formatPrice = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(value);
export const contactReady = /^\d{10,15}$/.test(site.whatsapp);
export const contactHref = contactReady ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.contactMessage)}` : '#contato';
if (!site.demo && (!contactReady || site.whatsapp === '5599999999999' || !site.url.startsWith('https://') || site.url.includes('.example'))) {
  throw new Error('Configure site.url e site.whatsapp com os dados reais antes de desativar o modo demo.');
}
