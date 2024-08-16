function generateNumber() {
    const randomNumber = Math.floor(Math.random() * 1000) + 1; // Generate a number between 1 and 100
    document.getElementById('number').innerText = randomNumber;
}
