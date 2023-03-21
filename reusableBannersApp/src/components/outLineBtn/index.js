import './index.css'

const OutLineBtn = Props => {
  const {children} = Props
  const buttonElement = (
    <button type="button" className="outLineBtn">
      {children}
    </button>
  )
  return buttonElement
}

export default OutLineBtn
