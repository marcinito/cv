import React,{useRef,useState,useEffect} from 'react'
import {Routes,Route,Outlet} from 'react-router-dom'
import Aboutme from './Aboutme'
import Contact from './Contact'
import Credentials from './Credentials'
import Forklift from './Forklift'
import Lorry from './Lorry'
import JavaScript from './JavaScript'

function Content() {
   
    const contentRef=useRef()
const [flag,setFlag]=useState("")
if(flag===true){
    contentRef.current.classList.add("contentActive")
    
}
if(flag===false){
    contentRef.current.classList.remove("contentActive")
}
    return (
        <div className="content" ref={contentRef}>
            
          <Routes>
              <Route path="/" element={<Aboutme give={setFlag}/>}></Route>
              <Route path="/contact" element={<Contact give={setFlag}/>}></Route>
              <Route path="/credentials" element={<Credentials give={setFlag} />}/>
              <Route path="/forklift" element={<Forklift />}/>
              <Route path="/HGV-licence" element={<Lorry />}/>
              <Route path="/java-script" element={<JavaScript />}/>
                
                 
             
      
          </Routes>

        </div>
    )
}

export default Content
