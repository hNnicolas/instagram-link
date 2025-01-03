export interface ContactItemType {
  name: string;
  href: string;
  svgAlt: string;
  svgName: string;
}

export const contacts: ContactItemType[] = [
  {
    name: "Phone",
    href: "tel:+33622414099",
    svgName: "phone",
    svgAlt: "phone-svg",
  },
  {
    name: "E-mail",
    href: "mailto:huang.nicola@gmail.com",
    svgName: "email",
    svgAlt: "email-svg",
  },
  {
    name: "Discord",
    href: "https://discordapp.com/users/1207703769094029313",
    svgName: "discord",
    svgAlt: "discord-svg",
  },
  {
    name: "Line",
    href: "https://line.me/ti/p/~hf_nicolas",
    svgName: "line",
    svgAlt: "line-svg",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/33622414099",
    svgName: "whatsApp",
    svgAlt: "whatsApp-svg",
  },
];
