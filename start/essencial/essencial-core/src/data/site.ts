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
    whatsapp: string;
    address: string;
  };
  social: {
    instagram: string;
    facebook: string;
    linkedin: string;
  };
  navigation: NavigationItem[];
}

export const site = {
  name: "Arche Essencial",
  title: "Core da Coleção Essencial",
  description:
    "Base da Coleção Essencial para criar sites rápidos, acessíveis e fáceis de manter.",
  url: "https://example.com",
  locale: "pt-BR",
  contact: {
    email: "contato@example.com",
    phone: "",
    whatsapp: "",
    address: "",
  },
  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
  },
  navigation: [
    { label: "Início", href: "/" },
    { label: "Base", href: "/#base" },
    { label: "Componentes", href: "/#componentes" },
  ],
} satisfies SiteConfig;
