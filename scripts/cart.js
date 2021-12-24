class Carrito {
    constructor(productos) {
        this.productos = JSON.parse(localStorage.getItem('carrito')) || []
    }
    agregar(producto) {
        this.productos.push(producto)
        localStorage.setItem('carrito', JSON.stringify(this.productos))
    }
    sacar(nombreProducto) {
        let nombresProductos = this.productos.map(unProducto => unProducto.nombre)
        let posicion = nombresProductos.indexOf(nombreProducto)
        console.log(posicion)
        this.productos.splice(posicion, 1)
        localStorage.setItem('carrito', JSON.stringify(this.productos))
    }
    cantidad() {
       return this.productos.length
    }
}

const carrito = new Carrito()