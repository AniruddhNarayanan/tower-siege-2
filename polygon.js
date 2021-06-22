class Polygon{
    constructor(x, y, radius){
        var options={
            'restitution' : 1.2,
            'friction' :1.1,
            'density' :1.4
            // 'isStatic' :true
            
        }
        this.Body = Bodies.circle(x, y, radius, options);
        this.radius=radius;
        this.image = loadImage("polygon.png");
        // this.Body.scale(thixs.body, 10,10);
        World.add(world, this.Body);
    }
    display(){
     push();
     translate(this.Body.position.x, this.Body.position.y);
     imageMode(CENTER);
    //  fill("purple");
     image(this.image,0,0,this.radius,this.radius);
     pop();
    }
}