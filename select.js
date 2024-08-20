
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
