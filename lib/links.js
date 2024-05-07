import { faDiscord, faTwitter, faTelegram  } from '@fortawesome/free-brands-svg-icons';

export const links = [
    { url: '/', text: 'HOME', anchor: 'index' },
    { url: '/#art', text: 'ART', anchor: 'Art' },
    { url: '/#community', text: 'COMMUNITY', anchor: 'Community' },
    { url: '/#entropy', text: 'ENTROPY', anchor: 'Entropy' },
    { url: '/#gameplay', text: 'GAME PLAY', anchor: 'Gameplay' },
    { text: 'PLAY NOW! (soon)', external: true },
  ];
  
  export const mediaLinks = [
    { url: 'https://t.me/+b31jKqlV-1BjNzY1', icon: faTelegram},
    { url: 'https://twitter.com/TraitForge', icon: faTwitter},
    { url: 'https://discord.gg/KWHCEY6zFT', icon: faDiscord},
  ];