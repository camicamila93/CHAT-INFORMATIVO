const API = axios.create({
  baseURL: 'http://localhost:3000'
})

// Interceptor para agregar token a cada petición
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// LOGIN
function login(codigo, usuario, contrasena) {
  return API.post('/login', {
    codigo,
    usuario,
    contrasena
  })
}

// HOSPEDAJES
function guardarHospedaje(data) {
  return API.post('/hospedajes', data)
}

function obtenerHospedajes() {
  return API.get('/hospedajes')
}

function actualizarHospedaje(id, data) {
  return API.put(`/hospedajes/${id}`, data)
}

function eliminarHospedaje(id) {
  return API.delete(`/hospedajes/${id}`)
}
