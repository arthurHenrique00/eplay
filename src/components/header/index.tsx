import { Link } from 'react-router-dom'
import { HeaderBar, LinkItem, Links } from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { LinkCart } from './styles'

const Header = () => (
  <HeaderBar>
    <div>
      <Link to="/">
        <img src={logo} />
      </Link>
      <nav>
        <Links>
          <LinkItem>
            <Link to="/categories">Categorias</Link>
          </LinkItem>
          <LinkItem>
            <a href="">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="">Promoções</a>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCart href="">
      0 - Produto(s) <img src={carrinho} alt="carrinho" />
    </LinkCart>
  </HeaderBar>
)

export default Header
