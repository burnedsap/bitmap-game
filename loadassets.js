var openingScreen, museumEntry, mainHall, foodHall, artifactHall, dreamHall, escScreen;
let pixelFont;
let textBox;
let dreamCoverR, dreamCoverL;
let startActive, startInactive;
let backgroundMusic;
function preload() {
    openingScreen = loadImage('assets/opening-screen.png');
    museumEntry = loadImage('assets/museum-entry.png');
    mainHall = loadImage('assets/museum-hall.png');
    foodHall = loadImage('assets/food-hall.png');
    artifactHall = loadImage('assets/artifact-hall.png');
    dreamHall = loadImage('assets/dream-hall.png');
    pixelFont = loadFont('fonts/Minecraftia-Regular.ttf');
    textBox = loadImage('assets/text-box.png');
    dreamCoverR = loadImage('assets/dream-cloudR.png');
    dreamCoverL = loadImage('assets/dream-cloudL.png');
    escScreen = loadImage('assets/esc-screen.png');
    startActive = loadImage('assets/start-active.png');
    startInactive = loadImage('assets/start-inactive.png');
    backgroundMusic = loadSound('assets/Bobbin.mp3');
}
