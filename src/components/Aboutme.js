import React,{useEffect} from 'react'
import kolo from '../img/kolo.png'
import {actionCreator} from '../redux/index'
import {bindActionCreators} from 'redux'
import {useDispatch,useSelector} from 'react-redux'
function Aboutme(props) {
    const cos=useSelector(state=>state.height.height)
    const dispatch=useDispatch()
    const {height}=bindActionCreators(actionCreator,dispatch)
    useEffect(()=>{
    props.give(false)
    
    // height(window.innerHeight)
    // props.send.b(!props.send.a)
    },[])
    return (
        <div className="aboutme">
            <br/>
            <h1 className="name">Hi, my name is Marcin</h1>
            <br/>
            <p className="firstp">I have 25 years </p>
            <br/>
            <p className="pp">In free time i like learning, running and cooking</p>
            <br/>
            <p className="pp">My interesing is IT, health diet and reading book about human biology</p>
            <br/>
            <em className="emClass">Book which i can recommend for everybody<br/> <a className="klik" href="https://www.youtube.com/watch?v=8OgUX3vcpYY&t=11661s&ab_channel=AUDIOBOOKTHEATRE" target="blank">klik</a></em>
         <br/>
         <br/>
         
       
            <img src={kolo} className="circle" alt="kolo"/>
        </div>
    )
}

export default Aboutme
