import logo from './logo.svg';
import './App.css';
// import { Navbar, NavbarBrand } from 'reactstrap'
// import { Media } from 'reactstrap';
import Menu from './components/MenuComponent';
import Navbar from './components/Navbar';




function App() {
  return (
    <div className="App">
    <Navbar />
    <Menu />
    </div>
  );
}

export default App;
