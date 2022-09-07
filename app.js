let sorrentinos = [
    {sabor : "Jamon y Queso" , precio : 500},
    {sabor : "Ternera y Queso" , precio : 550},
    {sabor : "Calabaza y Queso" , precio : 450},
]

function inicio(){
   
    alert(`¡Hola! ${nombre.toLocaleUpperCase()} , bienvenido/a a Trento Pastas `);
}

function agregarProducto(){
    producto = prompt("¿Que producto desea comprar? : \n \n 1 : Jamon y Queso , $500 \n \n 2 : Ternera y Queso , $550 \n \n 3 : Calabaza y Queso , $450");
      if ( producto=== "1"){
        
        tipo = sorrentinos[0].sabor;
        resultado = sorrentinos[0].precio;
        alert(`Eligio ${tipo}, Precio: $ ${resultado}`);
        carrito.push(sorrentinos[0]);

      }
      if ( producto=== "2"){
        
        tipo = sorrentinos[1].sabor;
        resultado = sorrentinos[1].precio;
        alert(`Eligio ${tipo}, Precio: $ ${resultado}`);
        carrito.push(sorrentinos[1]);
      }
      if ( producto=== "3"){
       
        tipo = sorrentinos[2].sabor;
        resultado = sorrentinos[2].precio;
        alert(`Eligio ${tipo}, Precio: $ ${resultado}`);
        carrito.push(sorrentinos[2]);
      }
      opcion = prompt("Que desea realizar \n \n 1 : Realizar otra compra  \n 2 : Mas Vendido \n 3 : Mostrar Carrito \n 4 : Pagar Compra \n \n 5 : Salir ");
}

function masVendido(){
    let masVendidos = sorrentinos.filter((producto)=> producto.precio < 500 );
    for(let masVendido of masVendidos){
        alert(`Sorrentinos : ${masVendido.sabor} a : $${masVendido.precio}`);

    }
    opcion = prompt("Que desea realizar \n \n 1 : Realizar otra compra  \n 2 : Mas Vendido \n 3 : Mostrar Carrito \n 4 : Pagar Compra \n \n 5 : Salir ");
}

function mostrarCarrito(){
    carrito.forEach((producto)=>{
        alert(`Sorrentinos ${producto.sabor} $${producto.precio} `)
    })
    opcion = prompt("Que desea realizar \n \n 1 : Realizar otra compra  \n 2 : Mas Vendido \n 3 : Mostrar Carrito \n 4 : Pagar Compra \n \n 5 : Salir ");
}


function finalizarCompra(){
    let total = carrito.reduce((acc, el) => acc + el.precio , 0);
    alert(`el TOTAL es : $${total + 100} (incluye $100 de gastos de envio)`);
}

let producto;
let carrito = [];
let nombre = prompt("Bienvenido , por favor ingrese su Nombre");
inicio();

let opcion = prompt("¿Que desea realizar? \n \n 1 : Comprar Sorrentinos \n 2 : Mas Vendido \n \n \n 5 : Salir    ");

while(opcion!== "5"){
    if(opcion === "1"){
        agregarProducto();
    }
    if (opcion=== "2"){
        masVendido();
    }
    if (opcion === "3"){
        mostrarCarrito();
    }
    if(opcion === "4"){
        finalizarCompra();
      opcion = "5";
    }
}

alert(`¡Gracias por su compra ${nombre.toLocaleUpperCase()} , que la disfrute!`);