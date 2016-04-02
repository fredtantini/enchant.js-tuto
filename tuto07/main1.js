enchant();

window.onload = function() {

    var game = new Game(320, 320);
    game.fps = 24;
    game.preload(['../images/chara1.gif']);
    game.onload = function() {
      

        var bear1 = new Sprite(32, 32);
        bear1.x = 250;
        bear1.y = 250;
        bear1.frame = 5;
        bear1.image = game.assets['../images/chara1.gif'];


        var bear2 = new Sprite(32, 32);
        bear2.x = 10;
        bear2.y = 10;
        bear2.frame = 4;
        bear2.image = game.assets['../images/chara1.gif'];

        bear1.tl.setTimeBased();
        bear1.tl.moveTo(10, 10, 10*1000);
        //bear2.tl.setFrameBased();
        bear2.tl.moveTo(250, 250, 10*game.fps);
        
        game.rootScene.addChild(bear1);
        game.rootScene.addChild(bear2);
        game.rootScene.backgroundColor = 'grey';
        
    };
    game.scale=1;
    game.debug();
};
