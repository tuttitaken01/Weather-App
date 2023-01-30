import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { geoApiOptions, GEO_API_URL } from './api';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const Search = ({ city }) => {
    const [searchCity, setCity] = useState('');

    const loading = (input) => {
        return fetch(
            `${GEO_API_URL}/cities?limit=5&namePrefix=${input}`, geoApiOptions
        )
        .then(res => res.json())
        .then(res => {
            return {
                options: res.data.map(city => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`,
                    }
                })
            }
        })
    }

    const handleOnChange = (search) => {
        setCity(search);
        city(search);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        city(searchCity);
    };

    return (
        <div className="search-bar">
            <form onSbumit={handleSubmit}>
                <input type="text" placeholder="search city..." onChange={(e) => setCity(e.target.value)} value={searchCity}></input>
                <IconButton aria-label="search" color="secondary"><SearchIcon /></IconButton>
            </form>
        </div>
    )
}

export default Search;