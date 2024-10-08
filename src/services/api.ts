import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../pages/Home'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  billing: {
    name: string
    email: string
    document: string
  }
  delivery: {
    email: string
  }
  payment: {
    card: {
      active: boolean
      owner?: {
        name: string
        document: string
      }
      name?: string
      number?: string
      expires?: {
        month: number
        year: number
      }
      code?: number
    }
    installments: number
  }
}

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
    }),
    purchase: b.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
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
  useGetGameQuery,
  usePurchaseMutation
} = api

export default api
