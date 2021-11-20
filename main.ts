input.onGesture(Gesture.LogoDown, function () {
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
