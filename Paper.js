class Paper {
    constructor(x, y, radius) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0,
          density:1.2
      }
      this.body = Bodies.circle(x, y, (radius-20)/2, options);
      this.radius=radius;
      this.image=loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //noStroke();
      push();
      translate(pos.x,pos.y)
      
     // fill("255,0,255");
      imageMode(CENTER);
      // Small ball bcoz ellipse excepts a diameter. So what you can do is use ellipseMode(RADIUS) instead of CENTER
      //ellipse(0, 0, this.radius,this.radius);
      image(this.image,0,0, this.radius, this.radius);
      pop();
    }
  };


