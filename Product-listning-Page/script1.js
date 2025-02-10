// Sample product data with prices in INR
const products = [
    { id: 1, name: 'Laptop', category: 'electronics', price: 12000, rating: 4.5, image: 'laptop' },
    { id: 2, name: 'T-Shirt', category: 'clothing', price: 2000, rating: 3.8, image: 't-shirt' },
    { id: 3, name: 'Sofa', category: 'furniture', price: 20000, rating: 4.7, image: 'sofa' },
    { id: 4, name: 'Headphones', category: 'electronics', price: 5000, rating: 4.0, image: 'headphones' },
    { id: 5, name: 'Jeans', category: 'clothing', price: 3500, rating: 4.2, image: 'pant' },
    { id: 6, name: 'Coffee Table', category: 'furniture', price: 8000, rating: 3.5, image: 'Coffee Table' },
    { id: 7, name: 'Smartphone', category: 'electronics', price: 15000, rating: 4.8, image: 'smartphone ' },
    { id: 8, name: 'Jacket', category: 'clothing', price: 5000, rating: 4.1, image: 'jacket' },
    { id: 9, name: 'Washing Machine', category: 'electronics', price: 22000, rating: 4.6, image: 'washing-machine' },
    { id: 10, name: 'Recliner Chair', category: 'furniture', price: 15000, rating: 4.3, image: 'chair' },
    { id: 11, name: 'Bluetooth Speaker', category: 'electronics', price: 4500, rating: 4.2, image: 'speker' },
    { id: 12, name: 'Winter Coat', category: 'clothing', price: 6000, rating: 4.5, image: 'winter coat' }
];

// References to DOM elements
const categorySelect = document.getElementById('category');
const priceSelect = document.getElementById('price');
const sortSelect = document.getElementById('sort');
const productList = document.querySelector('.product-list');

// Function to display products
function displayProducts(filteredProducts) {
    productList.innerHTML = '';

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">₹${product.price}</p>
            <p class="rating">Rating: ${product.rating} &#9733;</p>
        `;
        
        productList.appendChild(productCard);
    });
}

// Function to filter products
function filterProducts() {
    let filteredProducts = [...products];

    // Filter by category
    const category = categorySelect.value;
    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }

    // Filter by price range
    const price = priceSelect.value;
    if (price !== 'all') {
        if (price === 'low') {
            filteredProducts = filteredProducts.filter(product => product.price <= 5000);
        } else if (price === 'medium') {
            filteredProducts = filteredProducts.filter(product => product.price > 5000 && product.price <= 15000);
        } else if (price === 'high') {
            filteredProducts = filteredProducts.filter(product => product.price > 15000);
        }
    }

    // Sort products
    const sortBy = sortSelect.value;
    if (sortBy === 'rating') {
        filteredProducts.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'price') {
        filteredProducts.sort((a, b) => a.price - b.price);
    }

    // Display the filtered and sorted products
    displayProducts(filteredProducts);
}

// Event listeners for filtering and sorting
categorySelect.addEventListener('change', filterProducts);
priceSelect.addEventListener('change', filterProducts);
sortSelect.addEventListener('change', filterProducts);

// Initial display of products
displayProducts(products);