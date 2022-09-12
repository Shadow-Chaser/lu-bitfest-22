import React from 'react';
import StarRatings from 'react-star-ratings';
import './ProductCard.css';

const data = {
    "key": "B002RL8IYK",
    "category": "laptop",
    "name": "2M Shoes",
    "star": 4.5,
    "img": "https://i.ibb.co/PcdkPxT/revolt-164-6w-VEHf-I-unsplash-removebg-preview.png",
    "price": 17,
}

const ProductCard = (props) => {

    const { category, star, img, name, price } = data;

    return (
        <div id='card' className=" mx-2 my-1">
            {/* src="https://www.corsair.com/corsairmedia/sys_master/productcontent/CH-9300011-NA-M65_PRO_RGB_BLK_04.png" */}
            <div className="imgBox">
                <img src={img} alt="" className="mouse" />
            </div>

            <div className="contentBox">
                <h3>{name}</h3>
                <StarRatings
                    rating={star}
                    starDimension="20px"
                    starSpacing="6px"
                    starRatedColor='rgb(250, 237, 56)'
                    className='rating'
                />
                <h2 className="price">$ {price}</h2>
                <a href="#" className="buy">Buy Now</a>
            </div>

        </div>
    );
};

export default ProductCard;