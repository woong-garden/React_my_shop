import React from 'react';
import useProducts from '../hooks/useProducts';
import ProductCard from './ProductCard';

function Products(props) {
    const {productsQuery: {isLoading, error, data: products}} = useProducts();

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4'>
                {products && products.map((product) => (
                <ProductCard key={product.id} product={product} />
                ))}
            </ul>
        </>
    );
}

export default Products;