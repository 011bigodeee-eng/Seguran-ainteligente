/** Dados comerciais: ative apenas serviços e conteúdo aprovados pelo cliente. */
export const company = {
  name: "ORSEGUPS",
  tagline: "Segurança inteligente",
  contact: "João Flávio Viana",
  phone: "5516993778455",
  displayPhone: "(16) 99377-8455",
  initialMessage:
    "Olá, João! Conheci a ORSEGUPS pelo site e gostaria de solicitar um orçamento para uma solução de segurança.",
  // Insira o arquivo oficial em public e informe o caminho após aprovação.
  logo: null as string | null,
};
export function whatsappUrl(message = company.initialMessage) {
  return `https://wa.me/${company.phone}?text=${encodeURIComponent(message)}`;
}
export const navigation = [
  ["Início", "#inicio"],
  ["Sobre nós", "#sobre"],
  ["Soluções", "#solucoes"],
  ["Tecnologia", "#tecnologia"],
  ["Como funciona", "#como-funciona"],
  ["Contato", "#contato"],
];
export const services = [
  {
    id: "alarmes",
    name: "Alarmes de segurança",
    label: "PREVENÇÃO INTELIGENTE",
    description:
      "Proteção começa antes. Conheça soluções de alarme pensadas para as necessidades do seu espaço.",
    image: "/images/equipment-v2.webp",
    alt: "Detalhe ilustrativo de equipamento de segurança",
    icon: "alarm",
    confirmed: true,
  },
  {
    id: "monitoramento",
    name: "Monitoramento",
    label: "ATENÇÃO AO QUE IMPORTA",
    description:
      "Tecnologia e atenção conectadas para acompanhar a segurança do que é importante para você.",
    image: "/images/monitoring-v2.webp",
    alt: "Representação ilustrativa de uma central de monitoramento",
    icon: "monitor",
    confirmed: true,
  },
  {
    id: "protecao",
    name: "Proteção 24 horas",
    label: "TRANQUILIDADE TODOS OS DIAS",
    description:
      "Segurança que faz parte da sua rotina, com monitoramento 24 horas conforme os serviços contratados.",
    image: "/images/residence-v2.webp",
    alt: "Residência moderna com iluminação arquitetônica — imagem conceitual",
    icon: "shield",
    confirmed: true,
  },
  ...[
    "Câmeras de segurança inteligentes",
    "Controle de acesso",
    "Sensores e sistemas integrados",
    "Segurança para condomínios",
    "Automação de segurança",
  ].map((name, index) => ({
    id: `pendente-${index}`,
    name,
    label: "",
    description: "",
    image: "",
    alt: "",
    icon: "shield",
    confirmed: false,
  })),
];
export const steps = [
  {
    title: "Primeiro contato",
    text: "Conte o que você precisa proteger. A conversa começa com você.",
  },
  {
    title: "Avaliação",
    text: "Suas necessidades orientam a avaliação da solução adequada.",
  },
  {
    title: "Proposta personalizada",
    text: "Conheça a solução sugerida e as condições comerciais.",
  },
  {
    title: "Implementação e acompanhamento",
    text: "Execução e acompanhamento conforme o serviço contratado.",
  },
];
export const faqs = [
  {
    question: "Como solicitar um orçamento?",
    answer:
      "Clique em “Solicitar orçamento” ou preencha o formulário desta página. Você será direcionado ao WhatsApp comercial para conversar com João Flávio Viana e apresentar suas necessidades.",
  },
  {
    question: "A ORSEGUPS trabalha com segurança residencial?",
    answer:
      "Você pode conversar com a ORSEGUPS sobre as necessidades de segurança da sua residência. A solução e a disponibilidade de atendimento serão confirmadas durante a avaliação.",
  },
  {
    question: "Quais soluções de monitoramento estão disponíveis?",
    answer:
      "Alarmes de segurança, monitoramento e proteção 24 horas fazem parte das especialidades informadas. Os recursos, equipamentos e condições de cada solução são definidos na proposta e no serviço contratado.",
  },
  {
    question: "Como funciona a avaliação das necessidades?",
    answer:
      "No primeiro contato, informe o tipo de imóvel, a cidade e o que você deseja proteger. A equipe avaliará as necessidades para apresentar uma proposta adequada.",
  },
  {
    question: "Posso solicitar atendimento pelo WhatsApp?",
    answer:
      "Sim. O contato comercial é (16) 99377-8455. O atendimento anunciado é de 24 horas; condições de suporte técnico e monitoramento devem ser confirmadas conforme a contratação.",
  },
  {
    question: "Como confirmar a disponibilidade na minha região?",
    answer:
      "Envie sua cidade pelo formulário ou diretamente pelo WhatsApp. A área de atendimento ainda está sujeita a confirmação; consulte a equipe antes de contratar.",
  },
];
// Conteúdo real somente: essas seções permanecem ocultas enquanto vazias.
export const projects: {
  title: string;
  description: string;
  image: string;
  alt: string;
}[] = [];
export const testimonials: { name: string; quote: string }[] = [];
export type ContactFields = {
  name: string;
  phone: string;
  property: string;
  solution: string;
  city: string;
  message: string;
};
export function contactMessage(fields: ContactFields) {
  return `Olá, João! Conheci a ORSEGUPS pelo site e gostaria de solicitar um orçamento.\n\nNome: ${fields.name.trim()}\nWhatsApp: ${fields.phone.trim()}\nTipo de imóvel: ${fields.property}\nSolução desejada: ${fields.solution}\nCidade: ${fields.city.trim()}${fields.message.trim() ? `\nMensagem: ${fields.message.trim()}` : ""}`;
}
