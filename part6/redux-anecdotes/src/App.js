import React, { useEffect } from 'react'
import AnecdoteForm from './components/AncedoteForm'
import AnecdoteList from './components/AncedoteList'
import Notification from './components/Notification'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
        <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App