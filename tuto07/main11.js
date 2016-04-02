enchant();


window.onload = function() {
    game = new Game(320, 320);

    game.onload = function() {
        // 20 x 20 px に分割
        var map = new VirtualMap(20, 20);
        for (var i = 0; i < 5; i++){
            var obj = new Sprite(16, 16);
            obj.image = game.assets['../images/icon0.png'];
            obj.frame = 10 + i;
            map.addChild(obj);
            // mx や my は addChild で追加した後で無いと使えない
            obj.mx = 2 + i;
            obj.my = 1;
        }
        game.rootScene.addChild(map);
       
        // ラベルをクリックすると、
        // VirtualMap へ insertBefore メソッドで Sprite を追加
        var lbl = new Label("ここをクリック");
        lbl.moveTo(5, 5);
        game.rootScene.addChild(lbl);
        lbl.addEventListener('touchstart', function(){
            var add = new Sprite(16, 16);
            add.image = game.assets['../images/icon0.png'];
            add.frame = 21;
            // 4番目の前に add を追加
            // ( 0　から始まるので 3 番目の前ではない)
            map.insertBefore( add, map.childNodes[3] );
           
            // Sprite を追加後、画像の表示をし直す
            for(var i = 0; i < 6; i++){
                map.childNodes[i].mx = 2 + i;
                map.childNodes[i].my = 1;
            }
            // 一度追加したらイベントを消去
            this.clearEventListener('touchstart');
        });        

    };
    game.scale = 1;
    game.debug();
};
