// src/pages/Products.jsx
import React, { useState } from 'react';
import '../style/products.css';

const Products = () => {
    const [selectedSize, setSelectedSize] = useState({});

    const handleSizeChange = (id, size) => {
        setSelectedSize(prevState => ({ ...prevState, [id]: size }));
    };

    const products = [
        { id: 1, name: 'T-shirt', price: '$20', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWTTYqo7s_Qg19u_TQOKRalxeogCLhsO7thg&s' },
        { id: 2, name: 'Jeans', price: '$40', image: 'https://found.store/cdn/shop/files/baggy-jeans-blue-lacy-found-2-1.jpg?v=1714676802' },
        { id: 3, name: 'Sneakers', price: '$60', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeRkdot1FBXC1HuWgJfA6VYGu3m4d-fM6mfw&s' },
        { id: 4, name: 'Jacket', price: '$80', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaHa_o4askCud1WJWZIovvH0g2ORseUVBLUw&s' },
        { id: 5, name: 'Cap', price: '$15', image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/cap/c/y/m/free-latest-side-ny-baseball-cap-highever-original-imagnm8fvyf9jbpv.jpeg?q=90&crop=false' },
        { id: 6, name: 'Dress', price: '$70', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmUWF79k157wo_AbHQ_XbYxROhmRFNBaVWSQ&s' },
        { id: 6, name: 'Dress', price: '$70', image: 'https://fuacare.com/wp-content/uploads/2022/11/Dress.jpeg' },
        { id: 6, name: 'Dress', price: '$70', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWSBl1gyIwr41wNRih69x92sRM6eemj4CQgQ&s' },
        { id: 6, name: 'shoes', price: '$40', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOpnr6L3H_PXWucxhz2bayAlVc3T40s_HLcg&s' },
        { id: 6, name: 'jacket', price: '$90', image: 'https://membersonly.com/cdn/shop/files/MM070111-L-GRY-4_e0631adf-f262-40e1-ac08-a1e54ad7fdc4.jpg?v=1710862477' },
        { id: 6, name: 'shoes', price: '$120', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn004wIa4rq_6UUzhw3dxzEcbeskGSGvx9fw&s' },
        { id: 6, name: 'shoes', price: '$70', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbfAwgyCbEx7jzwy6n3opsII4VnQ20k3qy_w&s' },
        { id: 6, name: 'T-shirt', price: '$40', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDDUk-f9qG5hM0THWwHGTyEBChlbvk7o5Bg&s' },
        { id: 6, name: 'jeans', price: '$50', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlBaXblI95fOfFfSJaNu7TXuhMkyV4WmepYA&s' },
        { id: 6, name: 'shirt', price: '$70', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRot7iP_wBr2iD7f3Oat0nGseehFNHmLKzlBQ&s' },
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
                        
                        {/* Size Dropdown */}
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

                        <button 
                            className="product-button"
                            onClick={() => alert(`You selected ${selectedSize[product.id]} size for ${product.name}`)}
                        >
                            Shop Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
