import reduxLeaves from 'redux-leaves';

const initialState = {
  numericString: '',
  unfilteredWords: [],
  filteredWords: [],
  shouldFilter: true
}

const [reducer, actions] = reduxLeaves(initialState)

export {
  reducer,
  actions
}