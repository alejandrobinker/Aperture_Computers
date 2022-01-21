import { carrito } from "./cart.js"

function badgeNumber() {
    let badge = document.getElementById('badge-counter')
    badge.innerHTML = carrito.cantidad()
}

badgeNumber()
$(".logo1")
    .css({
        "position": "relative",
        "display": "none"
    })
    .fadeIn(800);


$(".logo2")
    .css({
        "display": "none",
        "position": "absolute"
    })
    .delay(800)
    .fadeIn(800)


$(".logo3")
    .css({
        "display": "none",
        "position": "absolute"
    })
    .delay(1600)
    .fadeIn(800)

$(".logo4")
    .css({
        "display": "none",
        "position": "absolute"
    })
    .delay(2400)
    .fadeIn(800)


/*.logo1 {
    position: relative;
    display: flex;
    animation: fadeIn 0.8s forwards;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.logo2 {
    position: absolute;
    top: 0;
    opacity: 0;
    animation: fadeIn2 0.8s forwards;
    animation-delay: 0.8s;
}

@keyframes fadeIn2 {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.logo3 {
    position: absolute;
    top: 0;
    opacity: 0;
    animation: fadeIn3 0.8s forwards;
    animation-delay: 1.6s;
}

@keyframes fadeIn3 {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.logo4 {
    position: absolute;
    top: 0;
    opacity: 0;
    animation: fadeIn4 0.8s forwards;
    animation-delay: 2.4s;
}

@keyframes fadeIn4 {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}*/