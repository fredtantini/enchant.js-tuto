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
        var map_bkg = new Map(16,  16);
        map_bkg.image = game.assets['../images/map0.png'];
        map_bkg.loadData(tab_carte_bkg);
        
        var map_ftg = new Map(16,  16);
        map_ftg.image = game.assets['../images/map0.png'];
        map_ftg.loadData(tab_carte_ftg);
        map_ftg.x = 160;

        var map_both = new Map(16,  16);
        map_both.image = game.assets['../images/map0.png'];
        map_both.loadData(tab_carte_bkg, tab_carte_ftg);
        map_both.y = 160;
        map_both.x = 80;
        
        game.rootScene.backgroundColor = 'grey';
        game.rootScene.addChild(map_ftg);
        game.rootScene.addChild(map_bkg);
        game.rootScene.addChild(map_both);
        
        
    };
    game.scale=1;
    game.debug();
};
