import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { BsFillPencilFill } from 'react-icons/bs';
import User from './User';
import Button from './ui/Button';
import { useAuthContext } from './context/AuthContext';

function Navbar(props) {
    const {user, login, logout} = useAuthContext();

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
                {user && <Link to='/carts'>Carts</Link>}
                {user && user.isAdmin && (
                    <Link to='/products/new' className='text-2xl'>
                        <BsFillPencilFill />
                    </Link>)}
                {user && <User user={user} />}
                {user ? <Button text={'Logout'} onClick={logout}>Logout</Button> : <Button text={'Login'} onClick={login}>Login</Button>}
            </nav>
        </header>
    );
}

export default Navbar;