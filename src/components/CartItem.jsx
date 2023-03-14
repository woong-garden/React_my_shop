import React from 'react';
import { AiOutlineMinusSquare, AiDeleteBin5Fill, AiOutlinePlusSquare } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { addOrUpdateTocart, removeFromCart } from '../api/firebase';

const ICON_CLASS = 'transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1'

function CartItem({ product, product: { id, image, title, option, category, price, quantity }, uid }) {
    const handleMinus = () => {
        if(quantity < 2) return;
        addOrUpdateTocart(uid, {...product, quantity: quantity - 1})
    }
    const handlePlus = () => {
        addOrUpdateTocart(uid, {...product, quantity: quantity + 1})
    }
    const handleDelete = () => {
        removeFromCart(uid, id);
    }

    return (
        <li className='flex justify-between my-2 items-center'>
            <img className='w-24 md:w-48 rounded-lg' src={image} alt={title} /> 
            <div className='flex flex-1 justify-between ml-4'>
                <div className='basis-3/5'>
                    <p className='text-lg'>{title}</p>
                    <p className='text-xl font-bold text-brand'>{option}</p>
                    <p>{price}원</p>
                </div>
                <div className='text-2xl flex items-center'>
                    <AiOutlineMinusSquare className={ICON_CLASS}  onClick={handleMinus} />
                    <span>{quantity}</span>
                    <AiOutlinePlusSquare className={ICON_CLASS} onClick={handlePlus} />
                    <RiDeleteBin5Fill className='transition-all cursor-pointer hover:text-brand hover:rotate-12 hover:scale-105 mx-1'  onClick={handleDelete} />
                </div>
            </div>
        </li>
    );
}

export default CartItem