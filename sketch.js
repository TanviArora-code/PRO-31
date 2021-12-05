const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const World = Matter.World;
var engine, world;
var maxdrops = 20;
var drops=[];

function preload(){
    
}

function setup(){
   createCanvas(400,400)
   
   engine = Engine.create();
    world = engine.world;
    if(frameCount%200===0){
        for(var i = 0; i< maxdrops; i++){
            drops.push(new Drop(random(0,400), random(0,400)))
        }  
    }
    



    Engine.run(engine);
}

function draw(){
    background(0);
   
for(var i = 0; i< drops.length; i++){
    drops[i].display();
    drops[i].update();
}
    
}   

