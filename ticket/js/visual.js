const manageSectionHome = ()=>{
    pgStart.className = 'visible';
    pgGenerate.className = 'oculto';
    pgSearch.className = 'oculto';
    pgReport.className = 'oculto';
}
const manageSectionGenerate = ()=>{
    pgStart.className = 'oculto';
    pgGenerate.className = 'visible';
    pgSearch.className = 'oculto';
    pgReport.className = 'oculto';
}
const manageSectionSearch = ()=>{
    pgStart.className = 'oculto';
    pgGenerate.className = 'oculto';
    pgSearch.className = 'visible';
    pgReport.className = 'oculto';
}
const manageSectionReport = ()=>{
    pgStart.className = 'oculto';
    pgGenerate.className = 'oculto';
    pgSearch.className = 'oculto';
    pgReport.className = 'visible';
}

const manageButtonClear = () =>{
    clientName.value = '';
    clientCuit.value = '';
    codeArticle.value = '';
    nameArticle.value = '';
    costArticle.value = '';
    numberArticle.value = '';
}



btnHome.onclick = manageSectionHome
btnGenerate.onclick = manageSectionGenerate
btnSearch.onclick = manageSectionSearch
btnReport.onclick = manageSectionReport

btnClearField.onclick = manageButtonClear

