import React from 'react'
import { useDispatch } from 'react-redux'
import { addNewAnecdote } from '../reducers/anecdoteReducer'
import { setNotificationAdded, removeNotification } from '../reducers/notificationReducer'
const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const create = (event) => {
        event.preventDefault()
        const newAnecdote = event.target.newAnecdote.value
        console.log(`Luo uuden anekdootin: ${newAnecdote}`)
        dispatch(addNewAnecdote(newAnecdote))

        dispatch(setNotificationAdded(newAnecdote))
        setTimeout(() => {
          dispatch(removeNotification())
        }, 5000)
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

export default AnecdoteForm