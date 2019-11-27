import React from 'react';
import styled from 'styled-components';

const NavBar = () => {

    return(
        <NavContainer>
            <Left>
                <p>'D&D'</p>
            </Left>
            <Right>
                <p>Home</p>
                <p>About</p>
                <p>Monsters</p>
            </Right>
        </NavContainer>
    )
}

export default NavBar;

const NavContainer = styled.div`
    display: flex;
    flex-wrap: no-wrap;
    width: 100%;
    height: 5%;
    background: orange;
    position: fixed;
    z-index: 5;
`

const Left = styled.div`
    width: 20%;
    height: 100%;
    p{
        font-family: 'Pacifico', cursive;
    }
`

const Right = styled.div`
    display: flex;
    width: 70%;
    justify-content: flex-end;

    p{
        font-family: 'Overpass', sans-serif;
        padding-left: 2%;
    }
`