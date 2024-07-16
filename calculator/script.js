function appendValue(value) {
    const screen = document.getElementById('screen');
    screen.value += value;
}

function calculateResult() {
    const screen = document.getElementById('screen');
    try {
        screen.value = eval(screen.value);
    } catch {
        screen.value = 'Error';
    }
}

function clearScreen() {
    const screen = document.getElementById('screen');
    screen.value = '';
}
