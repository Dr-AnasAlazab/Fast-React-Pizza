import { useSelector } from 'react-redux'
import { formatCurrency } from '../../utils/helpers'
import { getCurrenQuantityById } from './cartSlice'
import DeleteItem from './DeleteItem'
import UpdateItemQuantity from './UpdateItemQuantity'

function CartItem({ item }) {
    const { pizzaId, name, quantity, totalPrice } = item
    const currentQuantity = useSelector(getCurrenQuantityById(pizzaId))

    return (
        <li className="flex items-center justify-between py-3 text-stone-800">
            <p className="mb-1 sm:mb-0">
                {quantity}&times; {name}
            </p>
            <div className="flex-raw flex items-center gap-2.5 md:gap-6">
                <p className="text-sm font-bold">
                    {formatCurrency(totalPrice)}
                </p>
                <UpdateItemQuantity
                    pizzaId={pizzaId}
                    currenQuantity={currentQuantity}
                />
                <DeleteItem pizzaId={pizzaId} />
            </div>
        </li>
    )
}

export default CartItem
