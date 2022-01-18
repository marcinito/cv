import React,{useRef,useEffect} from 'react'
import  './style.scss'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Particle from './Obiekty.js/Particle'


function App() {
    const canvasRef=useRef()

//     useEffect(()=>{
// const canvas=canvasRef.current
// const ctx=canvas.getContext("2d")
// let CANVAS_WIDTH=window.innerWidth
// let CANVAS_HEIGHT=window.innerHeight
// canvas.width=window.innerWidth
// canvas.height=window.innerHeight
// console.log(CANVAS_WIDTH)

// new Particle(CANVAS_WIDTH,CANVAS_HEIGHT)
// let hue=0
// let tablica=[]
// const make100=()=>{
// for(let i=0;i<100;i++){
//     tablica.push(new Particle(CANVAS_WIDTH,CANVAS_HEIGHT,hue))
// }
// }
// make100()
// const rysuj=(ctx)=>{
//     for(let i=0;i<100;i++){
//       tablica[i].draw(ctx,hue)
//       tablica[i].update()
//     }
// }

// console.log(tablica)
// const animate =()=>{

  
//    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)

//  rysuj(ctx)





//     requestAnimationFrame(animate)
// }
// animate()

//     },[])
   
    return (
<div className="container">
    <canvas id="canvas" ref={canvasRef}></canvas>
<nav><Navbar/></nav>

    
    <Content/>

   
</div>
    )
}

export default App
