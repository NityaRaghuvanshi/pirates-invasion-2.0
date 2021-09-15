class Tower{
    constructor(){
        var options={
            isStatic:true
        }
        this.image=loadImage("assets/tower.png");
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(100,250,10,10,options);
        World.add(world,this.body);

    }

    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.w,this.h);
        pop();
    }
}
