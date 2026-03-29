import axios from 'axios'
const baseUrl = '/api/services'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const getServiceByPath = (path) => {
  const request = axios.get(`${baseUrl}/${path}`)
  return request.then(response => response.data)
}

export default { getAll, getServiceByPath }