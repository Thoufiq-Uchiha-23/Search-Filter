// import { useState } from 'react'
import { useState } from "react";
import "./App.css";
// import SearchBar from "./components/SearchBar";
// import SearchResultList from "./components/SearchResultList";
import SearchComponent from "./components/Search Component/SearchComponent";
function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <div className="search-bar-container">
        {/* <SearchBar setResults={setResults} />
        <SearchResultList results={results} /> */}
        <SearchComponent setResults={setResults} results={results} />
      </div>
    </div>
  );
}

export default App;
