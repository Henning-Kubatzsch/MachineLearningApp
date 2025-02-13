const constants=require('../common/constants.js');
const featureFunctions =require('../common/featureFunctions.js');

const fs=require('fs');

console.log('EXTRACTING FEATURES...');

const samples=JSON.parse(
    fs.readFileSync(constants.SAMPLES)
);

for(const sample of samples){
    //JSON.parse: converting a JSON string into a JavaScript object or array
    const paths=JSON.parse(
        fs.readFileSync(
            constants.JSON_DIR+'/'+sample.id+'.json'
        )
    );

    const functions=featureFunctions.inUse.map(f=>f.function); 
    sample.point=functions.map(f=>f(paths));

}

const featureNames=featureFunctions.inUse.map(f=>f.name);

fs.writeFileSync(constants.FEATURES, 
    JSON.stringify({
        featureNames,
        //remap samples to only contain point and label, not including name/ id /...
        samples:samples.map(s=>{
            return{
                point:s.point,
                label:s.label
            }
        })
    })
);

fs.writeFileSync(constants.FEATURES_JS,
    //backticks: embed expression in a string ${}
    `const features=
    ${JSON.stringify({featureNames, samples})}
    ;`
)

console.log('DONE');