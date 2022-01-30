import { carrito } from "./cart.js";
import { badgeNumber } from "./functions.js";

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
