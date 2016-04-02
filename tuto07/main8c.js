enchant();


window.onload = function() {
    var game = new Game(320, 320);

    game.preload('../images/chara1.gif');
    game.onload = function() {
        
        
        var player = new Sprite(32, 32);
        player.x = 130;
        player.y = 130;
        player.image = game.assets['../images/chara1.gif'];
        player.addEventListener('enterframe', function() {
            this.vx = this.vy = 0;
            
            this.moveBy(apad.vx*5, apad.vy*5);
            
            if (game.input.left) {
                this.vx = -4;
            } else if (game.input.right) {
                this.vx = 4;
            } else if (game.input.up) {
                this.vy = -4;
            } else if (game.input.down) {
                this.vy = 4;
            }
            this.moveBy(this.vx, this.vy);
        });

        var apad = new APad();
        apad.x = 0;
        apad.y = 220;
        game.rootScene.addChild(apad);

        game.rootScene.addChild(player);

    };
    game.scale = 1;
    game.start();
};
