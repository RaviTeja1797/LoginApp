import './index.css'
import OutLineBtn from '../outLineBtn/index'

const BannerCard = props => {
  const {cardProps} = props
  let {className} = cardProps
  const {headerText, description} = cardProps
  className += ' banner-hight'
  return (
    <li className={className}>
      <div className="text-box">
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <OutLineBtn>Show More</OutLineBtn>
      </div>
    </li>
  )
}

export default BannerCard
