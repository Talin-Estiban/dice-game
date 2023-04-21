var randomNumber1 = randomNumberGenerator()
var imgLeft = `images/dice${randomNumber1}.png`
document.querySelector(".img1").setAttribute('src', imgLeft)
var randomNumber2 = randomNumberGenerator()
var imgRight = `images/dice${randomNumber2}.png`
document.querySelector(".img2").setAttribute('src', imgRight)
function randomNumberGenerator() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1
    return randomNumber1
}
var text = document.querySelector('h1')
if (randomNumber1 > randomNumber2) {
    text.innerHTML = "🚩Player one wins!"
}
else if (randomNumber1 < randomNumber2) {
    text.innerHTML = "Player two wins!🚩"
}
else {
    text.innerHTML = 'Draw!'
}