import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import Header from './components/header'
import Rotas from './routes'
import Footer from './footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
