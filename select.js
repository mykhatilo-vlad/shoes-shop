
const smallImages = document.querySelectorAll('.small-img');
const productImg = document.getElementById('ProductImg');

smallImages.forEach(img => {
    img.addEventListener('click', function() {
        productImg.src = this.src;
    });
});



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

const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu-list');

burgerMenu.addEventListener('click', () => {
  menu.classList.toggle('menu-list--active');
})

const buttonFilter = document.querySelector('.filter-btn');
const formGroup = document.querySelector('.form-group');

buttonFilter.addEventListener('click', () => {
  formGroup.classList.toggle('form-group--active');
})

