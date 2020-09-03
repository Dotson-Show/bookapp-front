import React from 'react'

function Comments({comments}) {
    
    let commentList = ''
    if (comments.length) {
        
        commentList =
        <div>
            {comments.map(comment => (
                <div className="card mb-1">
                    <div className="card-body">
                        <h5 className="card-title">{comment.title}</h5>
                        <p className="card-text">
                            {comment.content}
                        </p>
                    </div>
                    <div className="pl-4 pr-3 text-primary">
                        <small>{comment.created_at}</small>
                    </div>
                </div>
            ))}
        </div>
        
    } else {
        commentList =
            <div className="card mb-1">
                
                    <p className="card-text">
                        {comments.message}
                    </p>
                
            </div>
    }
    return (
        <div>
            {commentList}
        </div>
    )
}

export default Comments
