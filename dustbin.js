class Dustbin {
    constructor(x, y) {
      var options = {
          //'restitution':0.8,
          //'friction':0.3,
          //'density':1.0,
          'isStatic':true
      }
      
      this.x = x;
      this.y = y;
      this.width = 200;
      this.height = 213;
      this.thickness = 20;
      this.image = loadImage("dustbin.png");
      this.leftW = Bodies.rectangle(this.x-this.width/2, this.y-this.height/2, this.thickness, this.height, options);
      World.add(world, this.leftW);

      this.rightW = Bodies.rectangle(this.x+this.width/2, this.y-this.height/2, this.thickness, this.height, options);
      World.add(world, this.rightW);

      this.bottomW = Bodies.rectangle(this.x, this.y, this.width, this.thickness, options);
      World.add(world, this.bottomW);

      
    }
    display(){
      var left = this.leftW.position;
      var right = this.rightW.position;
      var bottom = this.bottomW.position;
      push();
      translate(left.x, left.y);
      angleMode(RADIANS);
      rotate(this.angle);
      rectMode(CENTER);
      fill(255);
      //rect(0, 0, 20, 213);
      pop();

      push();
      translate(right.x, right.y);
      angleMode(RADIANS);
      rotate(-1*this.angle);
      rectMode(CENTER);
      fill(255);
      //rect(0, 0, 20, 213);
      pop();

      push();
      translate(bottom.x, bottom.y+10);
      angleMode(RADIANS);
      rotate(this.angle);
      imageMode(CENTER);
      image(this.image, 0, -this.height/2, this.width, this.height);
      rectMode(CENTER);
      fill(255);
      //rect(0, 0, 200, 20);
      pop();
      //super.display();
    }
  };
  
