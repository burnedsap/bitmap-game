function openingscreen_level() {
    image(openingScreen, 0, 0);
    if (frameCount == 1) {
        wall1 = createSprite(1, 400 / 2, 1, 400);
        wall2 = createSprite(399, 400 / 2, 1, 400);
        wall3 = createSprite(400 / 2, 0, 400, 1);
        for (var i = 1; i <= 3; i++) {
            var w = "wall" + i;
            obstacles.add(eval(w));
            eval(w).visible = false;
        }
    }
    spr.collide(obstacles);
    image(startInactive, 98, 67); //206 52
    if (spr.x > 98 - 25 && spr.x < 98 + 206 + 25 && spr.y > 67 - 25 && spr.y < 67 + 52 + 25) {
        image(startActive, 41, 30);
        fill(0, map(sin(frameCount * 5), -1, 1, 10, 255));
        textAlign(CENTER);
        textSize(12);
        textFont(pixelFont);
        text("Press 'Q' to start...", width / 2, height / 2);
        if (keyWentDown(81)) {
            obstacles.removeSprites();
            sceneNum = 1;
            spr.x = width / 2;
            spr.y = 400 - 20;
        }
    }
}
