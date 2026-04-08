function setup() 
{
	createCanvas(400, 400);
}

function draw() {
background(200)

text("1. Man spiller på en bane med 3 gange 3 felter", width/2-130, 10)
text("2. Man vinder spillet ved at have flest sten på brættet i sin egen farve", width/2-180, 49)
text("3. Når man lægger en sten ved siden af en modstanders sten, så hvis den side der vender mod din modstanders sten, har flere pigge end den side af din modstanders sten der vender mod din sten, så bliver deres sten til din sten.", width/2-190, 79, 390)
text("4. Når der ikke kan placeres flere sten på brættet, så slutter spillet.",width/2-190,200)

let Backbutton = createButton('Tilbage');
Backbutton.position(width/2, 350);
Backbutton.mousePressed(ChangeHome);

function ChangeHome() {
window.location.href = "index.html"
}

}
