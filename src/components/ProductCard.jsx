import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductCard({ product, product: { id, image, title, category, price } }) {

    const navigate = useNavigate();
    const ProductDetail = () => {
        navigate(`/products/${id}`, {state: {product}})
    }
    return (
        <li onClick={ProductDetail} className='rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:scale-105'>
            <img className='w-full' src={image} alt={title} />
            <h3 className='truncate mt-2 px-2 text-lg'>{title}</h3>
            <div className='my-3 px-2 flex justify-between items-center'>
                <p className='text-gray-600'>{category}</p>
                <p className='font-bold'>{`${price}원`}</p>
            </div>
            
        </li>
    );
}

export default ProductCard;