input.onButtonPressed(Button.A, function () {
    radio.sendNumber(3)
})
radio.onReceivedValue(function (name, value) {
    if (name == "Bt") {
        Bt = value
    } else if (name == "Lx") {
        Lx = value
    } else if (name == "Ly") {
        Ly = value
    } else if (name == "Rx") {
        Rx = value
    } else if (name == "Ry") {
        Ry = value
    }
    basic.showNumber(Bt)
    serial.writeNumber(Lx)
    serial.writeNumber(Ly)
    serial.writeNumber(Rx)
    serial.writeNumber(Ry)
    serial.writeNumber(Bt)
})
let Ry = 0
let Rx = 0
let Ly = 0
let Lx = 0
let Bt = 0
radio.setGroup(1)
basic.forever(function () {
	
})
