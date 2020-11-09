function artifact_level() {
    image(artifactHall, 0, 0);
    if (npcArr.length < 1) {
        populateNPC(1, 55, 325, 147, 310);
        wall1 = createSprite(400 / 2, (32 + 43) / 2, 400, 32 + 42);
        wall2 = createSprite((10 / 2), ((179) / 2), 10, 179);
        wall3 = createSprite((10 / 2), 220 + (179 / 2), 10, 179);
        wall4 = createSprite((400 / 2), 390 + (10 / 2), 400, 10);
        wall5 = createSprite(390 + (10 / 2), (400 / 2), 10, 400);

        //Shoes
        sh_collide = createSprite(30 + (48 / 2), 60 + ((53 - 7) / 2), 48, 53 - 7);
        sh_trigger = createSprite(30 + (48 / 2), 60 + (53 / 2), 48 + 10, 53 + 10);
        obstacles.add(sh_collide);
        sh_collide.visible = false;
        sh_trigger.visible = false;
        triggers.add(sh_trigger);

        //Empty
        em_collide = createSprite(123 + (48 / 2), 60 + ((53 - 7) / 2), 48, 53 - 7);
        em_trigger = createSprite(123 + (48 / 2), 60 + (53 / 2), 48 + 10, 53 + 10);
        obstacles.add(em_collide);
        em_collide.visible = false;
        em_trigger.visible = false;
        triggers.add(em_trigger);

        //Paper Planes
        pp_collide = createSprite(209 + (58 / 2), 60 + ((53 - 7) / 2), 58, 53 - 7);
        pp_trigger = createSprite(209 + (58 / 2), 60 + (53 / 2), 58 + 10, 53 + 10);
        obstacles.add(pp_collide);
        pp_collide.visible = false;
        pp_trigger.visible = false;
        triggers.add(pp_trigger);

        //Blaziken
        bl_collide = createSprite(302 + (75 / 2), 65 + ((75 - 7) / 2), 75, 75 - 7);
        bl_trigger = createSprite(302 + (75 / 2), 65 + (75 / 2), 75 + 10, 75 + 10);
        obstacles.add(bl_collide);
        bl_collide.visible = false;
        bl_trigger.visible = false;
        triggers.add(bl_trigger);

        //Macbook
        mc_collide = createSprite(334 + (45 / 2), 175 + ((68 - 7) / 2), 45, 68 - 7);
        mc_trigger = createSprite(334 + (45 / 2), 175 + (68 / 2), 45 + 10, 68 + 10);
        obstacles.add(mc_collide);
        mc_collide.visible = false;
        mc_trigger.visible = false;
        triggers.add(mc_trigger);

        //Meme Box
        mb_collide = createSprite(334 + (42 / 2), 283 + ((71 - 7) / 2), 42, 71 - 7);
        mb_trigger = createSprite(334 + (42 / 2), 283 + (71 / 2), 42 + 10, 71 + 10);
        obstacles.add(mb_collide);
        mb_collide.visible = false;
        mb_trigger.visible = false;
        triggers.add(mb_trigger);

        //F1
        f1_collide = createSprite(29 + (218 / 2), 317 + ((58 - 7) / 2), 218, 58 - 7);
        f1_trigger = createSprite(29 + (218 / 2), 317 + (58 / 2), 218 + 10, 58 + 10);
        obstacles.add(f1_collide);
        f1_collide.visible = false;
        f1_trigger.visible = false;
        triggers.add(f1_trigger);


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
    if (spr.overlap(sh_trigger)) {
        if (keyWentDown(81)) {
            convoState = !convoState;
        }
        if (convoState) {
            showTextBox("Salil wore a pair of cheap, beat up sneakers for 4 years straight. One day, a stranger mistook them for trash, and threw them in the bin. Thus ends the tale of his favourite pair of footwear.");
        }
    }
    if (spr.overlap(em_trigger)) {
        if (keyWentDown(81)) {
            convoState = !convoState;
        }
        if (convoState) {
            showTextBox("A representation of the amount of energy he spent in trying to be relevant. Hint: None.");
        }
    }
    if (spr.overlap(pp_trigger)) {
        if (keyWentDown(81)) {
            convoState = !convoState;
        }
        if (convoState) {
            showTextBox("Legend has it that Salil once created 100 different paper airplane designs in a day. The originals were never found. Boeing is suspected to have copied some of them for the 737 Max.");
        }
    }
    if (spr.overlap(bl_trigger)) {
        if (keyWentDown(81)) {
            convoState = !convoState;
        }
        if (convoState) {
            showTextBox("Blaziken, the starter Pokemon of choice. Having met in Hoenn, they went on many a journey to together, wrecking trainers from Hoenn, and abroad.");
        }
    }
    if (spr.overlap(mc_trigger)) {
        if (keyWentDown(81)) {
            convoState = !convoState;
        }
        if (convoState) {
            showTextBox("Salil's beloved MacBook Pro. Hard working, resillient, and a loyal companion. Dearly missed. 2012-2020.");
        }
    }
    if (spr.overlap(mb_trigger)) {
        if (keyWentDown(81)) {
            convoState = !convoState;
        }
        if (convoState) {
            showTextBox("The myth, the legend that isSalil's meme curation. This memebox is one of the many manifestations. See: burnedsap.tumblr.com");
        }
    }
    if (spr.overlap(f1_trigger)) {
        if (keyWentDown(81)) {
            convoState = !convoState;
        }
        if (convoState) {
            showTextBox("One his few passions: F1. This is the Alfa Romeo C39 from 2020 driven by Kimi Raikkonen, which gained 11 positions on the first lap at the Portuguese Grand Prix.");
        }
    }

//    if (spr.y > 180 && spr.y < 220 && spr.x < 10) {
    if (spr.x < 10) {
        clearNPC();
        obstacles.removeSprites();
        triggers.removeSprites();
        sceneNum = 2;
        spr.x = width - 20;
        spr.y = (400 / 2) - 5;
    }
}
