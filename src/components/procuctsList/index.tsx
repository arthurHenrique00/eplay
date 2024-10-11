import Product from '../product'
import { Container, List } from './styles'
import { parseToBrl } from '../../utils'
import Loader from '../Loader'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games?: Game[]
  id?: string
  isLoading: boolean
}

const ProductList = ({ background, title, games, id, isLoading }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(parseToBrl(game.prices.current))
    }

    return tags
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <Container id={id} background={background}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {games &&
            games.map((g) => (
              <li key={g.id}>
                <Product
                  id={g.id}
                  category={g.details.category}
                  desc={g.description}
                  image={g.media.thumbnail}
                  infos={getGameTags(g)}
                  system={g.details.system}
                  title={g.name}
                />
              </li>
            ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductList
