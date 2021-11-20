radio.onReceivedString(function (receivedString) {
    signal = receivedString
    if (signal.compare("B1") == 0) {
        modo = 0
    } else if (signal.compare("B2") == 0) {
        modo = 1
    } else if (signal.compare("B3") == 0) {
        modo = 2
    }
})
function EvitarObjInfrarojo () {
    if (mbit_Robot.Avoid_Sensor(mbit_Robot.enAvoidState.OBSTACLE)) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinLeft, 100)
        basic.pause(500)
    } else {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 200)
    }
}
function ModoManejo () {
    if (signal.compare("F") == 0) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Run)
    } else if (signal.compare("B") == 0) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Back)
    } else if (signal.compare("R") == 0) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Right)
    } else if (signal.compare("L") == 0) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Left)
    }
}
function ModoSeguimiento () {
    if (mbit_Robot.Line_Sensor(mbit_Robot.enPos.LeftState, mbit_Robot.enLineState.White) && mbit_Robot.Line_Sensor(mbit_Robot.enPos.RightState, mbit_Robot.enLineState.White)) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 60)
    } else if (mbit_Robot.Line_Sensor(mbit_Robot.enPos.LeftState, mbit_Robot.enLineState.White) && mbit_Robot.Line_Sensor(mbit_Robot.enPos.RightState, mbit_Robot.enLineState.Black)) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinRight, 70)
    } else if (mbit_Robot.Line_Sensor(mbit_Robot.enPos.LeftState, mbit_Robot.enLineState.Black) && mbit_Robot.Line_Sensor(mbit_Robot.enPos.RightState, mbit_Robot.enLineState.White)) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinLeft, 70)
    } else {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
    }
}
let modo = 0
let signal = ""
basic.showIcon(IconNames.Yes)
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . . # . .
    . . . . .
    `)
radio.setGroup(1)
radio.setTransmitPower(7)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (modo == 0) {
        ModoSeguimiento()
    } else if (modo == 1) {
        ModoManejo()
    } else if (modo == 2) {
        EvitarObjInfrarojo()
    }
})
