/*
https://p5js.org/examples/motion-bouncy-bubbles.html
https://pippinbarr.github.io/b-r-3/info/
http://www.pippinbarr.com/images/2017/09/26/the-museum-that-must-be-stopped.html
http://www.uncubemagazine.com/sixcms/detail.php?id=16269435&articleid=art-1446718493345-a6456d05-a03c-4c6f-8145-3654c39b884f#!/page20
*/
var spr;
let sceneNum = 2;
let npcArr = [];
let convoState = false;
let escState = false;
let convoDistance = 45;
var obstacles, triggers;

function setup() {
    createCanvas(400, 450);
    noSmooth();
    // char1 = new Character(width / 2, height / 2);
    //    spr = createSprite(width / 2, height - 100, 25, 50);
    spr = createSprite(width / 2, height / 2, 25, 50);
    spr.setCollider('rectangle', 0, 20, 25, 10);

    // spr.rotateToDirection = true;
    spr.addAnimation('front_anim', 'char/char_front_1.png', 'char/char_front_15.png');
    spr.addAnimation('front_still', 'char/char_front_still_1.png', 'char/char_front_still_15.png');

    //back side animation
    spr.addAnimation('back_still', 'char/char_back_still.png');
    spr.addAnimation('back_anim', 'char/char_back_1.png', 'char/char_back_15.png');
    //    Right side animation
    spr.addAnimation('right_anim', 'char/char_right_1.png', 'char/char_right_15.png');
    spr.addAnimation('right_still', 'char/char_right_still_1.png', 'char/char_right_still_15.png');
    //left side animation
    spr.addAnimation('left_anim', 'char/char_left_1.png', 'char/char_left_15.png');
    spr.addAnimation('left_still', 'char/char_left_still_1.png', 'char/char_left_still_15.png');
    obstacles = new Group();
    triggers = new Group();

    textWall = createSprite(width / 2, height - 25, width, 50);
    textWall.visible = false;
    
    backgroundMusic.play();
    backgroundMusic.loop();
    backgroundMusic.setVolume(0.2);
    
}

function draw() {
    background(255);
    spr.collide(textWall);
    //    spr.debug = mouseIsPressed;
    levels();
    checkAnimStatus();
    keyInput();
    noStroke();
    fill(255);
    rect(2, 2, 25, 20);
    fill(0);
    textSize(10);
    textFont(pixelFont);
    text(floor(frameRate()), 10, 20);
    if (keyWentDown('esc')) {
        escState = !escState;
    }
    if (escState) {
        spr.visible = false;
        for (var j = 0; j < npcArr.length; j++) {
            npcArr[j].npc.visible = false;
        }
        image(escScreen, 0, 0);
    } else {
        spr.visible = true;
        for (var j = 0; j < npcArr.length; j++) {
            npcArr[j].npc.visible = true;
        }
    }
    drawSprites();

}

function mouseClicked() {
    if (escState) {
        if (mouseX > 65 && mouseX < 303 && mouseY > 65 && mouseY < 132) {
            triggers.removeSprites();
            obstacles.removeSprites();
            clearNPC();
            sceneNum = 0;
            spr.x = width / 2;
            spr.y = height / 2;
            escState = !escState;
        }
        if (mouseX > 65 && mouseX < 303 && mouseY > 145 && mouseY < 207) {
            escState = !escState;
        }
    }
}

function populateNPC(val, x1, x2, y1, y2) {
    for (var i = 0; i < val; i++) {
        npcArr[i] = new NPC(random(x1, x2), random(y1, y2));
    }
}

function clearNPC() {
    for (var i = 0; i < npcArr.length; i++) {
        npcArr[i].npc.remove();
    }
    npcArr.splice(0, npcArr.length);
}

function showTextBox(input) {
    image(textBox, 0, height - 50);
    noStroke();
    fill(0);
    textSize(9);
    textFont(pixelFont);
    text(input, 0 + 12, 400 + 8, 380, 40);
}
