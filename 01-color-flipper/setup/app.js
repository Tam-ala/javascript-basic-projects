const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// make a random number
btn.addEventListener('click',()=> {
    // console.log(document.body);
    // get random number btwn 0-3
    // const randomNumber = 2;

    // example of getting number less than 1
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

// function for random number
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}