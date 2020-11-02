const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world,particle;
var gr1,div1;
var turn = 0
var score=0
var gamestate="start"


//var particles=[];
var plinkos = [];
var divisions = [];

var divisionheight=300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  gr1=new Ground(240,785,500,20)
  for (var k=0;k<=width;k=k+80){
    
     divisions.push(new Divisions(k,height-divisionheight/2,10,divisionheight))
   }
  for (var j =40;j <=width;j=j+50){
    plinkos.push(new Plinko(j,75))
  } 
  for (var j =15;j <=width-10;j=j+50){
    plinkos.push(new Plinko(j,175))
  } 
  for (var j =40;j <=width;j=j+50){
    plinkos.push(new Plinko(j,275))
  } 
  for (var j =15;j <=width-10;j=j+50){
    plinkos.push(new Plinko(j,375))
  } 
 

  
}

function draw() {
  background(0);  
  
 
  
  textSize(20) 
  text("SCORE : "+score,20,30)

  text("500",20,600) 
  text("500",100,600) 
  text("200",180,600)
  text("200",260,600)  
  text("100",340,600) 
  text("100",420,600)
  
  if ( gamestate==="end"){
  textSize(40)
    text("GAME OVER",100,450)
  }

  Engine.update(engine)
  
  gr1.display();
  for (var k = 0; k < divisions.length; k++) { divisions[k].display(); }
  for(var j =0; j<plinkos.length;j++){
    plinkos[j].display();
  }
 // if(frameCount%60===0){
   // particles.push(new Particle(random(width/2-10,width/2+10),10,10))
    
  //}
  //for(var j=0; j<particles.length;j++){
    //particles[j].display();
    //console.log("hello")
  if (particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<160){
        score=score+500;
        particle=null;
        if(turn>=5){
          gamestate="end"
          
        }
      }else if(particle.body.position.x<320){
        score=score+200;
        particle=null;
        if(turn>=5){
          gamestate="end"
          
        }
      }else if(particle.body.position.x<480){
        score=score+100;
        particle=null;
        if(turn>=5){
          gamestate="end"
          
        }
      }
    }
  }
 
  
  //drawSprites();
}
function mousePressed()
{
  if (gamestate!=="end"){
    turn++
    particle=new Particle(mouseX,10,10,10)
  }
}
