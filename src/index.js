// ITERATION 1

function updateSubtotal(product) {
  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input').value;

  const priceValue = parseInt(price.textContent);
  const quantityValue = parseInt(quantity);

  const subTotal = priceValue * quantityValue;

  const subTotalDisplay = product.querySelector('.subtotal span');
  subTotalDisplay.innerText = `${subTotal}`

  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll('.product')

  let total = 0;
  
  for(let i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i])
  }

  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerText = `${total}`
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  // console.log('The target in remove is:', target);
  //... your code goes here

  const targetNode = target.parentNode.parentNode;
  targetNode.parentNode.removeChild(targetNode)
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const name = document.querySelector('.create-product input[type="text"]').value;
  const productPrice = document.querySelector('.create-product input[type="number"]').value;
  
  const product = `<td class="name">
                      <span>${name}</span>
                    </td>
                    <td class="price">$<span>${productPrice}</span></td>
                    <td class="quantity">
                      <input type="number" value="0" min="0" placeholder="Quantity" />
                    </td>
                    <td class="subtotal">$<span>0</span></td>
                    <td class="action">
                      <button class="btn btn-remove">Remove</button>
                    </td>`;

  const tableBody = document.getElementsByTagName('tbody')[0];
  const tr = document.createElement('tr');
  tr.setAttribute('class', 'product');
  tr.innerHTML = product;
  tr.querySelector('.btn.btn-remove').addEventListener('click', removeProduct)
 
  tableBody.appendChild(tr)
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  //... your code goes here
  const btnCreate = document.getElementById('create');
  btnCreate.addEventListener('click', createProduct)
  
  const removeBtn = document.querySelectorAll('.btn.btn-remove');
  for(let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', removeProduct)
  }
});
