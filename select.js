
document.querySelectorAll('.dropdown-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        const dropdownList = this.nextElementSibling;
        dropdownList.classList.toggle('dropdown-list--visible');
    });
});

document.querySelectorAll('.dropdown-list-item').forEach(function (listItem) {
    listItem.addEventListener('click', function () {
        const dropdownBtn = this.closest('.dropdown').querySelector('.dropdown-btn');
        dropdownBtn.innerText = this.innerText;
        this.closest('.dropdown-list').classList.remove('dropdown-list--visible');
    });
});



const smallImages = document.querySelectorAll('.small-img');
const productImg = document.getElementById('ProductImg');

smallImages.forEach(img => {
    img.addEventListener('click', function() {
        productImg.src = this.src;
    });
});


// cart

document.querySelector('.plus').addEventListener('click', function() {
    const number = document.querySelector('.number');
    let currentValue = parseInt(number.textContent, 10);
    number.textContent = currentValue + 1;
});

document.querySelector('.minus').addEventListener('click', function() {
    const number = document.querySelector('.number');
    let currentValue = parseInt(number.textContent, 10);
    number.textContent = currentValue - 1;
});


document.querySelector('.plus').addEventListener('click', function() {

    const number = document.querySelector('.number');
    const sum = document.querySelector('.sum');
    
    let sumValue = parseInt(sum.textContent, 10);
    let price = 810;
    sum.textContent = sumValue + price;

});

document.querySelector('.minus').addEventListener('click', function() {

    const number = document.querySelector('.number');
    const sum = document.querySelector('.sum');
    
    let sumValue = parseInt(sum.textContent, 10);
    let price = 810;
    sum.textContent = sumValue - price;

});

