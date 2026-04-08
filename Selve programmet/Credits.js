function setup() 
{
	createCanvas(400, 400); 
    //music.setVolume(0.05)
}
let xmove = 0;
let font;
//let music;


function preload()
{
font = loadFont('assets/fonts/ketchup.otf');
//preloader en font som er i mappen assets.
//music = loadSound('assets/music/Chill.mp3');
//preloader en lyd som også er i mappen assets.
}

//console.log(music)

function draw()
{
   // if(!music.isPlaying()) {
      //  music.play();
       // }
    background(0)
    textFont(font);
    text("Programmers", 75, 40);
    textSize(13);
    fill(255);
    text("Emil Nedergaard Moeller", 50, 60);
    textSize(40);
    fill(255);
    text("Programmers", 90, )
    let Skipbutton = createButton('Tilbage');
Skipbutton.position(10, 10);
Skipbutton.mousePressed(ChangeHome);

}
function ChangeHome() {
window.location.href = "index.html"
}


