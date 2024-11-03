import React, { useState } from 'react'
import "./Quiz.css"
import Questions from './Questions'
function Quiz() {
  const questions=[ {
    quest:"1.What is Capital Of France" ,
    options:["London"," Berlin"," Paris","Lahore"],
    ans:"Paris"
   },
   {
    quest:"2. What comes next 2,4,6,8",
    options:["12"," 10"," 9","14"],
      ans:"10"

   },

   { 
    quest:"3.Which team won most cricket World cups",
    options:["England","India","Pakistan","Australia"],
    ans:"Australia"
   },

   {
    quest:"4.What is 90% of 90",
    options:["81","90","18","64"],
    ans:"81"
   },

   {
    quest:"5.How many alphabets are there in English" ,
    options:["23","30","27","26"],
    ans:"26"

   }
  ]
  const [ques,setques]= useState(0)
  const [ans,setans]= useState(null)
  const handle=(opt)=>{
    setans(opt) 
    if (opt===questions[ques].ans){
      setscore(score+1)
    }

  }
  const nextquest=()=>{
    setques(ques+1)
  }
  const [score,setscore]= useState(0);
  return (
   

<div>
  {ques < questions.length ?  <div className='container'>
    <Questions questions={questions[ques].quest} 
    options={questions[ques].options} handle={handle} ans={ans}/>
    <button disabled={ans===null} onClick={nextquest}>Next </button> </div>
 : <div>Your score is {score}</div> }

   </div>
   )
   }



export default Quiz;

