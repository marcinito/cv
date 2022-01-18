import React from 'react'
import lorrygif from '../img/lorrygif.gif'
import {useNavigate} from 'react-router-dom'
function Lorry() {
    const navigate=useNavigate()
    return (
        <div className="loryPage">
            <h1 className="h1loryPage"><span style={{color:"darkblue",fontWeight:"bold",WebkitTextStroke:"1px red"}}>HGV</span> Licence Cat C </h1>
           <br/>
           <p>I have obtained the qualifications in <em>03.12.2019</em></p>
           <br/>
           <p>I own <span style={{color:"darkred"}}>UK DRIVE LICENCE</span> and <span style={{color:"darkorange"}}>DRIVER QUALIFICATION CARD</span> </p>
           <br/>
           <h2>My experience as lorry driver</h2>
           <br/>
           <p>
I am good driver because never have accident or get a ticket, in free time i training my concentration <em>(sailing with balls)</em> it is very helpful when you drive
           </p>
           <br/>
          <p style={{color:"darkgreen"}}>ROHLIG SUUS Logistics S.A. Oddział Olsztyn <em>since 01.05.2020 to 01.20.2021</em></p>
           <br/>
           <img src={lorrygif} alt="lorrygif"/><br/>
           <button className="return" onClick={()=>navigate("/credentials")}>return</button>
        </div>
    )
}

export default Lorry
