enchant();

window.onload = function() {

    var game = new Game(320, 320);

    game.preload(['../images/chara1.gif']);
    game.onload = function() {

        var lbl = new Label('');
        lbl.textAlign = 'center';
        game.rootScene.addChild(lbl);
        
        var bear1 = new Sprite(32, 32);
        bear1.x = 10;
        bear1.y = 10;
        bear1.image = game.assets['../images/chara1.gif'];
        
        bear1.tl.setTimeBased();
        bear1.tl.moveTo(100,10,1000);
        bear1.tl.moveTo(100,100,1000);
        bear1.tl.moveTo(10,100,1000);
        bear1.tl.moveTo(10,10,1000);
        bear1.tl.loop();
        
        flag = true;
        bear1.on('touchstart', function(){
            if (flag){
                bear1.tl.pause();
            }else{
                bear1.tl.resume();
            }
            flag = !flag;
            
        });

        var bear2 = new Sprite(32, 32);
        bear2.x = 10;
        bear2.y = 250;
        bear2.image = game.assets['../images/chara1.gif'];
        bear2.frame = 4;
        bear2.opacity = 0;
        bear2.tl.setTimeBased();
        
        bear2.tl.delay(1000).action({
                time: 2000,
                onactionstart: function(){
                    lbl.text = "ça commence";
                    bear2.tl.show();
                },
                onactionend: function(){
                    lbl.text = "c’est fini";
                    bear2.tl.removeFromScene();
                },
                onactiontick: function(){
                    lbl.text = "c’est en cours";
                    bear2.x++;
                    bear2.opacity -= 1 / 60;
                }
        });

        
        var bear3 = new Sprite(32, 32);
        bear3.x = 200;
        bear3.y = 200;
        bear3.image = game.assets['../images/chara1.gif'];
        bear3.frame = 5;
        bear3.tl.setTimeBased();
        bear3.tl.moveTo(150,200,1000);
        bear3.tl.moveTo(150,150,1000);
        bear3.tl.moveTo(200,150,1000);
        bear3.tl.moveTo(200,200,1000);
        bear3.tl.loop();

        bear3.on('touchstart', function(){
            bear3.tl.unloop().moveTo(150, 150, 1000);
            bear3.tl.waitUntil(function(){
                bear3.moveBy(1,1);
                return bear3.x>200;
            }).moveTo(150, 150, 1000).waitUntil(function(){
                return flag;}).moveTo(200, 200, 1000);
            
        });
        
        game.rootScene.addChild(bear3);
        game.rootScene.addChild(bear2);
        game.rootScene.addChild(bear1);
        game.rootScene.backgroundColor = 'grey';
        
    };
    game.scale=1;
    game.debug();
};

