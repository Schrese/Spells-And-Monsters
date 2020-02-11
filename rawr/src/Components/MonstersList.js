import React from 'react';
import styled from 'styled-components';

import '../App.css';
function MonstersList(props) {
    console.log(props);
    function individualMonster(e, m) {
        e.preventDefault();
        props.history.push(`/monsters/${m.slug}`);
    }
    return(
        <ListContainer>
            {props.monsters.map(m => {
                return(
                    <MonsterContainer key={m.slug} className='flipper' onClick = {e => individualMonster(e, m)}>
                        <CardInner className='flip-inner' >
                            <MonsterFront  className = 'front-side'>
                                <h2>{m.name}</h2>
                                <p>AC: {m.armor_class}</p>
                                <p>CR: {m.challenge_rating}</p>
                                <p>HP: {m.hit_points}</p>
                            </MonsterFront>
                            <MonsterBack className = 'back-side' >
                                <h2>{m.name}</h2>
                                {/* <h4>Speed</h4> */}
                                {m.speed.walk ? <p>Walking Speed: {m.speed.walk}</p> : null }
                                {m.speed.climb ? <p>Climbing Speed: {m.speed.climb}</p> : null}
                                {m.speed.fly ? <p>Flying Speed: {m.speed.fly}</p> : null}
                                {m.speed.swim ? <p>Swimming Speed: {m.speed.swim}</p> : null}
                                {/* <p>Walking Speed: {m.speed.walk}</p>
                                <p>Climbing Speed: {m.speed.climb}</p>
                                <p>Flying Speed: {m.speed.fly}</p>
                                <p>Swimming Speed: {m.speed.swim}</p> */}
                            </MonsterBack>
                        </CardInner>
                    </MonsterContainer>
                )
            })}
        </ListContainer>
    )
}

export default MonstersList;

const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 95%;
    padding-left: 2.5%;
    padding-top: 10%;
`

const MonsterContainer = styled.div`
    width: 260px;
    height: 350px;
    margin: 1%;
`

const CardInner = styled.div`
    margin: 0 auto;
`

const MonsterFront = styled.div`
    h2{
        font-family: 'Acme', sans-serif;
        font-size: 2rem;
    }

    p{
        font-family: 'Overpass', sans-serif;
        font-size: 1.5rem;
    }
`

const MonsterBack = styled.div`
    background: darkblue;
    color: white;
    transform: rotateY(180deg);

    h2{
        font-family: 'Acme', sans-serif;
        font-size: 2rem;
    }
    p{
        font-family: 'Overpass', sans-serif;
        font-size: 1.5rem;
    }
`