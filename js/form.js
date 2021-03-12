class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h1');
       this.title = createElement('h1');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(650,75)
        this.input.position(700,285);
        this.button.position(765,420);
        this.reset.position(100, 200);
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '50px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
        });

    }
}