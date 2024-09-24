import { Imagem, Precos, Titulo } from './styles'

import bannerimg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../tag'
import Button from '../button'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerimg})` }}>
    <div className="container">
      <Tag size="big">Destaque</Tag>
      <div>
        <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
        <Precos>
          De <span>R$ 250,00</span> <br />
          por apenas R$ 99,90
        </Precos>
      </div>
      <Button
        type="button"
        to="/produto"
        title="Clique aqui para aproveitar essa oferta"
      >
        Aproveitar
      </Button>
    </div>
  </Imagem>
)

export default Banner
