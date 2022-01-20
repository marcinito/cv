import React,{useEffect,useRef,useState} from 'react'
import wozek from '../img/wozek.png'
import auto from '../img/auto.png'
import lorry from '../img/lorry.png'
import js from '../img/js.png'
import css from '../img/css.png'
import html from '../img/html.png'
import react from '../img/react2.png'
import {Link} from 'react-router-dom'
import {actionCreator} from '../redux/index'
import {bindActionCreators} from 'redux'
import {useDispatch,useSelector} from 'react-redux'
function Credentials(props) {
   const dispatch=useDispatch()
    const [size,setSize]=useState(0)
    const [point,setPoint]=useState(false)
    let credRef=useRef()
    const cos =useSelector(state=>state.height.height)
    const {height}=bindActionCreators(actionCreator,dispatch)
 
useEffect(()=>{
   height(props.gave.current.offsetHeight)
   props.give(true)
   props.send.b(!props.send.a)

},[])
console.log(window)


    return (
        <div className="kwalifikacje" ref={credRef}>
    <div className="row"><img className="imgI" src={wozek} alt="wozek"></img><div className="describe"><p className="p">Forklift Driver with experience               </p> <em>COUNTERBALANCE</em>
   
    </div>
    <span className="link">
    <Link to="/forklift">FIND OUT MORE</Link>
    </span>
    </div>
    <div className="row"><img className="imgI" src={auto} alt="auto"></img><div className="describe"><p className="p">Drive licence</p><em >since 11.03.2019</em> 
   
   </div>
   {/* <span className="link">
   <Link to="/drive-licence">FIND OUT MORE</Link>
   </span> */}
   </div>
   <div className="row"><img className="imgI" src={lorry} alt="lorry"></img><div className="describe"><p className="p">HGV Licence, categories <span className="c">C</span> with experience</p><em>since 03.12.2019</em> 
   
   </div>
   <span className="link">
   <Link to="/HGV-licence">FIND OUT MORE</Link>
   </span>
   </div>
   <div className="row"><img className="imgI" src={js} alt="js"></img><div className="describe"><p className="p">Javascript Developer</p><em>I am still learning and my goal is become master</em> 
   
   </div>
   <span className="link">
   <Link to="/java-script">FIND OUT MORE</Link>
   </span>
   </div>
   <div className="row"><img className="imgI" src={react} alt="react"></img><div className="describe"><p className="p">
Knowledge of the react library</p><p className="describeP">I am know <span style={{color:"orange"}}>hook</span>, <span>react-router-dom</span>, <span style={{color:"green"}}>redux</span>, <span style={{color:"black",fontWeight:"bold"}}>react-bootstrap</span>, <span style={{color:"plum"}}> styled-components</span>,concepts how react works and soon i will lern more</p>
   
   </div>
 
   </div>
   <div className="row"><img className="imgI" src={css} alt="react"></img><div className="describe"><p className="p">
Knowledge of Cascading Style Sheets </p><em style={{fontWeight:"bold",color:"skyblue",marginLeft:"3%"}}>What is this check ... <a href="https://en.wikipedia.org/wiki/CSS">link</a></em> 
   
   </div>
   {/* <span className="link">
   <Link to="/drive-licence">FIND OUT MORE</Link>
   </span> */}
   </div>
   <div className="row"><img className="imgI" src={html} alt="html"></img><div className="describe"><p className="p">
Knowledge of the HyperText Markup Language <span style={{fontWeight:"bold",color:"crimson"}}>(HTML)</span> </p><em style={{fontWeight:"bold",color:"skyblue",marginLeft:"3%"}}>What is this check ... <a href="https://pl.wikipedia.org/wiki/HTML">link</a></em> 
   
   </div>
   {/* <span className="link">
   <Link to="/drive-licence">FIND OUT MORE</Link>
   </span> */}
   </div>
        </div>
    )
}

export default Credentials
