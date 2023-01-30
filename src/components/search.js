import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const Search = ({ city }) => {
    const [searchCity, setCity] = useState('');

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