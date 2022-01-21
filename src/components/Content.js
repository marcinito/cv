import React,{useRef,useState,useEffect,useContext} from 'react'
import {Routes,Route,Outlet} from 'react-router-dom'
import Aboutme from './Aboutme'
import Contact from './Contact'
import Credentials from './Credentials'
import Forklift from './Forklift'
import Lorry from './Lorry'
import JavaScript from './JavaScript'

function Content(props) {

 
    const contentRef=useRef()
const [flag,setFlag]=useState("")
useEffect(()=>{
 console.log(contentRef)
    if(flag===true){
        contentRef.current.classList.add("contentActive")
      
        
    }
    else if(flag===false){
        contentRef.current.classList.remove("contentActive")
    }
    
})

    return (
        <div className="content" ref={contentRef}>
          
          <Routes>
              <Route path="/" element={<Aboutme give={setFlag} send={props.daj} gave={contentRef}/>}></Route>
              <Route path="/contact" element={<Contact give={setFlag} gave={contentRef}  send={props.daj}/>}></Route>
              <Route path="/credentials" element={<Credentials gave={contentRef} send={props.daj} give={setFlag}  />}/>
              <Route path="/forklift" element={<Forklift gave={contentRef} send={props.daj} give={setFlag} />}/>
              <Route path="/HGV-licence" element={<Lorry send={props.daj} gave={contentRef} give={setFlag} />}/>
              <Route path="/java-script" element={<JavaScript gave={contentRef} send={props.daj} give={setFlag} />}/>
                
                 
             
      
          </Routes>

        </div>
    )
}

export default Content
