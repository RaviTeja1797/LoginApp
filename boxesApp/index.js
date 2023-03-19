const Box = props => {
  //  Write your code here.
  const {className, children} = props;
  return(
      <div className={className}>
            <p>{children}</p>
      </div>
  )
}

const element = (
  <div className='main-container'>
        <h1 className='boxes-heading'>Boxes</h1>
        <div className='boxes-container'>
            <Box className='box small-box' children='Small'/>
            <Box className='box medium-box' children='Medium'/>
            <Box className='box large-box' children='Large'/>
        </div>
  </div> 
)

ReactDOM.render(element, document.getElementById("root"));
