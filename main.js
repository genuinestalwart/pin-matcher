let pin = 0;

window.addEventListener('load', () => {
    document.getElementById('generate-btn').addEventListener('click', () => {
        const generatedPin = document.getElementById('generated-pin');
        generatedPin.value = generate();
    });

    document.getElementById('backspace').addEventListener('click', () => {
        const typePin = document.getElementById('type-pin');
        if (typePin.value.length > 0) {
            typePin.value = typePin.value.slice(0, typePin.value.length - 1);
        }
    });

    document.getElementById('clear').addEventListener('click', () => {
        const typePin = document.getElementById('type-pin');
        typePin.value = "";
    });

    document.getElementById('submit-pin').addEventListener('click', () => {
        const typePin = document.getElementById('type-pin');
        const tryLeft = document.getElementById('try-left');

        if (pin + '' == typePin.value && parseInt(tryLeft.innerText) > 0) {
            document.getElementById('not-matched').style.display = 'none';
            document.getElementById('matched').style.display = 'block';
            tryLeft.innerText = '3';
        } else {
            document.getElementById('matched').style.display = 'none';
            document.getElementById('not-matched').style.display = 'block';

            if (parseInt(tryLeft.innerText) > 0) {
                tryLeft.innerText = parseInt(tryLeft.innerText) - 1;
            }
        }
    });
});

function generate() {
    pin = Math.floor(Math.random() * 10000);

    if (pin > 999) {
        return pin;
    } else {
        return generate();
    }
}

function type(num) {
    const typePin = document.getElementById('type-pin');
    typePin.value = typePin.value + num;
}