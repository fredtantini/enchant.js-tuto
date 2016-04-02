enchant();

HEIGHT = 320;
WIDTH = 320;

var game = null;
window.onload = function() {
    game = new Game(WIDTH, HEIGHT);
    game.onload = function() { 
        var label = new Label(''); 
        game.rootScene.addChild(label);
        game.rootScene.backgroundColor='grey';
        
        scene1 = new Scene();
        var chose1 = new Label('menu');
        chose1.font = '18px serif';
        chose1.textAlign = 'center';
        
        scene1.backgroundColor='red';
        scene1.addChild(chose1);
        
        var scene2 = new Scene();
        scene2.backgroundColor='blue';
        var chose2 = new Label('option1');
        chose2.color = 'red';
        scene2.addChild(chose2);

        var someInt = 0;
        
        game.rootScene.addEventListener('enterframe',function() {
            someInt++;
            label.text = game.frame+" "+game.rootScene.age+" "+someInt;
        });
                              
        game.addEventListener('enterframe',function() {
            if (game.frame === 5){
                game.pushScene(scene1);
            }
            if (game.frame === 10){
                game.pushScene(scene2);
            }
            if (game.frame === 15){
                game.removeScene(scene1);
                game.popScene();
            }
            if (game.frame === 20){
                game.pushScene(scene2);
            }
            if (game.frame === 25){
                game.replaceScene(scene1);
            }
            if (game.frame === 30){
                game.popScene();
            }
            if (game.frame === 35){
                game.popScene();
            }
        });

    }
    game.fps = 4; //le nombre de frames par secondes
    game.scale = 1;
    game.debug();
}
