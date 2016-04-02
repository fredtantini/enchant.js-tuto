enchant();

var HEIGHT = 320;
var WIDTH = 320;
var NB_MALUS = 20;

var ICON0 = '../images/icon0.png';
var game = null;
window.onload = function() {
    game = new Game(WIDTH, HEIGHT);
    
    game.preload(ICON0);
    
    game.onload = function() {
        
        game.rootScene.backgroundColor = "grey";
        
        player = new Player(20);
        player.x = 10;
        player.y = 10;
        game.rootScene.addChild(player);

        for (var i = 0; i < NB_MALUS; i++)
            var item = new Item(19);

        var goal = new Goal(20);
        goal.x = 300;
        goal.y = 300;
        game.rootScene.addChild(goal);

        
        game.addEventListener('enterframe', function(){
            if (player.within(goal, 16)){
                game.stop();
            }
                
        });
    };
    game.scale = 1;
    game.debug();
}

Rond = enchant.Class.create(Sprite, {
    initialize: function(whichFrame) {
        Sprite.call(this, 16, 16);        
        this.image = game.assets[ICON0];
        this.frame = whichFrame;
    }
});
Player =  enchant.Class.create(Rond, {
    initialize: function(whichFrame) {
        Rond.call(this, whichFrame);
    },
    onenterframe: function() {
        if (game.input.left && !game.input.right)
            this.x -= 3;
        if (this.x < 0)
            this.x = 0;
        if (game.input.right && !game.input.left)
            this.x += 3;
        if (this.x > WIDTH-16)
            this.x = WIDTH-16;
        if (game.input.up && !game.input.down)
            this.y -= 3;
        if (this.y < 0)
            this.y = 0;
        if (game.input.down && !game.input.up)
            this.y += 3;
        if (this.y > HEIGHT-16)
            this.y = HEIGHT-16;
        var items = Item.collection;
        for (var i = 0; i < NB_MALUS; i++){
            someItem = Item.collection[i];
            if (player.within(someItem, 8*(someItem.scaleX+1)))
                game.stop();
        }
    }
});
Goal =  enchant.Class.create(Rond, {
    initialize: function(whichFrame) {
        Rond.call(this, whichFrame);
    }
});


Item =  enchant.Class.create(Rond, {
    initialize: function(whichFrame) {
        Rond.call(this, whichFrame);
        
        this.x = 16 + rand(WIDTH - 32);
        this.y = 16 + rand(HEIGHT - 32);
        scaleFactor = 1+rand(3 );
        this.radius = 8 * scaleFactor;
        this.scale(scaleFactor, scaleFactor);
        game.rootScene.addChild(this);
    }
});

function rand(num){
    return Math.floor(Math.random() * num);
}
