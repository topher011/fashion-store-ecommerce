
import React from 'react';
import '../style/blogsection.css';

const BlogSection = () => {
    return (
        <section className="blog-section">
            <h2>Fashion Insights</h2>
            <div className="blog-container">
                <div className="blog-post">
                    <img src="https://i0.wp.com/fashionbydonika.com/wp-content/uploads/2024/06/Untitled-design.png?w=940&ssl=1" alt="Blog Post 1" />
                    <h4>Top 10 Fashion Trends of 2024</h4>
                    <p>Stay ahead of the curve with the latest trends taking over the fashion world this year.</p>
                </div>
                <div className="blog-post">
                    <img src="https://vjvnow.com/cdn/shop/articles/style-guide-business-casual-wear-for-men-vjv-now.png?v=1721129486" alt="Blog Post 2" />
                    <h4>How to Style Casual Outfits Like a Pro</h4>
                    <p>Get the perfect balance between comfort and style with these casual wear tips.</p>
                </div>
                <div className="blog-post">
                    <img src="https://media.restless.co.uk/uploads/2021/06/what_is_a_capsule_wardrobe.jpg" alt="Blog Post 3" />
                    <h4>Fashion Essentials Every Wardrobe Needs</h4>
                    <p>These timeless pieces will keep your wardrobe fresh and fashionable year-round.</p>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
