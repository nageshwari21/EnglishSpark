import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: { 'Content-Type': 'application/json' },
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('es_token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config
    if (error.response?.status === 401 && !original._retry) {
      original._retry = true
      try {
        const { data } = await axios.post('/api/auth/refresh-token', {}, { withCredentials: true })
        localStorage.setItem('es_token', data.accessToken)
        original.headers.Authorization = `Bearer ${data.accessToken}`
        return api(original)
      } catch (err) {
        localStorage.removeItem('es_token')
        localStorage.removeItem('es_user')
        window.location.href = '/login'
      }
    }
    return Promise.reject(error)
  }
)

export default api
