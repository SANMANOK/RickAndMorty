import style from './App.css';
import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import SearchBar from './components/searchBar/SearchBar.jsx';
import characters from './data.js';

function App() {
   return (
      <div className={style.App}>
         <SearchBar onSearch={(characterID) => alert(characterID)} />
         
         <Cards characters={characters} />
         
         <Card/>
      </div>
   );
}

export default App;
