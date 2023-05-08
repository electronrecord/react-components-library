import {useDispatch} from "react-redux"
import {send_msg, useGetBlogpostByIdQuery} from "../store/modules/homepage.js"
import {BaseForm} from "../components/index.js"
import {useEffect} from "react"


export const DashboardView = function () {
  const form = {
    name: {
      label: 'Name',
      value: '',
      rule: 'required|email',
      placeholder: 'your name'
    },
    age: {
      label: ['Child', 'Adult'],
      type: 'radio',
      value: '',
      rule: 'required'
    },
    pets: {
      label: ['Caini', 'Pisici', 'Papagali'],
      type: 'checkbox',
      value: [],
      rule: 'required'
    },
    password: {
      name: 'password',
      label: 'Password',
      value: '',
      type: 'password',
      rule: 'required',
      placeholder: 'your password'
    },
    description: {
      name: 'description',
      label: 'Description',
      value: '',
      type: 'textarea',
      rule: 'required',
      placeholder: 'description'
    },
  }
  // const data = useSelector(state => state.homepage.data)
  const dispatch = useDispatch()
  const { data = {}, isLoading, error } = useGetBlogpostByIdQuery('1')

  useEffect(() => {
    // make network req to get the initial data
    // dispatch(get_data())
  }, [])

  async function handleSubmit (data) {
    dispatch(send_msg(data))
  }

  return (
    <main>
      <h1>This is Dashboard page</h1>
      <h1>{ data.title }</h1>
      <p>{ data.body }</p>
      <BaseForm data={form}
                onSubmit={handleSubmit}
                buttonText='Login' />
    </main>
  )
}

export default DashboardView
