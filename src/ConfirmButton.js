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
        const { dialog } = this.props;
        const { action } = this.props;
        this.setState({
            timesPressed: timesPressed + 1
        }, () => {
            if(this.state.timesPressed === dialog.length) {
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
        return( 
        <TomatoButton level={ timesPressed } onClick={this.onPress}>{dialog[timesPressed]}</TomatoButton>
        )
    }
} // end ConfirmButton


const TomatoButton = styled.button`
    background: tomato;
    border-radius: 5px;
    border: none;
    color: white;
    text-transform: uppercase;
    font-weight: 900;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.2);
    margin: 20px 0 20px 0;
    padding: 8px 10px;
    ${({level}) => {
        if(level===1) return 'transform: scale(1.2);';
        if(level===2) return 'transform: scale(1.6);';
        if(level===3) return 'transform: scale(3.0);background:blue;margin-top:40px;';
    }}
`;