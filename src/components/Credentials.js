import React,{useEffect} from 'react'
import wozek from '../img/wozek.png'
import auto from '../img/auto.png'
import lorry from '../img/lorry.png'
import js from '../img/js.png'
import react from '../img/react2.png'
import {Link} from 'react-router-dom'

function Credentials(props) {
    
    useEffect(()=>{
props.give(true)
    },[])
    
    return (
        <div className="kwalifikacje">
    <div className="forklift"><img className="imgFL" src={wozek} alt="wozek"></img><div className="opisFL"><p className="fdp">Forklift Driver with experience               </p> <em style={{fontWeight:"bold",marginTop:"2%",textDecoration:"underline"}}>COUNTERBALANCE</em>
   
    </div>
    <span className="link">
    <Link to="/forklift">FIND OUT MORE</Link>
    </span>
    </div>
    <div className="auto"><img className="imgAuto" src={auto} alt="auto"></img><div className="opisAuto"><p className="autop">Drive licence</p><em style={{fontWeight:"bold"}}>since 11.03.2019</em> 
   
   </div>
   {/* <span className="link">
   <Link to="/drive-licence">FIND OUT MORE</Link>
   </span> */}
   </div>
   <div className="lorry"><img className="imgLorry" src={lorry} alt="lorry"></img><div className="opisLorry"><p className="lorryp">HGV Licence, categories <span className="c">C</span> with experience</p><em style={{fontWeight:"bold"}}>since 03.12.2019</em> 
   
   </div>
   <span className="link">
   <Link to="/HGV-licence">FIND OUT MORE</Link>
   </span>
   </div>
   <div className="js"><img className="imgJs" src={js} alt="js"></img><div className="opisJs"><p className="jsp">Javascript Developer</p><em style={{fontWeight:"bold",color:"orange",}}>I am still learning and my goal is become master</em> 
   
   </div>
   <span className="link">
   <Link to="/java-script">FIND OUT MORE</Link>
   </span>
   </div>
   <div className="react"><img className="imgReact" src={react} alt="react"></img><div className="opisReact"><p className="reactp">
Knowledge of the react library</p><em style={{fontWeight:"bold",color:"orange",}}>I am still learning and my goal is become master</em> 
   
   </div>
   <span className="link">
   <Link to="/drive-licence">FIND OUT MORE</Link>
   </span>
   </div>
   <div className="react"><img className="imgReact" src={react} alt="react"></img><div className="opisReact"><p className="reactp">
Knowledge of the react library</p><em style={{fontWeight:"bold",color:"orange",}}>I am still learning and my goal is become master</em> 
   
   </div>
   <span className="link">
   <Link to="/drive-licence">FIND OUT MORE</Link>
   </span>
   </div>
   <div className="react"><img className="imgReact" src={react} alt="react"></img><div className="opisReact"><p className="reactp">
Knowledge of the react library</p><em style={{fontWeight:"bold",color:"orange",}}>I am still learning and my goal is become master</em> 
   
   </div>
   <span className="link">
   <Link to="/drive-licence">FIND OUT MORE</Link>
   </span>
   </div>
        </div>
    )
}

export default Credentials
