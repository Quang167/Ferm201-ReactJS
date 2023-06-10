import './App.css';
import { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap'
// import { Media } from 'reactstrap';
import Menu from './components/MenuComponent';
// import NavbarHeader from './components/Navbar';
import { DISHES } from './shared/dishes';
// import ButtonCount from './components/ButtonCount';
// import ParentComponent from './components/ButtonCount/button';




// function App() {
//   return (
//     <div className="App">
//       <NavbarHeader />
//     <Menu />
//   {/* <ButtonCount props="Hello"/> */}
//   {/* <ParentComponent /> */}
//     </div>
//   );
// }
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}
export default App;
