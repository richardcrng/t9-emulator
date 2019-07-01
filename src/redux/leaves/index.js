import reduxLeaves from 'redux-leaves';

const initialState = {
  numericString: '',
  wordsArr: []
}

const [reducer, actions] = reduxLeaves(initialState)

export {
  reducer,
  actions
}