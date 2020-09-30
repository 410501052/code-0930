let GPA = 0
input.onGesture(Gesture.Shake, function () {
    GPA = randint(80, 100)
    basic.showNumber(GPA)
    if (GPA >= 90) {
        basic.showString("A+")
    } else if (GPA >= 85) {
        basic.showString("A")
    } else if (GPA >= 80) {
        basic.showString("A-")
    }
})
basic.forever(function () {
	
})
