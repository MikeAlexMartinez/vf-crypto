const {
  REACT_APP_CORE_API,
  REACT_APP_API_VERSION,
} = process.env

export const coreApi = (route) =>
  `/${REACT_APP_CORE_API}/${REACT_APP_API_VERSION}/${route}`;