input.onGesture(Gesture.LogoDown, function () {
    basic.showString("Oh, no. Levántame por favor")
})
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
