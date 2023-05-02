import { createSlice } from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
  data: {}
}

export const homeSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    SET_DATA (state, action) { // action = { payload }
      state.data = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { SET_DATA } = homeSlice.actions

export const get_data = function () {
  return async function (dispatch) {
    try {
      const url = 'https://jsonplaceholder.typicode.com/posts/1'
      const { data } = await axios.get(url)
      console.log(data)
      dispatch(SET_DATA(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export const send_msg = function (form) {
  return async function (dispatch, getState) {
    const { homepage: { data } } = getState()
    try {
      const url = '/api/send-msg'
      const { data } = await axios.post(url, form)
      // dispatch(SET_DATA(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export default homeSlice.reducer
