import React, {useState, useEffect} from 'react';
import axios from 'axios';

//components
import CombineAxios from './CombineAxios';

const MonsterList = (props) => {
    const [monster, setMonster] = useState([]);

    console.log('props from MonstersList',props);
    // useEffect(() => {
    //     axios   
    //         .get('https://api.open5e.com/monsters')
    //         .then(res => {
    //             setMonster(res.data.results)
    //             console.log(res)
    //         })
    //         .catch(err => console.log('error in MonsterList useEffect', err))
    // }, [])

    return(
        <div>
            {/* {something.map(m => {
                return(
                    <div key={m.slug}>
                        <h2>{m.name}</h2>
                        <p>Challenge Rating: {m.challenge_rating}</p>
                        <p>Size: {m.size}</p>
                        <p>HP: {m.hit_points}</p>
                    </div>
                )
            })} */}

        </div>

    )
}

export default MonsterList;