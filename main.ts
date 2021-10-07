function ゆっくり点灯2 (flg: boolean) {
    if (flg == true) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.setBrightness(80)
        LEDNo = 0
    } else if (flg == false) {
        SIN = 40 * Math.sin(明るさ) + 40
        if (SIN <= 0.1) {
            LEDNo = randint(0, 30)
        }
        strip.setBrightness(SIN)
        strip.setPixelColor(LEDNo, neopixel.hsl(3, 200, 20))
        strip.setPixelColor(LEDNo + 1, neopixel.hsl(6, 200, 20))
        strip.setPixelColor(LEDNo + 2, neopixel.hsl(9, 200, 20))
        strip.setPixelColor(LEDNo + 3, neopixel.hsl(12, 200, 20))
        strip.setPixelColor(LEDNo + 4, neopixel.hsl(15, 200, 20))
        strip.setPixelColor(LEDNo + 31, neopixel.hsl(93, 200, 20))
        strip.setPixelColor(LEDNo + 32, neopixel.hsl(96, 200, 20))
        strip.setPixelColor(LEDNo + 33, neopixel.hsl(99, 200, 20))
        strip.setPixelColor(LEDNo + 34, neopixel.hsl(102, 200, 20))
        strip.setPixelColor(LEDNo + 35, neopixel.hsl(105, 200, 20))
        strip.setPixelColor(LEDNo + 61, neopixel.hsl(183, 200, 20))
        strip.setPixelColor(LEDNo + 62, neopixel.hsl(186, 200, 20))
        strip.setPixelColor(LEDNo + 63, neopixel.hsl(189, 200, 20))
        strip.setPixelColor(LEDNo + 64, neopixel.hsl(192, 200, 20))
        strip.setPixelColor(LEDNo + 65, neopixel.hsl(195, 200, 20))
        strip.setPixelColor(LEDNo + 91, neopixel.hsl(273, 200, 20))
        strip.setPixelColor(LEDNo + 92, neopixel.hsl(276, 200, 20))
        strip.setPixelColor(LEDNo + 93, neopixel.hsl(279, 200, 20))
        strip.setPixelColor(LEDNo + 94, neopixel.hsl(282, 200, 20))
        strip.setPixelColor(LEDNo + 95, neopixel.hsl(285, 200, 20))
        strip.setPixelColor(LEDNo + 121, neopixel.hsl(340, 200, 20))
        strip.setPixelColor(LEDNo + 122, neopixel.hsl(343, 200, 20))
        strip.setPixelColor(LEDNo + 123, neopixel.hsl(346, 200, 20))
        strip.setPixelColor(LEDNo + 124, neopixel.hsl(349, 200, 20))
        strip.setPixelColor(LEDNo + 125, neopixel.hsl(352, 200, 20))
        strip.show()
        明るさ += 0.2
        basic.pause(20)
    }
}
function CHECKMODE () {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    if (MODE == 0) {
        レインボー点灯(true)
    } else if (MODE == 1) {
        ゆっくり点灯(true)
    } else if (MODE == 2) {
        ゆっくり点灯2(true)
    } else if (MODE == 3) {
        コメット(true)
    } else if (MODE == 4) {
        ゆっくり点灯3(true)
    } else {
        MODE = 0
        CHECKMODE()
    }
}
function ゆっくり点灯 (flg: boolean) {
    if (flg == true) {
        strip.setBrightness(80)
        LEDNo = 0
    } else if (flg == false) {
        LEDNo = randint(0, 143)
        strip.setBrightness(80)
        strip.setPixelColor(LEDNo, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(LEDNo + 1, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(LEDNo + 2, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(LEDNo + 3, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(LEDNo + 4, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(LEDNo + 5, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(LEDNo + 6, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        basic.pause(50)
        strip.setPixelColor(LEDNo, neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(LEDNo + 1, neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(LEDNo + 2, neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(LEDNo + 3, neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(LEDNo + 4, neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(LEDNo + 5, neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(LEDNo + 6, neopixel.colors(NeoPixelColors.Black))
        strip.show()
        basic.pause(50)
    }
}
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (MODE))
})
function コメット (flg: boolean) {
    if (flg == true) {
        strip.setBrightness(80)
        LEDNo = 0
        strip.setPixelColor(LEDNo, neopixel.hsl(3, 200, 25))
        strip.setPixelColor(LEDNo + 1, neopixel.hsl(6, 200, 25))
        strip.setPixelColor(LEDNo + 2, neopixel.hsl(9, 200, 25))
        strip.setPixelColor(LEDNo + 3, neopixel.hsl(12, 200, 25))
        strip.setPixelColor(LEDNo + 4, neopixel.hsl(16, 200, 25))
        strip.setPixelColor(LEDNo + 30, neopixel.hsl(33, 200, 25))
        strip.setPixelColor(LEDNo + 31, neopixel.hsl(36, 200, 25))
        strip.setPixelColor(LEDNo + 32, neopixel.hsl(39, 200, 25))
        strip.setPixelColor(LEDNo + 33, neopixel.hsl(42, 200, 25))
        strip.setPixelColor(LEDNo + 34, neopixel.hsl(45, 200, 25))
        strip.setPixelColor(LEDNo + 60, neopixel.hsl(63, 200, 25))
        strip.setPixelColor(LEDNo + 61, neopixel.hsl(66, 200, 25))
        strip.setPixelColor(LEDNo + 62, neopixel.hsl(69, 200, 25))
        strip.setPixelColor(LEDNo + 63, neopixel.hsl(72, 200, 25))
        strip.setPixelColor(LEDNo + 64, neopixel.hsl(75, 200, 25))
        strip.setPixelColor(LEDNo + 90, neopixel.hsl(270, 200, 25))
        strip.setPixelColor(LEDNo + 91, neopixel.hsl(273, 200, 25))
        strip.setPixelColor(LEDNo + 92, neopixel.hsl(276, 200, 25))
        strip.setPixelColor(LEDNo + 93, neopixel.hsl(279, 200, 25))
        strip.setPixelColor(LEDNo + 94, neopixel.hsl(282, 200, 25))
        strip.setPixelColor(LEDNo + 120, neopixel.hsl(303, 200, 25))
        strip.setPixelColor(LEDNo + 121, neopixel.hsl(306, 200, 25))
        strip.setPixelColor(LEDNo + 122, neopixel.hsl(309, 200, 25))
        strip.setPixelColor(LEDNo + 123, neopixel.hsl(312, 200, 25))
        strip.setPixelColor(LEDNo + 124, neopixel.hsl(314, 200, 25))
        strip.show()
    } else if (flg == false) {
        strip.rotate(2)
        strip.show()
    }
}
function ゆっくり点灯3 (flg: boolean) {
    if (flg == true) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.setBrightness(80)
        明るさ = 0
    } else if (flg == false) {
        明るさ += 0.2
        SIN = 15 * Math.sin(明るさ) + 15
        strip.setBrightness(SIN)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(100)
    }
}
input.onSound(DetectedSound.Loud, function () {
    MODE += 1
    CHECKMODE()
})
function レインボー点灯 (flg: boolean) {
    if (flg == true) {
        strip.setBrightness(80)
        strip.showRainbow(1, 360)
    } else if (flg == false) {
        strip.rotate(2)
        strip.show()
    }
}
function SHOWAURA () {
    if (MODE == 0) {
        レインボー点灯(false)
    } else if (MODE == 1) {
        ゆっくり点灯(false)
    } else if (MODE == 2) {
        ゆっくり点灯2(false)
    } else if (MODE == 3) {
        コメット(false)
    } else if (MODE == 4) {
        ゆっくり点灯3(false)
    } else {
        MODE = 0
    }
}
input.onButtonPressed(Button.B, function () {
    MODE = 4
    CHECKMODE()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("" + (strip.power()))
})
function レインボー切り替え (flg: boolean) {
    if (flg == true) {
        strip.setBrightness(80)
        色相 = 0
    } else if (flg == false) {
        色相 += 10
        strip.showColor(neopixel.hsl(色相, 200, 25))
        basic.pause(100)
        if (色相 >= 260) {
            色相 = 0
        }
    }
}
let 色相 = 0
let 明るさ = 0
let SIN = 0
let LEDNo = 0
let MODE = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 144, NeoPixelMode.RGB)
music.setVolume(30)
soundExpression.happy.play()
MODE = 1
CHECKMODE()
basic.forever(function () {
    SHOWAURA()
})
