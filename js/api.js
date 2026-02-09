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
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

const urlencoded = new URLSearchParams();
urlencoded.append("id_cliente", "3000");
urlencoded.append("celular", "5493415027238");
urlencoded.append("password", "Carlos3135++");

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: urlencoded,
  redirect: "follow"
};

fetch("149.50.128.94:3010/login", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));