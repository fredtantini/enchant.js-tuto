enchant();


window.onload = function() {
    game = new Game(320, 320);
    game.preload('../images/bar.png');
    game.onload = function() {
        
        var mt = new MutableText(100,0,120);
        mt.text = 'Are you ready?';
        mt.y = 10;
        game.rootScene.backgroundColor = 'grey';
        game.rootScene.addChild(mt);

        var sl = new ScoreLabel(20, 70);
        sl.label = 'Points: ';
        sl.easing = 5;
        game.rootScene.addChild(sl);
        
        var tl1 = new TimeLabel(0, 100);
        game.rootScene.addChild(tl1);

        var tl2 = new TimeLabel(0, 120, 'countdown');
        tl2.label = 'Reste : ';
        tl2.time = 20;
        game.rootScene.addChild(tl2);
        
        var ll = new LifeLabel(0, 150, 5);
        ll.label.text = 'Vie : ';
        ll.life = 3;
        game.rootScene.onenterframe = function(){
            if (this.age % 50 ===0){
                ll.life++;
                sl.score += 1000;
            }
            if (this.age %300 ===0){
                ll.life = 0;
                sl.score = 0;
            }
        };
        game.rootScene.addChild(ll);

        var bar = new Bar(310, 200);
        bar.direction = "left";
        bar.image = game.assets['../images/bar.png'];
        game.rootScene.addChild(bar);
        bar.maxvalue = 300;
        bar.easing = 20;
        bar.value = bar.maxvalue;
        bar.ontouchstart = function(){
            bar.value -= 50;
        }
        var bar2 = new Bar(10, 220);
        game.rootScene.addChild(bar2);
        bar2.maxvalue = 300;
        bar2.value = 50;
        bar2.ontouchstart = function(){
            bar2.value += 50;
        }
        
    };
    game.scale = 1;
    game.debug();
};
