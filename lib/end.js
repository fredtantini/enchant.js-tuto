end = function(){
    var img = '../images/end.png';
    game.load(img);
    var ending = new Sprite(img.width, img.height);
    ending.img = img;
    ending.x = (enchant.Game.width - img.width) / 2;
    ending.y = (enchant.Game.height - img.height) / 2;
    game.rootScene.addChild(ending);
};

