function createRow(container,studentName,samples){

    const row=document.createElement("div");
    // every attributes defined for row class in the css file get applied to the row div
    row.classList.add("row");
    container.appendChild(row);

    const rowLabel=document.createElement("div");
    rowLabel.innerHTML=studentName;
    rowLabel.classList.add("rowLabel");
    row.appendChild(rowLabel);

    for(let sample of samples){
        const {id,label, student_id, student_name} = sample;

        const sampleContainer=document.createElement('div');
        sampleContainer.id="sample_" + id;

        sampleContainer.onclick=()=>handleClick(sample,false);

        //with classList.add() we add an css class to an HTML document
        sampleContainer.classList.add("sampleContainer");

        const sampleLabel=document.createElement('div');
        sampleLabel.innerHTML=label;
        sampleContainer.appendChild(sampleLabel);

        const img = document.createElement('img');
        img.src=constants.IMG_DIR+'/'+id+'.png';
        img.classList.add("thumb");

        if(utils.flaggedUsers.includes(student_id)){
            img.classList.add("blur");
            // console.log("dirty user: " + student_name);
        }

        sampleContainer.appendChild(img);
        row.appendChild(sampleContainer);
    }
}

function handleClick(sample, doScroll=true){

    if(sample==null){
        [...document.querySelectorAll('.emphasize')].forEach((e)=>e.classList.remove('emphasize'));
        return;
    
    }
    const el=document.getElementById(
        "sample_"+sample.id
    ); 

    if(el.classList.contains("emphasize")){
        el.classList.remove("emphasize");
        chart.selectSample(null);
        return;
    }

    [...document.querySelectorAll('.emphasize')].forEach((e)=>e.classList.remove('emphasize'));
       
    el.classList.add("emphasize");

    if(doScroll == true){
        el.scrollIntoView({
            behavior:'auto',
            block:'center'
        });
    }    
    chart.selectSample(sample);
}
