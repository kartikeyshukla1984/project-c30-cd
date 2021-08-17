class Ball{
    constructor(x, y)
    {
        var options = {'restitution': 1, 'friction': 1};

        this.bodyX = x;
        this.bodyY = y;
        this.bodyW = 26;
        this.bodyH = 26;
     

        this.body = Bodies.rectangle(this.bodyX, this.bodyY, this.bodyW, this.bodyH, options);
        this.image = loadImage("rock.png");
    
        World.add(world, this.body);
     
    }

    display()
    {

        push(); //saving the original settings of the canvas in an array

        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);

        imageMode(CENTER);
        image(this.image, 0, 0, this.bodyW, this.bodyH);

     
       
        pop(); // applying the original settings to the canvas 
    }
};