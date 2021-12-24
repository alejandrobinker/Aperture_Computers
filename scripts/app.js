function render(item) {
    let card = document.createElement('div')
    card.className = "card"
    card.innerHTML = `
    <div class="row p-2 bg-white border rounded">
        <div class="col-md-5 mt-1 d-flex justify-content-center">
            <img class="img-fluid img-responsive product-image" src="${item.img}">
        </div>
        <div class="col-md-6 mt-1">
            <h5>${item.nombre} ${item.descripcion}</h5>
            <div class="align-items-center align-content-center border-left mt-1">
            <div class="d-flex flex-row align-items-center">
                <h4 class="pt-3">$${item.precio}</h4>
            </div>
            <div class="d-flex flex-column mt-4">
                <div class="contadores">
                    <p class="mb-0">Cantidad :</p>
                    <button class="btn btn-dark boton-contador" type="button">-</button>
                    <input class="contador" type="text" disabled>
                    <button class="btn btn-dark boton-contador" type="button">+</button>
                </div>
                <button class="btn btn-dark btn-sm" id="producto-${item.id}" type="button">Agregar al carrito</button>
            </div>
        </div>
        </div>
        
    </div>`
    document.getElementById('productos-container').appendChild(card)
}


function inicializarAgregarAlCarrito(producto) {
    let badge = document.getElementById('badge-counter')
    let boton = document.getElementById(`producto-${producto.id}`)
    boton.addEventListener('click', () => {
        carrito.agregar(producto)
        badge.innerHTML = carrito.cantidad()
    })
}

function badgeNumber() {
    let badge = document.getElementById('badge-counter')
    badge.innerHTML = carrito.cantidad()
}

badgeNumber()

for (const producto of listaProductos) {
    render(producto)
    inicializarAgregarAlCarrito(producto)
}


/*
 
function preguntar() {
    let opcion
    do {
        opcion = prompt('Qué desea hacer? (0 para salir, 1 para agregar producto, 2 para sacar producto, 3 ver carrito')
    } while (opcion !== '0' && opcion !== '1' && opcion !== '2' && opcion !== '3')
    return opcion
}
 
function agregarACarrito(carrito) {
    let nombreProducto = prompt('escriba el nombre del producto')
    let nombreMarca = prompt('escriba la marca del producto')
    let precio = prompt('escriba el precio del producto')
    let producto = new Producto(nombreProducto, nombreMarca, precio)
    carrito.agregar(producto)
    return
}
 
function sacarDelCarrito(carrito) {
    let nombreProducto = prompt('escriba el nombre del producto que desea sacar')
    carrito.sacar(nombreProducto) 
}
 
function listarCarrito(carrito) {
    carrito.listar()
}

let opcion
let compra = new Carrito()
 
do {
    opcion = preguntar()
    switch (opcion) {
        case '1':
            agregarACarrito(compra)
            break
        case '2':
            sacarDelCarrito(compra)
            break
        case '3':
            listarCarrito(compra)
            break
 
    }
} while (opcion !== '0')
*/