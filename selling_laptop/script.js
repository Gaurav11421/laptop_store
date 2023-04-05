// Get the cart overlay and its child elements
const cartOverlay = document.getElementById('cart-overlay');
const cart = document.getElementById('cart');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout-button');

// Get the login overlay and its child elements
const loginOverlay = document.getElementById('login-overlay');
const loginForm = document.querySelector('#login form');

// Get all "Add to Cart" buttons and add event listeners to them
const addToCartButtons = document.querySelectorAll('button[data-laptop-id]');
addToCartButtons.forEach(button => {
  button.addEventListener('click', event => {
    const laptopId = button.dataset.laptopId;
    const laptopName = document.querySelector(`#laptop${laptopId} h2`).textContent;
    const laptopPrice = document.querySelector(`#laptop${laptopId} p`).textContent;
    const cartItem = document.createElement('li');
    cartItem.innerHTML = `${laptopName} - ${laptopPrice}`;
    cartItems.appendChild(cartItem);
    const currentTotal = Number(cartTotal.textContent.replace('$', ''));
    const newTotal = currentTotal + Number(laptopPrice.replace('$', ''));
    cartTotal.textContent = `$${newTotal}`;
    cartOverlay.classList.remove('hidden');
  });
});

// Add event listener to the cart link to show/hide the cart overlay
const cartLink = document.getElementById('cart-link');
cartLink.addEventListener('click', event => {
  event.preventDefault();
  cartOverlay.classList.toggle('hidden');
});

// Add event listener to the login link to show/hide the login overlay
const loginLink = document.getElementById('login-link');
loginLink.addEventListener('click', event => {
  event.preventDefault();
  loginOverlay.classList.toggle('hidden');
});

// Add event listener to the login form to handle login submission
loginForm.addEventListener('submit', event => {
  event.preventDefault();
  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;
  // handle login authentication logic here
});

// Add event listener to the checkout button to handle checkout logic
checkoutButton.addEventListener('click', event => {
  // handle checkout logic here
});
