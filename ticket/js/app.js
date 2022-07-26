let listArticle = [];

const insertArticle = (article) =>{
    listArticle.push(article);
}

class Ticket{
    constructor(clientName, cuit, listArticle, totalTicket){
        this.clientName = clientName;
        this.cuit = cuit;
        this.listArticle = listArticle;
        this.totalTicket = totalTicket;    
    }

}

class Article{
    constructor(code, name, cost, number, iva){
        this.code = code;
        this.name = name;
        this.cost = cost;
        this.number = number;
        this.iva = iva;
        this.totalCost = (this.cost * this.number);
    }

    costIva(){
        if(this.iva === "si"){
            this.cost = this.cost * 1.21
        }
    }

}

const totTicket = (listArticle) =>{
    let totalCostTicket = 0;
    for (let index = 0; index < listArticle.length; index++) {
        const article = listArticle[index];
        totalCostTicket += article.totalCost;
    }
    return totalCostTicket
}

const addArticles = () => {

    let article = new Article(codeArticle.value, nameArticle.value, costArticle.value, numberArticle.value, iva.value)
    article.costIva()
    listArticle.push(article)
    articleTable(article)
    clearFieldsArticle()
    
}

const articleTable = (article) => {
    let tr = document.createElement('tr');
    tr.innerHTML = `<td>
<td>${article.code}</td>
<td>${article.name}</td>
<td>${article.cost}</td>
<td>${article.number}</td>
<td>${article.iva}</td>
<td>${article.totalCost}</td>`
listedArticleTable.appendChild(tr)
}

const clearFieldsArticle = () => {
    codeArticle.value = '';
    nameArticle.value = '';
    costArticle.value = '';
    numberArticle.value = '';
}

const createTicket = () =>{
    addArticles();
    let total = totTicket(listArticle)
    let ticket = new Ticket(clientName.value, clientCuit.value, listArticle, total)
    
    localStorage.setItem(ticket.cuit,JSON.stringify(ticket))
    manageButtonClear();
    listArticle = [];
    listedArticleTable.innerHTML = "";    

    Swal.fire({
        title: 'Comprobante generado con éxito',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })

}

const seeTicketlist = (cuitList) => {
    let tr = document.createElement('tr');

    for (let index = 0; index < cuitList.length; index++) {

        tr.innerHTML = `<td>
    <td>${cuitList[index].cuit}</td>
    <td>${cuitList[index].clientName}</td>
    <td>${cuitList[index].totalTicket}</td>`
    listedCuitSearch.appendChild(tr)
        
    }

}

const cuitSearching = () =>{
    let cuitNumber = cuitSearch.value
    let cuitList = letListCuit(cuitNumber)
    cuitSearch.value = ''
    seeTicketlist(cuitList)

}

const letListCuit = (cuitNumber) => {

    let arrTemp =[]

    for (let index = 0; index < localStorage.length; index++) {
        let cuit = localStorage.key(index);
        
        if(cuit === cuitNumber){
            let ticket = JSON.parse(localStorage.getItem(cuit));
            arrTemp.push(ticket)
        }
    }
    return arrTemp;

}

const generateReport = () => {
    let totalReport = 0;
    listedReport.innerHTML = "";
    for (let index = 0; index < localStorage.length; index++) {
        let tr = document.createElement('tr');
        let key = localStorage.key(index)
        let ticket = JSON.parse(localStorage.getItem(key))
        tr.innerHTML = `<td>
        <td>${index+1}</td>
        <td>${ticket.cuit}</td>
        <td>${ticket.clientName}</td>
        <td>${ticket.totalTicket}</td>`
        listedReport.appendChild(tr)
        totalReport += ticket.totalTicket
    }
    totalFieldReport.innerHTML = `<h1> $ ${totalReport}</h1>`

}

const searchProduct = () => {
    let code = codeArticle.value;
    fetch('./datos.json')
    .then( (response) => response.json())
    .then( (data) => {
        for (let index = 0; index < data.length; index++) {
            if(data[index].codigo == code){
                Swal.fire({
                    title: 'Se encontró un artículo con este código en la lista de precio',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })           
                nameArticle.value = data[index].producto
                costArticle.value = data[index].precio
            }

        }
        }
       );
    }



codeArticle.onchange = searchProduct

btnCuitSearch.onclick = cuitSearching
btnAddArticle.onclick = addArticles
btnCreate.onclick = createTicket
btnGenerateReport.onclick = generateReport
