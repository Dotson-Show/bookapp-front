import React from 'react'
import Books from './books'
import Search from './search'

function Booklist({states}) {
  
  return (
    <section className="container pl-5 pr-5 mt-3">
      <div className="row">
        <div className="col md-6">
          <h5 className="">Book List</h5>
        </div>
        <div className="col md-6">
          <Search />
        </div>
      </div>
      <hr/>
      <div className="row justify-content-center">
        <Books states={states}/>
      </div>
    </section>
  )
}

export default Booklist