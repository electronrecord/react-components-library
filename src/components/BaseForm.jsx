import {BaseInput} from "./BaseInput.jsx"
import {useState} from "react"

export const BaseForm = function ({onSubmit, data = {}, buttonText = '', children = []}) {
  const [form, setForm] = useState({...data})

  function handleSubmit (ev) {
    ev.preventDefault()
    Object.keys(form).forEach(key => {
      validate(key)
    })
    const isValid = Object.keys(form).every(key => form[key].invalid === '')
    if (isValid) {
      const payload = Object.keys(form).reduce((acc, key) => {
        acc[key] = form[key].value
        return acc
      }, {})
      onSubmit(payload)
    }
  }

  function handleInput ({key, value}) {
    setForm(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        value,
        invalid: prev[key].rule.split('|').reduce((acc, rule) => {
          return acc || handleValidationRule({rule, value})
        }, '')
      }
    }))
  }

  function validate (key) {
    setForm(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        invalid: prev[key].rule.split('|').reduce((acc, rule) => {
          return acc || handleValidationRule({rule, value: prev[key].value})
        }, '')
      }
    }))
  }

  function handleValidationRule ({rule, value}) {
    switch (rule) {
      case 'required':
        return value ? '' : rule
      case 'email':
        return /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(value) ? '' : rule
      case 'max':
        return value.length > 6
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {...children}
      {children.length === 0 && Object.keys(data).map(key => (
        <BaseInput key={key}
                   name={key}
                   label={form[key].label}
                   rule={form[key].rule}
                   type={form[key].type}
                   invalid={form[key].invalid}
                   value={form[key].value}
                   placeholder={form[key].placeholder}
                   onInput={handleInput}/>
      ))}
      {buttonText && <button>{buttonText}</button>}
    </form>
  )
}
