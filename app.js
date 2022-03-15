const good = document.getElementById('1');
const cheap = document.getElementById('2');
const fast = document.getElementById('3');


good.addEventListener('click', () => {
    if (cheap.checked && fast.checked) {
        fast.checked = false;
    } 
})

cheap.addEventListener('click', () =>  {
    if (good.checked && fast.checked) {
        good.checked = false;
    }
});

fast.addEventListener('click', () => {
    if (good.checked && cheap.checked) {
        cheap.checked = false;
    }
})
