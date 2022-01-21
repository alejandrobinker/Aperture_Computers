import { carrito } from "./cart.js"
import { renderProductos, inicializarAgregarAlCarrito, badgeNumber } from "./functions.js"


window.onload = async function () {
    const listaProductos = await getAllProducts();
    for (const producto of listaProductos) {
        renderProductos(producto)
        inicializarAgregarAlCarrito(producto)
    }
}

badgeNumber()