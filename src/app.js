import { 
  incrementQty, 
  decrementQty
} from './helpers.js';

const incrButton = document.querySelector('#incr');
const decrButton = document.querySelector('#decr');
const qtyInput = document.querySelector('#qty');
const txtSubtotal = document.querySelector('#subtotal');
const priceInput = document.querySelector('#price');

incrButton.addEventListener('click', () => {
  qtyInput.value = incrementQty(qtyInput.value);
});

decrButton.addEventListener('click', () => {
  qtyInput.value = decrementQty(qtyInput.value);
});