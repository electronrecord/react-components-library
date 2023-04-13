import './css/base-input.scss'

export const BaseInput = function ({name = '', value = '', textarea = '', label = '', type = '', id = '', placeholder = '', onInput = () => {}}) {
  function handleInput (value) {
    onInput({key: name, value})
  }

  return (
    <label htmlFor={id || name}
           className='base-input'>
      <span>{label}:</span>
      <br/>
      {
        !textarea && <input type={type || 'text'}
                            placeholder={placeholder}
                            value={value}
                            id={id || name}
                            onInput={ev => handleInput(ev.target.value) } />
      }

      {textarea &&
        <textarea id={id || name}
                  value={value}
                  placeholder={placeholder}
                  onInput={ev => handleInput(ev.target.value) }>
          { value }
        </textarea>
      }
    </label>
  )
}
