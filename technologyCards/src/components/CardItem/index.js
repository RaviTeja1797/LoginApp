import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  let {className} = cardDetails
  const {title, description, imgUrl} = cardDetails
  className += ' card'
  return (
    <li className={className}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-para">{description}</p>
      <div className="image-container">
        <img src={imgUrl} alt={title} className="image" />
      </div>
    </li>
  )
}

export default CardItem
