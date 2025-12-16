Vue.component('hospedajes', {
  template: `
    <div>
      <h2>Hospedajes</h2>
      <form @submit.prevent="guardar">
        <input v-model="form.nombre" placeholder="Nombre" required>
        <select v-model="form.tipo">
          <option>Hotel</option>
          <option>Cabaña</option>
          <option>Hostel</option>
          <option>Camping</option>
        </select>
        <input v-model="form.direccion" placeholder="Dirección">
        <button>Guardar</button>
      </form>
    </div>
  `,
  data() {
    return {
      form: {
        nombre: '',
        tipo: '',
        direccion: ''
      }
    }
  },
  methods: {
    guardar() {
      alert('Datos enviados al backend')
    }
  }
})

new Vue({
  el: '#app',
  data: {
    view: 'hospedajes'
  }
})
