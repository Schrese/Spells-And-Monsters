import React from 'react';
import styled from 'styled-components';

function MonsterCard(props) {
    // console.log(props.something);
    const monster = props.monsters.find(
        something => `${something.slug}` === props.match.params.slug
    );
    if(!props.monsters.length || !monster) {
        return <h2>...Loading Monster Data</h2>
    }

    console.log(monster)
    // console.log('individual monster', monster);

    return(
        <MonsterContainer>
            <h2>Name: {monster.name}</h2>
        </MonsterContainer>
    )
}

export default MonsterCard;

const MonsterContainer = styled.div`
    display: flex;
    justify-content: center;
    background: grey;
    padding-top: 20%;

    h2{
        color: red;
        font-size: 4rem;
    }
`