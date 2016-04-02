enchant();

var IMG_CARTE = '../images/map1.gif';
var IMG_PLAYER = '../images/chara0.gif';
var IMG_ICON = '../images/icon0.gif';

window.onload = function() {
    var game = new Game(320, 320);

    game.preload(IMG_CARTE, IMG_PLAYER, IMG_ICON);
    game.onload = function() {
        var map = new Map(16, 16);
        map.image = game.assets[IMG_CARTE];
        map.loadData(tab_bckg1,tab_bckg2);
        map.collisionData = tab_collision;

        var foregroundMap = new Map(16, 16);
        foregroundMap.image = game.assets[IMG_CARTE];
        foregroundMap.loadData(tab_front);

        var the_key = new Sprite(16, 16);
        the_key.x = 8;
        the_key.y = 8;
        the_key.image = game.assets[IMG_ICON];
        the_key.frame = 33;

        var the_potion = new Sprite(16, 16);
        the_potion.x = 18 * 16;
        the_potion.y = 8 * 16;
        the_potion.image = game.assets[IMG_ICON];
        the_potion.frame = 13;
        the_potion.visible = false;
        
        var player = new Sprite(32, 32);
        player.x = 6 * 16 - 8;
        player.y = 10 * 16;
        
        var image = new Surface(96, 128);
        image.draw(game.assets[IMG_PLAYER], 0, 0, 96, 128, 0, 0, 96, 128);
        player.image = image;

        player.isMoving = false;
        player.direction = 0;
        player.walk = 1;
        player.addEventListener('enterframe', function() {
            this.frame = this.direction * 3 + this.walk;

            this.vx = this.vy = 0;
            if (game.input.left) {
                this.direction = 1;
                this.vx = -4;
            } else if (game.input.right) {
                this.direction = 2;
                this.vx = 4;
            } else if (game.input.up) {
                this.direction = 3;
                this.vy = -4;
            } else if (game.input.down) {
                this.direction = 0;
                this.vy = 4;
            } else {
                this.walk = 0;
            }

            //futurs bords du _dessin_ du sprite
            var left = this.x + this.vx + 9; 
            var right = this.x + this.vx + this.width - 9;
            var top = this.y + this.vy + 20;
            var bottom = this.y + this.vy + this.height - 1;

            
            if (!(map.hitTest(left,top) ||
                  map.hitTest(left,bottom) ||
                  map.hitTest(right,top) ||
                  map.hitTest(right,bottom) ||
                  left < 0 ||
                  right > map.width ||
                  top < 0 ||
                  bottom > map.height
                 )
               ){
                this.moveBy(this.vx, this.vy);
                this.walk = (this.walk + 1)%3;
            }
        });

        the_key.on('enterframe', function(){
            if (this.within(player, 12)){
                this.x = player.x + 8;
                this.y = player.y + 8;
            }
        });
        the_potion.on('enterframe', function(){
            if (this.within(the_key, 12)){
                this.visible = true;
            }else if(this.visible){
                stage.removeChild(the_potion);
            }
                
        });
        
        var stage = new Group();
        stage.addChild(map);
        stage.addChild(the_key);
        stage.addChild(player);
        stage.addChild(the_potion);
        stage.addChild(foregroundMap);
        game.rootScene.addChild(stage);

        game.rootScene.addEventListener('enterframe', function(e) {
            var x = Math.min((game.width  - 16) / 2 - player.x, 0);
            var y = Math.min((game.height - 16) / 2 - player.y, 0);
            x = Math.max(game.width,  x + map.width)  - map.width;
            y = Math.max(game.height, y + map.height) - map.height;
            stage.x = x;
            stage.y = y;
        });
    };
    game.scale = 1;
    game.start();
};
