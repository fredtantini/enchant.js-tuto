enchant();

Texte = enchant.Class.create(Label, {
    initialize: function(txt, x, y){
        var game = enchant.Game.instance;
        Label.call(this, txt)
        this.x = x;
        this.y = y;
        game.rootScene.addChild(this);
    }
});

window.onload = function() {

    var game = new Game(320, 320);
    game.fps = 24;
    game.preload('../images/map0.png');
    game.onload = function() {
        var lbl1 = new Texte('collisiondata',0,0);
        var lbl2 = new Texte('carte',80,0);
        var lbl3 = new Texte('detection',160,0);
        
        var tab_carte = [[-1,  0, -1],
                         [ 0, -1,  0]];
        
        var tab_collision = [[ 1,  1, 1],
                             [ 0,  0, 0]];

        
        var map_seule = new Map(16,  16);
        map_seule.image = game.assets['../images/map0.png'];
        map_seule.loadData(tab_carte);
        
        map_seule.x = 80;
        map_seule.y = 40;
        
        game.rootScene.backgroundColor = 'grey';
        game.rootScene.addChild(map_seule);
        
        var lbl_seule = new Label('');
        for (var i = 0; i < 2; i++){
            for (var j = 0; j < 3; j++){
                y = i * 16;
                x = j * 16;
                lbl_seule.text += "("+x+", "+y+"):"+map_seule.checkTile(x,y)+" "+map_seule.hitTest(x,y)+'<br/>';
            }
        }
        lbl_seule.x = 160;
        lbl_seule.y = 40;
        game.rootScene.addChild(lbl_seule);
        






        
        var map_coll = new Map(16,  16);
        map_coll.image = game.assets['../images/map0.png'];
        map_coll.loadData(tab_collision);
        map_coll.y = 160;
        var map = new Map(16,  16);
        map.image = game.assets['../images/map0.png'];
        map.loadData(tab_carte);
        map.collisionData = tab_collision;
        
        map.x = 80;
        map.y = 160;
        
        game.rootScene.backgroundColor = 'grey';
        game.rootScene.addChild(map_coll);
        game.rootScene.addChild(map);
        
        var lbl_coll = new Label('');
        for (var i = 0; i < 2; i++){
            for (var j = 0; j < 3; j++){
                y = i * 16;
                x = j * 16;
                lbl_coll.text += "("+x+", "+y+"):"+map.checkTile(x,y)+" "+map.hitTest(x,y)+'<br/>';
            }
        }
        lbl_coll.x = 160;
        lbl_coll.y = 160;
        game.rootScene.addChild(lbl_coll);
        
        
    };
    game.scale=1;
    game.debug();
};
