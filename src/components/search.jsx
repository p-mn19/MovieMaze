import React from 'react'

const Search = ({seachTerm, setsearchTerm}) => {
    return(
    <div className="search">
        <div>
            <img src="search.svg" alt="search"/>
            <input 
            type="text"
            placeholder="what are you in the mood for?"
            value={seachTerm}
            onChange={(e) => setsearchTerm(e.target.value)}
            />
        </div>
    </div>
    )
}

export default Search