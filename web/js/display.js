function createRow(container,studentName,samples){

    const row=document.createElement("div");
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