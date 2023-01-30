import './App.css';
import Title from './components/title';
import Search from './components/search';
import CurrWeather from './components/weather-card';

function App() {
  return (
    <div className="App">
      <Title />
      <Search searchTerm="London"/>
      <CurrWeather />
    </div>
  );
}

export default App;
