
class Producto {
  constructor(codigo, nombre, precio, iva, cantidad){
    this._codigo = codigo;
    this._nombre = nombre;
    this._precio = precio;
    this._iva = iva;
    this._cantidad = cantidad;
  }

  sumarIva(_precio){
    return _precio * 1.21;
  }
}

let ticketEnCarga = [];
let ticketResumido = [];

let sumaTotal = 0;
let total = 0;
let nombreCliente;


//FUNCIONES

function cargarProducto(){  //lee los productos que se van cargando y los agrega al array ticketEnCarga si es que se validó exitosamente el código del producto
let codigo = document.getElementById("codigo").value;
let producto = document.getElementById("producto").value;
let precio = document.getElementById("precio").value;
let cantidad = document.getElementById("cantidad").value;
let iva = document.getElementById("iva").value;

if (validarCodigo(codigo)){
  alert("El código ingresdo ya existe, modifíquelo e intente nuevamente");
  }else{
    ticketEnCarga.push(new Producto(codigo, producto, precio, iva, cantidad))
    limpiarCampos();
  }
}

function generarTicket(){ //genera el ticket final, calculando si tiene iva o no, y lo agrega a otro array temporal para mostrar
  let cliente = document.getElementById("cliente").value;
  nombreCliente = cliente;
  cargarProducto()
  for(productoActual of ticketEnCarga){
    let precioActual = 0;
    if (productoActual._iva == "si"){
      precioActual = productoActual._precio*1.21*productoActual._cantidad;
    }else{
      precioActual = productoActual._precio*productoActual._cantidad;
    }
    ticketResumido.push('CODIGO: '+productoActual._codigo+'; PRODUCTO: '+productoActual._nombre+'; CANTIDAD: '+productoActual._cantidad+'; IVA: '+productoActual._iva+'; PRECIO: '+precioActual+' ');
    sumaTotal = sumaTotal + precioActual;
  }
  mostrarTicket(ticketResumido)
}


function mostrarTicket(datos){ //muestra el ticket en el HTML generando unas líneas al final de todo
let ticketFinal = document.getElementById("ticketFinal");
let verTicket = document.createElement("div");
verTicket.innerHTML = `<h3> El ticket de ${nombreCliente} es: </h3><br>
                        <p>${datos}</p>
                        <p>por un total de $ ${sumaTotal}</p>`;
ticketFinal.append(verTicket)
}

function validarCodigo(datoIngresado){ //devuelve FALSE si no existe el codigo y TRUE si existe
  let existe = false;
  for(productoActual of ticketEnCarga){
    if (productoActual._codigo == datoIngresado){
      existe = true;
    }
  }
  return existe;
}

function limpiarCampos(){ //vacía los campos excepto el nombre del cliente
  document.getElementById("codigo").value = "";
  document.getElementById("producto").value = "";
  document.getElementById("precio").value = "";
  document.getElementById("cantidad").value = "";
}