function mainhall_level() {
    image(mainHall, 0, 0);
    if (npcArr.length < 1) {
        populateNPC(2, 68, 315, 139, 288);
        wall1 = createSprite(182 / 2, (32 + 43) / 2, 182, 32 + 43);
        wall2 = createSprite(216 + (184 / 2), (32 + 43) / 2, 184, 32 + 43);
        wall3 = createSprite((10 / 2), ((179 - 32) / 2), 10, 179 - 32);
        wall4 = createSprite((10 / 2), 220 + (179 / 2), 10, 179);
        wall5 = createSprite((179 / 2), 390 + (10 / 2), 179, 10);
        wall6 = createSprite(220 + (179 / 2), 390 + (10 / 2), 179, 10);
        wall7 = createSprite(390 + (10 / 2), ((179 - 32) / 2), 10, (179 - 32));
        wall8 = createSprite(390 + (10 / 2), 220 + (179 / 2), 10, 179);

        //Furniture
        ft1_collide = createSprite(224 + (24 / 2), 338 + ((48 - 6) / 2), 24, 48 - 6);
        obstacles.add(ft1_collide);
        ft1_collide.visible = false;
        ft2_collide = createSprite(152 + (24 / 2), 338 + ((48 - 6) / 2), 24, 48 - 6);
        obstacles.add(ft2_collide);
        ft2_collide.visible = false;

        //Dream Signboards
        drsign = createSprite(224 + (34 / 2), 41 + ((14 + 35) / 2), 34, 14 + 35);
        drsign.visible = false;
        fdsign = createSprite(10 + ((4 + 20) / 2), 141 + ((33 + 25) / 2), 4 + 20, 33 + 25); //4 33
        fdsign.visible = false;
        thsign = createSprite(400 - 10 - 25 + ((4 + 20) / 2), 224 + ((33 + 25) / 2), 4 + 20, 33 + 25); //4 33
        thsign.visible = false;
        triggers.add(drsign);
        triggers.add(fdsign);
        triggers.add(thsign);
        for (var i = 1; i <= 8; i++) {
            var w = "wall" + i;
            obstacles.add(eval(w));
            eval(w).visible = false;
        }
    }
    if (spr.overlap(drsign)) {
        if (keyWentDown(81)) {
            convoState = !convoState;
        }
        if (convoState) {
            showTextBox("Dream Room. Contains a dream and a nightmare.");
        }
    }
    if (spr.overlap(fdsign)) {
        if (keyWentDown(81)) {
            convoState = !convoState;
        }
        if (convoState) {
            showTextBox("Food Room. A multi-cultural space of food worship. TW: Hunger, strong synesthesia");
        }
    }
    if (spr.overlap(thsign)) {
        if (keyWentDown(81)) {
            convoState = !convoState;
        }
        if (convoState) {
            showTextBox("Thing Room. See some of Salil's sacred objects.");
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

//    if (spr.y > 179 && spr.y < 220 && spr.x < 10) {
    if (spr.x < 10) {
        obstacles.removeSprites();
        triggers.removeSprites();
        clearNPC();
        sceneNum = 3;
        spr.x = width - 20;
        spr.y = (400 / 2) - 5;
//    } else if (spr.y > 179 && spr.y < 220 && spr.x > width - 10) {
    } else if (spr.x > width - 10) {
        obstacles.removeSprites();
        triggers.removeSprites();
        clearNPC();
        sceneNum = 5;
        spr.x = 20;
        spr.y = (400 / 2) - 5;
//    } else if (spr.x > 182 && spr.x < 216 && spr.y < 40) {
    } else if (spr.y < 40) {
        obstacles.removeSprites();
        triggers.removeSprites();
        clearNPC();
        sceneNum = 4;
        spr.x = width / 2;
        spr.y = 400 - 35;
//    } else if (spr.x > 182 && spr.x < 216 && spr.y > 400 - 26) {
    } else if (spr.y > 400 - 26) {
        obstacles.removeSprites();
        triggers.removeSprites();
        clearNPC();
        sceneNum = 1;
        spr.x = width / 2;
        spr.y = 177;
    }
}
