import React from 'react'

export const BookItem =({book,onDelete}) => {
    return (
        <div className='container my-5'>
            <h4>{book.title}</h4>
            <hr/>
            <p>{book.desc}</p>
            <hr/>
            <p>{book.loc}</p>
            <hr/>
            <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(book)}}>Delete</button>
            
        </div>
    )
}
