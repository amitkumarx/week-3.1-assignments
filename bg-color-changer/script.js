const bgPanelDiv = document.getElementById('bg-panel');
function changeBackgroundColor(color) {
    bgPanelDiv.style.background = color;
};


const colorBox = document.getElementById('input-color-box');
console.log(colorBox);
function colorCheck() {
    const colorInput = document.getElementById("custom-color-inputBar").value;
    console.log(colorInput);
    colorBox.style.background = colorInput;
    
};

const menuPanel = document.getElementById('custom-color-panel');

function togglePanel() {
    if(menuPanel.classList.contains('closed')) {
        menuPanel.classList.remove('closed');
        menuPanel.classList.add('opened');
    }
    else {
        menuPanel.classList.remove('opened');
        menuPanel.classList.add('closed');
    }
};

function selectColor() {
    if(menuPanel.classList.contains('opened')) {
        menuPanel.classList.remove('opened');
        menuPanel.classList.add('closed');
    }
    bgPanelDiv.style.background = document.getElementById("custom-color-inputBar").value;
    document.getElementById("custom-color-inputBar").value = "";
    colorBox.style.background = #ffffff;
};