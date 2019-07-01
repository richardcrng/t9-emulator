import reduxLeaves from 'redux-leaves';

const initialState = {
  numericString: '',
  unfilteredWords: [],
  filteredWords: [],
  shouldFilter: true
}

const reducersDict = {
  slice: (state, { payload }) => state.slice(payload[0], payload[1])
}

const [reducer, actions] = reduxLeaves(initialState, reducersDict)

export {
  reducer,
  actions
}