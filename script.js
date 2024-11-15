// script.js
let petalCount = 14;
let currentName = 'Vera';

document.addEventListener('DOMContentLoaded', () => {
    const daisy = document.getElementById('daisy');
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        if (i === petalCount - 1) {
            petal.classList.add('last-petal'); // Añade una clase específica al último pétalo
        }
        petal.style.transform = `rotate(${i * (360 / petalCount)}deg) translateY(-70%)`;
        daisy.appendChild(petal);
    }
});

function removePetal() {
    const daisy = document.getElementById('daisy');
    if (petalCount > 0) {
        const petals = daisy.getElementsByClassName('petal');
        const randomIndex = Math.floor(Math.random() * petals.length);
        daisy.removeChild(petals[randomIndex]);
        petalCount--;
        document.getElementById('countdown').innerText = petalCount;
        toggleName();

        if (petalCount === 0) {
            document.getElementById('name').classList.add('double-size');
        }
    }
}

function toggleName() {
    currentName = currentName === 'Vera' ? 'Leo' : 'Vera';
    document.getElementById('name').innerText = currentName;
}