let size = 20
let xKor = 100
let yKor = 100
let xM = xKor+size/2
let yM = yKor+size/2
let pSpeed = 8

function setup () {
   createCanvas(800, 800);
    let skiftSpilK = createButton('Tilbage') //laver en knap der hedder start spil
skiftSpilK.position(10,50) //siger hvor start spil knappen skal være hende. 
skiftSpilK.mousePressed(ændreS) //starter funktion draw
}

function ændreS() 
    {
     window.location.href = "index.html"
    }

function draw () {
background(0,100,0)
rect(xKor,yKor,size,size)
xM = xKor+size/2
yM = yKor+size/2
  
  movePlay()
  outOfBounds()
}

function movePlay(){
if (keyIsDown(65)) { // code for a
    xKor=xKor-pSpeed
  }

  if (keyIsDown(68)) { // code for d
    xKor=xKor+pSpeed
  }
  
  if (keyIsDown(87)) { //code for w
    yKor=yKor-pSpeed
  }
  if (keyIsDown(83)) { //code for s
    yKor=yKor+pSpeed
  }
}

function outOfBounds(){
if(xM <= 0+size/2){xKor=xKor+pSpeed}
if(yM <= 0+size/2){yKor=yKor+pSpeed}
if(xM >= width-size/2){xKor=xKor-pSpeed}
if(yM >= height-size/2){yKor=yKor-pSpeed}
}




/*function playerDie() {
if (yKor >= 373.3 && yKor <= 385 || yKor >= 772.3 && yKor <= 785 || 1==0) { // || means or
  xKor=50;
  yKor=10;
  console.log("Super Dingus");
 }  
}*/

/*
function setup() 
{
	createCanvas(400, 400);
}

function draw() {
    background(220);
    noStroke()
      fill(255,255,0)
       vertex(250, 90)
    vertex(250, 45)
    vertex(85, 75)
    vertex(30, 75)
     vertex(100, 305)
    endShape()
  }
*/