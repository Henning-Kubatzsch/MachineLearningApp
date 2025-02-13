const featureFunctions={};

//console.log('features was loaded');

featureFunctions.getPathCount=(path)=>{
    return path.length;
}

featureFunctions.getPointCount=(path)=>{
    const points=path.flat();
    return points.length;
}

featureFunctions.getWidth=(paths)=>{
    const points=paths.flat();
    const x=points.map(p=>p[0]);
    const min=Math.min(...x);
    const max=Math.max(...x);
    return max - min;
}

featureFunctions.getHeight=(paths)=>{
    const points=paths.flat();
    const y=points.map(p=>p[1]);
    const min=Math.min(...y);
    const max=Math.max(...y);
    return max - min;
}

featureFunctions.inUse=[
    {name:'Width', function:featureFunctions.getWidth},
    {name:'Height', function:featureFunctions.getHeight}
]

// if running in nodeJS module will exist (and module will run), in a browser it will be undefined
// in nodeJS module.exports will be the object that gets exported from current module
if (typeof module !== 'undefined' && module.exports) {
    //other files that require() this module will receive this object
    module.exports = featureFunctions;
}