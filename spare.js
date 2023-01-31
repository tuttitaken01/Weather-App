
export default function Search() {
    const [searchCity, setCity] = useState([]);

    useEffect(() => {
        fetch(`${GEO_API_URL}/cities`)
            .then((res) => res.json())
            .then((json) => setCity(json.data))
    }, [])


    return (
        <div className="search-bar">
            <div className="searchInput">
                    <input type="text" placeholder="search city..." onChange={(e) => setCity(e.target.value)} value={searchCity}></input>
                    <IconButton aria-label="search" color="secondary" onClick={()=>{console.log('search', searchCity)}}><SearchIcon /></IconButton>
            </div>
        </div>
    )
}



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


  

const CurrWeather = () => {
  return (
      <div className="card">
          <Card sx={{ maxWidth: 345 }}>
              <CardMedia
              component="img"
              alt="London"
              height="140"
              image="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/coca-cola-london-eye/the-london-eye-2-640x360.jpg?mw=640&hash=F7D574072DAD523443450DF57E3B91530064E4EE"/>
              <CardContent>
                  <Typography gutterBottom variant="h5" component="div">London</Typography>
                  <Typography variant="body2" color="text.secondary">It's sunny today.</Typography>
              </CardContent>
          </Card>
      </div>
  )
}