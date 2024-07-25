let Counter = 0
let Current_Food_Position_X = randint(1, 4)
let Current_Food_Position_Y = randint(0, 3)
let Current_Snake_Position_X = 0
let Current_Snake_Position_Y = 4
let Direction_of_Travel = 1
led.plot(Current_Food_Position_X, Current_Food_Position_Y)
led.plot(Current_Snake_Position_X, Current_Snake_Position_Y)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        Direction_of_Travel = 1
    }
    if (input.buttonIsPressed(Button.B)) {
        Direction_of_Travel = 0
    }
})
loops.everyInterval(750, function () {
    basic.clearScreen()
    if (Direction_of_Travel == 0) {
        Current_Snake_Position_X = Current_Snake_Position_X + 1
        if (Current_Snake_Position_X > 4) {
            Current_Snake_Position_X = 0
        }
    } else {
        Current_Snake_Position_Y = Current_Snake_Position_Y - 1
        if (Current_Snake_Position_Y < 0) {
            Current_Snake_Position_Y = 4
        }
    }
    if (Current_Snake_Position_X == Current_Food_Position_X && Current_Snake_Position_Y == Current_Food_Position_Y) {
        Current_Food_Position_X = randint(0, 4)
        Current_Food_Position_Y = randint(0, 4)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.Square)
        Counter = Counter + 1
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
        basic.showNumber(Counter)
    }
    if (Counter == 20) {
        basic.showNumber(Counter)
        Counter = 0
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.UntilDone)
        game.gameOver()
    }
    basic.clearScreen()
    led.plot(Current_Snake_Position_X, Current_Snake_Position_Y)
    led.plot(Current_Food_Position_X, Current_Food_Position_Y)
})
