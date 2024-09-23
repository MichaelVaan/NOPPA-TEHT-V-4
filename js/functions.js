
document.getElementById('dice').addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const diceImage = `./img/${randomNumber}.png`;
    document.querySelector('#dice img').setAttribute('src', diceImage);
});
