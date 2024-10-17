import React, { useState } from 'react';
import '../style/products.css';
import { Link } from 'react-router-dom';

const Products = ({ cart, setCart }) => {  // Use cart and setCart from props
    const [selectedSize, setSelectedSize] = useState({});
    const [quantities, setQuantities] = useState({});

    const handleSizeChange = (id, size) => {
        setSelectedSize(prevState => ({ ...prevState, [id]: size }));
    };

    const handleQuantityChange = (id, quantity) => {
        setQuantities(prevState => ({ ...prevState, [id]: quantity }));
    };

    const handleAddToCart = (product) => {
        const size = selectedSize[product.id];
        const quantity = quantities[product.id];

        if (!size || !quantity) {
            alert(`Please select a size and quantity for ${product.name}`);
            return;
        }

        const item = { ...product, size, quantity };

        // Add item to the cart
        setCart(prevCart => [...prevCart, item]);

        alert(`${product.name} (Size: ${size}, Qty: ${quantity}) added to cart!`);
    };

    const products = [
        { id: 1, name: 'T-shirt', price: '$20', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWTTYqo7s_Qg19u_TQOKRalxeogCLhsO7thg&s' },
        { id: 2, name: 'Jeans', price: '$40', image: 'https://found.store/cdn/shop/files/baggy-jeans-blue-lacy-found-2-1.jpg?v=1714676802' },
        { id: 3, name: 'Sneakers', price: '$60', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeRkdot1FBXC1HuWgJfA6VYGu3m4d-fM6mfw&s' },
        {id: 4, name: 'Jacket', price: '$80', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaHa_o4askCud1WJWZIovvH0g2ORseUVBLUw&s' },
        { id: 5, name: 'Cap', price: '$15', image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/cap/c/y/m/free-latest-side-ny-baseball-cap-highever-original-imagnm8fvyf9jbpv.jpeg?q=90&crop=false' },
        { id: 6, name: 'Dress', price: '$70', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmUWF79k157wo_AbHQ_XbYxROhmRFNBaVWSQ&s' },
        { id: 7, name: 'Dress', price: '$70', image: 'https://fuacare.com/wp-content/uploads/2022/11/Dress.jpeg' },
        { id: 8, name: 'Dress', price: '$70', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWSBl1gyIwr41wNRih69x92sRM6eemj4CQgQ&s' },
        { id: 9, name: 'shoes', price: '$40', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOpnr6L3H_PXWucxhz2bayAlVc3T40s_HLcg&s' },
        { id: 10, name: 'jacket', price: '$90', image: 'https://membersonly.com/cdn/shop/files/MM070111-L-GRY-4_e0631adf-f262-40e1-ac08-a1e54ad7fdc4.jpg?v=1710862477' },
        { id: 11, name: 'shoes', price: '$120', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn004wIa4rq_6UUzhw3dxzEcbeskGSGvx9fw&s' },
        { id: 12, name: 'shoes', price: '$70', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbfAwgyCbEx7jzwy6n3opsII4VnQ20k3qy_w&s' },
        { id: 13, name: 'T-shirt', price: '$40', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDDUk-f9qG5hM0THWwHGTyEBChlbvk7o5Bg&s' },
        { id: 14, name: 'jeans', price: '$50', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlBaXblI95fOfFfSJaNu7TXuhMkyV4WmepYA&s' },
        { id: 15, name: 'shirt', price: '$70', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRot7iP_wBr2iD7f3Oat0nGseehFNHmLKzlBQ&s' },
        
    ];

    return (
        <div className="products-page">
            <h1 className="products-title">Our Collection</h1>
            <div className="products-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-price">{product.price}</p>

                        <select
                            className="size-select"
                            value={selectedSize[product.id] || ""}
                            onChange={(e) => handleSizeChange(product.id, e.target.value)}
                        >
                            <option value="" disabled>Select Size</option>
                            <option value="S">Small</option>
                            <option value="M">Medium</option>
                            <option value="L">Large</option>
                            <option value="XL">X-Large</option>
                        </select>

                        <input
                            type="number"
                            className="quantity-input"
                            min="1"
                            value={quantities[product.id] || ""}
                            placeholder="Qty"
                            onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                        />

                        <button 
                            className="product-button"
                            onClick={() => handleAddToCart(product)}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>

            <div className="cart-preview">
                <h2>Cart Preview</h2>
                {cart.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>
                                {item.name} - {item.price} - Size: {item.size} - Qty: {item.quantity}
                            </li>
                        ))}
                    </ul>
                )}
                <Link to="/cart">Go to Cart</Link> {/* Link to the cart page */}
            </div>
        </div>
    );
};

export default Products;
