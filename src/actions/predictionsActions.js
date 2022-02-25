
import { actionConstants } from '../constants'

export const fetchPredictions = (payload) => (
  {
    type: actionConstants.predictions.PREDICTIONS_FETCH,
    payload
  }
);