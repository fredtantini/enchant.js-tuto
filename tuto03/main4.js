enchant();

HEIGHT = 320;
WIDTH = 320;

window.onload = function() {
    var game = new Game(WIDTH, HEIGHT);
    game.preload('../images/chara1.png');
    game.onload = function() {
        game.rootScene.backgroundColor = "grey";
        for (var i = 0; i < 5; i++){
            for(var j = 0; j < 4; j++) {
                
                var player = new Sprite(32, 32);
                player.image = game.assets['../images/chara1.png'];
                
                player.frame = i + j*5;                
                player.x = 40*i;
                player.y = 40*j;

                var label = new Label(player.frame.toString());
                label.x = player.x;
                label.y = player.y;
                game.rootScene.addChild(player);
                game.rootScene.addChild(label);
            }
        }
        
    };
    game.scale = 1;
    game.debug();
}
