export const BaseTextarea = function ({name = '', data = {}, onInput = () => {}}) {
  const { id, label, value, placeholder } = data

  return (
    <label htmlFor={id || name}
           className="base-textarea">
      <span>{ label }</span>
      <textarea id={id || name}
                value={value}
                placeholder={placeholder}
                onInput={ev => onInput(ev.target.value) }>
          { value }
        </textarea>
    </label>
  )
}
