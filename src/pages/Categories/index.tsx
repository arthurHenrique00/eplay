import ProductList from '../../components/procuctsList'

import {
  useGetGameAcaoQuery,
  useGetGameLutaQuery,
  useGetGameSimulacaoQuery,
  useGetGameRPGQuery,
  useGetGameEsportesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetGameAcaoQuery()
  const { data: sportsGame } = useGetGameEsportesQuery()
  const { data: rpgGames } = useGetGameRPGQuery()
  const { data: fightGames } = useGetGameLutaQuery()
  const { data: simulationGames } = useGetGameSimulacaoQuery()

  if (actionGames && sportsGame && rpgGames && fightGames && simulationGames) {
    return (
      <>
        <ProductList
          games={actionGames}
          title="Ação"
          background="black"
          id="action"
        />
        <ProductList
          games={sportsGame}
          title="Esportes"
          background="gray"
          id="sports"
        />
        <ProductList
          games={fightGames}
          title="Luta"
          background="black"
          id="fight"
        />
        <ProductList
          games={rpgGames}
          title="Aventura"
          background="gray"
          id="rpg"
        />
        <ProductList
          games={simulationGames}
          title="Simulação"
          background="black"
          id="simulation"
        />
      </>
    )
  }

  return <h2>Loading...</h2>
}

export default Categories
