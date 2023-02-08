radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        motorbit.MotorRunDual(motorbit.Motors.M1, 150, motorbit.Motors.M2, 150)
        motorbit.MotorRunDual(motorbit.Motors.M3, 150, motorbit.Motors.M4, 150)
    } else {
        motorbit.motorbit_rus04(RgbUltrasonics.All, RgbColors.Blue, ColorEffect.Breathing)
        motorbit.MotorStopAll()
    }
})
radio.setGroup(1)
