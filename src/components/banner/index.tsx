import Tag from '../tag'
import Button from '../button'

import { useGetFeaturedGameQuery } from '../../services/api'
import { Imagem, Precos, Titulo } from './styles'
import { parseToBrl } from '../../utils'
import Loader from '../Loader'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque</Tag>
        <div>
          <Titulo>{game?.name}</Titulo>
          <Precos>
            De <span>{parseToBrl(game.prices.old)}</span> <br />
            por apenas {parseToBrl(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="button"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar essa oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
