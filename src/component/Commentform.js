import React from 'react'

function Commentform({bookId}) {
    // 7
    return (
        <div>
            <div className="mb-3">
                <form action="" method="post">
                    <div className="form-group">
                        <input type="text" name="title" id="title" placeholder="Enter Title"/>
                    </div>
                    <div className="form-group">
                        <textarea id="my-textarea" className="form-control" name="" rows="3"></textarea>
                    </div>
                        
                    <button type="submit" class="btn btn-primary">Submit</button>
                        
                </form>
            </div>
        </div>
    )
}

export default Commentform
