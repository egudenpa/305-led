def レインボー(flg: bool):
    if flg == True:
        strip.set_brightness(80)
        strip.show_rainbow(1, 360)
    elif flg == False:
        strip.rotate(1)
        strip.show()
def CHECKMODE():
    basic.show_string("" + str((MODE)))
    if MODE == 0:
        レインボー(True)
    elif MODE == 1:
        ゆっくり点灯(True)
    elif MODE == 2:
        pass
    elif MODE == 3:
        pass
    else:
        pass
def ゆっくり点灯(flg2: bool):
    if flg2 == True:
        strip.set_brightness(80)
        strip.show_color(neopixel.colors(NeoPixelColors.WHITE))
    elif flg2 == False:
        strip.rotate(1)
        strip.show()

def on_sound_loud():
    global MODE
    MODE += 1
    CHECKMODE()
input.on_sound(DetectedSound.LOUD, on_sound_loud)

def SHOWAURA():
    if MODE == 0:
        レインボー(False)
    elif MODE == 1:
        ゆっくり点灯(False)
    elif MODE == 2:
        pass
    elif MODE == 3:
        pass
    else:
        pass
MODE = 0
strip: neopixel.Strip = None
strip = neopixel.create(DigitalPin.P0, 144, NeoPixelMode.RGB)
music.set_volume(30)
soundExpression.happy.play()
MODE = 0
CHECKMODE()

def on_forever():
    SHOWAURA()
basic.forever(on_forever)
