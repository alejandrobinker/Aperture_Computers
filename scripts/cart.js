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
        let item = this.productos.find(element => element.producto.id === id)
        let posicion = this.productos.indexOf(item)
        if (item.cantidad > 1) {
            item.cantidad--
        } else {
            this.productos.splice(posicion, 1)
        }
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

export const carrito = new Carrito()

