AFRAME.registerComponent("moving_car",{
    schema:{
        moveX:{type:"number",default:1},
        moveY:{type:"number",default:1}
    },
    tick:function(){
        //this.data.moveX += 0.03
        this.data.moveY += 0.3
        var pos = this.el.getAttribute("rotation");
       // pos.x = this.data.moveX
        pos.y = this.data.moveY
        this.el.setAttribute("rotation",{ x:pos.x , y:pos.y , z:pos.z })
    }
})