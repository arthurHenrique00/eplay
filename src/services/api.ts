import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/eplay'
  }),
  endpoints: (b) => ({
    getFeaturedGame: b.query<Game, void>({
      query: () => 'destaque'
    }),
    getOnSale: b.query<Game[], void>({
      query: () => 'promocoes'
    }),
    getSoon: b.query<Game[], void>({
      query: () => 'em-breve'
    }),
    getGameAcao: b.query<Game[], void>({
      query: () => 'acao'
    }),
    getGameEsportes: b.query<Game[], void>({
      query: () => 'esportes'
    }),
    getGameSimulacao: b.query<Game[], void>({
      query: () => 'simulacao'
    }),
    getGameLuta: b.query<Game[], void>({
      query: () => 'luta'
    }),
    getGameRPG: b.query<Game[], void>({
      query: () => 'rpg'
    }),
    getGame: b.query<Game, string>({
      query: (id) => `jogos/${id}`
    })
  })
})

export const {
  useGetFeaturedGameQuery,
  useGetOnSaleQuery,
  useGetSoonQuery,
  useGetGameEsportesQuery,
  useGetGameLutaQuery,
  useGetGameRPGQuery,
  useGetGameSimulacaoQuery,
  useGetGameAcaoQuery,
  useGetGameQuery
} = api

export default api
