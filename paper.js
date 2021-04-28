class Paper {
 constructor(x,y,r){
     var options = {
        isStatic:false, 
        density:1, 
        friction:0, 
        restitution:0.3
     }
     //this.x = x;
     //this.y = y;
     this.radius = 70;
     this.body = Bodies.circle(x,y, this.radius, options);
     this.image = loadImage("sprites/paper.png");
     World.add(world, this.body);
 }
   display() {
   var positio = this.body.position;
   push();
   translate(positio.x, positio.y);
   imageMode(CENTER);
   image(this.image,45, 45,this.radius, this.radius);
   //ellipseMode(RADIUS);
   //ellipse(0, 0, this.radius);
   pop();
 }

}