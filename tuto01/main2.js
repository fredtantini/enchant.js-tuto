enchant();

HEIGHT = 320;
WIDTH = 120;

window.onload = function() {
    var game = new Game(WIDTH, HEIGHT);
    game.preload(['../images/icon0.gif']); //les images à précharger,
                                           //mais bon là il n’y en a pas
    game.onload = function() { // le code du jeu
        var label = new Label(''); //on va afficher le numéro de frame
        game.rootScene.addChild(label);//on verra dans un autre
                                       //exemple ce que ça fait, même
                                       //si ça se devine
        game.rootScene.backgroundColor='grey';//pour bien voir le canvas
        game.rootScene.addEventListener('enterframe',function() {
            label.text = game.frame; //à chaque frame on met le label à jour
        });
        game.rootScene.addChild(new Sprite(32,32));
    }
    game.fps = 4; //le nombre de frames par secondes
    game.scale = 2; //mise à l’échelle 
    game.debug();
}
