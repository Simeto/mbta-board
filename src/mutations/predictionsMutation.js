export const mutatePredictions = (state, action) => {
  const { payload } = action
  return {...state, predictions: payload.data}
}