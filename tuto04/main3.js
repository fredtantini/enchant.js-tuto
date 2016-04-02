enchant();

HEIGHT = 320;
WIDTH = 320;

window.onload = function() {
    var game = new Game(WIDTH, HEIGHT);
    game.preload('../images/chara1.png');
    game.onload = function() {
        game.rootScene.backgroundColor = "grey";
        var player = new Sprite(32, 32);
        player.image = game.assets['../images/chara1.png'];
        player.x = 100;
        player.y = 50;
        
        game.rootScene.addEventListener('enterframe', function(){
            if (game.input.left) {           
                player.x -= 5;
                player.frame = (player.frame+1) %3;
                player.scaleX = -1;
            }
            if (game.input.right){
                player.x += 5;
                player.frame = (player.frame+1) %3;
                player.scaleX = 1;
            }
        });

        game.rootScene.addChild(player);
        
    };
    game.scale = 1;
    game.debug();
}

