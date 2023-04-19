export const BaseForm = function ({onSubmit, buttonText = '', children = []}) {

  function handleSubmit (ev) {
    ev.preventDefault()
    onSubmit()
  }

  return (
    <form onSubmit={handleSubmit}>
      {...children}
      {buttonText && <button>{buttonText}</button>}
    </form>
  )
}
