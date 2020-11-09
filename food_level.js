function food_level() {
    image(foodHall, 0, 0);
    if (npcArr.length < 1) {
        populateNPC(1, 10, 340, 168, 257);
        wall1 = createSprite(400 / 2, (32 + 43) / 2, 400, 32 + 42);
        wall2 = createSprite((10 / 2), (400 / 2), 10, 400);
        wall3 = createSprite((400 / 2), 390 + (10 / 2), 400, 10);
        wall4 = createSprite(390 + (10 / 2), ((179) / 2), 10, (179));
        wall5 = createSprite(390 + (10 / 2), 220 + (179 / 2), 10, 179);
        //Chole Bhature
        cb_collide = createSprite(18 + (191 / 2), 86 + ((74 - 7) / 2), 191, 74 - 7);
        cb_trigger = createSprite(18 + (192 / 2), 86 + (74 / 2), 192 + 20, 74 + 10);
        obstacles.add(cb_collide);
        cb_collide.visible = false;
        cb_trigger.visible = false;
        //Gelato
        gl_collide = createSprite(274 + (73 / 2), 43 + ((116 - 7) / 2), 73, 116 - 7);
        gl_trigger = createSprite(274 + (73 / 2), 43 + (116 / 2), 73 + 10, 116 + 10);
        obstacles.add(gl_collide);
        gl_collide.visible = false;
        gl_trigger.visible = false;
        //Thepla
        th_collide = createSprite(36 + (106 / 2), 261 + ((97 - 7) / 2), 106, 97 - 7);
        th_trigger = createSprite(36 + (106 / 2), 261 + (97 / 2), 106 + 10, 97 + 10);
        obstacles.add(th_collide);
        th_collide.visible = false;
        th_trigger.visible = false;
        //Soba
        sb_collide = createSprite(227 + (122 / 2), 277 + ((101 - 7) / 2), 122, 101 - 7);
        sb_trigger = createSprite(227 + (122 / 2), 277 + (101 / 2), 122 + 10, 101 + 10);
        obstacles.add(sb_collide);
        sb_collide.visible = false;
        sb_trigger.visible = false;
        
        triggers.add(sb_trigger);
        triggers.add(th_trigger);
        triggers.add(gl_trigger);
        triggers.add(cb_trigger);
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
    if (spr.overlap(cb_trigger)) {
        if (keyWentDown(81)) {
            convoState = !convoState;
        }
        if (convoState) {
            showTextBox("Chole Bhature. It is Salil's favouritest food of all time. Crispy, yet soft. Smooth, and sharp, it is exquisite. Available at Haldirams for Rs. 140+GST.");
        }
    }
    if (spr.overlap(gl_trigger)) {
        if (keyWentDown(81)) {
            convoState = !convoState;
        }
        if (convoState) {
            showTextBox("The Gelato from Cream Choc in Goa. A highlight of his time spent in Goa, it is wonderful. Pairs well with a hot chocolate in the winters. Move over Bologna.");
        }
    }
    if (spr.overlap(th_trigger)) {
        if (keyWentDown(81)) {
            convoState = !convoState;
        }
        if (convoState) {
            showTextBox("Thepla. Nutritious, and universal, This is Comfort Food. Nothing else compares, don't @ us.");
        }
    }
    if (spr.overlap(sb_trigger)) {
        if (keyWentDown(81)) {
            convoState = !convoState;
        }
        if (convoState) {
            showTextBox("Miso Soba. THE noods. It doesn't get better than this. We don't make the rules.");
        }
    }

//    if (spr.y > 180 && spr.y < 220 && spr.x > width - 10) {
    if (spr.x > width - 10) {
        obstacles.removeSprites();
        triggers.removeSprites();
        clearNPC();
        sceneNum = 2;
        spr.x = 20;
        spr.y = (400 / 2) - 5;
        // npc1.visible = false;
    }
}
