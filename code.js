input.onSound(DetectedSound.Loud, function () {
    if (teken < 90) {
        teken += 1
    } else {
        teken = 65
    }
    basic.showString(String.fromCharCode(teken))
})
let teken = 0
teken = 65
basic.forever(function () {
    led.setBrightness(input.soundLevel())
})
