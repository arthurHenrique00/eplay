import { Game } from '../../pages/Home'
import Button from '../button'
import Tag from '../tag'
import { Banner } from './styles'
import { formataPreco } from '../procuctsList'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <div>
          <h2>Hogwarts Legacy</h2>
          <p>
            {game.prices.discount && (
              <span>De {formataPreco(game.prices.old)}</span>
            )}
            {game.prices.current && (
              <>Por {formataPreco(game.prices.current)}</>
            )}
          </p>
          {game.prices.current && (
            <Button
              type="button"
              title="clique aqui para adicionar o jogo"
              variant="primary"
              onClick={addToCart}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </div>
      </div>
    </Banner>
  )
}

export default Hero
