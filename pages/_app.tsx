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

const App = ({ Component, pageProps }) => (
  <div className={`${monserat.variable} ${myFont.className}`}>
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  </div>
);

export default App;
