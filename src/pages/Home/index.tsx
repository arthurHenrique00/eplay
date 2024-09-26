import { useEffect, useState } from 'react'
import Banner from '../../components/banner'
import ProductList from '../../components/procuctsList'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starwars from '../../assets/images/star_wars.png'

export interface GalleryItem {
  type: 'imagem' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const [promo, setPromo] = useState<Game[]>([])
  const [emBreve, setEmBreve] = useState<Game[]>([])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes/promocoes')
      .then((r) => r.json())
      .then((r) => setPromo(r))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes/em-breve')
      .then((r) => r.json())
      .then((r) => setPromo(r))
  }, [])

  return (
    <>
      <Banner />
      <ProductList games={promo} title="Promoções" background="gray" />
      <ProductList games={emBreve} title="Em Breve" background="black" />
    </>
  )
}

export default Home
