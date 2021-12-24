function badgeNumber() {
    let badge = document.getElementById('badge-counter')
    badge.innerHTML = carrito.cantidad()
}

badgeNumber()