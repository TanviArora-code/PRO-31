class Drop{
    constructor(x,y){
        var options = {
            friction : 0.1
        }
        this.body = Matter.Bodies.circle(x,y,5,options)
        World.add(world,this.body);
        this.radius = 5;
        

    }
  
    



display(){

    var position = this.body.position;
    push();
    fill("blue");
    ellipse(position.x, position.y,this.radius,this.radius)
    pop();
    
    
    
}

update(){
    if(this.body.position.y > height){
        Body.setPosition(this.body,{x:random(10,400), y:random(10,400)})
    }
}

}