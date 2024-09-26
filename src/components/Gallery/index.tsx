import { useState } from 'react'
import Section from '../Section'
import { Action, Item, Items, Modal, ModalContent } from './styles'
import hlegacy from '../../assets/images/image-6.png'
import spider from '../../assets/images/banner-homem-aranha.png'
import play from '../../assets/images/botao-play 1.png'
import zoom from '../../assets/images/mais-zoom 1.png'
import bannerHL from '../../assets/images/image10.png'
import fechar from '../../assets/images/close1.png'
import { GalleryItem } from '../../pages/Home'

const mock: GalleryItem[] = [
  {
    type: 'imagem',
    url: hlegacy
  },
  {
    type: 'imagem',
    url: spider
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/GqPLeQJ6lJk?si=VXUXbNdfGIIaeogF'
  }
]

type Props = {
  defaultCover: string
  name: string
}

interface ModalState extends GalleryItem {
  estaVisivel: boolean
}

const Gallery = ({ defaultCover, name }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    estaVisivel: false,
    type: 'imagem',
    url: ''
  })

  const getMediaCover = (i: GalleryItem) => {
    if (i.type === 'imagem') return i.url
    return defaultCover
  }

  const getMediaIcon = (i: GalleryItem) => {
    if (i.type === 'imagem') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      estaVisivel: false,
      type: 'imagem',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  estaVisivel: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img src={getMediaCover(media)} />
              <Action>
                <img src={getMediaIcon(media)} />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.estaVisivel ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={fechar} onClick={() => closeModal()} />
          </header>
          {modal.type === 'imagem' ? (
            <img src={modal.url} />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default Gallery
