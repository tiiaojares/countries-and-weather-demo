



const FilterCountries = ({filterInput, setFilter }) => {

    const filterWith = (event) => {
        setFilter(event.target.value);
      }

    return(
        <div className="filteringDiv container-fluid row">
            <div >
            <p className="filterText" > 
                Find countries: 
            </p>
            <input 
                className="filterInput" 
                type="text" 
                value={filterInput} 
                onChange={filterWith} 
            />    
            </div>
        </div>
    )
}

export { FilterCountries }