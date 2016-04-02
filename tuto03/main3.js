enchant();

HEIGHT = 320;
WIDTH = 320;

window.onload = function() {
    var game = new Game(WIDTH, HEIGHT);
    game.preload('../images/chara1.png');
    game.onload = function() {
        game.rootScene.backgroundColor = "grey";
        var player = new Sprite(64, 32);
        player.image = game.assets['../images/chara1.png'];
        
        player.x = 40;
        player.y = 40;

        player._frameLeft = 32;
        player._frameTop = 64;
        
        game.rootScene.addChild(player);
             
    };
    game.scale = 1;
    game.debug();
}
