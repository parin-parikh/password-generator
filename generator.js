const lowercase = document.getElementById('lowercaseCb');
const uppercase = document.getElementById('uppercaseCb');
const digit = document.getElementById('digitsCb');
const special = document.getElementById('specialsCb');
const slider = document.querySelector('input[type="range"]');
const events = [...document.querySelectorAll('input[type="checkbox"], button.generate')]
const sliderLength = document.querySelector('input[type="range"]');
const updateSliderValue = document.querySelector('div.range span');
const copyBtn = document.querySelector('div.password button');
const pass = document.querySelector('input[type="text"]');

function generate() {
    let dictionary = '';

    if(lowercase.checked) {
        dictionary += 'qwertyuiopasdfghjklzxcvbnm'
    }

    if(uppercase.checked) {
        dictionary += 'QWERTYUIOPASDFGHJKLZXCVBNM'
    }

    if(digit.checked) {
        dictionary += '1234567890'
    }

    if(special.checked) {
        dictionary += '!@#$%^&*()_+-={}[];<>:';
    }

    const length = slider.value;

    if(length < 1 || dictionary.length === 0) {
        return;
    }

    let password = '';
    for(let i = 0; i < length; i++) {
        const pos = Math.floor(Math.random() * dictionary.length);
        password += dictionary[pos];
    }

    document.querySelector('input[type="text"]').value = password;
}

events.forEach(elem => {
    elem.addEventListener('click', generate)
})

sliderLength.addEventListener('input', e => {
    updateSliderValue.innerHTML = e.target.value
    generate();
})

copyBtn.addEventListener('click', () => {
    const generatedPassword = pass.value;
    navigator.clipboard.writeText(generatedPassword).then(() => {
        copyBtn.innerHTML = 'Copied!';
        setTimeout(() => {
            copyBtn.innerHTML = 'Copy';
        }, 1000);
    })
})

generate();