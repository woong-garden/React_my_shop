import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';

function ProductDetail(props) {
    const {state: {product}} = useLocation();
    const [selected, setSelected] = useState(product.options && product.options[0]);

    const handleSelect = (e) => {
        setSelected(e.target.value)
    }

    const handleClick = () => {
        //장바구니에 추가
    }

    return (
        <>
            <p className='mx-12 mt-4 text-gray-700'>{product.category}</p>     
            <section className='flex flex-col md:flex-row p-4'>
                <img className='w-full px-4 basis-7/12' src={product.image} alt={product.title} />
                <div className='w-full basis-5/12 flex flex-col p-4'>
                    <h2 className='text-3xl font-bold py-2 '>{product.title}</h2>
                    <p className='text-2xl font-bold py-2 border-b border-gray-400'>{product.price}원</p>
                    <p className='py-4 text-lg'>{product.description}</p>
                    <div className='flex items-center'>
                        <label className='text-brand font-bold' htmlFor='select'>옵션:</label>
                        <select className='p-2 flex-1 m-4 border-2 border-dashed border-brand outline-none' id='select' onChange={handleSelect} value={selected}>
                            {product.options && product.options.map((option, index) => <option key={index}>{option}</option>)}
                        </select>
                    </div>
                    <Button text={'장바구니에 추가'} onClick={handleClick} />
                </div>
            </section>
        </>
    );
}

export default ProductDetail;