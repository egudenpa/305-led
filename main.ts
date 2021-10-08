function CHECKMODE () {
    電流 = 0
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    if (MODE == 1) {
        レインボー点灯(true)
    } else if (MODE == 2) {
        白流れ星(true)
    } else if (MODE == 3) {
        虹色ウェーブ(true)
    } else if (MODE == 4) {
        コメット(true)
    } else if (MODE == 5) {
        赤ドクドク(true)
    } else {
        MODE = 1
        CHECKMODE()
    }
}
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (MODE))
})
function コメット (flg: boolean) {
    if (flg == true) {
        strip.setBrightness(255)
        i = 0
        for (let index = 0; index < 5; index++) {
            j = 0
            for (let index = 0; index < 7; index++) {
                strip.setPixelColor(i * 29 + j, neopixel.hsl(i * 72 + j * 10, 200, 25))
                j += 1
            }
            i += 1
        }
    } else if (flg == false) {
        strip.rotate(-1)
        strip.show()
        電流値()
        basic.pause(10)
    }
}
function 虹色ウェーブ (flg: boolean) {
    if (flg == true) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.setBrightness(240)
        LEDNo = 0
    } else if (flg == false) {
        SIN = 120 * Math.sin(明るさ) + 120
        strip.setBrightness(SIN)
        i = 0
        for (let index = 0; index < 15; index++) {
            j = 0
            for (let index = 0; index < 1; index++) {
                strip.setPixelColor(i * 10 + j, neopixel.hsl(i * 24 + j, 200, 20))
                j += 1
            }
            i += 1
        }
        strip.rotate(1)
        strip.show()
        電流値()
        明るさ += 0.2
        basic.pause(10)
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
        電流値()
    } else if (flg == false) {
        strip.rotate(2)
        strip.show()
        電流値()
    }
}
function 白流れ星 (flg: boolean) {
    if (flg == true) {
        strip.setBrightness(80)
        LEDNo = 0
    } else if (flg == false) {
        LEDNo = randint(0, 143)
        strip.setBrightness(100)
        i = 0
        for (let index = 0; index < 20; index++) {
            strip.setPixelColor(LEDNo, neopixel.colors(NeoPixelColors.White))
            strip.rotate(1)
            strip.show()
            電流値()
            i += 1
            basic.pause(20)
        }
        for (let index = 0; index < 20; index++) {
            strip.rotate(1)
            strip.show()
            電流値()
            basic.pause(20)
        }
        i = 0
        for (let index = 0; index < 20; index++) {
            strip.setPixelColor(LEDNo + (i + 20), neopixel.colors(NeoPixelColors.Black))
            strip.show()
            電流値()
            basic.pause(20)
            i += 1
        }
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
}
function SHOWAURA () {
    if (MODE == 1) {
        レインボー点灯(false)
    } else if (MODE == 2) {
        白流れ星(false)
    } else if (MODE == 3) {
        虹色ウェーブ(false)
    } else if (MODE == 4) {
        コメット(false)
    } else if (MODE == 5) {
        赤ドクドク(false)
    } else {
        MODE = 1
    }
}
input.onButtonPressed(Button.B, function () {
    MODE = 1
    CHECKMODE()
})
function 電流値 () {
    if (strip.power() >= 電流) {
        電流 = strip.power()
    }
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("" + (電流))
})
function 赤ドクドク (flg: boolean) {
    if (flg == true) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.setBrightness(255)
        明るさ = 0
    } else if (flg == false) {
        明るさ += 0.2
        SIN = 125 * Math.sin(明るさ) + 125
        strip.setBrightness(SIN)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        電流値()
        basic.pause(40)
    }
}
function レインボー切り替え (flg: boolean) {
    if (flg == true) {
        strip.setBrightness(80)
        色相 = 0
    } else if (flg == false) {
        色相 += 10
        strip.showColor(neopixel.hsl(色相, 200, 25))
        電流値()
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
let j = 0
let i = 0
let 電流 = 0
let MODE = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 150, NeoPixelMode.RGB)
music.setVolume(30)
soundExpression.happy.play()
MODE = 1
input.setSoundThreshold(SoundThreshold.Loud, 30)
CHECKMODE()
basic.forever(function () {
    SHOWAURA()
})
