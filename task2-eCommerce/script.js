let currentProductId = null;

const products = [
    { 
        id: 1, 
        name: 'Tablet', 
        description: 'Upto 1 TB Memory Card Supported Capacity', 
        price: 300, 
        category: 'electronics', 
        image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTcEB_raxKQ-V63DK1T4jUGeeCBs1auLsBJ9QvvZJt6fCYcV1kUOKrb3H6jGgxE8zY04IStrRyzYJeyxdmWpx2YX1I7nXg8fD_n99nQVvBChZ5QPFdEa-ehRMU', 
        reviews: [] 
    },
    { 
        id: 2, 
        name: 'Wireless Headphones', 
        description: 'Wirelessly stream high-quality sound from your smartphone without messy cords', 
        price: 50, 
        category: 'electronics', 
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQWP-MrJ9n-h5gHntn93hfbaTcyRuL3mFhV2Fzd91UlrpLStWPEvYmLIXwWNw-_-ysfKa_E2zx5rpjDU_kfY6vyhyG96KkePLUl6jRpjKXZ6Q_C6GLDa1RA', 
        reviews: [] 
    },
    { 
        id: 3, 
        name: 'Sneakers', 
        description: 'A pair of round toe cream-coloured, has regular styling, lace-ups detail', 
        price: 20, 
        category: 'fashion', 
        image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTZq5x5YYRNlZVH8I0V2NKkgQCCXpSV63sWtk8katDp0Ez04MvHBP38DH6DrUc8T0xBGXE8irolTEWNTV67sIlsFRhrLb9HKwd-4lOyHZs3GqzU7l3v-UXSSV4', 
        reviews: [] 
    },
    { 
        id: 4, 
        name: 'Gas Stove', 
        description: 'Toughened Glass Top, Frameless gas stoves.', 
        price: 40, 
        category: 'home', 
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ81DfE6sRbHYk38KSvVTxTMwgHV_Cwb6Sk1lMTVinbGZj79tgwW5Qbh8qPPHdTkmuZXB7t4KZSU9viFHm7qjmNNAuJEsVTEkvpwYv4ocC9', 
        reviews: [] 
    },
    { 
        id: 5, 
        name: 'Speaker', 
        description: 'Smart speaker with loud sound, balanced bass, crisp vocals and Alexa.', 
        price: 40, 
        category: 'electronics', 
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQP3pVb6ihCiTvJYQDkHWUZoMsfIcLxgJd00ksGPKkUQ0eXrQx4qeE4RvGkD5SkGh_Q49xpMjqrTi-3ydekXyZcIo3z5Xs_gMKTP6ODejfhBs-yzenNjjVi', 
        reviews: [] 
    },
    { 
        id: 6, 
        name: 'Keyboard', 
        description: 'Zebronics K24 USB Keyboard offers long-lasting performance with 8M keystrokes.', 
        price: 60, 
        category: 'electronics', 
        image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRPkFj2CzAmpyZpILg1Jgd72r243O-5K3jcOFfb_lv0cNOBYmOIun7iseMgLbd9-KjSOJFu61vrzWsFcFo4dj2XRoYfPn8qOOLmemOGFzcZaVE4eF44tiky', 
        reviews: [] 
    },
    { 
        id: 7, 
        name: ' Kitchen Rack', 
        description: 'Multipurpose and stylish organisation solution', 
        price: 40, 
        category: 'home', 
        image: 'https://m.media-amazon.com/images/G/31/apparel/rcxgs/tile._CB483369979_.gif', 
        reviews: [] 
    },
    { 
        id: 8, 
        name: 'Digital Mens Watch', 
        description: 'Casio G-Shock Classic Analog-Digital Mens Watch Gm2100-1A', 
        price: 20, 
        category: 'fashion', 
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQx0VMdPRYBoyLpDlVK2yNNKYRUVFvkxDfDJ6u7pcp6Ok2L1LLILSpANJ_s3KJ8K2TaXYczAmgzh55T6M_y0SJHhVphwsghZue7p5jEPzdbjDLrG18OhwABJw', 
        reviews: [] 
    }
];

let cart = [];

// Function to display products
// function displayProducts(searchTerm = '', category = 'all') {
//     console.log('Displaying products...'); // Log when function is called
//     const productList = document.getElementById('product-list');
//     productList.innerHTML = '';

//     const filteredProducts = products.filter(product => 
//         (product.name.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === '') &&
//         (product.category === category || category === 'all')
//     );

//     console.log('Filtered products:', filteredProducts); // Log filtered products

//     filteredProducts.forEach(product => {
//         const productElement = document.createElement('div');
//         productElement.className = 'product';
//         productElement.innerHTML = `
//             <img src="${product.image}" alt="${product.name}">
//             <h3>${product.name}</h3>
//             <p>${product.description}</p>
//             <p>Price: $${product.price}</p>
//             <button onclick="showProductDetails(${product.id})">View Details</button>
//         `;
//         productList.appendChild(productElement);
//     });
// }

function displayProducts(searchTerm = '', category = 'all') {
    const productList = document.getElementById('product-list');
    if (!productList) {
        console.error('Element with ID "product-list" not found!');
        return;
    }

    productList.innerHTML = '';
    products
        .filter(product => 
            (product.name.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === '') &&
            (product.category === category || category === 'all')
        )
        .forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product';
            productElement.innerHTML = `
                <img src="${product.image}" height="50vh" width="50vw" max-width: 60%; max-height: 50%;  alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
                <button onclick="showProductDetails(${product.id})">View Details</button>
            `;
            productList.appendChild(productElement);
        });
}

function displayProductReviews(productId) {
    const product = products.find(p => p.id === productId);
    const reviewList = document.getElementById('product-review-list');
    reviewList.innerHTML = '';

    (product.reviews || []).forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review';
        reviewElement.innerHTML = `
            <p>${review.reviewText}</p>
            <p>Rating: ${'⭐'.repeat(review.rating)}</p>
        `;
        reviewList.appendChild(reviewElement);
    });
}

function submitProductReview(productId) {
    const reviewText = document.getElementById('product-review-text').value;
    const rating = parseInt(document.getElementById('product-rating-input').value);
    
    const product = products.find(p => p.id === productId);
    product.reviews.push({ reviewText, rating });

    document.getElementById('product-review-text').value = '';
    document.getElementById('product-rating-input').value = 5;

    displayProductReviews(productId);
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        alert(`${product.name} has been added to the cart!`);
        updateCartDisplay();
    }
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach((product, index) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <p>${product.name} - $${product.price}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
    }

    const cartTotal = cart.reduce((total, product) => total + product.price, 0);
    document.getElementById('cart-total').innerText = `Total: $${cartTotal}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("Thank you for your purchase!");
    cart = [];
    updateCartDisplay();
}


// Search and filter
document.getElementById('search-bar').addEventListener('input', (e) => {
    displayProducts(e.target.value, document.getElementById('category-filter').value);
});

document.getElementById('category-filter').addEventListener('change', (e) => {
    displayProducts(document.getElementById('search-bar').value, e.target.value);
});


//checkout button
document.getElementById('checkout-button').addEventListener('click', () => {
    alert(`Total amount: $${cart.reduce((total, item) => total + item.price, 0)}`);
    cart = [];
    displayCart();
});

document.getElementById('checkout-button').addEventListener('click', () => {
    toggleModal(true);
});

//toggle modal
function toggleModal(show) {
    document.getElementById('checkout-modal').style.display = show ? 'flex' : 'none';
}

//form submission
document.getElementById('checkout-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
    toggleModal(false);
});



function showProductDetails(productId) {
    currentProductId = productId;
    const product = products.find(p => p.id === productId);
    if (!product) return;

    //product details in the modal
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-name').innerText = product.name;
    document.getElementById('product-description').innerText = product.description;
    document.getElementById('product-price').innerText = `Price: $${product.price}`;

    displayProductReviews(productId);
    toggleProductModal(true);
}

function toggleProductModal(show) {
    document.getElementById('product-details-modal').style.display = show ? 'flex' : 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
});
