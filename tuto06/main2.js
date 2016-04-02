enchant();

window.onload = function() {

    var game = new Game(150, 50);
    game.fps = 24;
    game.preload(['../images/chara1.gif', '../images/avatarBg2.png']);
    game.onload = function() {
      

        var bear = new Sprite(32, 32);
        bear.x = 32;
        bear.y = 18;
        bear.image = game.assets['../images/chara1.gif'];

        bear.addEventListener("enterframe",function(){
            if (game.input.left)  this.x -= 4;
            if (game.input.right) this.x += 4;
        });

        var background = new Sprite(320,50);
        background.image = game.assets['../images/avatarBg2.png'];

        
        var stage = new Group();
        stage.addChild(background);
        stage.addChild(bear);
        stage.x = 0;
        stage.y = 0;

        stage.onenterframe = function() {
            this.x = (game.width - bear.width) / 2 - bear.x;
        };

        
        game.rootScene.addChild(stage);
        
    };
    game.scale=1;
    game.debug();
};
