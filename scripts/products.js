class Producto {
    constructor(id, nombre, descripcion, stock, precio, img) {
        this.id = id
        this.nombre = nombre
        this.descripcion = descripcion
        this.stock = stock
        this.precio = precio
        this.img = img
    }
}


const products = [{
    id: '1',
    nombre: 'PC',
    descripcion: 'Amd Ryzen 5 5600G 16GB ram 240GB SSD',
    stock: 5,
    precio: 149000,
    img: '../img/pc1.webp',
},
{
    id: '2',
    nombre: 'PC',
    descripcion: 'Intel I5 10400 6GB ram 480GB SSD',
    stock: 3,
    precio: 169000,
    img: '../img/pc2.webp',
},
{
    id: '3',
    nombre: 'PC',
    descripcion: 'Intel I7 8700 6GB ram 480GB SSD',
    stock: 3,
    precio: 199000,
    img: '../img/pc3.webp',
},
{
    id: '4',
    nombre: 'PC',
    descripcion: 'Amd  Ryzen 7 5700G 6GB ram 1TB SSD',
    stock: 4,
    precio: 219000,
    img: '../img/pc4.webp',
}
]

const listaProductos = []

for (const items of products) {
    listaProductos.push(new Producto(items.id, items.nombre, items.descripcion, items.stock, items.precio, items.img))
}