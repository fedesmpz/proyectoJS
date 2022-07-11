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
    Swal.fire({
        title: 'Se va a generar un nuevo comprobante',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
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

