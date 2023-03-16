import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { addOrUpdateTocart, getCart, removeFromCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';

function useCarts(props) {
    const { uid } = useAuthContext();
    const queryClient = useQueryClient();

    const cartQuery = useQuery(['carts', uid || ''], () => getCart(uid),{
        enabled: !!uid,
    });

    const addOrUpdateItem = useMutation(
        (product) => addOrUpdateTocart(uid, product),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['carts',uid])
            },
        }
    );

    const removeItem = useMutation((id) => removeFromCart(uid, id), {
        onSuccess: () => {
            queryClient.invalidateQueries(['carts', uid]);
        },
    });

    return {cartQuery, removeItem, addOrUpdateItem } 
}

export default useCarts;