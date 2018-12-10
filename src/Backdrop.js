import React from 'react';
import styled from 'styled-components';

const Backdrop = props => (     
    <Div onClick={ props.click }/>
);


export default Backdrop;

const Div = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.3);
    z-index: 100;
`;