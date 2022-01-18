import React,{useEffect} from 'react'
import kolo from '../img/kolo.png'
function Aboutme(props) {
    useEffect(()=>{
    props.give(false)
    })
    return (
        <div className="aboutme">
            <br/>
            <h1 className="name">Hi, my name is Marcin</h1>
            <p className="firstp">I have 25 years </p>
            <p className="pp">In free time i like learning, running and cooking</p>
            <p className="pp">My interesing is IT, health diet and reading book about human biology</p>
            <em>Book which i can recommend for everybody <a href="https://www.youtube.com/watch?v=8OgUX3vcpYY&t=11661s&ab_channel=AUDIOBOOKTHEATRE" target="_blank">klik</a></em>
            <img src={kolo} className="kolo" alt="kolo"/>
        </div>
    )
}

export default Aboutme
