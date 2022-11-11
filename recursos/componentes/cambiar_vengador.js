var CambiarVengador = Vue.component('CambiarVengador', {
    data: function () { //Declaración de la Data
        return {
            errores: [],
            nombre: null,
            alias: null,
            superpoder: null,
            trabajo_actual: null,
            telefono: null,
            email: null,
            url_imagen: null
        }
    },
    // Aquí comienza nuestro template
    template: `
    <div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <p v-if="errores.length">
                <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
                <ul>
                    <li v-for="error in errores" style="color:red;">{{ error }}</li>
                </ul>
                </p>
                <p>
                    <label class="form-label fs-5 fw-semibold" for="nombre">Nombre</label><br>
                    <input class="form-control" id="nombre" v-model="nombre" type="text">
                </p>
                <p>
                    <label class="form-label fs-5 fw-semibold" for="alias">Alias</label><br>
                    <input class="form-control" id="alias" v-model="alias" type="text">
                </p>
                <p>
                    <label class="form-label fs-5 fw-semibold" for="superpoder">Superpoder</label><br>
                    <input class="form-control" id="superpoder" v-model="superpoder" type="text">
                </p>
                <p>
                    <label class="form-label fs-5 fw-semibold" for="trabajo_actual">Trabajo Actual</label><br>
                    <input class="form-control" id="trabajo_actual" v-model="trabajo_actual" type="text">
                </p>
                <p>
                    <label class="form-label fs-5 fw-semibold" for="telefono">Telefono</label><br>
                    <input class="form-control" id="telefono" v-model="telefono" type="text">
                </p>
                <p>
                    <label class="form-label fs-5 fw-semibold" for="email">Email</label><br>
                    <input class="form-control" id="email" v-model="email" type="text">
                </p>
                <p>
                    <label class="form-label fs-5 fw-semibold" for="url_imagen">Url Imagen</label><br>
                    <input class="form-control" id="url_imagen" v-model="url_imagen" type="text">
                </p>
                <p>
                    <button class="btn btn-warning" v-on:click="validarFormulario(), cambiar_vengador(nombre, alias, superpoder, trabajo_actual, telefono, email, url_imagen)">Guardar Cambios</button>
                </p>
            </div>
            <div class="col-3"></div>
        </div>
    </div>`, // Aca termina nuestro Template
    mounted() {
        let self = this;
            fetch('https://tu-proyecto-default-rtdb.firebaseio.com/vengadores/'+this.$route.params.id+'.json')
            .then(r => r.json())
            .then(json => {
                self.nombre = json.nombre,
                self.alias = json.alias,
                self.superpoder = json.superpoder,
                self.trabajo_actual = json.trabajo_actual,
                self.telefono = json.telefono,
                self.email = json.email,
                self.url_imagen = json.url_imagen
            });
        },
    methods: { //Inician los Métodos
        validarFormulario: function (e) { //iniciamos la Funcion que valida el formulario
            this.errores = [];
            if (!this.nombre) {
                this.errores.push("El Nombre es obligatorio.");
            }
            if (!this.alias) {
                this.errores.push("El Alias es obligatorio.");
            }
            if (!this.superpoder) {
                this.errores.push("El Superpoder es obligatorio.");
            }
            if (!this.trabajo_actual) {
                this.errores.push("El Trabajo Actual es obligatorio.");
            }
            if (!this.telefono) {
                this.errores.push("El Telefono es obligatorio.");
            }
            if (!this.email) {
                this.errores.push("El Email es obligatorio.");
            }
            if (!this.errores.length) {
                return true;
            }
        },
        cambiar_vengador: function(nombre, alias, superpoder, trabajo_actual, telefono, email, url_imagen){
            if (!(Array.isArray(this.errores) && this.errores.length)) {
            let self = this;
            axios.put('https://tu-proyecto-default-rtdb.firebaseio.com/vengadores/'+ this.$route.params.id +'.json',{
                nombre:nombre,
                alias:alias,
                superpoder:superpoder,
                trabajo_actual:trabajo_actual,
                telefono:telefono,
                email:email,
                url_imagen:url_imagen,
            }).then((response) => {
                alert("Datos del Vengador Modificados Exitosamente");
                router.push({ name: "Vengadores" });
            }).catch((err) => {
            self.loading = false; console.log(err);});
            }
        } // fin metodo cambiar_vengador
    } // Terminan los Métodos
});
