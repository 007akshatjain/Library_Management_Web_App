import React, { useState } from 'react'

const Book = ({addBook}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc]= useState("");
  const [loc, setLoc]= useState("");

  const submit = (e) =>{
    e.preventDefault();
    if(!title || !desc || !loc){
      alert("Title , Description or location Can't be blank")
    }
    else{
    addBook(title,desc,loc);
    setTitle("");
    setDesc("");
    setLoc("");
    }

  }
  return (
    <>
     <h3 className='text-center my-3'>ADD BOOK HERE...</h3>
    <div className='zaz'>
     
      <form className='znb' onSubmit={submit}>
    <table className='hage'>
      <tr>
    
    <td><label htmlfor="title" className="asd">Book Name:</label></td>
    <td><input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} class="has" size={26} id="title"  autoComplete="off" aria-describedby="emailHelp"/></td>
    
      </tr>
  
  <tr><td><label htmlfor="bookdesc" class="asd" >Book Description:</label></td> <td>  
    <input type="text" value={desc}  onChange={(e)=>{setDesc(e.target.value)}}className="has" size={26} autoComplete="off" id="bookdesc"/>
</td>  </tr>

    <tr class=''><td> <label htmlfor="bookloc" class="asd" >Book Location:</label></td>   
    <td><input type="text" value={loc}  onChange={(e)=>{setLoc(e.target.value)}} className="has" size={26} autoComplete="off" id="bookloc"/></td>
</tr>
 
  </table>
  <button type="submit" id="ad" className="btn-sm btn-success" >Submit</button>
</form>
    </div>
    </>
  )
}

export default Book;
