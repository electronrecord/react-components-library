import {BaseForm, BaseInput} from './components'
import {useEffect, useState} from "react"
import './App.scss'
import {useDispatch, useSelector} from "react-redux"
import {get_data, send_msg} from "./store/modules/homepage.js"

function App () {
  const form = {
    name: {
      label: 'Name',
      value: '',
      rule: 'required|email',
      placeholder: 'your name'
    },
    age: {
      label: ['Child', 'Adult'],
      type: 'radio',
      value: '',
      rule: 'required'
    },
    pets: {
      label: ['Caini', 'Pisici', 'Papagali'],
      type: 'checkbox',
      value: [],
      rule: 'required'
    },
    password: {
      name: 'password',
      label: 'Password',
      value: '',
      type: 'password',
      rule: 'required',
      placeholder: 'your password'
    },
    description: {
      name: 'description',
      label: 'Description',
      value: '',
      type: 'textarea',
      rule: 'required',
      placeholder: 'description'
    },
  }
  const data = useSelector(state => state.homepage.data)
  const dispatch = useDispatch()

  useEffect(() => {
    // make network req to get the initial data
    dispatch(get_data())
  }, [])

  async function handleSubmit (data) {
    dispatch(send_msg(data))
  }

  return (
    <div className="App">
      <h1>{ data.title }</h1>
      <p>{ data.body }</p>
      <BaseForm data={form}
                onSubmit={handleSubmit}
                buttonText='Login' />
    </div>
  )
}

export default App
