import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { result } from 'lodash'

const Search = () => {

    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action:'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            })
            setResults(data.query.search)
        }

        if (term && !result.length) {
            //First search
            search()
        } else {
            // Limit the amout of searches
            const timeOutId = setTimeout(() => {
                if (term) search()
            }, 500)

            // Clean up function 
            return () => {
                clearTimeout(timeOutId)
            }
        }


    }, [term])

    const renderedResults = results.map((result) => {
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter search term, powered by Wikipedia search API</label>
                    <input className="input" 
                        value={term} 
                        onChange={event => setTerm(event.target.value)}
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search