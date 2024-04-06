import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchData } from './Utils/redux/action'

const App = () => {
  const dispatch = useDispatch()

  const users = useSelector(storeData=>storeData.user)
  console.log('users', users)

  return (
    <div>
      <button onClick={()=>{
        dispatch(fetchData())
      }}>GET DATA</button>

      {users.map((e)=>{
        return <fieldset>
          <legend>{e.username}</legend>
          <h1>{e.name}</h1>
          <h1>{e.email}</h1>

        </fieldset>
      })}
    </div>
  )
}

export default App