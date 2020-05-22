import axios from 'axios'

const api = axios.create({
  baseURL: 'https://us-central1-smart8.cloudfunctions.net/question_classification_backend'
})

export default api
