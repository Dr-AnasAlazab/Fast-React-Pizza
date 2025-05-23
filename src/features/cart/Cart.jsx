import LinkButton from '../../ui/LinkButton'
import Button from '../../ui/Button'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, getCart } from './cartSlice'
import EmptyCart from './EmptyCart'

function Cart() {
    const username = useSelector((store) => store.user.userName)
    const cart = useSelector(getCart)
    const dispatch = useDispatch()
    if (!cart.length) return <EmptyCart />
    return (
        <div className="px-4 py-3">
            <LinkButton to="/menu">&larr; Back to menu</LinkButton>

            <h2 className="mb-5 mt-7 text-2xl font-bold">
                Your cart, {username}
            </h2>

            <ul className="mt-3 flex flex-col divide-y divide-stone-300 border-b">
                {cart.map((item) => (
                    <CartItem item={item} key={item.pizzaId} />
                ))}
            </ul>

            <div className="flex items-center justify-between">
                <Button type="primary" to="/order/new">
                    Order pizzas
                </Button>
                <Button type="secondary" onClick={() => dispatch(clearCart())}>
                    Clear cart
                </Button>
            </div>
        </div>
    )
}

export default Cart
