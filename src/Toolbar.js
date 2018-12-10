import React from 'react';
import ToggleButton from './ToggleButton';
import styled from 'styled-components';


const Toolbar = props => (
    <Header>
        <ToolbarNav>
            <div>
                <ToggleButton click={props.drawerClickHandler} />
            </div>
            <div><A href="/">THE LOGO</A></div>
            <SpacerDiv></SpacerDiv>
            <div>
                <UL>
                    <LI><LA className="link" href="/">Products</LA></LI>
                    <LI><LA className="link" href="/">Users</LA></LI>
                </UL>
            </div>

        </ToolbarNav>
    </Header>
)

const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    height: 56px;
    width: 100%;
    background: #521751;
`;

const A = styled.a`
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    margin-left: 1.5rem;
`;

const ToolbarNav = styled.nav`
    display: flex;
    aLIgn-items: center;
    height: 100%;
    padding: 0 1rem;
`;

const UL = styled.ul`
    LIst-style: none;
    margin: 0;
    padding: 0;
    display: flex;
`;

const LI = styled.li`
    padding: 0 0.5rem;    
`;

const LA = styled.a`
    color: white;
    text-decoration: none;
    :hover {
        color: #fa923f;
    }
    :active {
        color: #fa923f;
    }
`;

const SpacerDiv = styled.div`
    flex: 1;
`;

export default Toolbar;