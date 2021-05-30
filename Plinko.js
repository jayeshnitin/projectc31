class Plinko {
    constructor(x, y) {
        var options = {
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x, y, 15/2, options);
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;

        push();
        fill("white");
        rectMode(CENTER);
        ellipse(pos.x, pos.y, 15, 15);
        pop();
    }

};