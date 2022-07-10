
function ShowSelected()
{
/* Para obtener el valor */
var cod = document.getElementById("producto").value;
alert(cod);
 
/* Para obtener el texto */
var combo = document.getElementById("producto");
var selected = combo.options[combo.selectedIndex].text;
alert(selected);
}


class Ticket{
    constructor(clientName, cuit){
        this.clientName = clientName;
        this.cuit = cuit;
        this.listArticle = new Array();
        }

    insertArticle = (article) =>{
        this.listArticle.push(article);
    }
}

class Objetitos{
    constructor(id, nombre, cantidad){
        this.id = id;
        this.nombre = nombre;
        this.cantidad = cantidad;
    }
}


const addArticles = () => {
    let ticketA = new Ticket("juan","2121212")
    let objetitoA = new Objetitos(32, "cajitas", 3);
    let objetitoB = new Objetitos(44, "fundas", 5);
    let objetitoC = new Objetitos(51, "discos", 2)

    ticketA.insertArticle(objetitoA);
    ticketA.insertArticle(objetitoB);
    ticketA.insertArticle(objetitoC);

localStorage.setItem(ticketA.clientName,JSON.stringify(ticketA))
let ticketNuevo = JSON.parse(localStorage.getItem(ticketA.clientName))

console.log(ticketNuevo)

}
