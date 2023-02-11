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
        Ry = value * 1.1
    }
})
let Ry = 0
let Rx = 0
let Ly = 0
let Lx = 0
let Bt = 0
radio.setGroup(1)
basic.forever(function () {
    motorbit.MotorRunDual(motorbit.Motors.M3, Ly + Lx + Rx, motorbit.Motors.M4, Ly - Lx + Rx)
    motorbit.MotorRunDual(motorbit.Motors.M1, Ly - Lx - Rx, motorbit.Motors.M2, Ly + Lx - Rx)
    radio.sendNumber(motorbit.Ultrasonic_reading_distance())
    if (Bt == 1) {
        motorbit.Setting_the_on_board_lights(Offset.ONE, RgbColors.Red)
        motorbit.Setting_the_on_board_lights(Offset.TWO, RgbColors.Red)
        motorbit.Setting_the_on_board_lights(Offset.THREE, RgbColors.Red)
        motorbit.Setting_the_on_board_lights(Offset.FOUR, RgbColors.Red)
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
    if (Bt == 2) {
        motorbit.Setting_the_on_board_lights(Offset.ONE, RgbColors.Green)
        motorbit.Setting_the_on_board_lights(Offset.TWO, RgbColors.Green)
        motorbit.Setting_the_on_board_lights(Offset.THREE, RgbColors.Green)
        motorbit.Setting_the_on_board_lights(Offset.FOUR, RgbColors.Green)
        music.playSoundEffect(music.createSoundEffect(
        WaveShape.Noise,
        500,
        499,
        255,
        255,
        750,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), SoundExpressionPlayMode.InBackground)
    }
    if (Bt == 4) {
        motorbit.Setting_the_on_board_lights(Offset.ONE, RgbColors.Purple)
        motorbit.Setting_the_on_board_lights(Offset.TWO, RgbColors.Purple)
        motorbit.Setting_the_on_board_lights(Offset.THREE, RgbColors.Purple)
        motorbit.Setting_the_on_board_lights(Offset.FOUR, RgbColors.Purple)
        music.playSoundEffect(music.createSoundEffect(
        WaveShape.Sawtooth,
        200,
        3607,
        255,
        255,
        100,
        SoundExpressionEffect.None,
        InterpolationCurve.Logarithmic
        ), SoundExpressionPlayMode.InBackground)
    }
    if (Bt == 8) {
        motorbit.Setting_the_on_board_lights(Offset.ONE, RgbColors.Indigo)
        motorbit.Setting_the_on_board_lights(Offset.TWO, RgbColors.Indigo)
        motorbit.Setting_the_on_board_lights(Offset.THREE, RgbColors.Indigo)
        motorbit.Setting_the_on_board_lights(Offset.FOUR, RgbColors.Indigo)
        music.playSoundEffect(music.createSoundEffect(
        WaveShape.Sine,
        2760,
        4543,
        255,
        255,
        100,
        SoundExpressionEffect.Tremolo,
        InterpolationCurve.Logarithmic
        ), SoundExpressionPlayMode.InBackground)
    }
    if (Ly == 0 && Lx == 0) {
        motorbit.close_all_the_on_board_lights()
        motorbit.motorbit_rus04(RgbUltrasonics.All, RgbColors.Blue, ColorEffect.None)
    } else {
        motorbit.motorbit_rus04(RgbUltrasonics.All, RgbColors.Red, ColorEffect.None)
    }
    if (Rx < -60) {
        motorbit.motorbit_rus04(RgbUltrasonics.Left, RgbColors.Yellow, ColorEffect.Flash)
    } else if (Rx > 60) {
        motorbit.motorbit_rus04(RgbUltrasonics.Right, RgbColors.Yellow, ColorEffect.Flash)
    }
    serial.writeLine("Bt:" + Bt)
    serial.writeLine("Lx:" + Lx)
    serial.writeLine("Ly:" + Ly)
    serial.writeLine("Rx:" + Rx)
    serial.writeLine("Ry:" + Ry)
    serial.writeLine("distance:" + motorbit.Ultrasonic_reading_distance())
})
