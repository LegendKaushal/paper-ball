class dustbin
{

    constructor(x,y,width,height)
    {
        var box_Options = {

            isStatic:true,
            restitution:0.8,
            friction:0.3,
            density:1.5
          
        }



     this.body = Bodies.rectangle(x,y,width,height,box_Options)
     this.width = width
     this.height = height
     this.image = loadImage("dustbingreen.png")
     World.add(world,this.body)
    }

    display()
    {
       var angle = this.body.angle
       var pos = this.body.position
     
       push()
       translate(pos.x,pos.y)

       angleMode(RADIANS)
       rotate(angle)
       

       imageMode(CENTER)
       image(this.image,0,-75,200,200)

    
       pop()

    }

}
