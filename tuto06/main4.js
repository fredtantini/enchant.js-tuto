enchant();

window.onload = function() {

    var game = new Game(320, 320);
    game.fps = 24;
    game.preload('../images/map0.png');
    game.onload = function() {
      
        var tab_carte = [[ 2,  2,  2,  2,  2,  2,  2,  2,  2,  2],
                         [18, 18, 18, 18, 18, 18, 18, 18, 18, 18],
                         [19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
                         [ 4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
                         [ 4, -1, -1, -1, -1, -1, 13, 14, -1,  4],
                         [ 4, -1, -1, -1, -1, -1, 25, 26, -1,  4],
                         [ 4, 10, 10, 10, -1, -1, -1, -1, -1,  4],
                         [ 4,  0,  0,  0,  0,  0,  0,  0,  0,  4],
                         [ 4,  1,  1,  1,  1,  1,  1,  1,  1,  4],
                         [ 4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
                         [ 4],
                         [ 4, -1, -1, -1, -1, -1, -1, -1, -1, -1]];
        var map = new Map(16, 16);
        map.image = game.assets['../images/map0.png'];
        map.loadData(tab_carte);
        game.rootScene.backgroundColor = 'grey';
        game.rootScene.addChild(map);
        
    };
    game.scale=1;
    game.debug();
};
