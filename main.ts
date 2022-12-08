let list = [
[
50,
100,
150,
200,
255
],
[
255,
200,
150,
100,
50
],
[
255,
255,
255,
255,
255
],
[
200,
200,
200,
200,
200
],
[
50,
50,
50,
50,
50
]
]
for (let Y = 0; Y <= 4; Y++) {
    for (let X = 0; X <= 4; X++) {
        led.plotBrightness(X, Y, list[Y][X])
    }
}
basic.forever(function () {
	
})
