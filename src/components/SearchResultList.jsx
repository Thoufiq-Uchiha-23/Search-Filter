import "./SearchResultList.css"

const SearchResultList = ({results}) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <div key={id}>{result.name}</div>
      })}
    </div>
  )
}

export default SearchResultList
