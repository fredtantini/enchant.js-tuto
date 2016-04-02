enchant();

window.onload = function() {

    var game = new Game(320, 320);
    game.fps = 24;
    game.preload(['../images/chara1.gif']);
    game.onload = function() {
      

        var bear = new Sprite(32, 32);
        bear.x = 10;
        bear.y = 10;
        bear.image = game.assets['../images/chara1.gif'];
        
        bear.tl.setTimeBased();
        bear.tl.moveTo(250, 250, 2000).then(function(){this.frame++})
            .delay(250)
            .scaleTo(-1, 1, 250).then(echo)
            .moveTo(10, 10, 2000).scaleTo(1, 1, 250)
            .delay(250).loop();

        game.rootScene.addChild(bear);
        game.rootScene.backgroundColor = 'grey';
        
    };
    game.scale=1;
    game.debug();
};

echo = function(){
    console.log("a");
}
