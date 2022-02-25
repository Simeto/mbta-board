import { BASE_URL } from '../src/constants/urls'
import axios from 'axios'

import utils from '../src/utils'

const customFetch = async options => {
  let response

  try {
    // request backend
    response = await axios(options)
  } catch (error) {
    response = error.response

    if (response && response.status === 401) {
      // call auth
      try {
        response = await axios(options)
      } catch (error) {
        response = error.response
      }
      localStorage.clear()
      window.location.reload()
    }
  }

  return response
}

const prepareErrorMessage = response => {
  const { status, data } = response || {}
  const { message, cause } = data || {}

  if (status === 403) {
    return "You don't have permission to do that!"
  }

  if (Array.isArray(cause) && cause.length) {
    const fieldErrors = cause.map(c => {
      const { field, cause } = c
      return field + ' ' + cause
    })
    return message + ' cause ' + fieldErrors.join('; ')
  } else {
    return message || 'Error response with code: ' + status
  }
}

export const request = ({ endpoint, method, params, loading, onSuccess, onError }) => {
  loading && loading(true)

  let url = BASE_URL + endpoint

  if (utils.is.defined(params)) {
    let args = []
    let keys = Object.keys(params)
    keys.forEach(element => args.push(element + '=' + params[element]))
    url += '?' + args.join('&')
  }

  const options = {
    url,
    method: utils.is.defined(method) ? method : 'GET', 
  }  

  customFetch(options)
    .then(response => {
      if (response?.status >= 200 && response?.status < 400) {
        let data

        try {
          data = JSON.parse(response.data)
        } catch (e) {
          data = response.data
        }

        onSuccess && onSuccess(data)
      } else {
        onError && onError(prepareErrorMessage(response))
      }
    })
    .finally(() => {
      loading && loading(false)
    })
}
