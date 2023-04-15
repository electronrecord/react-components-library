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
      type: 'password',
      rule: 'required'
    }
  })

  function handleInput ({key, value}) {
    setForm(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        value,
        invalid: handleValidationRule({rule: prev[key].rule, value})
      }
    }))
  }

  async function handleSubmit (ev) {
    ev.preventDefault()
    Object.keys(form).forEach(key => {
      validate(key)
    })
    const isValid = Object.keys(form).every(key => form[key].invalid === false)
    if (isValid) {
      const user = Object.keys(form).reduce((acc, key) => {
        acc[key] = form[key].value
        return acc
      }, {})
      console.log(`send to network`, user)
      // dispatch(login(user))
      // const response = await axios.post('/api/login', user)
    }
  }

  function handleValidationRule ({rule, value}) {
    switch (rule) {
      case 'required':
        return !value
      case 'email':
        return !/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(value)
      case 'max':
        return value.length > 6
    }
  }

  function validate (key) {
    setForm(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        invalid: handleValidationRule({...prev[key]})
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
                   type={form.password.type}
                   invalid={form.password.invalid}
                   value={form.password.value}
                   placeholder='your password'
                   onInput={handleInput} />

        <button>Login</button>
      </form>
    </div>
  )
}

export default App
