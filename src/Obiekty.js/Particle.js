import { createContext } from "react"
let tablica=[]
export default class Particle{
    constructor(CANVAS_WIDTH,CANVAS_HEIGHT,hue){
        this.w=CANVAS_WIDTH
        this.h=CANVAS_HEIGHT

        this.hsl=0
        this.x=Math.floor(Math.random()*CANVAS_WIDTH)
        this.y=Math.floor(Math.random()*CANVAS_WIDTH)
        this.size=Math.floor(Math.random()*15)
        this.height=Math.floor(Math.random()*15)
        this.speedX=Math.random()*3-1.5
        this.speedY=Math.random()*3-1.5
        this.color=`crimson`
        
    }
    draw(ctx){
        ctx.fillStyle=this.color
        ctx.beginPath()
this.hsl+=5
        ctx.arc(this.x,this.y,this.size,0,2*Math.PI)
        ctx.fill()
        
      if(this.y<=0){
          this.y=(this.h/2*Math.floor(Math.random()*this.y))
      }
      if(this.y>=this.h){
        this.y=(this.h)/2*Math.floor(Math.random()*this.h)
    }
   
    }
    update(){
        this.y+=this.speedX
     
    }
    
    
}
function make100(){
    for(let i=0;i<10;i++){
        tablica.push(new Particle())
    }
}
 make100()