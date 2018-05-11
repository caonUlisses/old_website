import {
  FETCH_USER
} from './types.js'

export const fetchUser = data => (dispatch) => {
  window.fetch('https://api.github.com/users/caonUlisses', {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .then((user) => {
      dispatch({ type: FETCH_USER, payload: user })
    })
}
