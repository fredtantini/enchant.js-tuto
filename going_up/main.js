enchant();

var HEIGHT = 320;
var WIDTH = 320;
var PLAYER_SPEED = WIDTH / 20;
var ITEM_SPEED = HEIGHT/100;
var IMG_PLAYER = '../images/chara1.gif';


window.onload = function() {
    game = new Game(HEIGHT, HEIGHT);
    game.fps = 24;
    game.preload([IMG_PLAYER]);

    game.onload = function() {
        //on crée le joueur
        somePlayer = new Player();
        
        game.rootScene.addEventListener('touchstart', function(e){
            //À chaque appui, on change de côté si on n'est pas en train de bouger
            if (somePlayer.moving === 0) {
                //si à gauche, moving devient 1
                //si à droite, moving devient -1
                somePlayer.moving = (-2 * somePlayer.position) + 1;
            }
        });
        
        game.score = 0;
        var label = new Label('');
        game.rootScene.addChild(label);
        
        game.rootScene.addEventListener('enterframe',function() {
            label.text = game.score;
            if(game.frame % (5*PLAYER_SPEED) === 0){
                new Item();
            }
        });
    }
    game.start();
}

Player = enchant.Class.create(Sprite, {
    initialize: function() {
        var game = enchant.Game.instance;
        Sprite.call(this, 32, 32);
        
        this.x = (WIDTH/4) - 16;
        this.xmin = this.x;
        this.xmax = (3*WIDTH/4) - 16;
        this.y = 240;               
        this.image = game.assets[IMG_PLAYER]; 
        this.frame = [0,1,0,2];
        this.position = 0; // 0 si gauche, 1 pour droite
        this.moving = 0;

        this.addEventListener('enterframe', function(e){
            if (this.moving != 0) {
                this.x += this.moving*5;
                if ((this.moving == -1) && (this.x <= this.xmin)) {
                    this.position = 0;
                    this.x = this.xmin;
                    this.moving = 0;                
                }
                if ((this.moving == 1) && (this.x>=this.xmax)) {
                    this.position = 1;
                    this.x = this.xmax;
                    this.moving = 0;                
                }
            }
        });
        game.rootScene.addChild(this);
    }
});


Item = enchant.Class.create(Sprite, {
    initialize: function() {
        var game = enchant.Game.instance;
        Sprite.call(this, WIDTH/2, 10);
  
        this.y = 0;
        this.x =  (rand(2)*WIDTH/2) ;
        
	var surface = new Surface(WIDTH/2, 10);
        surface.context.lineWidth = 5;
        surface.context.rect(0, 0, WIDTH/2, 10);
        surface.context.fillStyle = "rgb(150, 150, 150)";
        surface.context.fill();
        surface.context.stroke();
	this.image = surface;

        this.addEventListener('enterframe', function() {
            this.y += ITEM_SPEED;
            if (this.y > 320) {
                this.scene.removeChild(this);
                game.score++;
            }             
            if (this.intersect(somePlayer)) {
                game.end();
            }
        });
        
        game.rootScene.addChild(this);        
    }
});

function rand(num){
    return Math.floor(Math.random() * num);
}


