let GPA = 0
input.onGesture(Gesture.Shake, function () {
    let A3 = 0
    let A2 = 0
    let A = 0
    GPA = A
    basic.showNumber(randint(80, 84))
    basic.showString("A-")
    GPA = A2
    basic.showNumber(randint(85, 89))
    basic.showString("A")
    GPA = A3
    basic.showNumber(randint(90, 100))
    basic.showString("A+")
})
basic.forever(function () {
	
})
