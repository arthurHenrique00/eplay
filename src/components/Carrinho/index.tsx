import { useNavigate } from 'react-router-dom'
import Button from '../button'
import {
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Quantity,
  Sidebar
} from './styles'
import Tag from '../tag'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { getTotalPrice, parseToBrl } from '../../utils'
import { Game } from '../../pages/Home'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((i) => (
            <CartItem key={i.id}>
              <img src={i.media.thumbnail} alt={i.name} />
              <div>
                <h3>{i.name} </h3>
                <Tag>{i.details.category}</Tag>
                <Tag>{i.details.system}</Tag>
                <span>{parseToBrl(i.prices.current)}</span>
              </div>
              <button onClick={() => removeItem(i.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} Jogos no carrinho</Quantity>
        <Prices>
          Total de {parseToBrl(getTotalPrice(items))}{' '}
          <span>Em até 6x sem juros</span>
        </Prices>
        <Button
          onClick={goToCheckout}
          title="clique aqui para continuar com a compra"
          type="button"
        >
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
