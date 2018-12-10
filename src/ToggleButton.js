import React from 'react';
import styled from 'styled-components';


const ToggleButton = props => (
    <BTN onClick={props.click}>
        <Line></Line>
        <Line></Line>
        <Line></Line>
    </BTN>
);

const BTN = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-between;    
    height:20px;
    width: 30px;
    border: none;
    background: transparent;
    cursor: pointer;
`;

const Line = styled.div`
    height: 3px;
    width: 30px;
    background: white;
`;

export default ToggleButton;