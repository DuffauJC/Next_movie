import React from 'react'
import fetch from 'node-fetch'
import List from '../components/List'


const Home = ({ results, }) => {

    return (
        <div>
            <h1>Movies</h1>
            <List results={results} />
        </div>
    )
}

Home.getInitialProps = async ({
    req, res, match, history, location, ...ctx
}) => {
    const search = ctx?.query?.query ?? ""
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=5fccef321880604649c3a024830f19da&query=${search}&page=1`)
    const data = await response.json() ?? []
    const results = await data.results ?? []
    //console.log('results', results)
    return {
        results,
    }
}

export default Home