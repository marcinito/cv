import React,{useRef,useEffect,useContext,useState} from 'react'
import  './style.scss'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Particle from './Obiekty.js/Particle'
import {Provider} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {actionCreator} from '../src/redux/index'
import {bindActionCreators} from 'redux'

function App() {
    const dispatch=useDispatch()
  const [flaga,setFlaga]=useState(false)

    const {height}=bindActionCreators(actionCreator,dispatch)
       let siema=useSelector(state=>state.height.height)


    const canvasRef=useRef()
   
    useEffect(()=>{
       
      
        console.log("cos sie zmienilop")
height(window.innerHeight)
const canvas=canvasRef.current
const ctx=canvas.getContext("2d")
let CANVAS_WIDTH=window.innerWidth
let CANVAS_HEIGHT=siema

canvas.width=window.innerWidth
canvas.height=siema
if(height<300){

}

new Particle(CANVAS_WIDTH,CANVAS_HEIGHT)
let hue=0
let tablica=[]
const make100=()=>{
for(let i=0;i<100;i++){
    tablica.push(new Particle(CANVAS_WIDTH,CANVAS_HEIGHT,hue))
}
}
make100()
const rysuj=(ctx)=>{
    for(let i=0;i<20;i++){
      tablica[i].draw(ctx,hue)
      tablica[i].update()
    }
}


const animate =()=>{

  
   ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)

 rysuj(ctx)





    requestAnimationFrame(animate)
}
animate()

    },[flaga])
  
    return (
<div className="container">
    <canvas id="canvas" ref={canvasRef}></canvas>
<nav><Navbar/></nav>

   
    <Content git={canvasRef.current} daj={{a:flaga,b:setFlaga}} />
  

   
</div>
    )
}

export default App
