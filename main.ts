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
        i = 0
        for (let index = 0; index < 5; index++) {
            j = 0
            for (let index = 0; index < 5; index++) {
                strip.setPixelColor(i * 29 + j, neopixel.hsl(i * 72 + j, 200, 20))
                j += 1
            }
            i += 1
        }
        strip.show()
        strip.rotate(1)
        明るさ += 0.2
        basic.pause(10)
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
        i = 0
        for (let index = 0; index < 20; index++) {
            strip.setPixelColor(LEDNo, neopixel.colors(NeoPixelColors.White))
            strip.rotate(1)
            strip.show()
            basic.pause(20)
            i += 1
        }
        i = 0
        for (let index = 0; index < 20; index++) {
            strip.rotate(1)
            strip.show()
            basic.pause(20)
        }
        i = 0
        for (let index = 0; index < 20; index++) {
            strip.setPixelColor(LEDNo + (i + 20), neopixel.colors(NeoPixelColors.Black))
            strip.show()
            basic.pause(20)
            i += 1
        }
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
}
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (MODE))
})
function コメット (flg: boolean) {
    if (flg == true) {
        strip.setBrightness(80)
        i = 0
        for (let index = 0; index < 5; index++) {
            j = 0
            for (let index = 0; index < 5; index++) {
                strip.setPixelColor(i * 29 + j, neopixel.hsl(i * 72 + j * 10, 200, 25))
                j += 1
            }
            i += 1
        }
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
        basic.pause(40)
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
let j = 0
let i = 0
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
