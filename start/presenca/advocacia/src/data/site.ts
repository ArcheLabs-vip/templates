// Identidade, profissionais e contatos demonstrativos. Substitua antes de publicar.
export const site = {
  name: 'Almeida & Prado Advocacia',
  title: 'Almeida & Prado | Advocacia com escuta e clareza',
  description: 'Conheça o escritório Almeida & Prado, suas áreas de atuação e a forma de atendimento. Direito civil, família, empresarial e imobiliário.',
  demo: true,
  demoNotice: 'Modelo demonstrativo. Escritório, profissionais, imagens e contatos são ilustrativos.',
  url: 'https://almeidaprado.example',
  whatsapp: '5599999999999',
  phone: '(99) 99999-9999',
  phoneHref: 'tel:+5599999999999',
  email: 'contato@almeidaprado.example',
  address: 'Rua dos Cedros, 320, sala 42, São Paulo, SP',
  hours: 'Segunda a sexta, das 9h às 18h.',
  instagram: '',
  contactMessage: 'Olá! Gostaria de informações sobre o atendimento do escritório Almeida & Prado.',
  footerDescription: 'Escuta atenta, análise cuidadosa e uma conversa clara sobre cada próximo passo.',
  hero: {
    eyebrow: 'Advocacia para pessoas e empresas',
    title: 'Escuta atenta.', emphasis: 'Direção clara.',
    description: 'Orientação jurídica para compreender seu momento e conduzir suas decisões com cuidado e responsabilidade.',
    primaryCta: 'Entrar em contato', secondaryCta: 'Áreas de atuação',
    imageAlt: 'Sala de reunião com mesa de madeira, cadeiras verdes e luz natural no escritório demonstrativo',
  },
  services: { title: 'O direito, no seu contexto.', description: 'Atuação consultiva e contenciosa, com atenção às particularidades de cada pessoa, família e negócio.' },
  about: {
    eyebrow: 'O escritório', title: 'Antes de orientar,', emphasis: 'entender.',
    paragraphs: [
      'Uma questão jurídica nunca chega sozinha. Ela faz parte de uma história, de uma relação ou de um negócio. Nosso trabalho começa conhecendo esse contexto.',
      'Na Almeida & Prado, reunimos análise cuidadosa e comunicação próxima. Apresentamos os caminhos possíveis, seus limites e as etapas do trabalho, em uma linguagem que faça sentido para você.',
    ],
    values: [
      { title: 'Discrição', text: 'Cuidado com as informações em cada conversa.' },
      { title: 'Clareza', text: 'Orientações e responsabilidades bem explicadas.' },
    ],
  },
  team: { title: 'Pessoas que acompanham de perto.', description: 'Conheça quem está à frente do escritório e suas áreas de atuação.', imageAlt: 'Dois profissionais fictícios lado a lado em um escritório de advocacia' },
  process: { title: 'Cada etapa, bem explicada.', description: 'Do primeiro contato ao acompanhamento, você sabe como o trabalho se organiza.' },
  insights: { title: 'Antes da primeira conversa.', description: 'Informações sobre o atendimento para ajudar você a se preparar.' },
  faq: { title: 'Dúvidas sobre o atendimento', description: 'Algumas respostas para tornar o primeiro contato mais simples.' },
  booking: {
    title: 'Seu primeiro contato.',
    description: 'Selecione o assunto e revise a mensagem antes de abrir o WhatsApp.',
    defaultValue: 'o atendimento do escritório', defaultLabel: 'Informações sobre o atendimento',
    note: 'Envie apenas uma descrição geral. Documentos e informações confidenciais serão solicitados pelo canal combinado com a equipe.',
  },
  cta: { title: 'Uma conversa é o primeiro passo.', description: 'Consulte os horários e os formatos de atendimento. Nossa equipe orienta como iniciar o contato com o escritório.', label: 'Entrar em contato' },
};

export const navigation = [
  { label: 'Atuação', href: '/#atuacao' }, { label: 'O escritório', href: '/#sobre' },
  { label: 'Profissionais', href: '/#profissionais' }, { label: 'Conteúdos', href: '/#conteudos' },
];
export const services = [
  { id: 'civil', title: 'Cível e contratos', icon: 'file', description: 'Análise e elaboração de contratos, responsabilidade civil e acompanhamento de questões do dia a dia.', scope: 'Relações, acordos e responsabilidades' },
  { id: 'familia', title: 'Família e sucessões', icon: 'users', description: 'Orientação em questões familiares e patrimoniais, com escuta, discrição e respeito ao momento de cada pessoa.', scope: 'Pessoas, vínculos e patrimônio' },
  { id: 'empresarial', title: 'Empresarial', icon: 'briefcase', description: 'Acompanhamento jurídico da rotina de empresas, relações societárias e contratos de negócios.', scope: 'Decisões e rotina de negócios' },
  { id: 'imobiliario', title: 'Imobiliário', icon: 'building', description: 'Análise de documentos e orientação em compra, venda, locação e outras relações envolvendo imóveis.', scope: 'Imóveis e suas relações jurídicas' },
] as const;

// Não preencha números fictícios. Informe a seccional e o número de registro real.
export const officeRegistration = { legalName: '', officeOab: '', responsibleName: '', responsibleOab: '' };
export const professionals = [
  { name: 'Sofia Almeida', role: 'Advogada', areas: 'Cível, família e sucessões', oab: '', illustrative: true },
  { name: 'Lucas Prado', role: 'Advogado', areas: 'Empresarial e imobiliário', oab: '', illustrative: true },
];
export const steps = [
  { title: 'Escuta e contexto', text: 'No primeiro contato, entendemos o assunto e verificamos a disponibilidade para o atendimento.' },
  { title: 'Análise e orientação', text: 'Na consulta, os documentos e o contexto permitem conversar sobre possibilidades, limites e próximos passos.' },
  { title: 'Trabalho e acompanhamento', text: 'Após a contratação, alinhamos o escopo, os canais de comunicação e as atualizações sobre o trabalho.' },
];
export const questions = [
  { question: 'Como funciona o primeiro contato?', answer: 'Informe seu nome e o assunto em linhas gerais. A equipe verifica a disponibilidade, apresenta os formatos de atendimento e orienta sobre o agendamento de uma consulta. Não é necessário enviar documentos nessa primeira mensagem.' },
  { question: 'O atendimento pode ser online?', answer: 'Sim. As consultas podem acontecer por videoconferência, conforme disponibilidade e adequação ao assunto. O atendimento presencial é realizado com horário previamente combinado.' },
  { question: 'Quais documentos devo preparar?', answer: 'Os documentos dependem do assunto. Após o primeiro contato, a equipe informa o que é necessário e combina um canal de envio. Organize também suas dúvidas e as datas relevantes para a conversa.' },
  { question: 'Como são definidos os honorários?', answer: 'O escopo, a complexidade e as etapas do trabalho são considerados na proposta. Os honorários da consulta e de eventual acompanhamento são informados diretamente, antes da contratação.' },
  { question: 'Enviar uma mensagem já inicia o atendimento jurídico?', answer: 'Não. O contato inicial permite organizar o atendimento. A análise do caso e a prestação dos serviços dependem de alinhamento com o profissional e formalização da contratação. Não há acompanhamento automático de prazos pelo envio de uma mensagem.' },
];
export const articles = [
  {
    slug: 'primeira-conversa', category: 'Atendimento', title: 'Como se preparar para a primeira conversa',
    summary: 'Organize o contexto e suas dúvidas para aproveitar melhor o encontro com o profissional.',
    sections: [
      { title: 'Organize o que aconteceu', text: 'Anote os principais acontecimentos, as datas que você conhece e as pessoas ou empresas envolvidas. Uma sequência simples ajuda a explicar a situação sem precisar lembrar de todos os detalhes na hora.' },
      { title: 'Liste suas dúvidas', text: 'Registre o que você gostaria de compreender e o que espera da conversa. O profissional poderá esclarecer quais questões dependem da análise de documentos e quais informações ainda precisam ser reunidas.' },
      { title: 'Combine o envio de documentos', text: 'Aguarde a orientação da equipe sobre os documentos necessários e o canal de envio. Na mensagem inicial, uma descrição geral é suficiente. Evite compartilhar dados de terceiros ou informações confidenciais sem necessidade.' },
    ],
  },
  {
    slug: 'consulta-online', category: 'Consulta online', title: 'Um encontro com a mesma atenção, à distância',
    summary: 'Saiba como organizamos as consultas por videoconferência e o contato com a equipe.',
    sections: [
      { title: 'Antes do encontro', text: 'A equipe combina o horário e o canal da videoconferência. Escolha um local reservado, confira sua conexão e tenha suas anotações por perto. Caso precise de algum recurso de acessibilidade, informe no agendamento.' },
      { title: 'Durante a conversa', text: 'O encontro é um espaço para explicar o contexto, apresentar dúvidas e compreender as próximas etapas. Documentos adicionais podem ser solicitados quando necessários à análise. O formato do atendimento é combinado conforme o assunto.' },
      { title: 'Depois da consulta', text: 'Ao final, são alinhados os próximos passos. Quando houver necessidade de acompanhamento, o escopo, os honorários e os canais de comunicação são apresentados antes da contratação.' },
    ],
  },
];
export const contactReady = /^\d{10,15}$/.test(site.whatsapp);
export const contactHref = contactReady ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.contactMessage)}` : '/#contato';

if (!site.demo) {
  let validUrl = false;
  try { const url = new URL(site.url); validUrl = url.protocol === 'https:' && !url.hostname.endsWith('.example') && url.hostname !== 'localhost'; } catch { /* validated below */ }
  if (!validUrl || !contactReady || site.whatsapp === '5599999999999' || site.email.endsWith('.example')) throw new Error('Configure domínio, WhatsApp e e-mail reais antes de desativar o modo demo.');
  if (!officeRegistration.legalName || !officeRegistration.officeOab || !officeRegistration.responsibleName || !officeRegistration.responsibleOab) throw new Error('Preencha a identificação jurídica e os registros OAB reais do escritório e do responsável.');
  if (professionals.some(person => person.illustrative || !person.oab)) throw new Error('Substitua os profissionais ilustrativos e preencha os registros OAB reais antes da publicação.');
}
