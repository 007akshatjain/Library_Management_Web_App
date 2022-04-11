import React, {useState,useEffect, useLayoutEffect} from 'react';
import './App.css';
import Navbar from './Components/navbar';
import Books from './Components/Books';
import AddBook from './Components/AddBook';
import About from './Components/About';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  let initBook;
 if( localStorage.getItem("books")===null){
   initBook =[];
 }
 else{
   initBook = JSON.parse(localStorage.getItem("books"));
 }
  const onDelete = (book) => {
    console.log("I am on delete", book);
    setBooks(books.filter((e)=>{
     return e!==book;
    }));
    localStorage.setItem("books",JSON.stringify(books));
  }

  const addBook = (title,desc,loc) =>{
    console.log("I am adding this book",title,desc,loc)
    let sno;
    if (books.length===0){
      sno=0
    }
    else{
     sno = books[books.length-1].sno +1;
    }
    const myBook={
      sno:sno,
      title:title,
      desc:desc,
      loc:loc

    }
    setBooks([...books,myBook]);
    console.log(myBook);
   }
  const [books, setBooks] = useState(initBook);
  useEffect(()=> {
    localStorage.setItem("books",JSON.stringify(books));
  },[books])
  return (
    <>   <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" render={() =>{
            return(
            <>
            <Books books={books} onDelete={onDelete}/> 
            </>)
          }}></Route>
          <Route exact path='/About'>
            <About/>
          </Route>
        <Route exact path='/AddBook'>
       <AddBook addBook={addBook}/>
       </Route>
       </Switch>
      </Router>
     </>
  );
}
export default App;
