import { Weather } from './Weather';
import { useState } from 'react';
import React from 'react';
import { MapIcon } from './images/MapIcon';
import { BackIcon } from './images/BackIcon';


const ListOfCountries = ({countries, filterInput }) => {
    const [selectedCountry, setCountry] = useState(null);
    const foundCountries = countries.filter(c => c.name.common.toLowerCase().includes(filterInput.toLowerCase()))
    console.log(foundCountries.length)
  

    const select = (country) => {
      setCountry(country)
    }
  
    const showAll = () => {
      setCountry(null);
    }
  
    if (foundCountries.length > 10 ) {
      console.log("input: ", filterInput)
      if (filterInput === "") {
        return null;
      } else {
        return <p className="infoText"> Too many matches, specify another filter </p>
      } 
    }
  
    if (foundCountries.length == 0 ) {
      return <p className="infoText"> No matches... </p>
    }
  
    let theCountry;
    if (foundCountries.length == 1) {
        theCountry = foundCountries[0]
        console.log("the country: ", theCountry);
    } else if (selectedCountry) {
        theCountry = selectedCountry;
        console.log("the country: ", theCountry);
    } else {
      return (
        foundCountries.map(c => 
          <div 
            className="countriesNameList" 
            key={c.name.official}>
              <p className="countryName"> 
                {c.name.common} 
              </p>
              <button 
                id="showDetailButton"
                onClick={() => select(c)} > 
                show 
              </button>
          </div>
        )
      )
    }
  
    const languageKeys = Object.keys(theCountry.languages)
    const language = languageKeys.map(l => 
      <li key={l}> {theCountry.languages[l]} </li>
    )
  
    const currencyKeys = Object.keys(theCountry.currencies)
    const currency = currencyKeys.map(c => 
      <li key={c}> {theCountry.currencies[c].name}, {theCountry.currencies[c].symbol} </li>
    )

    const getMapUrl = () => {
      const mapUrl = theCountry.maps.googleMaps;
      console.log("klikattu ", mapUrl)
      window.open(mapUrl, "_blank");
    }

    return (
      <div 
        key={theCountry.name.common}
        className="informationTable">
          <p id="countryNameHeader"> 
            {theCountry.name.common} 
          </p>
          <div className="row column-container">
            <div className="col-6 column1">
              <p className="informationText"> Information: </p>
              <p> Region: {theCountry.region} </p>
              <p> Capital: {theCountry.capital[0]} </p>
              <p> Area: {theCountry.area} km<sup>2</sup></p>
              <p> Population: {theCountry.population} </p>
              <p> Languages: {language} </p>
              <p> Timezone: {theCountry.timezones[0]} </p>
              <p> Currencies: {currency} </p>
            </div>
            <div className="col-6 column2">
              <img src={theCountry.flags.png}  />
              <div>
                <Weather country={theCountry} />
              </div>
              <div className="buttons">
              <button 
                id="goToGoogleButton"
                onClick={() =>getMapUrl()} >
                Go to Google Maps <MapIcon />
              </button>
              <div>
              {foundCountries.length == 1 ?
                <div />
                :
              <button 
                id="goBackToListButton"
                onClick={() => showAll()}> 
                Go back to list <BackIcon />
              </button>
              }
              </div>
              </div>
            </div>
          </div>      
          
      </div>
    )
  }
   
  export { ListOfCountries }