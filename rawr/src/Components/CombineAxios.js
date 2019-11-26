import React, {useState, useEffect} from 'react';
import axios from 'axios';

const CombineAxios = () => {
    let [something, setSomething] = useState([])

    let one = ['https://api.open5e.com/monsters/'];
    let two = ['https://api.open5e.com/monsters/?page=2']
    // let three = ['https://api.open5e.com/monsters/?page=3']
    // let four = ['https://api.open5e.com/monsters/?page=4']
    // let five = ['https://api.open5e.com/monsters/?page=5']
    // let six = ['https://api.open5e.com/monsters/?page=6']
    // let seven = ['https://api.open5e.com/monsters/?page=7']
    // let eight = ['https://api.open5e.com/monsters/?page=8']
    // let nine = ['https://api.open5e.com/monsters/?page=9']
    // let ten = ['https://api.open5e.com/monsters/?page=10']
    // let eleven = ['https://api.open5e.com/monsters/?page=11']
    // let twelve = ['https://api.open5e.com/monsters/?page=12']
    // let thirteen = ['https://api.open5e.com/monsters/?page=13']
    // let fourteen = ['https://api.open5e.com/monsters/?page=14']
    // let fifteen = ['https://api.open5e.com/monsters/?page=15']
    // let sixteen = ['https://api.open5e.com/monsters/?page=16']
    // let seventeen = ['https://api.open5e.com/monsters/?page=17']
    // let eighteen = ['https://api.open5e.com/monsters/?page=18']
    // let nineteen = ['https://api.open5e.com/monsters/?page=19']
    // let twenty = ['https://api.open5e.com/monsters/?page=20']
    // let twentyOne = ['https://api.open5e.com/monsters/?page=21']
    // let twentyTwo = ['https://api.open5e.com/monsters/?page=22']

    let fullArray = [one, two]

    
    useEffect(() => {
    let promiseArray = fullArray.map(url =>
        axios
            .get(url)
            .then(res => {
                setSomething(res.data.results)
                console.log('axios call in promise array',res.data.results)})
                
            .catch(err => console.log('something wrong in useEffect CombineAxios', err))
        )
    // console.log('promiseArray', promiseArray);
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