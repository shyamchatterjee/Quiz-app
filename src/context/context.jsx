import { createContext, useState } from "react";
;
import { Deta } from "../Data/data";


 export  let Context = createContext(null)
 export let ContextFuntion = ({children})=>{

 let [number,setNumber] = useState(0)
    let [show,setShow]  = useState(true)
    let [result,setresult] = useState(false)
   let [bool,setbool] = useState(null)
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
                setbool(true)
               
                setTimeout(()=>{
                   setbool(null)
                  
                },2000)
               
         }
         else{
          setresult(result+1)
                setbool(true)
               
                setTimeout(()=>{
                   setbool(null)
                  
                },2000)
         }
        
     
    }
    

   return <Context.Provider value={{number,result,results,questionChange,bool,show}}>
         {children}
   </Context.Provider>
 }
 
