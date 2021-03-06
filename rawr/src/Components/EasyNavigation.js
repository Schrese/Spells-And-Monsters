import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

//components

const EasyNavigation = () => {

    return(
        <EasyContainer>
            <Link to= '/monster-list' >
                <Buttons>MonsterList</Buttons>
            </Link>
            <Link to = '/'>
                <Buttons>Home</Buttons>
            </Link>
            <Link to = '/monsters/slug'>
                <Button>Monster Card</Button>
            </Link>
        </EasyContainer>
    )
}
export default EasyNavigation;

const EasyContainer = styled.div`
    display: flex;
    height: 60px;
    width: 100%;
    flex-wrap: no-wrap;
    margin-top: 4%;
    background: lightgreen;
    position: fixed;
    z-index: 5;
    align-items: center;
`

const Buttons = styled.button`
    text-decoration: none;
    background: purple;
    width: 150px;
    height: 50px;
    border-radius: 5px;
`