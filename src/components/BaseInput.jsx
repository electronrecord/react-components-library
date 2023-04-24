import './css/base-input.scss'

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

      {
        type === 'radio' && <>
          {
            label?.map(item => (
              <span key={item}>
                <input type='radio'
                       name={name}
                       id={item}
                       checked={value === item}
                       onChange={ev => handleInput(item)} />
                <label htmlFor={item}>{item}</label>
              </span>
            ))
          }
          <br/>
        </>
      }

      {
        type === 'checkbox' && <>
          {
            label?.map(item => (
              <span key={item}>
                <input type='checkbox'
                       name={name}
                       id={item}
                       checked={value.includes(item)}
                       onChange={ev => handleCheckbox(item)} />
                <label htmlFor={item}>{item}</label>
              </span>
            ))
          }
          <br/>
        </>
      }

      {textarea &&
        <textarea id={id || name}
                  value={value}
                  placeholder={placeholder}
                  onInput={ev => handleInput(ev.target.value) }>
          { value }
        </textarea>
      }
      {invalid && <span className='validation-msg'>{validation[invalid]}</span>}
    </label>
  )
}
