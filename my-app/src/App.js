import './App.css';
import { Component } from 'react';
import Main from './components/MainComponent';
// import { Navbar, NavbarBrand } from 'reactstrap'
// import { Media } from 'reactstrap';
// import Menu from './components/MenuComponent';
// import NavbarHeader from './components/Navbar';
// import { DISHES } from './shared/dishes';
// import ButtonCount from './components/ButtonCount';
// import ParentComponent from './components/ButtonCount/button';




// function App() {
//   return (
//     <>
//     <div className="App">
//       <NavbarHeader />
//     {/* <Menu /> */}
//   {/* <ButtonCount props="Hello"/> */}
//   {/* <ParentComponent /> */}
//     </div>
//     </>
//   );
// }

// Ex 25
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dishes: DISHES
//     };
//   }
//   render() {
//     return (
//       <div className="App">
//         <Navbar dark color="primary">
//           <div className="container">
//             <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
//           </div>
//         </Navbar>
//         <Menu dishes={this.state.dishes} />
//       </div>
//     );
//   }
// }
// Ex 25

// Ex 26
class App extends Component {

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
