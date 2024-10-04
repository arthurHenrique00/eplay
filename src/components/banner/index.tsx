import { Imagem, Precos, Titulo } from './styles'

import bannerimg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../tag'
import Button from '../button'
import { useEffect, useState } from 'react'
import { Game } from '../../pages/Home'
import { formataPreco } from '../procuctsList'
import { useGetFeaturedGameQuery } from '../../services/api'

const Banner = () => {
  const { data: game, isLoading } = useGetFeaturedGameQuery()

  if (!game) {
    return <h3></h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque</Tag>
        <div>
          <Titulo>{game?.name}</Titulo>
          <Precos>
            De <span>{formataPreco(game.prices.old)}</span> <br />
            por apenas {formataPreco(game.prices.current)}
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
