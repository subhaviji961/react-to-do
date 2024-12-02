import React, { useState } from 'react'
import "./todo.css"
const Todo = () => {
    const [addvalue,setaddvalue]= useState("");
    const[data,setData]= useState([])
    const handleadd = ()=>{
        if(!addvalue){
            alert("enter the value ")

        }
        else{
            setData([...data,addvalue])
        }
    }
    const handleremove=(index)=>{
const remove = data.filter((list,indexList)=>indexList!==index);
setData(remove);
    }
  return (
    <div className="todo">
        
       <div className="inp">
        <h1>TO-DO LIST</h1>
        <br />
       <input type="text" placeholder='Enter Task' onChange={(e)=>setaddvalue(e.target.value)} value={addvalue}/>
       <button onClick={()=>handleadd()} className='add'>ADD</button>
       </div>
        <div className="result">
            <ul>
                {
                    data.map((currItem,index)=>{
return(
    <div className="list">
    <li key={index}>
    {currItem} 
    </li>
    <button onClick={()=>handleremove(index)} className='remove'>Remove</button>
</div>
)
                    })
}
                
            </ul>
        </div>
    </div>
  )
}

export default Todo