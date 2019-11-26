import React, {useState, useEffect} from 'react';
import axios from 'axios';

const CombineAxios = () => {
    let [something, setSomething] = useState([])

    useEffect(() => {
        axios
            .get('https://api.open5e.com/monsters/?limit=1086')
            .then(res => {
                console.log(res)
                setSomething(res.data.results)
            })
            .catch(err => console.log('error in the useEffect', err))
    }, [])
    
    return(
        <div>
            {something.map(m => {
                return(
                    <div key={m.slug}>
                        <h2>{m.name}</h2>
                        <p>AC: {m.armor_class}</p>
                        <p>CR: {m.challenge_rating}</p>
                        <p>HP: {m.hit_points}</p>
                        

                    </div>
                )
            })}
        </div>
    )
}

export default CombineAxios;