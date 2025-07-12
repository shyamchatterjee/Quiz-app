
import { useContext } from 'react'
import './App.css'
import { Deta } from './Data/data'
import { Context } from './context/context'
import Option from './option'

function App() {
       
   let {number,result,results,questionChange,bool,show,wrongs,wrong} = useContext(Context)

  return <div className='w-full flex items-center justify-center'>
           <div className=' mt-40 w-80  border-1 p-2 flex flex-col gap-2 md:w-2xl'>
                 <div className='p-2 w-full bg-green-800 flex justify-center items-center text-white border-0'>
                    <h2>Quiz Aplication</h2>
                     
                 </div>

                
                 <div className='w-full flex justify-between items-center'>
                 <h2>Q{Deta[number].id+1}: {Deta[number].text}?</h2>
                  <h2>Question:{Deta[number].id+1}/{Deta.length}</h2>
                 </div>
                 {Deta[number].option.map((element)=>{
                    return <Option element={element}/>
                 })}
                
           </div>
  </div>
}

export default App
