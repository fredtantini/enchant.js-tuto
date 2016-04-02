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
        var speed = 5;
        game.keybind(77, 'm');
        game.keybind(81, 'q');
        game.keybind(107, 'plus');
        game.keybind(109, 'moins');

        var menuScene = new Scene();
        lbl_speed = new Label(speed+"");
        lbl_speed.y = 100;
        lbl_speed.x = 100;
        menuScene.addChild(lbl_speed);
        
        menuScene.addEventListener('enterframe', function(){
            lbl_speed.text = speed+"";
            if (game.input.q) game.popScene();
            if (game.input.moins){
                speed--;
                speed = Math.max(1, speed);
            }                
        });
        menuScene.addEventListener('plusbuttonup',function(){
               speed++;
                speed = Math.min(10, speed);
        });

        
        game.rootScene.addEventListener('enterframe', function(){
            if (game.input.left) {           
                player.x -= speed;
                player.frame = (player.frame+1) %3;
                player.scaleX = -1;
            }
            if (game.input.right){
                player.x += speed;
                player.frame = (player.frame+1) %3;
                player.scaleX = 1;
            }
            if (game.input.m) game.pushScene(menuScene);
        });
        
        game.rootScene.addChild(player);

        
    };
    game.scale = 1;
    game.debug();
}

