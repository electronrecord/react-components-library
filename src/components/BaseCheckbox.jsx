import './css/base-checkbox.scss'

export const BaseCheckbox = function ({name = '', data = {}, onChange = () => {}}) {
  const { label, value } = data

  return (
    <div className='base-checkbox'>
      {
        label?.map(item => (
          <span key={item}>
                <input type='checkbox'
                       name={name}
                       id={item}
                       checked={value.includes(item)}
                       onChange={ev => onChange(item)} />
                <label htmlFor={item}>{item}</label>
              </span>
        ))
      }
      <br/>
    </div>
  )
}
