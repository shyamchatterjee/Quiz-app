
import { useState } from 'react'
import './App.css'
import { Deta } from './Data/data'

function App() {
  
    let [number,setNumber] = useState(0)
    let [result,setresult] = useState(0)
    let [str,setstr] = useState("")
    let questionChange = ()=>{
      setTimeout(()=>{
  if (Deta.length>number+1) {
                   setNumber(number+1)
          }
      },3000)
        
    }
    let results = (element)=>{
     
         if (element.correct==true) {
                setresult(result+1)
         }
        
    }

  return <div className='w-full flex items-center justify-center'>
           <div className=' mt-40 w-80  border-1 p-2 flex flex-col gap-2 md:w-2xl'>
                 <div className='p-2 w-full bg-green-800 flex justify-center items-center text-white border-0'>
                    <h2>Quiz Aplication</h2>
                     
                 </div>

                 <h2>{result} out of {Deta.length} {result==Deta.length?" Congratulation You are win ✅":""}</h2>
                 <div className='w-full flex justify-between items-center'>
                 <h2>Q{Deta[number].id+1}: {Deta[number].text}?</h2>
                  <h2>Question:{Deta[number].id+1}/{Deta.length}</h2>
                 </div>
                 {Deta[number].option.map((element)=>{
                    return  <div className='w-full p-2 border-1 rounded-sm cursor-pointer hover:bg-green-400 hover:teaxt-white-500 hover:border-0' onClick={()=>{questionChange(),results(element)}}>
                          <p>{element.name}</p>
</div>
                 })}
                
           </div>
  </div>
}

export default App
