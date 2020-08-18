import React from 'react'
import { useDispatch } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

const Filter = () => {

    const dispatch = useDispatch()

    const handleChange = (event) => {
      // input-kentän arvo muuttujassa event.target.value
      event.preventDefault()
      const written = event.target.value
      console.log('Kenttään kirjoitettiin: ', written)
      dispatch(setFilter(written))
    }
    const style = {
      marginBottom: 10
    }
  
    return (
      <div style={style}>
        filter <input onChange={handleChange} />
      </div>
    )
  }
  
  export default Filter