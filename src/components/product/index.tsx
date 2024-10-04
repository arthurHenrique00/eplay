import Tag from '../tag'

import { Card, Desc, Infos, Titulo } from './styles'

type Props = {
  title: string
  category: string
  system: string
  desc: string
  infos: string[]
  image: string
  id: number
}

const Product = ({
  title,
  category,
  system,
  desc,
  infos,
  image,
  id
}: Props) => {
  const getDesc = (desc: string) => {
    if (desc.length > 95) {
      return desc.slice(0, 92) + '...'
    }

    return desc
  }

  return (
    <Card to={`/product/${id}`}>
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Titulo>{title}</Titulo>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Desc>{getDesc(desc)}</Desc>
    </Card>
  )
}

export default Product
