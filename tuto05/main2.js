enchant();

var HEIGHT = 320;
var WIDTH = 132;
var IMG_VOITURE = '../images/chara4.png';

window.onload = function() {
    game = new Game(WIDTH, HEIGHT);
    game.fps = 20;
    game.preload([IMG_VOITURE]);
    game.onload = function() {
        game.rootScene.backgroundColor = "grey";
        car = new Sprite(20, 32);  
        car.x = 0;                 
        car.y = 240;
        car.image = game.assets[IMG_VOITURE];

        car._frameLeft = 6;
        
        game.rootScene.addEventListener('touchstart', function(e){
            car.x = e.localX
        });
        game.rootScene.addEventListener('touchmove', function(e){
            car.x = e.localX
        });

        game.rootScene.addEventListener('enterframe',function(){
            if(game.frame % 32 === 0){
                addEnemy();
            }
        });
     
        game.rootScene.addChild(car);
    }
    game.debug();
}

function addEnemy(pos){
    var enemy = new Sprite(20, 32);  
    enemy.x = rand(100);               
    enemy.y = 0;
    enemy.image = game.assets[IMG_VOITURE];
    enemy.frame = 1 + rand(3);
    
    enemy._frameLeft = 6 + (32 * (enemy.frame));


    enemy.addEventListener('enterframe', function(e) {
        if(this.y >300){game.score++;game.rootScene.removeChild(this);}
        if(this.intersect(car)){       
            game.stop()
        }else{
            this.y += 5;                
        }
    });
    game.rootScene.addChild(enemy);
}

function rand(num){
    return Math.floor(Math.random() * num);
}

