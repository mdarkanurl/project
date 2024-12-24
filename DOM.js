const body = document.getElementById('body');
const button = document.querySelectorAll('li');
/*
const redcolor = document.querySelector('.red');
const greenColor = document.querySelector('.green');
const blackColor = document.querySelector('.black');
const pinkColor = document.querySelector('.pink');
const blueColor = document.querySelector('.blue');

redcolor.addEventListener('click', function() {
    body.style.backgroundColor = 'red';
})

greenColor.addEventListener('click', function() {
    body.style.backgroundColor = 'green';
})

blackColor.addEventListener('click', function() {
    body.style.backgroundColor = 'black';
})

pinkColor.addEventListener('click', function() {
    body.style.backgroundColor = 'pink';
})

blueColor.addEventListener('click', function() {
    body.style.backgroundColor = 'blue';
}) 

button.forEach(value => {
    value.addEventListener('click', function(){
        let className = this.classList.value
        body.style.backgroundColor = className;
    });
}); */


button.forEach(value => {
    value.addEventListener('click', function(){
        let className = this.classList[0];
        let color = "";
        if (className === 'red') {
            color = 'red';
        };
        if (className === 'green') {
            color = 'green';
        };
        if (className === 'blue') {
            color = 'blue';
        };
        if (className === 'pink') {
            color = 'pink';
        };
        if (className === 'black') {
            color = 'black';
        };
        if (className === 'purple') {
            color = 'purple';
        };
        if (className === 'navy') {
            color = 'navy';
        };
        body.style.backgroundColor = color;
    });
});