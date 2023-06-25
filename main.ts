function car_back () {
    mecanumRobot.Motor(LR.Upper_left, MD.Back, 75)
    mecanumRobot.Motor(LR.Lower_left, MD.Back, 75)
    mecanumRobot.Motor(LR.Upper_right, MD.Back, 75)
    mecanumRobot.Motor(LR.Lower_right, MD.Back, 75)
}
function car_left () {
    mecanumRobot.Motor(LR.Upper_left, MD.Back, 75)
    mecanumRobot.Motor(LR.Lower_left, MD.Back, 75)
    mecanumRobot.Motor(LR.Upper_right, MD.Forward, 75)
    mecanumRobot.Motor(LR.Lower_right, MD.Forward, 75)
}
function car_forward () {
    mecanumRobot.Motor(LR.Upper_left, MD.Forward, 75)
    mecanumRobot.Motor(LR.Lower_left, MD.Forward, 75)
    mecanumRobot.Motor(LR.Upper_right, MD.Forward, 75)
    mecanumRobot.Motor(LR.Lower_right, MD.Forward, 75)
}
function car_right () {
    mecanumRobot.Motor(LR.Upper_left, MD.Forward, 75)
    mecanumRobot.Motor(LR.Lower_left, MD.Forward, 75)
    mecanumRobot.Motor(LR.Upper_right, MD.Back, 75)
    mecanumRobot.Motor(LR.Lower_right, MD.Back, 75)
}
let distance = 0
basic.showIcon(IconNames.Happy)
mecanumRobot.setServo(90)
basic.forever(function () {
    distance = mecanumRobot.ultra()
    if (distance < 10) {
        car_back()
    } else if (distance < 20) {
        mecanumRobot.state(MotorState.stop)
    } else if (distance < 40) {
        car_forward()
    } else {
        mecanumRobot.state(MotorState.stop)
    }
})
