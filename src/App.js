import logo from './logo.svg';
import './App.css';
import Navbar from './component/nav';
import Allroutes from './Allroutes/allroutes';
import Footer from './component/footer';


function App() {
  return (
    <div>
      <Navbar />
      <Allroutes />
      <Footer />
    </div>

  );
}

export default App;
