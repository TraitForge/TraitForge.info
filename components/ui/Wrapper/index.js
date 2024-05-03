import Navbar from '../Navbar';
import Footer from '../Footer'

const Wrapper = ({ children }) => (
  <div>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Wrapper;