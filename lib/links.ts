import {
  faDiscord,
  faTwitter,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

export const links = [
  { url: "/", text: "HOME" },
  { url: "/howitworks", text: "HOW IT WORKS" },
  { url: "/gameplay", text: "GAME PLAY" },
  { url: "/", text: "PLAY NOW! (soon)", external: true },
];

export const mediaLinks = [
  { url: "https://t.me/+b31jKqlV-1BjNzY1", icon: faTelegram },
  { url: "https://twitter.com/TraitForge", icon: faTwitter },
  { url: "https://discord.gg/KWHCEY6zFT", icon: faDiscord },
];

export const docsLinks = [
  { url: "mailto:TraitForge@protonmail.com", text: "Contact Us" },
  {
    url: "https://github.com/TraitForge/docs/blob/8917d93712996ccf1fdfa0a331dcf58fc52ca40b/FAQ/README.md",
    text: "FAQ",
  },
  {
    url: "https://github.com/TraitForge/docs/blob/8917d93712996ccf1fdfa0a331dcf58fc52ca40b/other/privacy.md",
    text: "Privacy Policy",
  },
  {
    url: "https://github.com/TraitForge/docs/blob/8917d93712996ccf1fdfa0a331dcf58fc52ca40b/other/terms.md",
    text: "Terms of Service",
  },
];
