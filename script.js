function generateRandomColor() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generateShape() {
    const shapeSelect = document.getElementById("shape-select");
    const selectedShape = shapeSelect.value;
    const shapeElement = document.getElementById("shape");

    shapeElement.className = '';
    shapeElement.classList.add(selectedShape);

    const randomColor = generateRandomColor();
    shapeElement.style.backgroundColor = randomColor;

    const colorCodeElement = document.getElementById("color-code");
    colorCodeElement.textContent = randomColor;
}

function copyColorCode() {
    const colorCode = document.getElementById("color-code").textContent;
    navigator.clipboard.writeText(colorCode).then(() => {
        alert("Color code copied to clipboard!");
    });
}

document.getElementById("generate-btn").addEventListener("click", generateShape);


document.getElementById("copy-btn").addEventListener("click", copyColorCode);
