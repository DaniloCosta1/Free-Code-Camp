const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    //get random number between 0 - 3
    const randonNumber = getRandonNumber();
    document.body.style.backgroundColor = colors[randonNumber];
    color.textContent = colors[randonNumber];
});

function getRandonNumber(){
    return Math.floor(Math.random()*colors.length);
};