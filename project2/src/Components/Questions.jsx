import React from 'react'
import "./Quiz.css"

function Questions({questions,options,handle,ans}) {
  return (
    <div>
      <h2>{questions} </h2>   
      <ul> 
        {options.map((opt,index)=>( 
            <li key={index} onClick={()=>handle(opt)} className={ans===opt ? 'select' : ''}>{opt}</li>
        ))}
        </ul>
        </div>
  ) 
}

export default Questions