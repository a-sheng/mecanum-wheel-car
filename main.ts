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
})
let Ry = 0
let Rx = 0
let Ly = 0
let Lx = 0
let Bt = 0
radio.setGroup(1)
basic.forever(function () {
    if (Bt ** 2 == 1) {
        music.playSoundEffect(music.createSoundEffect(
        WaveShape.Square,
        78,
        4886,
        0,
        255,
        100,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), SoundExpressionPlayMode.InBackground)
    }
    if (Ly == 0 && Lx == 0) {
        motorbit.motorbit_rus04(RgbUltrasonics.All, RgbColors.Blue, ColorEffect.None)
    } else {
        motorbit.motorbit_rus04(RgbUltrasonics.All, RgbColors.Red, ColorEffect.None)
    }
    if (Rx < -60) {
        motorbit.motorbit_rus04(RgbUltrasonics.Left, RgbColors.Yellow, ColorEffect.Flash)
    } else if (Rx > 60) {
        motorbit.motorbit_rus04(RgbUltrasonics.Right, RgbColors.Yellow, ColorEffect.Flash)
    }
    motorbit.MotorRunDual(motorbit.Motors.M3, Ly + Lx + Rx, motorbit.Motors.M4, Ly - Lx + Rx)
    motorbit.MotorRunDual(motorbit.Motors.M1, Ly - Lx - Rx, motorbit.Motors.M2, Ly + Lx - Rx)
    serial.writeLine("Bt:" + Bt)
    serial.writeLine("Lx:" + Lx)
    serial.writeLine("Ly:" + Ly)
    serial.writeLine("Rx:" + Rx)
    serial.writeLine("Ry:" + Ry)
    serial.writeLine("distance:" + motorbit.Ultrasonic_reading_distance())
})
