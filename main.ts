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
let denominator = 0
let Ry = 0
let Rx = 0
let Ly = 0
let Lx = 0
let Bt = 0
radio.setGroup(1)
basic.forever(function () {
    denominator = Math.max(Math.abs(Ly) + Math.abs(Lx) + Math.abs(Rx), 1)
    motorbit.MotorRunDual(motorbit.Motors.M3, (Ly + Lx + Rx) / denominator, motorbit.Motors.M4, (Ly - Lx + Rx) / denominator)
    motorbit.MotorRunDual(motorbit.Motors.M1, (Ly - Lx - Rx) / denominator, motorbit.Motors.M2, (Ly + Lx - Rx) / denominator)
    radio.sendNumber(motorbit.Ultrasonic_reading_distance())
    if (Bt == 1) {
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
