enchant();

HEIGHT = 200;
WIDTH = 300;

var sens = 1;

window.onload = function() {
    var game = new Game(WIDTH, HEIGHT);
    game.preload('../images/chara0.gif');
    game.onload = function() {
        game.rootScene.backgroundColor = "grey";
        var sprite = new Sprite(50, 150);
        var surface = new Surface(50, 150);
        surface.context.stokeStyle = "Red"; 
        surface.context.lineWidth = 8;
        surface.context.rect(10, 10, 30, 80);
        surface.context.fillStyle = "rgb(250, 250, 250)";
        surface.context.fill();
        surface.context.stroke();
        sprite.image = surface;
        game.rootScene.addChild(sprite);

        sprite = new Sprite(50, 150);
        sprite.x = 75;
        surface = new Surface(50, 150);
        surface.context.beginPath();
        surface.context.moveTo(10, 10);
        surface.context.bezierCurveTo(100, 70, -50, 100, 50, 150);
        surface.context.stroke();
        sprite.image = surface;
        game.rootScene.addChild(sprite);

        sprite = new Sprite(150, 150);
        sprite.x = 150;
        surface = new Surface(150, 150);
        var grd = surface.context.createLinearGradient(75, 25, 100, 100);
        grd.addColorStop(0, '#0000FF');
        grd.addColorStop(1, '#FF0000');   
        surface.context.beginPath();
        surface.context.arc(75, 75, 50, 0, 3*Math.PI/2, false);
        surface.context.closePath();
        surface.context.fillStyle = grd;
        surface.context.fill();
        surface.context.stroke();
        sprite.image = surface;
        game.rootScene.addChild(sprite);

        sprite = new Sprite(64, 64);
        sprite.y = 100;
        surface = new Surface(98, 128);
        //prend l'image à 194,0 avec largeur/hauteur de 96/128
        //(on prend les 12 persos de droite de chara0.gif)
        //le met dans la 'surface' à l'échelle
        //à 0,0 avec largeur/hauteur de 96/128 (la dimension de la surface * 2)
        surface.draw(game.assets['../images/chara0.gif'], 194,0, 96,128, 0,0, 192,256); 
        sprite.image = surface;
        sprite.frame = 3; // on prend le 1er de la 2e ligne
        game.rootScene.addChild(sprite);
    };
    
    game.scale = 1;
    game.debug();
}
