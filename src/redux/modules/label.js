// CONSTANTES
const GET_LABELS = 'GET_LABELS'
const GET_LABELS_SUCCESS = 'GET_LABELS_SUCCESS'
const GET_LABELS_FAIL = 'GET_LABELS_FAIL'

const headers = new Headers({
  'Content-Type': 'application/json',
  'JsonStub-User-Key': '96048a28-7651-4b7e-a556-8e67d6b36027',
  'JsonStub-Project-Key': '05e1e623-6307-4485-b2f4-329c7b44f8a9'
})

// ACTIONS
export const fetchLabels = () => (dispatch, getState) => {
  dispatch(getLabels())
  fetch('http://jsonstub.com/labels', {
    method: 'GET',
    headers
  })
    .then(result => result.json())
    .then(json => dispatch(getLabelsSuccess(json)))
    .catch(error => dispatch(getLabelFail(error)))
}

const getLabels = () => ({
  type: GET_LABELS
})

const getLabelsSuccess = (result) => ({
  type: GET_LABELS_SUCCESS,
  payload: result
})

const getLabelFail = (error) => ({
  type: GET_LABELS_FAIL,
  error
})




// REDUCER

const InitialState = {
  isLoading: false,
  error: null,
  items: []
}

const labelReducer = (state = InitialState, action) => {
  switch (action.type) {
    case GET_LABELS: 
      return {
        ...state,
        isLoading: true
      }
    case GET_LABELS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: action.payload
      }
    case GET_LABELS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default labelReducer
