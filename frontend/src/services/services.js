import axios from 'axios'
const baseUrl = '/api/services'

const getLinks = () => {
  const request = axios.get(`${baseUrl}/links`)
  return request.then(response => response.data)
}

const getServiceByPath = (path) => {
  const request = axios.get(`${baseUrl}/${path}`)
  return request.then(response => response.data)
}

export default { getLinks, getServiceByPath }