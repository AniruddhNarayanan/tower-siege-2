class Box{
    constructor(x, y, width,height){
        var options={
            // 'restitution' : 1.2,
            'friction' :1.1,
            'density' :1.4,
            'isStatic' :false
        }
        this.Body = Bodies.rectangle(x, y, width, height, options);
        this.width=width;
        this.height=height;
        this.image = loadImage("square.png");
        World.add(world, this.Body);
        
    }
    display(){
        push();
        if(this.Body.speed < 3){
            super.display;
           }
           else{
             
             push();
             this.Visiblity = this.Visiblity - 5;
             tint(255,this.Visiblity);
             image(this.image, this.Body.position.x, this.Body.position.y, 50, 50);
             World.remove(world, this.Body);
             pop();
           }
        translate(this.Body.position.x, this.Body.position.y);
        imageMode(CENTER);
       
       image(this.image,0,0,this.width,this.height);
        pop();

        
           
        
       }
   }