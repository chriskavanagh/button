import React, { Component } from 'react';
import Name from './Name';
import ConfirmButton from './ConfirmButton';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ConfirmButton 
          dialog={['Delete', 'Are You Sure?', '1 More Time']} 
          action={ () => console.log("Action!") }
        />
        <Name/>
      </div>
    );
  }
}

export default App;
