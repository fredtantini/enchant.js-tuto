enchant();

window.onload = function() {

    var game = new Game(320, 320);
    game.fps = 24;
    game.preload(['../images/chara1.gif']);
    game.onload = function() {
      

        var bear = new Sprite(32, 32);
        bear.x = 0;
        bear.y = 0;
        bear.image = game.assets['../images/chara1.gif'];
        
        var bear2 = new Sprite(32, 32);
        bear2.x = 50;
        bear2.y = 50;
        bear2.frame = 5;
        bear2.image = game.assets['../images/chara1.gif'];
        
        var stage = new Group();
        stage.addChild(bear);
        stage.addChild(bear2);
        stage.x = 100;
        stage.y = 100;
        
        game.rootScene.addChild(stage);
        game.rootScene.backgroundColor = 'grey';
        
    };
    game.scale=1;
    game.debug();
};
