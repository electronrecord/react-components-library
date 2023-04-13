import { BaseInput } from './components'
import './App.scss'
import {useState} from "react"

function App() {
  const [form, setForm] = useState({name: 'Cristian', password: '12345'})

  function handleInput ({key, value}) {
    setForm(prev => ({
      ...prev,
      [key]: value
    }))
  }

  function handleSubmit (ev) {
    ev.preventDefault()
  }

  return (
    <div className="App">
      <form onSubmit={ev => handleSubmit(ev)}>
        <BaseInput name='name'
                   label='Name'
                   value={form.name}
                   placeholder='your name'
                   onInput={handleInput} />
        <BaseInput name='password'
                   label='Password'
                   value={form.password}
                   placeholder='your password'
                   onInput={handleInput} />
        <BaseInput name='password'
                   textarea
                   label='Textarea'
                   placeholder='your password'
                   onInput={handleInput} />

        <button>Login</button>
      </form>
    </div>
  )
}

export default App
