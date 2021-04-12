const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hour;
var backgroundImg;

var bg = "sunrise1.png"

function preload() {
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
      background(backgroundImg)


    Engine.update(engine);

   fill("black");
   textSize(40);
   textFont("Stencil");

   if(hour>=12){
       text("Time : "+ hour%12 + " PM", 50,100);
   }

   else if(hour==0){
       text("Time : 12 AM", 100,100);
   }

   else{
       text("Time : "+ hour%12 + " AM", 50,100)
   }

}

async function getBackgroundImg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    hour = datetime.slice(11,13);
    
    if(hour>=04 && hour<=06 ){
        bg = "sunrisel.png";
    }

    else if(hour>=06 && hour<=08){
        bg = "sunrise2.png";
    }

    else if(hour>=08 && hour<=11){
        bg = "sunrise3.png";
    }

    else if(hour>=11 && hour<=12){ 
        bg = "sunrise4.png";
    }

    else if(hour>=12 && hour<=14){ 
        bg = "sunrise5.png";
    }

    else if(hour>=14 && hour<=17){ 
        bg = "sunrise6.png";
    }

    else if(hour>=17 && hour<=18){ 
        bg = "sunset7.png";
    }

    else if(hour>=18 && hour<=19){ 
        bg = "sunset8.png";
    }

    else if(hour>=19 && hour<=21){ 
        bg = "sunset10.png";
    }

    else if(hour>=21 && hour==0) {
        bg = "sunset11.png";
    }
    
    else{
       bg = "sunset12.png";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}