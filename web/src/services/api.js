import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://us-central1-smart8.cloudfunctions.net/question_classification_backend'
})

export default api
