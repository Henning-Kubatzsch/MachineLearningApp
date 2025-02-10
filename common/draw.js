const draw = {}; 

draw.path=(ctx, path, color = "black")=>{
    ctx.strokeStyle=color;
    ctx.lineWidth=3;
    ctx.beginPath();
    // moveTo normally needs 2 parameters, but they are stored in path[0]
    // ... is the spread operator. it passes the the the values from the array path[0] to the moveTo method
    ctx.moveTo(...path[0]);
    
    for(let i=1; i < path.length; i++){
        ctx.lineTo(...path[i]);
    }

    // here we gonna change the line properties => how they drawings behaves in corners and end points

    ctx.lineCap="round";
    ctx.lineJoin="round";

    ctx.stroke();
}

draw.paths=(ctx, paths, color="black")=>{
    for(const path of paths){
        draw.path(ctx, path, color);
    }
}

//export the file/object as module so different services can reference to it
//the if statement makes the node code work

if(typeof module!='undefined'){
    module.exports=draw;
}
