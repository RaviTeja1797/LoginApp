const element = (
    <div className='congratsCardRootContainer'>
        <div className='congratsCard'>
            <div className='imageContainer'>
                <img className='profileImg' src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'/>
                <p className='name'>Kiran V</p>
            </div>
            <h1 className="collegeName">Vishnu institute of compute Education and technology Bhimavaram</h1>
            <img className='giftImage' src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'/>
        </div>
    </div>
  )
  
ReactDOM.render(element, document.getElementById('root'))