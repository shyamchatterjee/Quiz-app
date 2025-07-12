import { useContext, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { Context } from "./context/context";
let Option = ({element})=>{
    let {number,result,results,questionChange,bool,show} = useContext(Context)
let [wrongs,setwrongs] = useState(true)
    let wrong = (element)=>{
       if (element.correct==false) {
           setwrongs(false)
           setTimeout(()=>{
             setwrongs(true)
           },2000)
       }
    }

   return  <div className={element.correct==bool?'w-full p-2 border-2 border-green-500 rounded-sm cursor-pointer ':  wrongs==false?"'w-full p-2 border-2 border-red-500  rounded-sm cursor-pointer flex justify-between items-center '":'w-full p-2 border-1  rounded-sm cursor-pointer flex justify-between items-center '} onClick={()=>{questionChange(),results(element),wrong(element)}}>
                          <p>{element.name}</p>
                          <IoMdCloseCircle className={wrongs==true?"hidden":"text-red-500"}/>
                           
</div> 
}
export default Option