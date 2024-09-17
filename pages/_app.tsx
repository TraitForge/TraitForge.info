import Wrapper from "@/components/ui/Wrapper";
import { electroliceFont, bebasFont, racesportFont, monsterratFont } from '@/public/fonts';
import "../styles/index.css";

const App = ({ Component, pageProps }) => (
  <Wrapper>
    <div className={`${electroliceFont.variable} ${bebasFont.variable} ${racesportFont.variable} ${monsterratFont.variable} font-sans`}>
    <Component {...pageProps} />
    </div>
  </Wrapper>
);

export default App;
