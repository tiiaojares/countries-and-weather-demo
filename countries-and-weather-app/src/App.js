import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { ListOfCountries } from './ListOfCountries';
import { FilterCountries } from './FilterCountries';
import {HashRouter as Router} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function App() {
  const[countries, setCountries] = useState([]);
  const [filterInput, setFilter] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
    .then(response => {
      setCountries(response.data)
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

