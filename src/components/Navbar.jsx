import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { BsFillPencilFill } from 'react-icons/bs';

function Navbar(props) {
    return (
        <header className='flex justify-between border-b border-gray-300 p-4'>
            <Link to='/' className='flex item-center text-4xl '>
                <FiShoppingBag className='text-brand'/>
                <h1 className='text-3xl'>Shop</h1>
            </Link>
            <nav className='flex items-center gap-4 font-semibold'>
                <Link to='/products'>
                    Products
                </Link>
                <Link to='/carts'>Carts</Link>
                <Link to='/products/new' className='text-2xl'>
                    <BsFillPencilFill />
                </Link>
                <button>Login</button>
            </nav>
            
        </header>
    );
}

export default Navbar;