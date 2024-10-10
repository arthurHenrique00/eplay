import ProductList from '../../components/procuctsList'

import {
  useGetGameAcaoQuery,
  useGetGameLutaQuery,
  useGetGameSimulacaoQuery,
  useGetGameRPGQuery,
  useGetGameEsportesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: action } = useGetGameAcaoQuery()
  const { data: sportsGame, isLoading: sports } = useGetGameEsportesQuery()
  const { data: rpgGames, isLoading: rpg } = useGetGameRPGQuery()
  const { data: fightGames, isLoading: fight } = useGetGameLutaQuery()
  const { data: simulationGames, isLoading: simulation } =
    useGetGameSimulacaoQuery()

  return (
    <>
      <ProductList
        games={actionGames}
        title="Ação"
        background="black"
        id="action"
        isLoading={action}
      />
      <ProductList
        games={sportsGame}
        title="Esportes"
        background="gray"
        id="sports"
        isLoading={sports}
      />
      <ProductList
        games={fightGames}
        title="Luta"
        background="black"
        id="fight"
        isLoading={fight}
      />
      <ProductList
        games={rpgGames}
        title="Aventura"
        background="gray"
        id="rpg"
        isLoading={rpg}
      />
      <ProductList
        games={simulationGames}
        title="Simulação"
        background="black"
        id="simulation"
        isLoading={simulation}
      />
    </>
  )
}

export default Categories
