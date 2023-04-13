import { BaseInput } from './components'
import {useState} from "react"
import './App.scss'

function App () {
  const [form, setForm] = useState({
    name: {
      value: '',
      rule: 'email'
    },
    password: {
      value: '',
      rule: 'required'
    },
    message: {
      value: '',
      rule: 'required'
    }
  })

  function handleInput ({key, value}) {
    setForm(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        value
      }
    }))
    validate(key)
  }

  function handleSubmit (ev) {
    ev.preventDefault()
    // treci prin toate form props si valideaza
    Object.keys(form).forEach(key => {
      validate(key)
    })
  }

  function validate (key) {
    setForm(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        invalid: !form[key].value
      }
    }))
  }

  return (
    <div className="App">
      <form onSubmit={ev => handleSubmit(ev)}>
        <BaseInput name='name'
                   label='Name'
                   rule={form.name.rule}
                   invalid={form.name.invalid}
                   value={form.name.value}
                   placeholder='your name'
                   onInput={handleInput} />
        <BaseInput name='password'
                   label='Password'
                   rule={form.password.rule}
                   invalid={form.password.invalid}
                   value={form.password.value}
                   placeholder='your password'
                   onInput={handleInput} />
        <BaseInput name='message'
                   textarea
                   label='Message'
                   rule={form.message.rule}
                   invalid={form.message.invalid}
                   value={form.message.value}
                   placeholder='your message'
                   onInput={handleInput} />

        <button>Login</button>
      </form>
    </div>
  )
}

export default App
