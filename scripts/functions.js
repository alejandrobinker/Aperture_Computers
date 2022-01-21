import { carrito } from "./cart.js"

export function renderProductos(item) {
    let card = document.createElement('div')
    card.className = "card"
    card.innerHTML = `
    <div class="row p-2 bg-white border rounded">
        <div class="col-md-5 mt-1 d-flex justify-content-center">
            <img class="img-fluid img-responsive product-image" src="${item.img}">
        </div>
        <div class="col-md-6 mt-1 d-flex flex-column justify-content-evenly">
            <h5>${item.nombre} ${item.descripcion}</h5>
            <div class="align-items-center align-content-center border-left mt-1">
            <div class="d-flex flex-row align-items-center">
                <h4 class="pt-3">Precio: $${item.precio}</h4>
            </div>
            <div class="d-flex flex-column mt-4">
                <button class="btn btn-dark btn-sm" id="producto-${item.id}" type="button">Agregar al carrito</button>
            </div>
        </div>  
    </div>`
    document.getElementById('productos-container').append(card)
}

export function inicializarAgregarAlCarrito(producto) {
    let boton = document.getElementById(`producto-${producto.id}`)
    boton.addEventListener('click', () => {
        carrito.agregar(producto)
        badgeNumber()
    })
}

export function renderCarrito(item) {
    let producto = document.createElement('tr')
    producto.innerHTML = `
    <td>${item.producto.nombre} ${item.producto.descripcion}</td>
    <td>
    <div class="contadores text-center">
        <button type="button" onclick="" class="minus btn btn-dark btn-circle" id="btnMinus-${item.producto.id}"><i class="fa fa-minus"></i>
        </button>
        <span id="counter-${item.producto.id}">${item.cantidad}</span>
        <button type="button" class="plus btn btn-dark btn-circle" id="btnPlus-${item.producto.id}"><i class="fa fa-plus"></i>
        </button>
    </div>
    </td>
    <td id=precio-${item.producto.id}></td>`
    document.getElementById('tbody').prepend(producto)
}

export function badgeNumber() {
    let badge = document.getElementById('badge-counter')
    badge.innerHTML = carrito.cantidad()
}


export function sumarProducto(item) {
    let btn = document.getElementById(`btnPlus-${item.producto.id}`)
    btn.onclick = () => {
        carrito.agregar(item.producto)
        refreshCart(item)
    }
}

export function restarProducto(item) {
    let btn = document.getElementById(`btnMinus-${item.producto.id}`)
    btn.onclick = () => {
        if (item.cantidad > 1) {
            carrito.sacar(item.producto.id)
            refreshCart(item)
        } else {
            carrito.sacar(item.producto.id)
            let deleteTr = btn.closest("tr")
            document.getElementById('tbody').removeChild(deleteTr)
            refreshCart(item)
            badgeNumber()
        }
    }
}

export function refreshCart(item) {
    let subtotal = document.getElementById(`precio-${item.producto.id}`)
    let counter = document.getElementById(`counter-${item.producto.id}`)
    let precioFinal = document.getElementById("precio-total")
    let total = 0
    if (subtotal && counter) {
        subtotal.innerHTML = `$${item.producto.precio * item.cantidad}`
        counter.innerHTML = item.cantidad
    }
    for (const item of carrito.productos) {
        total += item.producto.precio * item.cantidad
    }
    total!==0 ? precioFinal.innerHTML = `Total: $${total}` : precioFinal.innerHTML = ""
    badgeNumber()
}
