import banner from '../../assets/images/fundohogwarts.png'
import Button from '../button'
import Tag from '../tag'
import { Banner } from './styles'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${banner})` }}>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>Windows</Tag>
      </div>
      <div>
        <h2>Hogwarts Legacy</h2>
        <p>
          <span>De R$ 250,00</span>
          Por R$ 190,00
        </p>
        <Button
          type="button"
          title="clique aqui para adicionar o jogo"
          variant="primary"
        >
          Adicionar ao carrinho
        </Button>
      </div>
    </div>
  </Banner>
)

export default Hero
