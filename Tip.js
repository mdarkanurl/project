// Select People
const peopleSum = document.getElementById('peopleSum');


// Increment By One
const plusSum = document.getElementById('plusSum');
let count = 1;
plusSum.addEventListener('click', () => {
    count++;
    peopleSum.innerHTML = count;
});

// Decrement By One
const minusSums = document.getElementById('minusSum');

minusSums.addEventListener('click', () => {
    if(count > 1) {
        count--;
        peopleSum.innerHTML = count;
    }
});

// Calculate
const calculate = document.getElementById('calculator');
calculate.addEventListener('click', () => {
    // Display Summary Tab
    document.querySelector('.total_per_person').style.display = 'block';

    // Calculating Tips

    const totalBill = parseInt(document.getElementById('totalBill').value);
    const tipMain = parseInt(document.getElementById('tipMain').value);
    let total = totalBill * (tipMain / 100);
    let finalPeople = peopleSum.innerHTML;


    // Display Total Bill and Total in Sunmary TAB
    document.getElementById('finalBill').innerHTML = totalBill;
    document.getElementById('tipAmount').innerHTML = total;
    const taxAmount = document.getElementById('taxAmount').innerHTML = (totalBill + 5) / 100;

    // Final Calculation
    document.getElementById('totalPerPerson').innerHTML = ((totalBill + total + taxAmount) / finalPeople).toFixed(2);

})