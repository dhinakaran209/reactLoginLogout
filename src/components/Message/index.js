const Message = props => {
  const {isLoggedOn} = props

  const message = isLoggedOn ? 'Welcome User' : 'Please Login'

  return <h1>{message}</h1>
}

export default Message
