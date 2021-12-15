var jaqson, pista; 
var pistsa, jaxon;
var parededireita, paredeesquerda;
function preload(){
  //imagens pré-carregadas
  pistsa= loadImage ("path.png");
  jaxon= loadAnimation ("Runner-1.png", "Runner-2.png " , "Runner-1.png");
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  pista = createSprite (200, 200);
pista.addImage (pistsa);
pista.velocityY= 4;
pista.scale = 1.3
jaqson = createSprite (200,370,25, 25 );
jaqson.addAnimation ("correndo", jaxon);
jaqson.scale = 0.08;
parededireita = createSprite (370, 0, 100, 800);
parededireita.visible = false;
paredeesquerda = createSprite (36, 0, 100, 800);
paredeesquerda.visible = false;
}

function draw() {
  background(0);
if (pista.y > 400 ){
  pista.y = height/2;
}
jaqson.x = World.mouseX
jaqson.bounceOff (paredeesquerda);
jaqson.bounceOff (parededireita);
 drawSprites ();
}
