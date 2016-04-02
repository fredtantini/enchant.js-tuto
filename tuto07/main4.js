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
        bear1.tl.then(function(){this.frame++})
            .delay(1000).then(function(){this.frame++})
            .delay(1000).then(function(){this.frame++})
            .delay(1000).then(function(){this.frame++})
            .delay(1000).then(function(){this.frame++})
            .delay(1000).then(function(){game.rootScene.removeChild(this)});

        var bear2 = new Sprite(32, 32);
        bear2.x = 100;
        bear2.y = 10;
        bear2.image = game.assets['../images/chara1.gif'];
        
        bear2.tl.setTimeBased();
        bear2.tl.cue({
            0: function(){this.frame++},
            1000: function(){this.frame++},
            2000: function(){this.frame++},
            3000: function(){this.frame++},
            4000: function(){this.frame++},
            5000: function(){game.rootScene.removeChild(this)}
        });

        game.rootScene.addChild(bear1);
        game.rootScene.addChild(bear2);
        game.rootScene.backgroundColor = 'grey';
        
    };
    game.scale=1;
    game.debug();
};

echo = function(){
    console.log("a");
}
