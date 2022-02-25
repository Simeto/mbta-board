import { actionConstants } from '../constants'
import mutations from '../mutations'
import store from '../store/store'

const predictionsReducer =  (state = store, action) => {
  const { type } = action
  switch(type) {
  case actionConstants.predictions.PREDICTIONS_FETCH:
    return mutations.predictions.mutatePredictions(state, action)
  default: 
    return state
  }
}

export default predictionsReducer