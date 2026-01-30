const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

let hospedajes = []

app.post('/login', (req, res) => {
  const { codigo, usuario, contrasena } = req.body
  // Mock simple: credenciales por defecto
  if (usuario === 'usuario' && contrasena === 'password123') {
    return res.json({ token: 'mocked-jwt-token' })
  }
  res.status(401).json({ message: 'Credenciales inválidas' })
})

app.post('/hospedajes', (req, res) => {
  const data = req.body
  data.id = hospedajes.length + 1
  data.fotos = data.fotos || []
  hospedajes.push(data)
  res.status(201).json(data)
})

app.get('/hospedajes', (req, res) => {
  res.json(hospedajes)
})

app.put('/hospedajes/:id', (req, res) => {
  const id = Number(req.params.id)
  const index = hospedajes.findIndex(h => h.id === id)
  if (index === -1) return res.status(404).json({ message: 'No encontrado' })
  hospedajes[index] = { ...hospedajes[index], ...req.body }
  res.json(hospedajes[index])
})

app.delete('/hospedajes/:id', (req, res) => {
  const id = Number(req.params.id)
  const index = hospedajes.findIndex(h => h.id === id)
  if (index === -1) return res.status(404).json({ message: 'No encontrado' })
  const removed = hospedajes.splice(index, 1)[0]
  res.json(removed)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Mock API escuchando en http://localhost:${PORT}`))
