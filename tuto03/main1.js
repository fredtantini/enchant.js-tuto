enchant();

HEIGHT = 320;
WIDTH = 320;

window.onload = function() {
    var game = new Game(WIDTH, HEIGHT);
    game.preload('../images/chara1.png');
    game.onload = function() {
        game.rootScene.backgroundColor = "grey";
        var player = new Sprite(200, 200);
        player.image = game.assets['../images/chara1.png'];
        game.rootScene.addChild(player);
    };
    game.scale = 1;
    game.debug();
}
