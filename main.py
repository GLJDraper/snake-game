Current_Food_Position_X = randint(1, 4)
Current_Food_Position_Y = randint(0, 3)
Current_Snake_Position_X = 0
Current_Snake_Position_Y = 4
Direction_of_Travel = 0
led.plot(Current_Food_Position_X, Current_Food_Position_Y)
led.plot(Current_Snake_Position_X, Current_Snake_Position_Y)

def on_every_interval():
    if Direction_of_Travel != 0:
        pass
    led.plot(Current_Food_Position_X, Current_Food_Position_Y)
loops.every_interval(2000, on_every_interval)
