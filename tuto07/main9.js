enchant();


window.onload = function() {
    var game = new Game(320, 320);

    game.preload('../images/chara1.gif');
    game.onload = function() {
        
        var menu_un = new Scene();
        menu_un.backgroundColor = "grey";

        btn_un = new Button("Un premier bouton", "blue", 50, 150);
        btn_un.x = 100;
        btn_un.y = 100;
        btn_un.addEventListener("touchstart", function(){
            this.text = "on m’a touché";
        })
        btn_un.addEventListener("touchend", function(){
            game.pushScene(menu_deux);
        })
        menu_un.addChild(btn_un);

        var menu_deux = new Scene();
        menu_deux.backgroundColor = "black";

        var mon_theme = {
            normal: {
                color: '#fff',
                background: { type: 'linear-gradient', start: '#f40', end: '#c40' },
                border: { color: '#620', width: 1, type: 'solid' },
                textShadow: { offsetX: 0.5, offsetY: 0.5, blur: '3px', color: '#666' },
                boxShadow: { offsetX: 2, offsetY: 2, blur: '5px', color: 'rgba(0, 0, 0, 0.5)' }
            },
            active: {
                color: '#ccc',
                background: { type: 'linear-gradient', start: '#620', end: '#920' },
                border: { color: '#620', width: 1, type: 'solid' },
                textShadow: { offsetX: 0.5, offsetY: .5, blur: '3px', color: '#000' },
                boxShadow: { offsetX: 2, offsetY: 2, blur: '5px', color: 'rgba(0, 0, 0, 0.5)' }
            }
        }

        
        var btn_deux = new Button("Un autre, avec thème personnalisé", mon_theme);
        btn_deux.x = 10;
        btn_deux.y = 10;
        btn_deux.addEventListener("touchend", function(){
            game.popScene();
        })
        menu_deux.addChild(btn_deux);
        
        game.pushScene(menu_un);
    };
    game.scale = 1;
    game.start();
};
