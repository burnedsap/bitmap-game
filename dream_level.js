function dream_level() {
    let isDreamCoverR = false;
    let isDreamCoverL = false;
    image(dreamHall, 0, 0);

    if (npcArr.length < 1) {
        populateNPC(1, 177, 222, 88, 320);
        wall1 = createSprite(400 / 2, (32 + 43) / 2, 400, 32 + 43);
        wall2 = createSprite((10 / 2), (400 / 2), 10, 400);
        wall3 = createSprite((179 / 2), 390 + (10 / 2), 179, 10);
        wall4 = createSprite(220 + (179 / 2), 390 + (10 / 2), 179, 10);
        wall5 = createSprite(390 + (10 / 2), (400 / 2), 10, 400);

        //Mars Dream
        md_collide = createSprite(17 + (158 / 2), 90 + (295 / 2), 158, 295);
        md_trigger = createSprite(17 + (158 / 2), 90 + (295 / 2), 158 + 5, 295 + 5);
        obstacles.add(md_collide);
        md_collide.visible = false;
        md_trigger.visible = false;

        //Bag Nightmare
        bg_collide = createSprite(225 + (158 / 2), 90 + (295 / 2), 158, 295);
        bg_trigger = createSprite(225 + (158 / 2), 90 + (295 / 2), 158 + 5, 295 + 5);
        obstacles.add(bg_collide);
        bg_collide.visible = false;
        bg_trigger.visible = false;

        triggers.add(bg_trigger);
        triggers.add(md_trigger);
        for (var i = 1; i <= 5; i++) {
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
    if (spr.overlap(md_trigger)) {
        if (keyWentDown(81)) {
            convoState = !convoState;
        }
        if (convoState) {
            isDreamCoverL = true;
            showTextBox("This is a dream. Running around on the surface of Mars, exploring the landscapes. However, this dream eventually ends up in an asphyxiation nightmare according to the Dream Journal.");
        } else {
            isDreamCoverL = false;
        }

    }

    if (!isDreamCoverL) {
        image(dreamCoverL, 17, 90);
    }
    if (spr.overlap(bg_trigger)) {
        if (keyWentDown(81)) {
            convoState = !convoState;
        }
        if (convoState) {
            isDreamCoverR = true;
            showTextBox("This is a nightmare. Salil hated packing, and one of his nightmares is a never-ending packing exercise, along with the logistical shenanigans of packaging.");
        } else {
            isDreamCoverR = false;
        }
    }
    if (!isDreamCoverR) {
        image(dreamCoverR, 225, 90);
    }

    if (spr.x > 180 && spr.x < 220 && spr.y > 370) {
        obstacles.removeSprites();
        triggers.removeSprites();
        clearNPC();
        sceneNum = 2;
        spr.x = width / 2;
        spr.y = 60;
    }
}
