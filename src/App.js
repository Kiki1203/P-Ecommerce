import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LandingPage from './Pages/LandingPage';
import Register from './Pages/Register';

import './Supports/stylesheets/Utils.css';

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      {/* <Register /> */}
      <Footer />
    </div>
  );
}

export default App;
