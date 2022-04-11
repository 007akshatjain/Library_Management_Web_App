import React from 'react'
import  {BookItem} from "../Components/BookItem";
const Books= (props) => {
  return (
    <div className='container'>
      <h3 className='text-center my-3'>
          Book List
      </h3>
      {props.books.length===0? "No Books to display":
      props.books.map((book)=>{
        return  <BookItem book={book} onDelete={props.onDelete}/>
      })
        }
     
    </div>
  )
}

export default Books;
