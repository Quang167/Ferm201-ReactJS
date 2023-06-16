import './App.css';
import { Component } from 'react';
import Main from './components/MainComponent';
// import { Media } from 'reactstrap';
import { DISHES } from './shared/dishes';
import { BrowserRouter } from 'react-router-dom';
import ControllerForm from './components/Form/ControllerForm';
import UnControllerForm from './components/Form/UnControllerForm';




function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
      {/* <ControllerForm />
      <UnControllerForm /> */}
    </>
  );
}



export default App;
