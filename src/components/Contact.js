import React,{useEffect} from 'react'
import telefon from '../img/telefon.png'
import {actionCreator} from '../redux/index'
import {bindActionCreators} from 'redux'
import {useDispatch,useSelector} from 'react-redux'
function Contact(props) {
    const dispatch=useDispatch()
    const stan=useSelector(state=>state.height.height)
    const {height}=bindActionCreators(actionCreator,dispatch)
    useEffect(()=>{
        props.give(false)
        
        height(window.innerHeight)
        props.send.b(!props.send.a)
        },[])
       
    return (
        <div className="contact1">
            <br/>
            <h1 className="h1contact">You can contact with me by....</h1>
            <div className="byfon">
          <img className="telefon" src={telefon} alt="fon"/> <div className="fon"> +485024945454 </div>  
          
         
          </div>
          <br/>
          
          <h1 className="h1email">...or send me e-mail</h1>
          <div className="byemail">
            
          <form  action="https://formsubmit.co/kalwara_marcin@o2.pl" method="POST" >
              <label htmlFor="email" className="label">Enter your e-mail</label>
              <br/>
              <input name="email" type="email" id="email"></input><br/>
              <label htmlFor='txtare' className="label" >Send me message</label>
              <br/>
              <textarea name="email" id="txtarea" className="textarea"></textarea>
              <br/>
              <button name="email" type="submit" className="send">send</button>
          </form>
          </div>
                </div>
    )
}

export default Contact
