import React from 'react'

function Books({states}) {
    const { error, isLoaded, books } = states; 
    let listedBooks = ''

    if (error) {
        listedBooks = <div className = "danger" > Error: { error.message } </div>
    } else if (!isLoaded) {
        listedBooks = <div className = "info" ><span>Loading.... .... ....</span> </div>
    } else {
        listedBooks =
        <div className="row justify-content-center">
        {books.map(book => (
            <div id="book" className="col md-3 p-3">
                <div className="card p-2">
                    <div className="card-body bg-success">
                        <div id="book-title" className="bg-info">
                        <h5 className="card-title text-white">{book.name}</h5>
                        </div>
                        <div className="form-group">
                        <small>Author: </small>
                        <small className="text-white ml-3">{book.authors}</small>
                        </div>
                        <div className="form-group">
                        <small>Comment Count: </small>
                        <small className="text-white ml-3">{book.commentCount}</small>
                        </div>
                        <button className="btn btn-primary mr-2 mb-2">View</button>
                        <button className="btn btn-info mb-2">Characters</button>
                    </div>
                </div>
            </div>
        ))}
        </div>
    } 

    return (
        <div>
            {listedBooks}
        </div>
    )
}

export default Books
