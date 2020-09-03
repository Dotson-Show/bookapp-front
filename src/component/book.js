import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Card, Spinner } from 'reactstrap';
import Comments from './Comments';
import Commentform from './Commentform';
import { useParams } from 'react-router-dom';

function Book(props) {
    const { id } = useParams()
    const url = `http://127.0.0.1/bookstore/backendApp/api/book/read-single.php?id=${id}`
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [bookDetail, setBookDetail] = useState(null)
    let content = ''
    let comments = ''
    let bookId = ''


    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true)
                setBookDetail(result.data[0])  
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [url])

    if (error) {
        content = <div className = "danger" > Error: { error.message } </div>
    } else if (!isLoaded) {
        content = <Spinner color="primary"/>
    } else if (bookDetail){
        console.log(bookDetail.comments);
        comments = bookDetail.comments
        bookId = bookDetail.id
        content =
    
        <div className="row justify-content-left">
            <div id="book" className="col md-3 p-3">
                <div className="card p-2">
                    <div className="card-body bg-success">
                        <div id="book-title" className="bg-info">
                        <h5 className="card-title text-white">{bookDetail.name}</h5>
                        </div>
                        <div className="form-group">
                        <small>Author: </small>
                        <small className="text-white ml-3">{bookDetail.authors}</small>
                        </div>
                        <div className="form-group">
                        <small>Comments: </small>
                        <small className="text-white ml-3">
                            <span className="badge badge-light">{bookDetail.commentCount}</span>
                            
                        </small>
                        </div>
                        
                        <a href="" className="btn btn-info mb-2">Characters</a>
                    </div>
                </div>
            </div>
        </div>
    } 
    
    return (
        <div className="p-3">
            
            {content}
            <section className="border p-2">
                
                <div className="w-25 mb-2"><h5 className="card-title">Comments</h5></div>
                
                <Commentform bookId={bookId}/>
                
                <Comments comments={comments}/>
                
                
            </section>
            
        </div>
    )
}

export default Book
