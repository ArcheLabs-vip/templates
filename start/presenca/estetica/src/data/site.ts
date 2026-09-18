export const site = {
  name: 'Aura Estética',
  title: 'Aura Estética | Realce sua Beleza Natural',
  description: 'Tratamentos estéticos personalizados, acolhimento e cuidado com a sua individualidade. Conheça a Aura Estética.',
  // Substitua os conteúdos ilustrativos e configure os contatos antes de publicar.
  demo: true,
  demoNotice: 'Modelo demonstrativo. Dados, resultados e avaliações são ilustrativos.',
  url: 'https://aura.example',
  whatsapp: '5599999999999',
  phone: '(99) 99999-9999',
  phoneHref: 'tel:+5599999999999',
  email: 'contato@aura.example',
  address: 'Av. Paulista, 1000, Conj. 101, São Paulo, SP',
  hours: 'Segunda a sexta, das 9h às 19h. Sábado, das 9h às 15h.',
  instagram: '',
  hero: {
    eyebrow: 'Estética & Bem-estar',
    title: 'Realce sua',
    emphasis: 'Beleza Natural',
    description: 'Tratamentos personalizados para valorizar seus traços e cuidar de você, em um ambiente acolhedor.',
    primaryCta: 'Agendar Avaliação',
    secondaryCta: 'Ver Tratamentos',
    badgeTitle: 'Cuidado individualizado',
    badgeText: 'Sua beleza, sua essência',
  },
  about: {
    title: 'Acreditamos que a beleza verdadeira reflete o',
    emphasis: 'seu bem-estar',
    paragraphs: [
      'A Aura Estética nasceu do desejo de criar um refúgio de cuidado e autoestima. Nossa proposta é valorizar sua beleza, respeitando a sua individualidade e harmonia facial.',
      'Da primeira conversa ao acompanhamento, cada detalhe foi pensado para o seu conforto. Um espaço para desacelerar, tirar suas dúvidas e descobrir o cuidado que faz sentido para você.',
    ],
    values: [
      { title: 'Escuta', text: 'Seu cuidado começa com uma conversa' },
      { title: 'Respeito', text: 'A sua individualidade vem primeiro' },
    ],
  },
  cta: {
    title: 'Pronta para realçar sua melhor versão?',
    description: 'Fale diretamente com nossa equipe pelo WhatsApp. Tire suas dúvidas, conheça os valores e consulte os horários disponíveis.',
    label: 'Falar com uma Especialista',
  },
};

export const navigation = [
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Nossa Essência', href: '#sobre' },
  { label: 'Depoimentos', href: '#depoimentos' },
];

export const treatments = [
  {
    id: 'harmonizacao', title: 'Harmonização Facial', image: 'facial',
    alt: 'Retrato de pele e traços faciais',
    description: 'Um olhar atento às proporções do seu rosto, com um plano de cuidado que valoriza seus traços de forma suave e natural.',
  },
  {
    id: 'botox', title: 'Toxina Botulínica (Botox)', image: 'botox',
    alt: 'Detalhe de cuidado facial',
    description: 'Cuidado com as linhas de expressão a partir de uma avaliação individual, respeitando as características do seu rosto.',
  },
  {
    id: 'laser', title: 'Depilação a Laser', image: 'laser',
    alt: 'Fotografia de cuidados com a pele',
    description: 'Um plano de sessões pensado para o seu tipo de pele e pelo. Converse com a equipe sobre indicação, cuidados e expectativas.',
  },
  {
    id: 'skincare', title: 'Skin Care Premium', image: 'skincare',
    alt: 'Cuidado e relaxamento facial',
    description: 'Limpeza de pele, hidratação e cuidados faciais personalizados. Um momento de atenção à textura e às necessidades da sua pele.',
  },
  {
    id: 'corporal', title: 'Estética Corporal', image: 'corporal',
    alt: 'Massagem em um ambiente de bem-estar',
    description: 'Massagens e cuidados corporais que combinam acolhimento e atenção a você. Conheça as opções na sua avaliação.',
  },
];

// Depoimentos fictícios do HTML de referência. Exibidos apenas em modo demo.
// Para produção, use exclusivamente relatos autorizados e verificáveis.
export const testimonials = [
  { initials: 'MS', name: 'Mariana Silva', quote: 'A equipe me deixou super tranquila! Fui acolhida desde a primeira conversa e pude tirar todas as minhas dúvidas.' },
  { initials: 'CR', name: 'Camila Ribeiro', quote: 'O ambiente é incrível, parece um spa. É um momento que reservo para mim e sempre saio me sentindo muito bem.' },
  { initials: 'AP', name: 'Amanda Prado', quote: 'As meninas são muito atenciosas. Adorei o cuidado em explicar cada etapa e respeitar o meu tempo.' },
];

export const contactReady = /^\d{10,15}$/.test(site.whatsapp);
export const contactHref = contactReady
  ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de agendar uma avaliação na Aura Estética.')}`
  : '#contato';

if (!site.demo && (!contactReady || site.whatsapp === '5599999999999' || !site.url.startsWith('https://') || site.url.includes('.example'))) {
  throw new Error('Configure site.url e site.whatsapp com os dados reais antes de desativar o modo demo.');
}
