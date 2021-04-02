import React, { Component } from 'react'
import { Link } from 'gatsby'
// import cari from "../css/cari.module.css"
// Search component
class Search extends Component {
  state = {
    query: '',
    results: [],
  }




  render() {

// styles
  
    let search = "search"
    let searchList = "search-list"
    let searchRes = "search-res"


    let ResultList = () => {
      if (this.state.results.length > 0) {
        return this.state.results.map((page, i) => (
          <div  key={i}>
            <Link to={`/${page.url}`} >
              <h4
              style={{
                fontWeight:"600",
                maxWidth: "13em",
                color:"var(--red)",
              }}
              
              >{page.title}</h4>
            </Link>
          </div>
        ))
      } else if (this.state.query.length > 2) {
        return 'tidak ada hasil untuk ' + this.state.query
      } else if (
        this.state.results.length === 0 &&
        this.state.query.length > 0
      ) {
        return 'masukkan setidaknya 3 karakter'
      } else {
        return ''
      }
    }

    return (
      <div >
        <input
          className={search}
          type="text"
          onChange={this.search}
          placeholder={'Cari'}
        />
        <div className={searchList}>
          <ResultList className={searchRes}/>
        </div>
      </div>
    )
  }

  getSearchResults(query) {
    var index = window.__FLEXSEARCH__.en.index
    var store = window.__FLEXSEARCH__.en.store
    if (!query || !index) {
      return []
    } else {
      var results = []
      Object.keys(index).forEach(idx => {
        results.push(...index[idx].values.search(query))
      })

      results = Array.from(new Set(results))

      var nodes = store
        .filter(node => (results.includes(node.id) ? node : null))
        .map(node => node.node)

      return nodes
    }
  }

  search = event => {
    const query = event.target.value
    if (this.state.query.length > 2) {
      const results = this.getSearchResults(query)
      this.setState({ results: results, query: query })
    } else {
      this.setState({ results: [], query: query })
    }
  }
}

export default Search