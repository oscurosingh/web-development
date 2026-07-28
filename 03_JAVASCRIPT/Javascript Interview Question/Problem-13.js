// The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

// function calculateTotal(cartItems) {
//     for (let i = 0; i < cartItems.length; i++) {
//         let item = cartItems[i];
//         item.totalPrice = item.price * item.quantity; // Calculate total price for each item
//     }

// }
function calculateTotal(cartItems) {
    totalCost = 0; // Initialize total cost variable
    for (let i = 0; i < cartItems.length; i++) {
        let item = cartItems[i];
        totalCost += item.price * item.quantity; // Calculate total price for each item
        
    }
  return totalCost; // Return the total cost of all items in the cart
}

let cartItems = [
    { id: 1, name: 'Laptop', price: 999, quantity: 1 },
    { id: 2, name: 'Smartphone', price: 699, quantity: 2 },
    { id: 3, name: 'Shoes', price: 120, quantity: 3 },
    { id: 4, name: 'Watch', price: 250, quantity: 1 },
    { id: 5, name: 'Headphones', price: 199, quantity: 2 }
];

// calculateTotal(cartItems);

// console.log(cartItems);
console.log(calculateTotal(cartItems)); // Output: 3405
