import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default class ConfirmButton extends Component {
    static propTypes = {
        action: PropTypes.func.isRequired
    };

    state = {
        timesPressed: 0
    }

    onPress = () => {
        const { timesPressed } = this.state;
        const { action } = this.props;
        this.setState({
            timesPressed: timesPressed + 1
        }, () => {
            if(this.state.timesPressed===3) {
                action();
                this.setState({
                    timesPressed: 0
                })
            }
        })
    };

    render() {
        const { timesPressed } = this.state;
        const { dialog } = this.props;
        return <Button onClick={this.onPress}>{dialog[timesPressed]}</Button>
    }
} // end ConfirmButton


const Button = styled.button`
    background: #E54B4B;
    border-radius: 5px;
    border: none;
    color: white;
    text-transform: uppercase;
    font-weight: 900;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.2);
    margin: 20px 0 20px 0;
    padding: 8px 10px;
`;