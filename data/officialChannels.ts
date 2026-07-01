import { contacts } from "./contacts";
import { socialLinks } from "./socialLinks";

export const officialChannels = [
  { name: "Website oficial", value: "Em preparação", verified: false },
  { name: "WhatsApp Angola", value: contacts.whatsappAngola, verified: true },
  { name: "WhatsApp Portugal", value: contacts.whatsappPortugal, verified: true },
  { name: "Email geral e Travel", value: contacts.emailGeneral, verified: true },
  { name: "Email da Comunidade", value: contacts.emailCommunity, verified: true },
  { name: "Morada em Angola", value: contacts.addressAngola, verified: true },
  { name: "Morada em Portugal", value: contacts.addressPortugal, verified: true },
  ...socialLinks.map(channel => ({
    name: channel.name,
    value: channel.url,
    url: channel.url,
    verified: channel.status === "Confirmado"
  }))
];
