import React from 'react'
import licencjawozki from '../img/licencjawozki.jpg'
import {useNavigate} from 'react-router-dom'
function Forklift() {
    const navigate=useNavigate()
    return (
        <div className="forkliftPage">
   <h1 className="h1Title">I own <span style={{color:"darkblue"}}>Polish</span> and <span style={{color:"blue"}}>English</span> license to work on forklift</h1><br/>
   <p>In Poland i get qualifications in <em>23.12.2016</em> in <span>England</span> I get qualifications in <em>26.08.2018</em> </p> <br/>

  <h2>In my experience as forklift driver i have responsibilities like:</h2>
  <br/>
  <ul className="ulListRes">
      <li><span style={{color:"red"}}>⥌</span> Loading and unloading materials from a variety of vehicles</li>
      <li><span style={{color:"plum"}}>⥌</span> Moving pallet-packed materials around the site or storage facility</li>
      <li><span style={{color:"green"}}>⥌</span> Checking loads are secure</li>
      <li><span style={{color:"red"}}>⥌</span> Performing equipment checks and basic maintenance</li>
      <li><span style={{color:"orange"}}>⥌</span> Adhering to health and safety regulations</li>
  </ul>
  <br/><br/>
<h1 className="h1SecondTitle">Place where i work in England as forklift driver</h1>
<p className="nazwaFirmy">Hawthorn Produce Handling & Packing(shift 12 days work 2 day off)-this place give me a lot houer of experience and good practice</p>
<p className="nazwaFirmy">Logtek - Spalding (Traywash)(nightshift)</p>
<p className="nazwaFirmy">Greenyard Fresh UK -Spalding</p>
<p className="nazwaFirmy">Young's Seafood Humberston Road -Grimsby <em>since 13.01.2020 to 24.03.2020</em></p>
<br/><br/><br/>
<button className="return" onClick={()=>navigate("/credentials")}>return</button>
<br/>
<br/>
<h1 className="h1Certify">Certify</h1>

<img className="licencjaWozki" src={licencjawozki} alt="licenjca"></img>
<br/>
<a href="#">donowald</a>

        </div>
    )
}

export default Forklift
