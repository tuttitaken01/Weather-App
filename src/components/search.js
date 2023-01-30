import { useState, useEffect } from 'react';
import { geoApiOptions, GEO_API_URL } from './api';
//import { AsyncPaginate } from 'react-select-async-paginate';
//import IconButton from '@mui/material/IconButton';
//import SearchIcon from '@mui/icons-material/Search';


export default function Search({ searchTerm }) {
    const [searchCity, setCity] = useState([]);

    useEffect(() => {
        async function doStuff() {
            const res = await fetch(`${GEO_API_URL}/cities?limit=5&minPopulation=1000&namePrefix=${searchTerm}`, geoApiOptions);
            const data = await res.json();
            setCity(data.data);
        }
        doStuff();
    }, [searchTerm]);


    return (
        <div className="search-bar">
            <h2>cities by {searchTerm}</h2>
            <ul>
                {searchCity.map((city) => {
                    return (
                        <li>
                            <h3>{city.name}</h3>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}