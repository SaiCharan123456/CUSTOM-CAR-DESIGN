
AFRAME.registerComponent("base", { 
    schema: {
        radius: { type: "number", default: 3 },
         height: { type: "number", default: 0.3},
         moveY:{type:"number",default:1}
    },
    init: function() {
        this.el.setAttribute("geometry", {
            primitive: "cylinder", 
            radius: this.data.radius,
            height: this.data.height 
        });
        this.el.setAttribute("material", { color: "#1769aa" }); 
    }, 
    tick:function(){
        //this.data.moveX += 0.03
        this.data.moveY += 0.3
        var pos = this.el.getAttribute("rotation");
       // pos.x = this.data.moveX
        pos.y = this.data.moveY
        this.el.setAttribute("rotation",{ x:pos.x , y:pos.y , z:pos.z })
    }
});
