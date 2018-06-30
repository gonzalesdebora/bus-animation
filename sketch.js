let anguloLlantas = 0;
let rotaLlantas = 50;
let anguloLimite = 360;

let bus;
let edificios;
let andes;

let contPagina = 1;

let posX = 0;
let direccionX = 1;
let velocidadX = 14;

let posXedificios = 0;

let i=0;
let posI = 0;
let direccionI = 1;
let velocidadI = 14;



function setup(){

  createCanvas(640, 480);
  frameRate(4);

  bus = loadImage("assets/bus.png");
  edificios = loadImage("assets/edificios.png");
  andes = loadImage("assets/andes.png");

}

function draw(){
background(255);

//cargando imágenes
image(andes, 0, 156.893);

image(edificios, 0, 244.641);

image(bus, posX - 800, 290);

//parte blanca de las llanticas
noStroke();
fill(255);
ellipse(posX - 50, 448.309, 30, 30);

noStroke();
fill(255);
ellipse(posX - 291, 448.309, 30, 30);

noStroke();
fill(255);
ellipse(posX - 584, 448.309, 30, 30);

//llaticas que se mueven
anguloLlantas += rotaLlantas;

push();
translate(posX - 50, 448.309);
rotate(radians(anguloLlantas));
stroke(0);
strokeWeight(5);
line(0, 0, 0, -15);
line(0, 0, 0, 15);
pop();

push();
translate(posX - 291, 448.309);
rotate(radians(anguloLlantas));
stroke(0);
strokeWeight(5);
line(0, 0, 0, -15);
line(0, 0, 0, 15);
pop();

push();
translate(posX - 584, 448.309);
rotate(radians(anguloLlantas));
stroke(0);
strokeWeight(5);
line(0, 0, 0, -15);
line(0, 0, 0, 15);
pop();

// movimiento del bus
posX = posX + (velocidadX * direccionX);

 if (direccionX == 1) {
    posX = posX + 1;
  }

  for (i = 0; i < 400; i = i + 1) {
    let lluviaX = random(0, width);
    let lluviaY = random(0, height);
    strokeWeight(0.75);
    line(lluviaX, lluviaY, lluviaX + 5, lluviaY + 5);
  }

 //lluvia

}
