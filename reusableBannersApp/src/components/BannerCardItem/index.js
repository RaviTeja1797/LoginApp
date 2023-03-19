/* eslint-disable import/extensions */
import './index.css'
import OutLineBtn from "../outLineBtn/index.js"

const BannerCard = props => {
  const {cardProps} = props
  let {className} = cardProps
  const {headerText, description} = cardProps
  className += ' banner-hight'
  return (
    <div className={className}>
      <div className="text-box">
        <h1>{headerText}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default BannerCard
