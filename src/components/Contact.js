import React,{useEffect} from 'react'
import telefon from '../img/telefon.png'
function Contact(props) {
    useEffect(()=>{
        props.give(false)
        })
    return (
        <div className="contact1">
            <br/>
            <h1 className="h1contact">You cane contact with me by....</h1>
            <div className="byfon">
          <img className="telefon" src={telefon} alt="fon"/> <div className="fon"> +485024945454 </div>  
          
         
          </div>
          <br/>
          <br/>
          <br/>
          <h1 className="h1email">...or send me e-mail</h1>
          <div className="byemail">
            
          <form>
              <label htmlFor="email">Podaj swój e-mail</label>
              <br/>
              <input type="email" id="email"></input><br/>
              <label htmlFor='txtare'>Send me message</label>
              <br/>
              <textarea id="txtarea" style={{height:"200px",width:"300px"}}></textarea>
              <br/>
              <button>send</button>
          </form>
          </div>
                </div>
    )
}

export default Contact
