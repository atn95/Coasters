import React from 'react'

function Search() {
  return (
    <div> 
         <input
            className = 'searchInput' 
            type = 'text'
            id = 'search'
            placeholder = 'Search Roller Coaster'
        />
<button className = 'searchBtn' 
        type = 'submit'>Search
        </button>
        </div>
  )
}

export default Search