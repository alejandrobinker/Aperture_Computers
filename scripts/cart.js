class Carrito {
    constructor(productos) {
        this.productos = JSON.parse(localStorage.getItem('carrito')) || []
    }
    agregar(producto) {
        let item = this.productos.find(element => element.producto.id === producto.id)
        if (item) {
            item.cantidad++
        } else {
            this.productos.push({ producto, cantidad: 1 })
        }
        localStorage.setItem('carrito', JSON.stringify(this.productos))
    }
    sacar(id) {
        let item = this.productos.find(element => element.id === id)
        let posicion = nombresProductos.indexOf(item)
        this.productos.splice(posicion, 1)
        localStorage.setItem('carrito', JSON.stringify(this.productos))
    }
    cantidad() {
        let badgeCounter = 0
        for (const item of this.productos) {
            badgeCounter += item.cantidad
        }
        return badgeCounter
    }
}

const carrito = new Carrito()