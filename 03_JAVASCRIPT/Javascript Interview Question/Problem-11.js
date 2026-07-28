// The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.



function filterProducts(products, criterion) {
    // Use the filter method to create a new array with products that match the criterion
    return products.filter(product => {
        // Check if the product matches the criterion
        for (let key in criterion) {
            if (product[key] !== criterion[key]) {
                return false; // If any property doesn't match, exclude this product
            }
        }
        return true; // Include this product if all properties match
    });
}       


// Example usage:   

const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 999 },
    { id: 2, name: 'Smartphone', category: 'Electronics', price: 699 },
    { id: 3, name: 'Shoes', category: 'Fashion', price: 120 },
    { id: 4, name: 'Watch', category: 'Fashion', price: 250 },
    { id: 5, name: 'Headphones', category: 'Electronics', price: 199 }
];  

const criterion = { category: 'Electronics', price: 199 };

const filteredProducts = filterProducts(products, criterion);
console.log(filteredProducts); // Output: [{ id: 5, name: 'Headphones', category: 'Electronics', price: 199 }]