import ProductList from '../../components/procuctsList'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starwars from '../../assets/images/star_wars.png'
import { Game } from '../Home'
import { useEffect, useState } from 'react'

const Categories = () => {
  const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  const [gamesEsportes, setGamesEsportes] = useState<Game[]>([])
  const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])
  const [gamesLuta, setGamesLuta] = useState<Game[]>([])
  const [gamesRPG, setGamesRPG] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((r) => r.json())
      .then((r) => setGamesAcao(r))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((r) => r.json())
      .then((r) => setGamesEsportes(r))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((r) => r.json())
      .then((r) => setGamesLuta(r))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((r) => r.json())
      .then((r) => setGamesSimulacao(r))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((r) => r.json())
      .then((r) => setGamesRPG(r))
  }, [])

  return (
    <>
      <ProductList games={gamesAcao} title="Ação" background="black" />
      <ProductList games={gamesEsportes} title="Esportes" background="gray" />
      <ProductList games={gamesLuta} title="Luta" background="black" />
      <ProductList games={gamesRPG} title="Aventura" background="gray" />
      <ProductList
        games={gamesSimulacao}
        title="Simulação"
        background="black"
      />
    </>
  )
}

export default Categories
