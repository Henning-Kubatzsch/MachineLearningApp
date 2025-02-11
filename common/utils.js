const utils={};

utils.flaggedUsers=[1663882102141,1663900040545,1664485938220];

utils.styles={
    car:'gray',
    fish:'red',
    house:'yellow',
    tree:'green',
    guitar:'blue',
    pencil:'magenta',
    clock:'lightgrey'
}

utils.formatPercent=(n)=>{
    return (n*100).toFixed(2) + "%";
}

utils.printProgress=(count,max)=>{
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    const percent = utils.formatPercent(
        count/max
    );
    process.stdout.write(
        count+"/"+max+ " ("+percent+")"
    );
}

utils.groupBy=(objArray, key)=>{

    const groups={};

    for(let obj of objArray){

        //ask for 'student_id' and get the number
        const val=obj[key];

        //under the id store the whole object for better readability?!?
        if(groups[val]==null){
            groups[val]=[];
        }
        groups[val].push(obj);
    }
    return groups;
}

if(typeof module != 'undefined'){
    module.exports=utils;
}


