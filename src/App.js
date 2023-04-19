import logo from './logo.svg';
import './App.css';
import Navbar from './component/nav';
import Allroutes from './Allroutes/allroutes';
import Footer from './component/footer';
import Destinationdetails from './pages/destinationdetails';

function App() {
  return (
    <div>
      <Navbar />
      <Allroutes />
      <Footer />
    <Destinationdetails/>
    </div>

  );
}

export default App;
