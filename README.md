Mock API local para el proyecto CHAT-INFORMATIVO

Instrucciones rápidas:

1) Instalar dependencias:

```powershell
npm install
```

2) Iniciar el servidor mock:

```powershell
npm start
```

El servidor escuchará en http://localhost:3000 y expone los endpoints:
- POST /login  (body JSON: { codigo, usuario, contrasena })
  - Responde { token: 'mocked-jwt-token' } cuando usuario: 'usuario' y contrasena: 'password123'
- POST /hospedajes  (crear)
- GET /hospedajes   (listar)
- PUT /hospedajes/:id  (actualizar)
- DELETE /hospedajes/:id  (eliminar)

3) Configurar la aplicación para usar la API local:
- El archivo `js/api.js` ya fue actualizado para usar `http://localhost:3000`.

4) Probar en Postman:
- POST http://localhost:3000/login  → body JSON
- Copiar `token` de la respuesta y añadir header `Authorization: Bearer <token>` a las siguientes peticiones.

Si quieres, puedo generar una colección Postman JSON para importar automáticamente con estos endpoints.
