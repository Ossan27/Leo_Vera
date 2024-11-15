// script.js
let petalCount = 10;
let currentName = 'Vera';

document.addEventListener('DOMContentLoaded', () => {
    const daisy = document.getElementById('daisy');
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.transform = `rotate(${i * (360 / petalCount)}deg) translateY(-100px)`;
        daisy.appendChild(petal);
    }
});

function removePetal() {
    const daisy = document.getElementById('daisy');
    if (petalCount > 0) {
        daisy.removeChild(daisy.lastChild);
        petalCount--;
        document.getElementById('countdown').innerText = petalCount;
        toggleName();
        
    }
}

function toggleName() {
    currentName = currentName === 'Vera' ? 'Leo' : 'Vera';
    document.getElementById('name').innerText = currentName;
}