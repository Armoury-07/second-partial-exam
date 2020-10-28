let Age = 0
let Mean = 0
let Counter_Children = 0
let Counter_adolescent = 0
let rnd_Number = 0
let RND_NUMBER_2 = 0
let x = 0
input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 20; index++) {
        Age = randint(5, 64)
        basic.pause(100)
        basic.showNumber(Age)
        basic.clearScreen()
        if (Age <= 13 && Age >= 5) {
            basic.showString("Child")
            Mean = Mean + Age
            Counter_Children += 1
        } else if (Age <= 17 && Age >= 14) {
            basic.showString("Adolescent")
            Mean = Mean + Age
            Counter_adolescent += 1
        } else if (Age <= 35 && Age >= 18) {
            basic.showString("Young adult")
            Mean = Mean + Age
        } else if (Age <= 64 && Age >= 36) {
            basic.showString("Adult")
            Mean = Mean + Age
        }
    }
    Mean = Mean / 20
    basic.showString("Age average =")
    basic.showNumber(Mean)
    basic.clearScreen()
    basic.showString("Total Children")
    basic.showNumber(Counter_Children)
    basic.clearScreen()
    basic.showString("Total Adolescents")
    basic.showNumber(Counter_adolescent)
})
input.onPinPressed(TouchPin.P1, function () {
    for (let index = 0; index <= 5; index++) {
        basic.showNumber(index)
        basic.clearScreen()
    }
    basic.clearScreen()
    basic.pause(100)
    rnd_Number = randint(1, 10)
    RND_NUMBER_2 = randint(1, 10)
    basic.showNumber(rnd_Number)
    basic.clearScreen()
    basic.showNumber(RND_NUMBER_2)
    if (rnd_Number == RND_NUMBER_2) {
        basic.showIcon(IconNames.Happy)
        music.playMelody("C5 A B G A F G E ", 120)
    } else {
        basic.showIcon(IconNames.Sad)
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    basic.clearScreen()
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        x = 2
        for (let y = 0; y <= 4; y++) {
            led.plot(x, y)
            basic.pause(200)
            led.unplot(x, y)
            basic.pause(200)
        }
    }
})
