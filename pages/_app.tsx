import Wrapper from "@/components/ui/Wrapper";
import "../styles/index.css";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
const myFont = localFont({
  src: "../public/fonts/RaceSport.ttf",
  variable: "--font-race",
});

const monserat = Montserrat({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-monserat",
});

export const metadata = {
  title: 'TraitForge | Mint, Nuke, and Forge Unique Entities',
  description: 'Unleash your creativity with TraitForge. Mint, Nuke, and Forge unique NFTs with distinct traits and endless possibilities.',
  openGraph: {
    title: 'TraitForge: Mint, Nuke, and Forge Unique Entities',
    description: 'Dive into TraitForge, where creativity meets strategy. Mint up to 100,000 distinct NFTs with unique traits. Play, forge, and build your collection!',
    url: 'https://traitforge.info',
  },
};

const App = ({ Component, pageProps }) => (
  <div className={`${monserat.variable} ${myFont.className}`}>
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  </div>
);

export default App;
