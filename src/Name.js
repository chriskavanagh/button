import React, { Component } from 'react';
import styled from 'styled-components';


export default class Name extends Component {
    state = {
        name: ""
    }

    changeName = (name) => () => {
        this.setState({
            name: name
        })
    };

    handleChange = (e) => {
        this.setState({
            name: e.target.value.substr(0, 25)
        });
    };

    render() {
    const { name } = this.state;
      return (
        <Div className="name">
            <DivWrap>
                <button onClick={this.changeName("Elvis")}>Change Name</button>
                <input type="text" id="name" value={ name } onChange={this.handleChange} />        
                <H3>{ name }</H3>
            </DivWrap>
        </Div>
      );
    }
  } // ./Class Name
  
  const Div = styled.div`
    margin: 110px auto;
    background: #C8C8C8;
    padding: 20px 20px;
  `;

  const DivWrap = styled.div`
    display: flex;
    justify-content: center;
  `;

  const H3 = styled.h3`
    margin-left: 1rem;
  `;