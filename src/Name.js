import React, { Component } from 'react';

export default class Name extends Component {
    state = {
        name: "Chris"
    }

    changeName = (name) => (e) => {
        this.setState({
            name: name
        })
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    render() {
    const { name } = this.state;
      return (
        <div className="name">
          <button onClick={this.changeName(name)}>Change Name</button>
          <input type="text" id="name" value={name} onChange={this.handleChange}/>
          <br/> <br/>
          <h3>{ name }</h3>
        </div>
      );
    }
  }
  