let lastKey = 'down';

function keyInput() {
    if (keyIsPressed) {
        if (keyDown('up')) {
            spr.changeAnimation('back_anim');
            spr.setSpeed(2, -90);
            spr.rotation = 0;
            lastKey = 'up';
        }
        if (keyDown('down')) {
            spr.changeAnimation('front_anim');
            spr.setSpeed(2, 90);
            lastKey = 'down';
        }
        if (keyDown('left')) {
            spr.changeAnimation('left_anim');
            spr.setSpeed(2, 180);
            lastKey = 'left';
        }
        if (keyDown('right')) {
            spr.changeAnimation('right_anim');
            spr.setSpeed(2, 0);
            lastKey = 'right';
        }

    } else {
        spr.setSpeed(0);
    }
}

function checkAnimStatus() {
    if (lastKey == 'up') {
        spr.changeAnimation('back_still');
    } else if (lastKey == 'down') {
        spr.changeAnimation('front_still');
    } else if (lastKey == 'right') {
        spr.changeAnimation('right_still');
    } else if (lastKey == 'left') {
        spr.changeAnimation('left_still');
    }
}
