input.onGesture(Gesture.LogoDown, function () {
    music.playMelody("C5 B A G F E D C ", 150)
    basic.showString("Oh, no. Levántame por favor")
})
music.playMelody("C5 C G - - - - - ", 500)
basic.showIcon(IconNames.Yes)
basic.showLeds(`
    . # # # #
    # # # . #
    # # . # #
    # . . # #
    . # # # .
    `)
basic.showString("HOLA FUNDACION EL NOGAL")
basic.showIcon(IconNames.Heart)
