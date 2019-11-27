import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

import '../App.css';
const CombineAxios = () => {
    let [something, setSomething] = useState([])

    useEffect(() => {
        axios
            .get('https://api.open5e.com/monsters/?limit=100')
            .then(res => {
                console.log(res)
                setSomething(res.data.results)
            })
            .catch(err => console.log('error in the useEffect', err))
    }, [])
    
    return(
        <ListContainer>
            {something.map(m => {
                return(
                    <MonsterContainer className='flipper'>
                        <CardInner className='flip-inner'>
                            <MonsterFront key={m.slug} className = 'front-side'>
                                <h2>{m.name}</h2>
                                <p>AC: {m.armor_class}</p>
                                <p>CR: {m.challenge_rating}</p>
                                <p>HP: {m.hit_points}</p>
                            </MonsterFront>
                            <MonsterBack key={m.slug} className = 'back-side'>
                                <h2>{m.name}</h2>
                                {/* <h4>Speed</h4> */}
                                <p>Walking Speed: {m.speed.walk}</p>
                                <p>Climbing Speed: {m.speed.climb}</p>
                                <p>Flying Speed: {m.speed.fly}</p>
                                <p>Swimming Speed: {m.speed.swim}</p>
                            </MonsterBack>
                        </CardInner>
                    </MonsterContainer>
                )
            })}
        </ListContainer>
    )
}

export default CombineAxios;

const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 95%;
    padding-left: 2.5%;
    padding-top: 2%;
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