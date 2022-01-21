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
    alert("Compra finalizada!")
    localStorage.clear()
    let producto = document.getElementById('tbody')
    producto.innerHTML = ""
    location.reload()
}