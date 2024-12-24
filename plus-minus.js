const plusBtn = document.getElementById('plusBtn');
const minusBtn = document.getElementById('minusBtn');
const countDisplay = document.getElementById('count');

let count = 0;

const updateBtn = (value) => {

// Plus Btn's Code


count = count + value;
    countDisplay.innerHTML = count;
    if(count >= 10) {
        plusBtn.setAttribute('disabled', true);
    } else {
        plusBtn.removeAttribute('disabled', false);
    }

// Minus Btn's Code


    countDisplay.innerHTML = count;
    if(count <= 0) {
        minusBtn.setAttribute('disabled', true);
    } else {
        minusBtn.removeAttribute('disabled', false);
    }


}

plusBtn.addEventListener('click', () => {
    updateBtn(1);
})

minusBtn.addEventListener('click', () => {
    updateBtn(-1);
})