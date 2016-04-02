enchant();

window.onload = function() {

    var game = new Game(640, 420);

    game.preload(['../images/chara1.gif']);
    game.onload = function() {
        lbl = new Label('');
        lbl.textAlign = 'right';
        lbl.font = '18px serif';
        lbl.y = 400;
        lbl.x = 10;
        lbl.tl.setTimeBased();
        lbl.tl.delay(1000);
        game.rootScene.addChild(lbl);
        var tempo = -2000;
        var pos = 0;
        for(var easing in enchant.Easing) {
            tempo +=3000;
            pos += 10;
            
            new Bear1(50, pos, tempo, easing);
            new Bear2(10, pos, tempo, easing);
            new Bear3(600, pos, tempo, easing);

        }
        game.rootScene.backgroundColor = 'grey';
        
    };
    game.scale=1;
    game.debug();
};

Bear = enchant.Class.create(Sprite, {
    initialize: function(pos, tempo, easing) {
        this.game = enchant.Game.instance;
        Sprite.call(this, 32, 32);        
        this.image = this.game.assets['../images/chara1.gif'];
        this.y = pos;
        this.tl.setTimeBased();
        this.tl.hide().delay(tempo);
        this.game.rootScene.addChild(this);
    },
});

Bear1 = enchant.Class.create(Bear, {
    initialize: function(posx, pos, tempo, easing) {
        Bear.call(this, pos, tempo, easing);
        this.x = posx;
        this.tl.then(function(){lbl.text=easing;}).show()
            .moveTo(550, pos, 3000, enchant.Easing[easing]);
    },
});

Bear2 = enchant.Class.create(Bear, {
    initialize: function(posx, pos, tempo, easing) {
        Bear.call(this, pos, tempo, easing);        
        this.x = posx;
        this.tl.show().rotateTo(90,3000, enchant.Easing[easing]).hide();
    },
});


Bear3 = enchant.Class.create(Bear, {
    initialize: function(posx, pos, tempo, easing) {
        Bear.call(this, pos, tempo, easing);        
        this.x = posx;
        this.tl.fadeIn(3000, enchant.Easing[easing]).hide();
    },
});


