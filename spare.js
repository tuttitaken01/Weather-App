

const Search = ({ onSearchChange }) => {
    const [searchCity, setCity] = useState(null);
  
    const loading = (input) => {
      return fetch(
        `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${input}`,
        geoApiOptions
      )
        .then((response) => response.json())
        .then((response) => {
          return {
            options: response.data.map((city) => {
              return {
                value: `${city.latitude} ${city.longitude}`,
                label: `${city.name}, ${city.countryCode}`,
              };
            }),
          };
        });
    };
  
    const handleOnChange = (searchData) => {
      setCity(searchData);
      onSearchChange(searchData);
    };
  
    return (
      <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        value={searchCity}
        onChange={handleOnChange}
        loadOptions={loading}
      />
    );
  };
  
  export default Search;