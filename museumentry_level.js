function museumentry_level() {
    image(museumEntry, 0, 0);

    if (npcArr.length < 1) {
        populateNPC(2, 10, 390, 278, 380);
        wall1 = createSprite(179 / 2, (169 + 43) / 2, 179, 169 + 43);
        wall2 = createSprite((179 + 40) + 181 / 2, (169 + 43) / 2, 181, 169 + 43);
        wall3 = createSprite(179 + (3 / 2), 198 + (56 / 2), 3, 56);
        wall4 = createSprite(216 + (3 / 2), 198 + (56 / 2), 3, 56);
        wall5 = createSprite(1, 199 + (201 / 2), 1, 201);
        wall6 = createSprite(399, 199 + (201 / 2), 1, 201);
        for (var i = 1; i <= 6; i++) {
            var w = "wall" + i;
            obstacles.add(eval(w));
            eval(w).visible = false;
        }
    }

    spr.collide(obstacles);
    for (var j = 0; j < npcArr.length; j++) {
        npcArr[j].display();
        spr.collide(npcArr[j].npc);
        if (dist(spr.x, spr.y, npcArr[j].x, npcArr[j].y) < convoDistance) {
            if (keyWentDown(81)) {
                convoState = !convoState;
            }
            if (convoState) {
                npcArr[j].talk();
            }
        }
    }
    if (spr.x > 182 && spr.x < 216 && spr.y > 140 && spr.y < 176) {
        obstacles.removeSprites();
        sceneNum = 2;
        clearNPC();
        spr.x = width / 2;
        spr.y = 400 - 30;
    }
}
