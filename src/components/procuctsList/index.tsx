import Product from '../product'
import { Container, List } from './styles'
import { Game } from '../../pages/Home'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
  id?: string
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ProductList = ({ background, title, games, id }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(formataPreco(game.prices.current))
    }

    return tags
  }

  return (
    <Container id={id} background={background}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {games.map((g) => (
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
