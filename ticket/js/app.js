let listArticle = [];

const insertArticle = (article) =>{
    listArticle.push(article);
}

class Ticket{
    constructor(clientName, cuit, listArticle){
        this.clientName = clientName;
        this.cuit = cuit;
        this.listArticle = listArticle;
        let totalTicket = 0;    
    }

    totTicket = () =>{
        for (let index = 0; index < this.listArticle.length; index++) {
            const article = listArticle[index];
            this.totalTicket = this.totalTicket + article.totCost;
            
        }
    }


}

class Article{
    constructor(code, name, cost, number, iva){
        this.code = code;
        this.name = name;
        this.cost = cost;
        this.number = number;
        this.iva = iva;
        let totalCost = 0;
    }

    totCost = () =>{
        this.totalCost = this.cost * this.number;
    };
    costIva(){
        if(this.iva === "si"){
            this.cost = this.cost * 1.21
        }
    }

}


const addArticles = () => {

    let article = new Article(codeArticle.value, nameArticle.value, costArticle.value, numberArticle.value, iva.value)
    article.costIva()
    article.totCost() 
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
    let client = clientName.value
    let cuit = clientCuit.value
    let ticket = new Ticket(clientName.value, clientCuit.value, listArticle)
    ticket.totTicket()
    localStorage.setItem(ticket.cuit,JSON.stringify(ticket))
    manageButtonClear();
    listArticle = [];
    listedArticleTable.innerHTML = "";    
    alert("El ticket se creó con éxito")

}

const seeTicketlist = (cuitList) => {
    let tr = document.createElement('tr');


    for (let index = 0; index < cuitList.length; index++) {

        tr.innerHTML = `<td>
    <td>${cuitList[index].cuit}</td>
    <td>${cuitList[index].clientName}</td>
    <td>${cuitList[index].totalCost}</td>`
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
    
    for (let index = 0; index < localStorage.length; index++) {
        let tr = document.createElement('tr');
        let key = localStorage.key(index)
        let ticket = JSON.parse(localStorage.getItem(key))
        tr.innerHTML = `<td>
        <td>${index}</td>
        <td>${ticket.cuit}</td>
        <td>${ticket.clientName}</td>
        <td>${ticket.totalCost}</td>`
        listedReport.appendChild(tr)
        totalReport = totalReport + ticket.totalTicket
    }
    totalFieldReport.innerText = totalReport.value

}



btnCuitSearch.onclick = cuitSearching
btnAddArticle.onclick = addArticles
btnCreate.onclick = createTicket
btnGenerateReport.onclick = generateReport


//al presionar el boton finalizar el comprobante genera un objeto y en el mismo objeto crea una lista de objetos productos