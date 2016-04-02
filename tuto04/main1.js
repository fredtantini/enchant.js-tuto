enchant();

HEIGHT = 320;
WIDTH = 320;

window.onload = function() {
    var game = new Game(WIDTH, HEIGHT);
    game.onload = function(){
        var status = new Label("");
        status._log = [];
        status.add = function(str) {
            this._log.unshift(str);
            this._log = this._log.slice(0, 20);
            this.text =  this._log.join('<br />');
        };

        ['up', 'down', 'right', 'left'].forEach(function (direction){
            var d = direction;
            game.rootScene.addEventListener(direction + 'buttondown', function(){
                status.add(d + ' pushed');
            })
            game.rootScene.addEventListener(direction + 'buttonup', function(){
                status.add(d + ' released');
            })
        });
        game.rootScene.addChild(status);
    };
    game.scale = 1;
    game.debug();


}
