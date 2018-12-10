import React from 'react';
//import styled from 'styled-components';
import './SideDrawer.css';

const SideDrawer = props => (
    <nav className="side-drawer">
        <ul>
            <li><a href="/">Products</a></li>
            <li><a href="/users">Users</a></li>
        </ul>
    </nav>
);

/*
const Ul = styled.ul`
    display: flex;
    height: 100%;
    List-style: none;
    flex-direction: column;
    justify-content: center;
`;

const Li = styled.li`
    margin: 0.5rem 0;
`;

const Nav = styled.nav`
    height: 100%;
    width: 70%;
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    max-width: 400px;
    z-index: 200;
    transition: transform 0.3s ease-out;
    ${(props) => {           
        if(props.show) return 'transform: translateX(0);';
    }}
`;
*/
export default SideDrawer;