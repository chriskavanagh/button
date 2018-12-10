import React from 'react';
import './SideDrawer.css';
//import styled from 'styled-components';


const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">Products</a></li>
                <li><a href="/users">Users</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/users">Contact</a></li>
            </ul>
        </nav>
       )
    };

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