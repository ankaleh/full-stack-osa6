import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'


const AnecdoteList = () => {

    const anecdotes = useSelector(({filter, anecdotes, notification}) => {
      if (filter==='ALL') {
        return anecdotes
      }
      return anecdotes.filter(a => a.content.toLowerCase().includes(filter))
    })

    const dispatch = useDispatch()

    const vote = (anecdote) => { 
        dispatch(voteAnecdote(anecdote))

        dispatch(setNotification(`You voted anecdote: "${anecdote.content}"`, 7000))
        
    }

    return (
        <div>
            <h2>Anecdotes</h2>
            {anecdotes.map(anecdote =>
              <div key={anecdote.id}>
                <div>
                  {anecdote.content}
                </div>
                <div >
                  has {anecdote.votes}
                  <button onClick={() => vote(anecdote)}>vote</button>
                </div>
              </div>
            )}

        </div>
    )

}

export default AnecdoteList