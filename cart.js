// cart


const plusButtons = document.querySelectorAll('.plus');
const minusButtons = document.querySelectorAll('.minus');

const totalSumSpan = document.querySelector('#totalSum');
 
function updateTotalSum() {
  let totalSum = 0;
  const allSums = document.querySelectorAll('.sum');
  
  allSums.forEach(sum => {
    totalSum += parseInt(sum.textContent, 10);
  });

 
  totalSumSpan.textContent = totalSum + ' грн';
}

plusButtons.forEach((plusButton, index) => {
  plusButton.addEventListener('click', function() {
    const number = document.querySelectorAll('.number')[index];
    const sum = document.querySelectorAll('.sum')[index];

    let currentValue = parseInt(number.textContent, 10);
    number.textContent = currentValue + 1;

    let sumValue = parseInt(sum.textContent, 10);
    let price = 810; 
    sum.textContent = sumValue + price;

    updateTotalSum();
  });
});

minusButtons.forEach((minusButton, index) => {
  minusButton.addEventListener('click', function() {
    const number = document.querySelectorAll('.number')[index];
    const sum = document.querySelectorAll('.sum')[index];

    let currentValue = parseInt(number.textContent, 10);
    if (currentValue > 1) {  
      number.textContent = currentValue - 1;

      let sumValue = parseInt(sum.textContent, 10);
      let price = 810;  
      sum.textContent = sumValue - price;

     
      updateTotalSum();
    }
  });
});

updateTotalSum();


document.querySelectorAll('.remove').forEach((removeButton) => {
    removeButton.addEventListener('click', function() {
      const productElement = this.closest('.cart-details');  
  
      
      productElement.remove();
  
     
      updateTotalSum();
    });
  });
  
  updateTotalSum();

