const API = axios.create({
  baseURL: 'https://api.tumunicipio.gob'
})

function guardarHospedaje(data) {
  return API.post('/hospedajes', data)
}
