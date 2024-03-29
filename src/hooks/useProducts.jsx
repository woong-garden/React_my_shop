import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getProducts as fetchProducts, addNewProduct } from '../api/firebase';

function useProducts(props) {
    const queryClient = useQueryClient();

    const productsQuery = useQuery(['products'], fetchProducts, { staleTime: 1000 * 60 });

    const addProduct = useMutation(({product, url}) => addNewProduct(product, url), {
        onSuccess: () => queryClient.invalidateQueries(['products']),
    });

    return {productsQuery, addProduct};
}

export default useProducts;