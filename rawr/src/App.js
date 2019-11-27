import React, {useState, useEffect} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';

//components
import MonstersList from './Components/MonstersList';
import NavBar from './Components/NavBar';
import MonsterActions from './Components/MonsterCard';
import MonsterCard from './Components/MonsterCard';
import EasyNavigation from './Components/EasyNavigation';

function App() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
      axios
          .get('https://api.open5e.com/monsters/?limit=100')
          .then(res => {
              // console.log(res)
              setMonsters(res.data.results)
          })
          .catch(err => console.log('error in the useEffect', err))
  }, [])

  return (
    <div className="App">
      <NavBar />
      <EasyNavigation />
      <Switch>
        {/* <Route path = '/monster-card' component = {MonsterCard} /> */}
        <Route
        exact
        path="/monsters/:slug"
        render={props => (
          <MonsterCard 
            {...props}
            monsters={monsters}
          />
        )}
      />
      <Route 
        exact 
        path="/monsters/:slug"
        render={props => (
          <MonsterActions 
            {...props}
            monsters={monsters}
          />
        )}
        />

        <Route
        exact
        path="/monster-list"
        render={props => (
          <MonstersList
            {...props} 
            monsters={monsters}
          />
        )}
      />
      </Switch>
      
    </div>
  );
}

export default App;
