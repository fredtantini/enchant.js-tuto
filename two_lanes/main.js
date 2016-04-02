enchant();

var HEIGHT = 320;
var WIDTH = 320;
var N_CARS = 4;
var N_FRAMES_MAX = 4;
var LANE_WIDTH = WIDTH / N_CARS;
var CAR_SPEED = LANE_WIDTH / 20;
var ITEM_SPEED = HEIGHT/100;

window.onload = function() {
    game = new Game(HEIGHT, HEIGHT);
    game.fps = 24;
    game.preload(['chara4.png','icon0.gif','effect0.png']);

    game.onload = function() {
        //on crée les voitures, chacune sur sa ligne
        game.arr_cars = [];
        for(var i_car = 0; i_car < N_CARS; i_car++) {
            game.arr_cars.push(new Car(i_car));
        }
        game.n_cars = N_CARS;
        game.rootScene.addEventListener('touchstart', function(e){
            var someCar = game.arr_cars[Math.floor(e.localX/LANE_WIDTH)];
            if ((someCar.isAlive === 1) && (someCar.isMoving === 0)) {
                someCar.isMoving = (-2 * someCar.position) + 1;
            }
        });
        
        game.score = 0;
        var label = new Label('');
        game.rootScene.addChild(label);
        
        game.rootScene.addEventListener('enterframe',function() {
            label.text = "Score: " + game.score;
            if(game.frame % (5*CAR_SPEED) === 0){
                new Item(rand(N_CARS), rand(2));
            }
            if(game.n_cars===0){
                game.end();
            }
        });


    }
    game.start();
    
}

Explosion = enchant.Class.create(Sprite, {
    initialize: function(x, y) {
        var game = enchant.Game.instance;
        Sprite.call(this, 16, 16);
        this.x = x;
        this.y = y;               
        this.image = game.assets['effect0.png']; 
        this.frame = -1;

        this.addEventListener('enterframe', function(e){
            if (this.frame>4) {
                game.rootScene.removeChild(this);
            }
            this.frame += 1;
        });
        game.rootScene.addChild(this);
    }
});




Car = enchant.Class.create(Sprite, {
    initialize: function(lane) {
        var game = enchant.Game.instance;
        Sprite.call(this, 32, 32);
        
        this.lane = lane;
        this.x = lane * LANE_WIDTH;
        this.xmin = this.x;
        this.xmax = (lane+1) * LANE_WIDTH - 32;
        this.y = 240;               
        this.image = game.assets['chara4.png']; 
        this.frame = lane % N_FRAMES_MAX;
        this.position = 0; // 0 si gauche, 1 pour droite
        this.isAlive = 1;
        this.isMoving = 0;

        this.addEventListener('enterframe', function(e){
            if (this.isMoving !== 0) {
                this.x += this.isMoving*5;
                if ((this.isMoving === -1) && (this.x <= this.xmin)) {
                    this.position = 0;
                    this.x = this.xmin;
                    this.isMoving = 0;                
                }
                if ((this.isMoving === 1) && (this.x>=this.xmax)) {
                    this.position = 1;
                    this.x = this.xmax;
                    this.isMoving = 0;                
                }
            }
        });
        
        this.addEventListener('enterframe', function(e){
            if (this.isAlive <= 0) {
                this.isAlive -= 1;
                if (this.isAlive <=-4){
                    game.rootScene.removeChild(this);
                }
            }
        });

        game.rootScene.addChild(this);
    }
});


Item = enchant.Class.create(Sprite, {
    initialize: function(lane, typeOfItem) {
        var game = enchant.Game.instance;
        Sprite.call(this, 16, 16);        
  
        this.y = 0;
        //au milieu d'une des moitiés
        this.x = (lane * LANE_WIDTH) + (rand(2)*LANE_WIDTH/2) +  (LANE_WIDTH/4 - 16/2) ; 

        this.addEventListener('enterframe', function() {
            this.y += ITEM_SPEED;
            if (this.y > 320) {
                this.scene.removeChild(this);
            }
        });

        //bonus
        if (typeOfItem === 0) {
            this.image = game.assets['icon0.gif'];
            this.frame = 14;
            this.addEventListener('enterframe', function(e) {                
                var set = this.intersect(Car);
                if (set.length) {
                    game.score++;
                    game.rootScene.removeChild(this);
                }
            });
        }
        
        //malus
        if (typeOfItem === 1) {
            this.image = game.assets['icon0.gif'];
            this.frame = 24;
            this.addEventListener('enterframe', function(e) {                
                var set = this.intersect(Car);
                if (set.length) {
                    set[0].isAlive=0;
                    new Explosion(this.x, this.y);
                    new Explosion(set[0].x+8, set[0].y+8);
                    game.n_cars--;
                    game.rootScene.removeChild(this);
                }
            });
        }
        
        game.rootScene.addChild(this);
    }
});

function rand(num){
    return Math.floor(Math.random() * num);
}
