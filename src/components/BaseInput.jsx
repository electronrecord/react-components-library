import './css/base-input.scss'
import {BaseRadio} from "./BaseRadio.jsx"
import {BaseCheckbox} from "./BaseCheckbox.jsx"
import {BaseTextarea} from "./BaseTextarea"

export const BaseInput = function ({name = '', data = {}, onInput = () => {}}) {
  const {
    invalid = '',
    value = '',
    textarea = '',
    label = '',
    type = 'text',
    id = '',
    placeholder = ''
  } = data
  const validation = {
    required: 'Acest camp este obligatoriu',
    email: 'Acest camp trebuie sa fie in formatul email',
    max: 'Maxim 6 caractere',
  }

  function handleInput (val) {
    onInput({key: name, value: val})
  }

  function handleCheckbox (item) {
    const arr = [...value]
    const index = arr.findIndex(val => val === item)
    index > -1 ? arr.splice(index, 1) : arr.push(item)
    onInput({key: name, value: arr})
  }

  return (
    <label htmlFor={id || name}
           className='base-input'>
      {
        (type === 'text' || type === 'password') && <>
          <span>{label}:</span>
          <br/>
          <input type={type || 'text'}
                 placeholder={placeholder}
                 value={value}
                 id={id || name}
                 onInput={ev => handleInput(ev.target.value) } />
        </>
      }

      {type === 'radio' && <BaseRadio name={name}
                                      data={data}
                                      onChange={handleInput} />}

      {type === 'checkbox' && <BaseCheckbox name={name}
                                            data={data}
                                            onChange={handleCheckbox} />}

      {type === 'textarea' && <BaseTextarea name={name}
                                            data={data}
                                            onInput={handleInput} />}

      {invalid && <span className='validation-msg'>{validation[invalid]}</span>}
    </label>
  )
}
