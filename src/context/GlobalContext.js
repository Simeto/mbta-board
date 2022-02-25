import React, { createContext } from 'react'
import PropTypes from 'prop-types'

export const Context = createContext({})

export const Provider = ({ context, children }) => {
  const globalContext = {
    ...context
  }

  return <Context.Provider value={globalContext}>{children}</Context.Provider>
}

export const { Consumer } = Context

Provider.propTypes = {
  context: PropTypes.object
}
