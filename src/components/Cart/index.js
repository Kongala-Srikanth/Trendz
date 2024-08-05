import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0

      // TODO: Update the functionality to remove all the items in the cart

      const onRemoveAllItems = () => removeAllCartItems()

      const totalBill = () => {
        let totalBillAmount = 0
        cartList.map(each => (totalBillAmount += each.quantity * each.price))
        const {quantity, price} = cartList[0]

        return (
          <div className="check-out-container">
            <div>
              <h1 className="total-price-heading">
                Order Total:{' '}
                <span className="total-price">Rs {totalBillAmount}/-</span>
              </h1>
              <p className="total-items">{cartList.length} Items in cart</p>
              <button type="button" className="check-out">
                Checkout
              </button>
            </div>
          </div>
        )
      }

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button
                  type="button"
                  className="hide-btn"
                  onClick={onRemoveAllItems}
                >
                  Remove All
                </button>
                <CartListView />
                {totalBill()}
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
