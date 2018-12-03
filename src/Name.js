import React, { Component } from 'react';
import styled from 'styled-components';


export default class Name extends Component {
    state = {
        name: null
    }

    changeName = (name) => () => {
        this.setState({
            name: name
        })
    };

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    };

    render() {
    const { name } = this.state;
      return (
        <Div className="name">
          <button onClick={this.changeName("Elvis")}>Change Name</button>
          <input type="text" id="name" value={ name } onChange={this.handleChange} />
          <h3>{ name }</h3>
        </Div>
      );
    }
  } //end Class Name
  
  const Div = styled.div`
    margin: 110px auto;
    background: #C8C8C8;
    padding: 20px 20px;
  `;