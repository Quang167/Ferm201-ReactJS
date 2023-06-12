import './App.css';
import { Component } from 'react';
import Main from './components/MainComponent';
// import { Media } from 'reactstrap';
import { DISHES } from './shared/dishes';
import { BrowserRouter } from 'react-router-dom';




function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>

    </>
  );
}



export default App;
