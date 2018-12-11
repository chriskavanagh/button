import React, { Component, Fragment } from 'react';
//import { BrowserRouter, Route } from 'react-router-dom';
import Toggle from './Toggle';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';
import Name from './Name';
import Home from './Home';
import ConfirmButton from './ConfirmButton';
import Toolbar from './Toolbar';
import styled from 'styled-components';
import './App.css';


class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    return (    
      <div style={{height:"100%"}} className="App">
        <Toolbar drawerClickHandler={ this.drawerToggleClickHandler } />
        <SideDrawer show={ this.state.sideDrawerOpen } />

        { this.state.sideDrawerOpen && <Backdrop click={ this.backdropClickHandler }/> }

        <ConfirmButton 
          dialog={['Delete', 'Are You Sure?', '1 More Time', 'DONE!']} 
          action={ () => console.log("Action!") }
        />
        
        <Name/>
        <Home/>

        <Toggle render={({on, toggle}) => (
          <Fragment>                 
            <ToggleButton onClick={ toggle }>Show / Hide</ToggleButton>
              { on && <H1>Hello React</H1> }
          </Fragment>
          )}
        />
          
          <Toggle render={({on, toggle}) => (
            <Fragment>                 
              <MenuButton onClick={ toggle }>Home</MenuButton>
              { on && <nav>Home</nav> }
            </Fragment>
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
  margin: 0px 0 5px 0;
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

const H1 = styled.h1`
  background: gray;
  font-size: 55px;
  padding: 20px 0;
`;

export default App;
