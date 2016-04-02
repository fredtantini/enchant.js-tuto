enchant();

window.onload = function() {

    var game = new Game(320, 320);
    game.fps = 24;
    game.preload('../images/map0.png');
    game.onload = function() {
      
        var tab_carte_bkg = [[ 2,  2,  2,  2,  2,  2,  2,  2,  2,  2],
                             [ 2,  2,  2,  2,  2,  2,  2,  2,  2,  2],
                             [ 2,  2,  2,  2,  2,  2,  2,  2,  2,  2],
                             [ 3,  4,  4,  4,  4,  4,  4,  4,  4,  3],
                             [ 3,  6,  6,  6,  6,  6,  6,  6,  6,  3],
                             [ 3,  6,  6,  6,  6,  6,  6,  6,  6,  3],
                             [ 3,  6,  6,  6,  6,  6,  6,  6,  6,  3],
                             [ 3,  6,  6,  6,  6,  6,  6,  6,  6,  3],
                             [ 4,  6,  4,  4,  4,  4,  4,  4,  4,  4],
                             [ 2,  2,  2,  2,  2,  2,  2,  2,  2,  2]];
        var tab_carte_ftg = [[16, 17, 18, 19, 22, 23, 24, -1, -1, -1],
                             [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                             [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
                             [ 3,  4,  4,  4,  4,  4,  4,  4,  4,  3],
                             [ 3, -1, -1, -1, -1, -1, -1, -1, -1,  3],
                             [ 3, -1, -1, -1, -1, 25, 26, 27, -1,  3],
                             [ 3, -1, -1, -1, -1, -1, 14, 13, -1,  3],
                             [ 3, -1, -1, -1, -1, -1, -1, -1, -1,  3],
                             [ 4, -1,  4,  4,  4,  4,  4,  4,  4,  4],
                             [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]];
        
        var map_ftg = new Map(16,  16);
        map_ftg.image = game.assets['../images/map0.png'];
        map_ftg.loadData(tab_carte_ftg);

        var map_both = new Map(16,  16);
        map_both.image = game.assets['../images/map0.png'];
        map_both.loadData(tab_carte_bkg, tab_carte_ftg);
        map_both.x = 160;
        
        game.rootScene.backgroundColor = 'grey';
        game.rootScene.addChild(map_ftg);
        game.rootScene.addChild(map_both);

        var lbl_ftg = new Label('');
        for (var i = 0; i < 10; i++){
            y = i * 16;
            x = 96;
            lbl_ftg.text += "(96,"+y+"):"+map_ftg.checkTile(x,y)+" "+map_ftg.hitTest(x,y)+'<br/>';            
        }
        lbl_ftg.text += "(0, 0):"+map_ftg.checkTile(0,0)+" "+map_ftg.hitTest(0,0)+'<br/>';            
        lbl_ftg.y = 160;
        game.rootScene.addChild(lbl_ftg);
        
        
        var lbl_both = new Label('');
        for (var i = 0; i < 10; i++){
            y = i * 16;
            x = 96;
            lbl_both.text += "(96, "+y+"):"+map_both.checkTile(x,y)+" "+map_both.hitTest(x,y)+'<br/>';            
        }
        lbl_both.text += "(0, 0):"+map_both.checkTile(0,0)+" "+map_both.hitTest(0,0)+'<br/>';            
        lbl_both.x = 160;
        lbl_both.y = 160;
        game.rootScene.addChild(lbl_both);
        
        
    };
    game.scale=1;
    game.debug();
};
