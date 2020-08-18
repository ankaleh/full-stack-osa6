import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotificationVoted, removeNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {

    const anecdotes = useSelector(({filter, anecdotes, notification}) => {
      if (filter==='ALL') {
        return anecdotes
      }
      return anecdotes.filter(a => a.content.toLowerCase().includes(filter))
    })

    const dispatch = useDispatch()

    const vote = (anecdoteId, content) => { //luo ja dispatchaa actionin
        console.log('vote', anecdoteId)
        dispatch(voteAnecdote(anecdoteId))
        dispatch(setNotificationVoted(content))
        setTimeout(() => {
          dispatch(removeNotification())
        }, 5000)
    }

    return (
        <div>
            <h2>Anecdotes</h2>
            {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>
      )}

        </div>
    )

}

export default AnecdoteList