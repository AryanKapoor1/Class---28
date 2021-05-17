class Slingshot{
    constructor(object1,point2){
        var options = {
            bodyA:object1,
            pointB:point2,
            length:20,
            stiffness:0.01
        }
        this.pointB = point2
        this.sling = Matter.Constraint.create(options)
        World.add(world,this.sling)
    }

    display(){

    if(this.sling.bodyA != null){

    
    var bodyAposition = this.sling.bodyA.position
    var pointBposition = this.pointB
    strokeWeight(3)
    line(bodyAposition.x,bodyAposition.y,pointBposition.x,pointBposition.y)
    }
    }

    fly(){

        this.sling.bodyA = null
    }
}