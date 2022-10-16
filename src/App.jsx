import {useState, useEffect} from 'react';
import CardList from "./components/card-list/card-list.component";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";

const App = () =>  {

  const [searchField,setSearchField] = useState('') //[value,setvalue]
  const [monsters,setMonsters] = useState([]);
  const [filteredMonsters , setFilterMonsters] = useState([]);

  useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((user) => setMonsters(user));
    },[]);

  useEffect(()=> {
      const newFilteredMonsters = monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField);
      });
      setFilterMonsters(newFilteredMonsters)
    },[monsters,searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
  };

    return (
      <div className="App">
        <h1 className="app-title">Monsters</h1>

        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search monster"
          className="monstersearch-box"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  
}

export default App;
