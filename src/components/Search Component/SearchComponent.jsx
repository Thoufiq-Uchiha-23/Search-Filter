import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../SearchBar.css"
import "../SearchResult.css"
import "../SearchResultList"

const SearchComponent = ({ setResults, results }) => {
  const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
          const results = json.filter((user) => {
            return (
              value &&
              user &&
              user.name &&
              user.name.toLowerCase().includes(value.toLowerCase()) // Fix here
            );
          });

          setResults(results);
        });
    };

    const handleChange = (value) => {
      setInput(value);
      fetchData(value);
    };
    return (
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          placeholder="Type to search ..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    );
  };

  const SearchResult = ({result}) => {
    return (
      <div className="search-result" onClick={(e) => alert(`You clicked on ${result.name}`)}>
        {result.name}
      </div>
    )
  }

  const SearchResultList = ({results}) => {
    return (
      <div className="results-list">
        {results.map((result, id) => {
          return <SearchResult key={id} result={result}/>
        })}
      </div>
    )
  }
  return (
    <div>
      <SearchBar setResults={setResults} />
      <SearchResultList results={results} />
    </div>
  );
};

export default SearchComponent;
