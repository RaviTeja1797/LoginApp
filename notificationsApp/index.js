const Notification = props => {
  //  Write your code here
        const {className, imageUrl, children} = props
  return(
      <div className={className}>
        <div className='icon-container'>
            <img src={imageUrl} className='icon'/>
        </div>
        <div className='heading-container'>
            <p className='card-heading'>{children}</p>
        </div>
      </div>
  )
}

const element = (
  <div className='master-container'>
    <h1 className='heading'>Notifications</h1>
    <div className='notifications-container'>
        <Notification className='notification-card primary-card' imageUrl='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png' children="Information Message"/>
        <Notification className='notification-card success-card' imageUrl='https://assets.ccbp.in/frontend/react-js/success-icon-img.png' children='Success Message'/>
        <Notification className='notification-card warning-card' imageUrl='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png' children='Warning Message'/>
        <Notification className='notification-card danger-card' imageUrl='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png' children='Danger Message'/>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
