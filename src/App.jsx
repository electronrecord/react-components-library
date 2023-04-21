import {BaseForm, BaseInput} from './components'
import {useEffect, useState} from "react"
import './App.scss'

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
    password: {
      label: 'Password',
      value: '',
      type: 'password',
      rule: 'required',
      placeholder: 'your password'
    }
  }

  async function handleSubmit (data) {
    console.log(`send req`, data)
  }

  return (
    <div className="App">
      <BaseForm data={form}
                onSubmit={handleSubmit}
                buttonText='Login' />
    </div>
  )
}

export default App
