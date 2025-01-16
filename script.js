// Function to generate random color
function generateRandomColor() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change shape
function generateShape() {
    const shapeSelect = document.getElementById("shape-select");
    const selectedShape = shapeSelect.value;
    const shapeElement = document.getElementById("shape");

    // Clear any previous shapes
    shapeElement.className = ''; // Remove all classes
    shapeElement.classList.add(selectedShape); // Add the new selected shape class

    // Set random color
    const randomColor = generateRandomColor();
    shapeElement.style.backgroundColor = randomColor;

    // Display the color code
    const colorCodeElement = document.getElementById("color-code");
    colorCodeElement.textContent = randomColor;
}

// Function to copy color code to clipboard
function copyColorCode() {
    const colorCode = document.getElementById("color-code").textContent;
    navigator.clipboard.writeText(colorCode).then(() => {
        alert("Color code copied to clipboard!");
    });
}

// Event listener for the button to generate shape and color
document.getElementById("generate-btn").addEventListener("click", generateShape);

// Event listener for the button to copy color code
document.getElementById("copy-btn").addEventListener("click", copyColorCode);
