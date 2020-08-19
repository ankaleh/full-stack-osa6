import React from 'react'
import { addNewAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {
    //const dispatch = useDispatch()

    const create = (event) => {
        event.preventDefault()
        const newAnecdote = {
            content: event.target.newAnecdote.value,
            votes: 0
        }
        event.target.newAnecdote.value=''
        console.log(`Luo uuden anekdootin: ${newAnecdote}`)
        props.addNewAnecdote(newAnecdote)

        props.setNotification(`You added a new anecdote: "${newAnecdote.content}"`, 5000)
        
    }


    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={create}>
                <div><input name='newAnecdote'/></div>
                <button type='submit'>create</button>
            </form>
        </div>
    )
}

//const mapDispatchToProps = {}

export default connect(
    null, 
    { addNewAnecdote, setNotification })(AnecdoteForm)