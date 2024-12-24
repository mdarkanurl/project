document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
        'Keep learing, no matter how hard it\'s to keep on',
        'Having thing isn\'n exciting, get thing is exciting',
        'Smart people learn from other\'s mistake and dume people don\'t',
        'Life is up and dowm, so don\'t give up.',
        'Choice your own path.',
    ];

    const quotesDisplay = document.getElementById('quotes');
    const inputBox = document.getElementById('input_dox');
    const btn = document.getElementById('button');
    const resultDisplay = document.getElementById('result_div');

    btn.addEventListener('click', startTest);
    let currentQuote;
    let startTime;

    function startTest() {
        const randonIndex = Math.floor(Math.random() * quotes.length);
        currentQuote = quotes[randonIndex];
        quotesDisplay.innerHTML = currentQuote;
        inputBox.removeAttribute('disabled');
        inputBox.focus();
        startTime = new Date().getTime();
    }

    inputBox.addEventListener('input', checkInput);

    function checkInput() {
        let typedText = inputBox.value;
        inputBox.innerText = ' ';
        if(typedText === currentQuote) {
            const endTime = new Date().getTime();
            const takenTime = (endTime - startTime) / 1000;
            const wordsPerMinute = typedText.split(' ').length / takenTime * 60;
            inputBox.setAttribute('disabled', true);
            resultDisplay.innerHTML = `You typed at ${wordsPerMinute.toFixed(2)} words per minute.`;
            inputBox.value = '';
            
            
            
        }
        
    }
});