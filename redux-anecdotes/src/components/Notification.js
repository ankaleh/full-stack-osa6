import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {

  //const notification = useSelector(state => state.notification) //store.js:ssä asetettu viittaamaan notificationReduceriin
    
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if (props.notification==='') {
    return null
  }
  return (
    <div style={style}>
      {props.notification}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
    filter: state.filter,
    anecdotes: state.anecdotes,
  }
}

export default connect(mapStateToProps)(Notification)