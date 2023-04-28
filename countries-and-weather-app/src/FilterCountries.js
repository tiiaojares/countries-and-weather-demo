
const FilterCountries = ({filterInput, setFilter }) => {

    const filterWith = (event) => {
        setFilter(event.target.value);
      }

    return(
        <div className="filteringDiv">
            <p className="filterText"> 
                Find countries: 
            </p>
            <input 
                className="filterInput" 
                type="text" 
                value={filterInput} 
                onChange={filterWith} 
            />
      </div>
    )
}

export { FilterCountries }