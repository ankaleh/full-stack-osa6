import anecdoteService from '../services/anecdotes'

/* const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
} */

//const initialState = anecdotesAtStart.map(asObject)

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {
    case 'VOTE':
      const id = action.data.id
      const anecdoteToChange = state.find(a => a.id===id)
      const changedAnecdote = {...anecdoteToChange, votes: anecdoteToChange.votes+1}
      return state.map(a => 
        a.id !== id ? a : changedAnecdote).sort((a, b) => b.votes - a.votes)
    default: 
      return state
    case 'NEW':
      const newAnecdote = {
        content: action.data.content,
        votes: action.data.votes,
        id: action.data.id
      }
      return [...state, newAnecdote]

    case 'INIT_ANECDOTES':
      return action.data.sort((a, b) => b.votes - a.votes)
  }
}

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.update(anecdote.id, {...anecdote, votes: anecdote.votes+1})
    dispatch(
    {
    type: 'VOTE',
    data: 
      {
      content: updatedAnecdote.content,
      votes: updatedAnecdote.votes,
      id: updatedAnecdote.id,
      }
    })
  }
}

export const addNewAnecdote = (newAnecdote) => {
  return async dispatch => {
    const anecdote = await anecdoteService.create(newAnecdote)
    dispatch(
    {
    type: 'NEW',
    data: 
      {
      content: anecdote.content,
      votes: anecdote.votes,
      id: anecdote.id,
      }
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
    type: 'INIT_ANECDOTES',
    data: anecdotes
    })
  }
}

export default anecdoteReducer