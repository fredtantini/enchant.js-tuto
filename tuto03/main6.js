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
        player.frame = [5,6,5,7];
        game.rootScene.addChild(player);

        player.addEventListener('enterframe', function(){
            if (player.x > 50) player.frame = 8;
            else {
                player.x+=2;
                player.y+=3;
            }            
        });
        
    };
    game.fps = 7;
    game.scale = 1;
    game.start();
}
