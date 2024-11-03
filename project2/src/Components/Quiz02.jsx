
//  // This is practice code 

// import React, { useState } from 'react'
// import Questions02 from './Questions02'
// import "./Quiz.css"
// function Quiz02() {
//   const paper=[
//     {
//       quest:"1. What comes next 2,4,8",
//       options:["12"," 16","10","14"],
//         ans:"10"
//      },

//      {
//       quest:"2.How many alphabets are there in English" ,
//       options:["23","30","27","26"],
//       ans:"26"

//      }, 

//      {
//       quest:"3.What is Capital Of France" ,
//       options:["London"," Berlin"," Paris","Lahore"],
//       ans:"Paris"
//      },
     
//      {
//       quest:"4.What is 90% of 90",
//       options:["81","90","18","64"],
//       ans:"81"
//      },

//      { 
//       quest:"5.Which team won most crickeet World cups",
//       options:["England","India","Pakistan","Australia"],
//       ans:"Australia"
//      }
//   ]
// const [newquest,setnewquest] = useState(0)
// const [answer,setanswer]= useState(null)
// // const [score,setscore]= useState(0);
// const click=(option)=>{
//   setanswer(option)
//   if (option===paper[ques].ans){
//           // setscore(score+1)

// }
// const nextque=()=>{
//   setnewquest(newquest+1)

// }


//   return (
//      <div className='container'>
   
//       <Questions02 paper={paper[newquest].quest} 
//       options={paper[newquest].options} click={click} answer={answer}/>
//       <button onClick={nextque}>Next</button>
//       {/* <div>  <div>your score is {score}</div> */}
    
   
//        </div>
//       //  </div>
//   )
// }
// }
// export default Quiz02;
