enchant();

HEIGHT = 320;
WIDTH = 320;

window.onload = function() {
    var game = new Game(WIDTH, HEIGHT);
    game.onload = function() { 
        var label = new Label(''); 
        game.rootScene.addChild(label);
        game.rootScene.backgroundColor='grey';
        
        var scene1 = new Scene();
        var chose1 = new Label('menu');
        
        var scene2 = new Scene();
        scene2.backgroundColor='blue';
        var chose2 = new Label('option1');
        scene2.addChild(chose2);

        var someInt = 0;

        game.addEventListener('enterframe',function() {
            someInt++;
            
            label.text = game.frame+" "+game.rootScene.age+" "+someInt; 
            if (game.frame === 5){
                game.pushScene(scene1);
            }
            if (game.frame === 15){
                game.pushScene(scene2);
            }
            if (game.frame === 20){
                game.removeScene(scene2);
            }
            if (game.frame === 30){
                game.stop();
            }
        });

        scene1.addEventListener('enterframe',function() {
            if (scene1.age === 5){
                scene1.addChild(chose1);
            }
            if (scene1.age === 15){
                game.popScene();
            }
        });
    }
    game.fps = 2; //le nombre de frames par secondes
    game.scale = 1;
    game.debug();
}
