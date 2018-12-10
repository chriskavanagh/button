import React from 'react';
import styled from 'styled-components';

const SideDrawer = props => (
    <Nav>
        <Ul>
            <Li><a href="/">Products</a></Li>
            <Li><a href="/users">Users</a></Li>
        </Ul>
    </Nav>
);

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
`;

export default SideDrawer;