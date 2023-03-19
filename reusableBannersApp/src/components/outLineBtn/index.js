import './index.css'

const OutLineBtn = buttonDetails => {
  const {children} = buttonDetails
  const buttonElement = (
    <button type="button" className="outLineBtn">
      {children}
    </button>
  )
  return buttonElement
}

export default OutLineBtn
