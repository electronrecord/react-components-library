import './css/base-radio.scss'

export const BaseRadio = function ({name = '', data = {}, onChange = () => {}}) {
  const { label, value } = data

  return (
    <div className='base-radio'>
      {
        label?.map(item => (
          <span key={item}>
                <input type='radio'
                       name={name}
                       id={item}
                       checked={value === item}
                       onChange={ev => onChange(item)} />
                <label htmlFor={item}>{item}</label>
              </span>
        ))
      }
      <br/>
    </div>
  )
}
