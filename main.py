def ゆっくり点灯2(flg: bool):
    global LEDNo, SIN, 明るさ
    if flg == True:
        strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
        strip.set_brightness(80)
        LEDNo = 0
    elif flg == False:
        SIN = 40 * Math.sin(明るさ) + 40
        if SIN <= 0.1:
            LEDNo = randint(0, 30)
        strip.set_brightness(SIN)
        strip.set_pixel_color(LEDNo, neopixel.hsl(3, 200, 20))
        strip.set_pixel_color(LEDNo + 1, neopixel.hsl(6, 200, 20))
        strip.set_pixel_color(LEDNo + 2, neopixel.hsl(9, 200, 20))
        strip.set_pixel_color(LEDNo + 3, neopixel.hsl(12, 200, 20))
        strip.set_pixel_color(LEDNo + 4, neopixel.hsl(15, 200, 20))
        strip.set_pixel_color(LEDNo + 31, neopixel.hsl(93, 200, 20))
        strip.set_pixel_color(LEDNo + 32, neopixel.hsl(96, 200, 20))
        strip.set_pixel_color(LEDNo + 33, neopixel.hsl(99, 200, 20))
        strip.set_pixel_color(LEDNo + 34, neopixel.hsl(102, 200, 20))
        strip.set_pixel_color(LEDNo + 35, neopixel.hsl(105, 200, 20))
        strip.set_pixel_color(LEDNo + 61, neopixel.hsl(183, 200, 20))
        strip.set_pixel_color(LEDNo + 62, neopixel.hsl(186, 200, 20))
        strip.set_pixel_color(LEDNo + 63, neopixel.hsl(189, 200, 20))
        strip.set_pixel_color(LEDNo + 64, neopixel.hsl(192, 200, 20))
        strip.set_pixel_color(LEDNo + 65, neopixel.hsl(195, 200, 20))
        strip.set_pixel_color(LEDNo + 91, neopixel.hsl(273, 200, 20))
        strip.set_pixel_color(LEDNo + 92, neopixel.hsl(276, 200, 20))
        strip.set_pixel_color(LEDNo + 93, neopixel.hsl(279, 200, 20))
        strip.set_pixel_color(LEDNo + 94, neopixel.hsl(282, 200, 20))
        strip.set_pixel_color(LEDNo + 95, neopixel.hsl(285, 200, 20))
        strip.set_pixel_color(LEDNo + 121, neopixel.hsl(340, 200, 20))
        strip.set_pixel_color(LEDNo + 122, neopixel.hsl(343, 200, 20))
        strip.set_pixel_color(LEDNo + 123, neopixel.hsl(346, 200, 20))
        strip.set_pixel_color(LEDNo + 124, neopixel.hsl(349, 200, 20))
        strip.set_pixel_color(LEDNo + 125, neopixel.hsl(352, 200, 20))
        strip.show()
        明るさ += 0.2
        basic.pause(20)
def CHECKMODE():
    global MODE
    strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
    if MODE == 0:
        レインボー点灯(True)
    elif MODE == 1:
        ゆっくり点灯(True)
    elif MODE == 2:
        ゆっくり点灯2(True)
    elif MODE == 3:
        コメット(True)
    elif MODE == 4:
        ゆっくり点灯3(True)
    else:
        MODE = 0
        CHECKMODE()
def ゆっくり点灯(flg2: bool):
    global LEDNo
    if flg2 == True:
        strip.set_brightness(80)
        LEDNo = 0
    elif flg2 == False:
        LEDNo = randint(0, 143)
        strip.set_brightness(80)
        strip.set_pixel_color(LEDNo, neopixel.colors(NeoPixelColors.BLUE))
        strip.set_pixel_color(LEDNo + 1, neopixel.colors(NeoPixelColors.BLUE))
        strip.set_pixel_color(LEDNo + 2, neopixel.colors(NeoPixelColors.BLUE))
        strip.set_pixel_color(LEDNo + 3, neopixel.colors(NeoPixelColors.BLUE))
        strip.set_pixel_color(LEDNo + 4, neopixel.colors(NeoPixelColors.BLUE))
        strip.set_pixel_color(LEDNo + 5, neopixel.colors(NeoPixelColors.BLUE))
        strip.set_pixel_color(LEDNo + 6, neopixel.colors(NeoPixelColors.BLUE))
        strip.show()
        basic.pause(50)
        strip.set_pixel_color(LEDNo, neopixel.colors(NeoPixelColors.BLACK))
        strip.set_pixel_color(LEDNo + 1, neopixel.colors(NeoPixelColors.BLACK))
        strip.set_pixel_color(LEDNo + 2, neopixel.colors(NeoPixelColors.BLACK))
        strip.set_pixel_color(LEDNo + 3, neopixel.colors(NeoPixelColors.BLACK))
        strip.set_pixel_color(LEDNo + 4, neopixel.colors(NeoPixelColors.BLACK))
        strip.set_pixel_color(LEDNo + 5, neopixel.colors(NeoPixelColors.BLACK))
        strip.set_pixel_color(LEDNo + 6, neopixel.colors(NeoPixelColors.BLACK))
        strip.show()
        basic.pause(50)

def on_button_pressed_a():
    basic.show_string("" + str((MODE)))
input.on_button_pressed(Button.A, on_button_pressed_a)

def コメット(flg3: bool):
    global LEDNo
    if flg3 == True:
        strip.set_brightness(80)
        LEDNo = 0
        strip.set_pixel_color(LEDNo, neopixel.hsl(3, 200, 25))
        strip.set_pixel_color(LEDNo + 1, neopixel.hsl(6, 200, 25))
        strip.set_pixel_color(LEDNo + 2, neopixel.hsl(9, 200, 25))
        strip.set_pixel_color(LEDNo + 3, neopixel.hsl(12, 200, 25))
        strip.set_pixel_color(LEDNo + 4, neopixel.hsl(16, 200, 25))
        strip.set_pixel_color(LEDNo + 30, neopixel.hsl(93, 200, 25))
        strip.set_pixel_color(LEDNo + 31, neopixel.hsl(96, 200, 25))
        strip.set_pixel_color(LEDNo + 32, neopixel.hsl(99, 200, 25))
        strip.set_pixel_color(LEDNo + 33, neopixel.hsl(102, 200, 25))
        strip.set_pixel_color(LEDNo + 34, neopixel.hsl(105, 200, 25))
        strip.set_pixel_color(LEDNo + 60, neopixel.hsl(183, 200, 25))
        strip.set_pixel_color(LEDNo + 61, neopixel.hsl(186, 200, 25))
        strip.set_pixel_color(LEDNo + 62, neopixel.hsl(189, 200, 25))
        strip.set_pixel_color(LEDNo + 63, neopixel.hsl(192, 200, 25))
        strip.set_pixel_color(LEDNo + 64, neopixel.hsl(195, 200, 25))
        strip.set_pixel_color(LEDNo + 90, neopixel.hsl(270, 200, 25))
        strip.set_pixel_color(LEDNo + 91, neopixel.hsl(273, 200, 25))
        strip.set_pixel_color(LEDNo + 92, neopixel.hsl(276, 200, 25))
        strip.set_pixel_color(LEDNo + 93, neopixel.hsl(279, 200, 25))
        strip.set_pixel_color(LEDNo + 94, neopixel.hsl(282, 200, 25))
        strip.set_pixel_color(LEDNo + 120, neopixel.hsl(343, 200, 25))
        strip.set_pixel_color(LEDNo + 121, neopixel.hsl(346, 200, 25))
        strip.set_pixel_color(LEDNo + 122, neopixel.hsl(349, 200, 25))
        strip.set_pixel_color(LEDNo + 123, neopixel.hsl(352, 200, 25))
        strip.set_pixel_color(LEDNo + 124, neopixel.hsl(355, 200, 25))
        strip.show()
    elif flg3 == False:
        strip.rotate(2)
        strip.show()
def ゆっくり点灯3(flg4: bool):
    global 明るさ, SIN
    if flg4 == True:
        strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
        strip.set_brightness(80)
        明るさ = 0
    elif flg4 == False:
        明るさ += 0.2
        SIN = 15 * Math.sin(明るさ) + 15
        strip.set_brightness(SIN)
        strip.show_color(neopixel.colors(NeoPixelColors.RED))
        basic.pause(100)

def on_sound_loud():
    global MODE
    MODE += 1
    CHECKMODE()
input.on_sound(DetectedSound.LOUD, on_sound_loud)

def レインボー点灯(flg5: bool):
    if flg5 == True:
        strip.set_brightness(80)
        strip.show_rainbow(1, 360)
    elif flg5 == False:
        strip.rotate(2)
        strip.show()
def SHOWAURA():
    global MODE
    if MODE == 0:
        レインボー点灯(False)
    elif MODE == 1:
        ゆっくり点灯(False)
    elif MODE == 2:
        ゆっくり点灯2(False)
    elif MODE == 3:
        コメット(False)
    elif MODE == 4:
        ゆっくり点灯3(False)
    else:
        MODE = 0

def on_button_pressed_b():
    global MODE
    MODE = 4
    CHECKMODE()
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_pressed():
    basic.show_string("" + str((strip.power())))
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def レインボー切り替え(flg6: bool):
    global 色相
    if flg6 == True:
        strip.set_brightness(80)
        色相 = 0
    elif flg6 == False:
        色相 += 10
        strip.show_color(neopixel.hsl(色相, 200, 25))
        basic.pause(100)
        if 色相 >= 260:
            色相 = 0
色相 = 0
明るさ = 0
SIN = 0
LEDNo = 0
MODE = 0
strip: neopixel.Strip = None
strip = neopixel.create(DigitalPin.P0, 144, NeoPixelMode.RGB)
music.set_volume(30)
soundExpression.happy.play()
MODE = 1
CHECKMODE()

def on_forever():
    SHOWAURA()
basic.forever(on_forever)
