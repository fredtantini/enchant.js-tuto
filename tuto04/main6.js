enchant();

HEIGHT = 320;
WIDTH = 320;

window.onload = function() {
    game = new Game(WIDTH, HEIGHT);
    game.preload('../images/chara1.png');
    game.onload = function() {
        game.rootScene.backgroundColor = "grey";
        var player = new Sprite(32, 32);
        player.image = game.assets['../images/chara1.png'];
        player.x = 100;
        player.y = 50;

        game.rootScene.addEventListener('touchmove', function(event){
                player.x = event.x;
                player.y = event.y;
        });

        game.rootScene.addChild(player);      
    };
    game.scale = 1;
    game.debug();
}

