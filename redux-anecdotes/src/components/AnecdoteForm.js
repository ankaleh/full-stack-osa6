import React from 'react'
import { useDispatch } from 'react-redux'
import { addNewAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const create = (event) => {
        event.preventDefault()
        const newAnecdote = {
            content: event.target.newAnecdote.value,
            votes: 0
        }
        event.target.newAnecdote.value=''
        console.log(`Luo uuden anekdootin: ${newAnecdote}`)
        dispatch(addNewAnecdote(newAnecdote))

        dispatch(setNotification(`You added a new anecdote: "${newAnecdote.content}"`, 5000))
        
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