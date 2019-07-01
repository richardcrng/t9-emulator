import reduxLeaves from 'redux-leaves';

const initialState = {
  numericString: '4354636',
  wordsArr: ['we', 'gregre', 'we']
}

const [reducer, actions] = reduxLeaves(initialState)

export {
  reducer,
  actions
}