Vue.component('hospedajes', {
  template: `
    <div class="panel">
      <h2>Hospedajes</h2>

      <form @submit.prevent="guardar" class="formulario">
        <label>
          Nombre del hospedaje *
          <input v-model="form.nombre" required>
        </label>

        <label>
          Tipo *
          <select v-model="form.tipo" required>
            <option disabled value="">Seleccionar tipo</option>
            <option>Hotel</option>
            <option>Cabaña</option>
            <option>Hostel</option>
            <option>Camping</option>
            <option>Departamento</option>
          </select>
        </label>

        <label>
          Dirección
          <input v-model="form.direccion">
        </label>

        <label>
          Ubicación (Coordenadas para Google Maps)
          <input v-model="form.ubicacion">
        </label>

        <label>
          Fotos (URLs separadas por comas)
          <input v-model="form.fotos">
        </label>

        <label>
          Teléfono fijo
          <input v-model="form.telefonoFijo">
        </label>

        <label>
          Celular con WhatsApp
          <input v-model="form.celular">
        </label>

        <label>
          Persona de contacto
          <input v-model="form.contacto">
        </label>

        <label>
          Descripción de los servicios
          <textarea v-model="form.descripcion"></textarea>
        </label>

        <button type="submit">Guardar</button>
      </form>

      <h3 v-if="lista.length">Hospedajes cargados</h3>

      <table v-if="lista.length" class="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Dirección</th>
            <th>Ubicación</th>
            <th>Fotos</th>
            <th>Teléfono Fijo</th>
            <th>Celular</th>
            <th>Contacto</th>
            <th>Descripción</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in lista" :key="i">
            <td>{{ item.nombre }}</td>
            <td>{{ item.tipo }}</td>
            <td>{{ item.direccion }}</td>
            <td>{{ item.ubicacion }}</td>
            <td>{{ item.fotos }}</td>
            <td>{{ item.telefonoFijo }}</td>
            <td>{{ item.celular }}</td>
            <td>{{ item.contacto }}</td>
            <td>{{ item.descripcion }}</td>
            <td>
              <button @click="eliminar(i)">❌</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  data() {
    return {
      form: {
        nombre: '',
        tipo: '',
        direccion: '',
        ubicacion: '',
        fotos: '',
        telefonoFijo: '',
        celular: '',
        contacto: '',
        descripcion: ''
      },
      lista: []
    }
  },
  mounted() {
    const datos = localStorage.getItem('hospedajes')
    if (datos) this.lista = JSON.parse(datos)
  },
  methods: {
    guardar() {
      this.lista.push({ ...this.form })
      localStorage.setItem('hospedajes', JSON.stringify(this.lista))
      this.form = { nombre: '', tipo: '', direccion: '', ubicacion: '', fotos: '', telefonoFijo: '', celular: '', contacto: '', descripcion: '' }
    },
    eliminar(index) {
      this.lista.splice(index, 1)
      localStorage.setItem('hospedajes', JSON.stringify(this.lista))
    }
  }
})

/* 🔴 ESTO ES LO QUE FALTABA 🔴 */
new Vue({
  el: '#app',
  data: {
    view: 'hospedajes'
  }
})
Vue.component('gastronomia', {
  template: `
    <div class="panel">
      <h2>Gastronomía</h2>

      <form @submit.prevent="guardar" class="formulario">
        <label>
          Nombre *
          <input v-model="form.nombre" required>
        </label>

        <label>
          Tipo *
          <select v-model="form.tipo" required>
            <option disabled value="">Seleccionar tipo</option>
            <option>Restaurante</option>
            <option>Bar</option>
            <option>Cafetería</option>
            <option>Parrilla</option>
            <option>Food Truck</option>
          </select>
        </label>

        <label>
          Horarios
          <input v-model="form.horarios">
        </label>

        <label>
          Ubicación (Coordenadas para Google Maps)
          <input v-model="form.ubicacion">
        </label>

        <label>
          Fotos (URLs separadas por comas)
          <input v-model="form.fotos">
        </label>

        <label>
          Teléfono fijo
          <input v-model="form.telefonoFijo">
        </label>

        <label>
          Celular con WhatsApp
          <input v-model="form.celular">
        </label>

        <label>
          Persona de contacto
          <input v-model="form.contacto">
        </label>

        <label>
          Descripción de los servicios
          <textarea v-model="form.descripcion"></textarea>
        </label>

        <button type="submit">Guardar</button>
      </form>

      <h3 v-if="lista.length">Locales gastronómicos</h3>

      <table v-if="lista.length" class="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Horarios</th>
            <th>Ubicación</th>
            <th>Fotos</th>
            <th>Teléfono Fijo</th>
            <th>Celular</th>
            <th>Contacto</th>
            <th>Descripción</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in lista" :key="i">
            <td>{{ item.nombre }}</td>
            <td>{{ item.tipo }}</td>
            <td>{{ item.horarios }}</td>
            <td>{{ item.ubicacion }}</td>
            <td>{{ item.fotos }}</td>
            <td>{{ item.telefonoFijo }}</td>
            <td>{{ item.celular }}</td>
            <td>{{ item.contacto }}</td>
            <td>{{ item.descripcion }}</td>
            <td>
              <button @click="eliminar(i)">❌</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  data() {
    return {
      form: { nombre: '', tipo: '', horarios: '', ubicacion: '', fotos: '', telefonoFijo: '', celular: '', contacto: '', descripcion: '' },
      lista: []
    }
  },
  mounted() {
    const datos = localStorage.getItem('gastronomia')
    if (datos) this.lista = JSON.parse(datos)
  },
  methods: {
    guardar() {
      this.lista.push({ ...this.form })
      localStorage.setItem('gastronomia', JSON.stringify(this.lista))
      this.form = { nombre: '', tipo: '', horarios: '', ubicacion: '', fotos: '', telefonoFijo: '', celular: '', contacto: '', descripcion: '' }
    },
    eliminar(index) {
      this.lista.splice(index, 1)
      localStorage.setItem('gastronomia', JSON.stringify(this.lista))
    }
  }
})
Vue.component('eventos', {
  template: `
    <div class="panel">
      <h2>Eventos</h2>

      <form @submit.prevent="guardar" class="formulario">
        <label>
          Nombre del evento *
          <input v-model="form.nombre" required>
        </label>

        <label>
          Fecha
          <input type="date" v-model="form.fecha">
        </label>

        <label>
          Lugar
          <input v-model="form.lugar">
        </label>

        <label>
          Entrada
          <select v-model="form.entrada">
            <option>Gratis</option>
            <option>Paga</option>
          </select>
        </label>

        <button type="submit">Guardar</button>
      </form>

      <h3 v-if="lista.length">Eventos cargados</h3>

      <table v-if="lista.length" class="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Lugar</th>
            <th>Entrada</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in lista" :key="i">
            <td>{{ item.nombre }}</td>
            <td>{{ item.fecha }}</td>
            <td>{{ item.lugar }}</td>
            <td>{{ item.entrada }}</td>
            <td>
              <button @click="eliminar(i)">❌</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  data() {
    return {
      form: {
        nombre: '',
        fecha: '',
        lugar: '',
        entrada: 'Gratis'
      },
      lista: []
    }
  },
  mounted() {
    const datos = localStorage.getItem('eventos')
    if (datos) this.lista = JSON.parse(datos)
  },
  methods: {
    guardar() {
      this.lista.push({ ...this.form })
      localStorage.setItem('eventos', JSON.stringify(this.lista))
      this.form = { nombre: '', fecha: '', lugar: '', entrada: 'Gratis' }
    },
    eliminar(index) {
      this.lista.splice(index, 1)
      localStorage.setItem('eventos', JSON.stringify(this.lista))
    }
  }
})
Vue.component('puntos', {
  template: `
    <div class="panel">
      <h2>Puntos Turísticos</h2>

      <form @submit.prevent="guardar" class="formulario">
        <label>
          Nombre *
          <input v-model="form.nombre" required>
        </label>

        <label>
          Tipo
          <select v-model="form.tipo">
            <option>Plaza</option>
            <option>Museo</option>
            <option>Monumento</option>
            <option>Reserva natural</option>
          </select>
        </label>

        <label>
          Descripción
          <input v-model="form.descripcion">
        </label>

        <button type="submit">Guardar</button>
      </form>

      <h3 v-if="lista.length">Puntos cargados</h3>

      <table v-if="lista.length" class="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Descripción</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in lista" :key="i">
            <td>{{ item.nombre }}</td>
            <td>{{ item.tipo }}</td>
            <td>{{ item.descripcion }}</td>
            <td>
              <button @click="eliminar(i)">❌</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  data() {
    return {
      form: { nombre: '', tipo: 'Plaza', descripcion: '' },
      lista: []
    }
  },
  mounted() {
    const datos = localStorage.getItem('puntos')
    if (datos) this.lista = JSON.parse(datos)
  },
  methods: {
    guardar() {
      this.lista.push({ ...this.form })
      localStorage.setItem('puntos', JSON.stringify(this.lista))
      this.form = { nombre: '', tipo: 'Plaza', descripcion: '' }
    },
    eliminar(index) {
      this.lista.splice(index, 1)
      localStorage.setItem('puntos', JSON.stringify(this.lista))
    }
  }
})
