function setup() 
{   
	createCanvas(800, 800);
 //Det her gør vi for at lave et canvas som vi kan tegne ting på.
}

let hvilkenMenuManErI=0 //Dette er en global variable 
let HarViKørtDetHerKodeFør=false //Vi har en lykke som kun køre hvis den ikke er blevet kørt før

function ÆndreTilStartSpil() 
{
 window.location.href = "Spil.html"
}

function SætMenutil4() 
{
  hvilkenMenuManErI=4
  createCanvas(400, 400)
  console.log(hvilkenMenuManErI)
}

function SætMenutil5() 
{
  hvilkenMenuManErI=5
  createCanvas(400, 400)
  console.log(hvilkenMenuManErI)
}

function draw() {
  if(hvilkenMenuManErI===0){
    if(HarViKørtDetHerKodeFør===false)
    {
  background(0)
  textSize(50) //Gør teksten Himmelsten Stor
  fill(255)
 text('Eksamnensprojekt',width/2-200,height/7) //Viser teksten himmelsten på skærmen
 

 let Start_SpilKnap = createButton('Start Spil'); //laver en knap der hedder start spil
 Start_SpilKnap.position(170, 200); //siger hvor start spil knappen skal være hende. 
 Start_SpilKnap.mousePressed(ÆndreTilStartSpil); //Ændre bagrunden til at være 5

 let ReglerKnap = createButton('Regler'); //laver en knap der hedder start spil
 ReglerKnap.position(170, 250); //siger hvor start spil knappen skal være hende. 
 ReglerKnap.mousePressed(ChangeRegler || SætMenutil5); //Ændre bagrunden til at være 5

 function ChangeRegler() { 
  window.location.href = "regler.html"
 }

 let CreditsKnap = createButton('Credits');
 CreditsKnap.position(170, 300);
 CreditsKnap.mousePressed(ChangeCredits || SætMenutil5)
 
  function ChangeCredits() {
    window.location.href = "credits.html"
  }
  

console.log(hvilkenMenuManErI)
    }
    HarViKørtDetHerKodeFør=true

  }

}

