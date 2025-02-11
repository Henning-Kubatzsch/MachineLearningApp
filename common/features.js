const features={};

//console.log('features was loaded');

features.getPathCount=(path)=>{
    return path.length;
}

features.getPointCount=(path)=>{
    const points=path.flat();
    return points.length;
}

// if running in nodeJS module will exist (and module will run), in a browser it will be undefined
// in nodeJS module.exports will be the object that gets exported from current module
if (typeof module !== 'undefined' && module.exports) {
    //other files that require() this module will receive this object
    module.exports = features;
}