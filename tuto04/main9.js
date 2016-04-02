enchant();

var HEIGHT = 320;
var WIDTH = 320;

var ICON0 = '../images/icon0.png';
var NB_BONUS = 10;
var NB_MALUS = 15;
var FPS = 24;

window.onload = function() {
    var game = new Game(WIDTH, HEIGHT);
    
    game.preload(ICON0);
    
    game.onload = function() {
        
        game.rootScene.backgroundColor = "grey";

        for (var i = 0; i < NB_BONUS; i++)
            var item = new Item(19);
        for (var i = 0; i < NB_MALUS; i++)
            var item = new Item(20);
        
        var lbl_score = new Label('');
        game.rootScene.addChild(lbl_score);

        var timer = 10;
        
        game.score = NB_BONUS;
        game.running = true;
        
        game.addEventListener('enterframe', function(){
            if (game.frame%FPS===0){
                timer--;
            }
            if (game.score===0 || timer===0){
                game.running = false;
            }
            if (game.running){
                lbl_score.text = timer+"<br/>Plus que " + game.score;
            }else{
                if (game.score===0){
                    lbl_score.text = "Bravo !!!";
                }else{
                    lbl_score.text = "Il en restait encore " + game.score;
                }
                game.stop();
            }
            
        });
    };
    game.scale = 1;
    game.fps = FPS;
    game.start();
}



Item = enchant.Class.create(Sprite, {
    initialize: function(whichFrame) {
        this.game = enchant.Game.instance;
        Sprite.call(this, 16, 16);        
        this.image = this.game.assets[ICON0];
        this.frame = whichFrame;
        this.x = 16 + rand(WIDTH - 32);
        this.y = 16 + rand(HEIGHT - 32);
        this.angle = (10 + rand(70))* Math.PI/180;
        this.speed = 1 + rand(5);
        this.vx = this.speed * Math.cos(this.angle);
        this.vy = this.speed * Math.sin(this.angle);
        this.game.rootScene.addChild(this);
    },
    ontouchstart: function(){
        if (this.frame===19){//bonus
            this.game.score--;
            this.game.rootScene.removeChild(this);
        }else{
            this.game.running = false;
        }
    },
    onenterframe: function() {
        this.y += this.vy;
        this.x += this.vx;
        if (this.y > (HEIGHT-16) || this.y <0) {
            this.vy = -this.vy;
        }
        if (this.x > (WIDTH-16) || this.x <0) {
            this.vx = -this.vx;
        }
    }
});

function rand(num){
    return Math.floor(Math.random() * num);
}
