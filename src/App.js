import React, { Component } from 'react';
import Toggle from './Toggle';
import Name from './Name';
import ConfirmButton from './ConfirmButton';
import styled from 'styled-components';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ConfirmButton 
          dialog={['Delete', 'Are You Sure?', '1 More Time', 'DONE!']} 
          action={ () => console.log("Action!") }
      />
        
        <Name/>

        <Toggle render={({on, toggle}) => (
            <div>
              {on && <h1>Show Me</h1>}   
              <ToggleButton onClick={toggle}>Show / Hide</ToggleButton>
            </div>
            )}
        />
          
          <Toggle render={({on, toggle}) => (
            <div>
              {on && <nav>Home</nav>}   
              <MenuButton onClick={toggle}>Home</MenuButton>
            </div>
            )}
          />          
      </div>
    );
  }
}

const ToggleButton = styled.button`
    background: #f0ad4e;
    border-radius: 5px;
    border: none;
    color: white;
    text-transform: uppercase;
    font-weight: 900;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.2);
    margin: 20px 0 20px 0;
    padding: 8px 10px;
`

const MenuButton = styled.button`
background: green;
border-radius: 5px;
border: none;
color: white;
text-transform: uppercase;
font-weight: 900;
box-shadow: 1px 1px 5px rgba(0,0,0,0.2);
margin: 20px 0 20px 0;
padding: 8px 10px;
`

export default App;
