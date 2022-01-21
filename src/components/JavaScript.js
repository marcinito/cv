import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {actionCreator} from '../redux/index'
import {bindActionCreators} from 'redux'
import {useDispatch,useSelector} from 'react-redux'
function JavaScript(props) {
    const dispatch=useDispatch()
    const {height}=bindActionCreators(actionCreator,dispatch)
    useEffect(()=>{


    },[])
    const navigate=useNavigate()
    return (
        <div className="jsPage">
            <br/>
            <br/>
            <br/>
            <div className="aboutJS">
            <h1 className="h1TitleJs">What is JavaScript?</h1>
            <br/>
            <p className="answerPJs" style={{color:"darkgreen"}}>JavaScript is a programming language commonly used in web development.</p>
            <br/>
            <p>I am begin learning java-script <em>since 05.09.2021</em> before I study  <span style={{color:"red",fontWeight:"bolds"}}>CSS</span>/<span style={{color:"plum",fontWeight:"bolds"}}>HTML</span> </p>
            <br/>
            <p style={{color:"darkorange"}}>Now in every free time i learning new things and I am very exciting about it</p>
            <br/>
            <p>I can say that i fall in love with programming</p>
            <br/>
            <p style={{color:"plum"}}>My goal is become full stac developer and develop myself in this field</p>
            <br/>
            <p>in future i want build a robot</p>
            <br/>
            <h4 style={{color:"white",WebkitTextStroke:".2px black",fontWeight:"bold"}}>...soon i will uploud some my project</h4>
            </div>
            <br/>
            <br/>
            <br/>
            <button className="return" onClick={(()=>navigate("/credentials"))}>return</button>
        </div>
    )
}

export default JavaScript
