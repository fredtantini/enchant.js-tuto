enchant();

HEIGHT = 320;
WIDTH = 320;

var sens = 1;

window.onload = function() {
    var game = new Game(WIDTH, HEIGHT);
    game.preload('../images/chara1.png');
    game.onload = function() {
        game.rootScene.backgroundColor = "grey";
        var player = new Sprite(32, 32);
        player.image = game.assets['../images/chara1.png'];
        player.frame = [5,6,5,7];
        game.rootScene.addChild(player);
        
        players = [];
        for(var i = 0; i < 8; i++) {
            players[i] = new Sprite(32, 32);
            players[i].image = game.assets['../images/chara1.png'];
            players[i].x = 64 + ((i%4)*64);
            players[i].y = 64*Math.floor(i/4);

            players[i].originX = (i%4) * 16;
            players[i].originY = (i%4) * 16;
            
            var sprite = new Sprite(32, 32);
            sprite.x = players[i].x;
            sprite.y = players[i].y;
            game.rootScene.addChild(sprite);
        }

        for(var i = 0; i < 4; i++) {
            players[i].scale(0.5, 0.5);
        }
        for(var i = 4; i < 8; i++) {
            players[i].rotate(30);
        }


        
        for(var i = 0; i < 8; i++) {
            game.rootScene.addChild(players[i]);
        }
        for (var i = 64; i<300; i+=64){
            var sprite = new Sprite(32,32);
            sprite.x = i;
            game.rootScene.addChild(sprite);
        }        
        
        player.addEventListener('enterframe', function(){
            if (player.x > WIDTH-32){
                sens = -1;
                player.scale(-1, 1);
            }
            if (player.x < 0){
                sens = 1;
                player.scale(-1, 1);
            }
            player.moveBy(sens * 2, sens*2);
            player.scaleY = player.y / (HEIGHT/2);
        });
        
    };
    game.scale = 1;
    game.debug();
}
