export const defined = (value) => (typeof value !== 'undefined') ? true : false

export const emptyString = value => value == null || value.toString().trim().length === 0
export const notEmptyString = value => !emptyString(value)

export const validFunction = value => typeof value === 'function'
export const validObject = value => typeof value === 'object' && Object.keys(value || {}).length > 0
export const validString = value => typeof value === 'string' && value.length > 0

