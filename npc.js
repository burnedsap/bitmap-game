class NPC {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.npc = createSprite(this.x, this.y, 25, 49);
        this.npc.setCollider('rectangle', 0, 20, 25, 10);
        this.npc.addAnimation('front', 'npc_green/npc_green_front_still_1.png', 'npc_green/npc_green_front_still_15.png');
        this.npc.addAnimation('right', 'npc_green/npc_green_right_still_1.png', 'npc_green/npc_green_right_still_15.png');
        this.npc.addAnimation('left', 'npc_green/npc_green_left_still_1.png', 'npc_green/npc_green_left_still_15.png');
        this.textBank = ["All that food got me really hungry.", "It might be terrible, but tell you what, it's not boring.", "Museum? More like BLEWseum am I right?", "This is the right use of tax-payer money. I approve.", "I really liked the dream room. Fascinating insight into his life. What is your favourite exhibit?","You know what I'm looking forward to? Leaving."];
        this.animBank = ["front", "right", "left"];
        this.selectedAnim = this.animBank[int(random(this.animBank.length))];
        this.selectedText = this.textBank[int(random(this.textBank.length))];
    }

    display() {
        //        this.npc.debug = mouseIsPressed;
        this.npc.changeAnimation(this.selectedAnim);
    }


    talk() {
        showTextBox(this.selectedText);
    }

}
