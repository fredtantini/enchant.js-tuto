enchant();

window.onload = function() {

    var game = new Game(320, 320);
    game.fps = 24;
    game.preload(['../images/chara1.gif']);
    game.onload = function() {
      
        var bear1 = new Sprite(32, 32);
        bear1.x = 10;
        bear1.y = 10;
        bear1.image = game.assets['../images/chara1.gif'];
        
        bear1.tl.setTimeBased();
        bear1.tl.tween({
            x: 250,
            y: 250,
            scaleX: 2,
            rotation: 45,
            opacity: 0.5,
            time: 2000});
        
        var bear2 = new Sprite(32, 32);
        bear2.x = 10;
        bear2.y = 250;
        bear2.image = game.assets['../images/chara1.gif'];
        
        bear2.tl.setTimeBased();
        bear2.tl.delay(2000).moveTo(250, 10, 3000).and().
            scaleTo(3, 1, 4000).and().
            fadeTo(0.5, 100);
        
        game.rootScene.addChild(bear2);
        game.rootScene.addChild(bear1);
        game.rootScene.backgroundColor = 'grey';
        
    };
    game.scale=1;
    game.debug();
};

