import axios from 'axios'
// ActionCreater 
// Componentで使用される
export const READ_EVENTS = "READ_EVENTS"
const ROOT_URL = "https://udemy-utils.herokuapp.com/api/v1"
const QUERY_STRING = "?token=token123"

// Redux-thunkを使用すると関数を返すことができる
export const readEvents = () => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events${QUERY_STRING}`)
    dispatch({type: READ_EVENTS, response})
}