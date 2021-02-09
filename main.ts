radio.onReceivedNumber(function (receivedNumber) {
    led.plotBarGraph(
    receivedNumber,
    256
    )
    basic.pause(500)
    basic.clearScreen()
})
radio.setGroup(90)
