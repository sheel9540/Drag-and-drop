
function drag(e){
    e.dataTransfer.setData("srcId", e.target.id)
}


function allowDrop(e) {
    e.preventDefault()
}


function drop(e) {
    e.preventDefault();

    let tag=e.target.parentElement
    let tarParent = tag.parentElement
    let tab=tarParent.parentElement
    let tabId= tab.id


    if(tabId === ("tab2")){
        let srcId = e.dataTransfer.getData("srcId")
        tab2.appendChild(document.getElementById(srcId))
    }

    if(tabId === ("tab1")){
        let srcId = e.dataTransfer.getData("srcId")
        tab1.appendChild(document.getElementById(srcId))
    } 

}
    

