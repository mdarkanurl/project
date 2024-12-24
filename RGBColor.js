const generateRGBColor = () => {
    const r = Math.ceil(Math.random() * 255);
    const g = Math.ceil(Math.random() * 255);
    const b = Math.ceil(Math.random() * 255);
    
    return `rgb(${r}, ${g}, ${b})`;
}

const GeneratorColor = document.getElementById('GeneratorColor');
const colorBox = document.getElementById('colorBox');
const colorCode = document.getElementById('colorCode');

GeneratorColor.addEventListener('click', () => {
    colorBox.style.backgroundColor = generateRGBColor();
    colorCode.innerText = generateRGBColor();
})

colorBox.addEventListener('dblclick', test);

function test() {
    const copyText = document.createElement('input');
    colorBox.appendChild(colorBox);
    
}

