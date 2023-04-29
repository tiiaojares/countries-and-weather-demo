import { useState, useEffect } from 'react';
import './App.css';
import { ListOfCountries } from './ListOfCountries';
import { FilterCountries } from './FilterCountries';

import axios from 'axios';



const App = () => {
  const[countries, setCountries] = useState([]);
  const [filterInput, setFilter] = useState('');
  const baseUrl = '/countries'

  useEffect(() => {
    const request = axios.get(baseUrl)
    .then(response => {
      setCountries(response.data)
      console.log(response.data)
    })
    
  }, []); 

  return (
      <div className="App">   
        <FilterCountries filterInput={filterInput} setFilter={setFilter} />
        <div>
        <ListOfCountries countries={countries} filterInput={filterInput} />
        </div>
      </div>
  );
}

export default App;

