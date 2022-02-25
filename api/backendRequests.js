import { request, endpoints } from '../api';
import actions from '../src/actions';

export const fetchPredictions = (dispatch) => {
  request({
    method: 'GET',
    endpoint: endpoints.predictions.fetch,
    params: {
      stop: id
    },
    onSuccess: payload => {
      dispatch(actions.predictions.fetchPredictions(payload))
    }
  })
}