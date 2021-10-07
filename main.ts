function レインボー (flg: boolean) {
    if (flg == true) {
        strip.setBrightness(80)
        strip.showRainbow(1, 360)
    } else if (flg == false) {
        strip.rotate(1)
        strip.show()
    }
}
function CHECKMODE () {
    basic.showString("" + (MODE))
    if (MODE == 0) {
        レインボー(true)
    } else if (MODE == 1) {
        ゆっくり点灯(true)
    } else if (MODE == 2) {
    	
    } else if (MODE == 3) {
    	
    } else {
    	
    }
}
function ゆっくり点灯 (flg: boolean) {
    if (flg == true) {
        strip.setBrightness(80)
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    } else if (flg == false) {
        strip.rotate(1)
        strip.show()
    }
}
input.onSound(DetectedSound.Loud, function () {
    MODE += 1
    CHECKMODE()
})
function SHOWAURA () {
    if (MODE == 0) {
        レインボー(false)
    } else if (MODE == 1) {
        ゆっくり点灯(false)
    } else if (MODE == 2) {
    	
    } else if (MODE == 3) {
    	
    } else {
    	
    }
}
let MODE = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 144, NeoPixelMode.RGB)
music.setVolume(30)
soundExpression.happy.play()
MODE = 0
CHECKMODE()
basic.forever(function () {
    SHOWAURA()
})
