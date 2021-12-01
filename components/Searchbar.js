import React, { useState, useContext } from 'react'
import Router from 'next/router'
import {Context} from '../lib/Context'

const Searchbar = () => {

  // const [input, setInput] = useState("")
  // console.log(('input', input));

  const {state:{query} ,setQuery} = useContext(Context)
  const setResults = e => {
    e.preventDefault()
    Router.push({pathname:"/movie",query:{query:query}})
  }

  return (
    <form style={{ marginBottom: "20px" }} onSubmit={(e) => setResults(e)}>
      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-lg"
          id="searchbar"
          defaultValue={query}
          onChange={(e) => {setQuery(e.target.value)}}
          placeholder="Search Title ..."
        />
      </div>
    </form>
  );
};

export default Searchbar;
