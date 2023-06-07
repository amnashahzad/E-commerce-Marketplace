// Sample product data
const products = [
    { id: 1, name: "Product 1", price: 9.99 },
    { id: 2, name: "Product 2", price: 14.99 },
    { id: 3, name: "Product 3", price: 19.99 }
  ];
  
  // Cart items array
  let cartItems = [];
  
  // Function to add a product to the cart
  function addToCart(name, price) {
    const item = {
      name: name,
      price: price
    };
    cartItems.push(item);
    updateCart();
  }
  
  // Function to update the cart UI
  function updateCart() {
    const cartItemsList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
  
    // Clear previous cart items
    cartItemsList.innerHTML = "";
  
    // Display updated cart items
    cartItems.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      cartItemsList.appendChild(li);
    });
  
    // Calculate and display total price
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
  }
  
  // Function to handle checkout
  function checkout() {
    // Code to process the checkout, e.g., redirect to payment gateway, etc.
    alert("Checkout functionality is not implemented yet!");
  }
  
  // JavaScript code for the checkout form
  document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Perform form validation
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var creditCard = document.getElementById('credit-card').value;
    var expiryDate = document.getElementById('expiry-date').value;
    var cvv = document.getElementById('cvv').value;

    if (name === '' || email === '' || address === '' || creditCard === '' || expiryDate === '' || cvv === '') {
      alert('Please fill in all the fields.');
      return;
    }

    // Form is valid, proceed with placing the order
    alert('Order placed successfully!');
    document.getElementById('checkout-form').reset(); // Clear form inputs
  });

  const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
  const navLinks = document.querySelector('.nav-links');

  mobileMenuIcon.addEventListener('click', function() {
    navLinks.classList.toggle('show');
  });