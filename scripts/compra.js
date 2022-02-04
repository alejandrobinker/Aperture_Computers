import { carrito } from "./cart.js"
import { refreshCart, badgeNumber, renderCarrito, sumarProducto, restarProducto } from "./functions.js"


for (const item of carrito.productos) {
    renderCarrito(item)
    refreshCart(item)
    sumarProducto(item)
    restarProducto(item)
}
badgeNumber()

let comprar = document.getElementById("finalizar-compra")
comprar.onclick = () => {
    if (carrito.productos.length !== 0) {
        alert("Compra finalizada!")
        localStorage.clear()
        let tbody = document.getElementById('tbody')
        tbody.innerHTML = ""
        location.reload()
    } else {
        alert("Agregá productos en la tienda")
    }
}