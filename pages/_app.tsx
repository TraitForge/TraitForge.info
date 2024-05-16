import Wrapper from "@/components/ui/Wrapper";
import "../styles/index.css";

const App = ({ Component, pageProps }) => (
  <Wrapper>
    <Component {...pageProps} />
  </Wrapper>
);

export default App;
