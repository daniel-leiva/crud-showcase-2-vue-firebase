Vue.component('formula', {
    data: function () { //Declaración de la Data
        return {
            errores: [],
            vengador: null,
            descripcion_trabajo: null,
            correo: null,
            telefono: null,
            vengadores: []
        }
    },
    mounted() {
        let self = this;
        fetch('https://tu-proyecto-default-rtdb.firebaseio.com/vengadores.json')
        .then(r => r.json())
        .then(json => {
            self.vengadores = json;
        });
    },
    // Aquí comienza nuestro template
    template: `
    <div>
    <form
    id="app"
    @submit="validarFormulario"
    method="post"
    action="./vengadores.html#/contacto"
    novalidate="true">
    <p v-if="errores.length">
        <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
        <ul class="list-group">
            <li class="list-group-item list-group-item-danger" v-for="error in errores">{{ error }}</li>
        </ul>
    </p>

    <p>
        <label class="form-label fs-5 fw-semibold" for="vengador">Vengador</label><br>
        <select class="form-select" id="vengador" v-model="vengador" name="vengador">
            <option v-for="x in vengadores"> {{x.alias}} </option>
        </select>
    </p>

    <p>
        <label class="form-label fs-5 fw-semibold" for="descripcion_trabajo">Descripcion del Trabajo</label><br>
        <textarea class="form-control" placeholder="Describe la tarea a realizar" v-model="descripcion_trabajo" name="descripcion_trabajo" id="descripcion_trabajo"></textarea>
    </p>

    <p>
        <label class="form-label fs-5 fw-semibold" for="correo">Correo electrónico</label><br>
        <input class="form-control" id="correo" v-model="correo" type="email" name="correo">
    </p>

    <p>
        <label class="form-label fs-5 fw-semibold" for="telefono">Telefóno</label><br>
        <input class="form-control" id="telefono" v-model="telefono" type="number" name="telefono">
    </p>

    <p>
        <button type="submit" class="btn btn-warning">Submit</button>
    </p>
    </form>
    </div>`,
    // Aca termina nuestro Template
    methods: { //Inician los Métodos
        validarFormulario: function (e) { //iniciamos la Funcion que valida el formulario
            this.errores = [];
            if (!this.vengador) {
                this.errores.push("Elegir un vengador es obligatorio");
            }
            if (!this.descripcion_trabajo) {
                this.errores.push("Describir el trabajo es obligatorio");
            }
            if (!this.correo) {
                this.errores.push('El correo electrónico es obligatorio.');
            } else if (!this.validarCorreo(this.correo)) {
                this.errores.push('El correo electrónico debe ser válido.');
            }
            if (!this.telefono) {
                this.errores.push('El número de telefóno es obligatorio.');
            }
            if (!this.errores.length) {
                return true;
            }
            e.preventDefault();
        },
        validarCorreo: function (correo) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(correo);
        }
    } // Terminan los Métodos
});