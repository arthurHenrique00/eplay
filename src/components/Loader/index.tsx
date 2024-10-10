import { cores } from '../../styles'
import { Container } from './styles'
import { PacmanLoader } from 'react-spinners'

const Loader = () => (
  <Container>
    <PacmanLoader color={cores.branca} />
  </Container>
)

export default Loader
