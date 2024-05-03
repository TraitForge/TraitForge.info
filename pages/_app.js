import '../styles/index.css';
import { Wrapper } from '../components';

const App = ({ Component, pageProps }) => (
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
  );
  
  export default App;