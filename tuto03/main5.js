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
        player.frame = [0, 1, 0, 2];
        game.rootScene.addChild(player);
    };
    game.fps = 7;
    game.scale = 1;
    game.debug();
}
