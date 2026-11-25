var CrearVengador = Vue.component('CrearVengador', {
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
                <ul class="list-group">
                    <li v-for="error in errores" class="list-group-item list-group-item-danger" >{{ error }}</li>
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
                    <input class="form-control" id="telefono" v-model="telefono" type="number">
                </p>
                <p>
                    <label class="form-label fs-5 fw-semibold" for="email">Email</label><br>
                    <input class="form-control" id="email" v-model="email" type="email">
                </p>
                <p>
                    <label class="form-label fs-5 fw-semibold" for="url_imagen">Url Imagen</label><br>
                    <input class="form-control" id="url_imagen" v-model="url_imagen" type="text">
                </p>
                <p>
                    <button class="btn btn-warning" v-on:click="validarFormulario(), crear_vengador(nombre, alias,
                    superpoder, trabajo_actual, telefono, email, url_imagen) ">Agregar Vengador</button>
                </p>
            </div>
            <div class="col-3"></div>
        </div>
    
    </div>`, // Aca termina nuestro Template
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
                this.errores.push("El Teléfono es obligatorio.");
            }
            if (!this.email) {
                this.errores.push("El Email es obligatorio.");
            }
            if (!this.url_imagen) {
                this.errores.push("Agregar una imagen es obligatorio.");
            }
            if (!this.errores.length) {
                return true;
            }
            },
            crear_vengador: function(nombre, alias, superpoder, trabajo_actual, telefono, email, url_imagen){
                if (!(Array.isArray(this.errores) && this.errores.length)) {
                let self = this;
                axios.post('https://tu-proyecto-default-rtdb.firebaseio.com//vengadores.json',{
                    nombre:nombre,
                    alias:alias,
                    superpoder:superpoder,
                    trabajo_actual:trabajo_actual,
                    telefono:telefono,
                    email:email,
                    url_imagen:url_imagen,
            })
            .then((response) => {
                alert("Se Agregó el Vengador a la Lista Exitosamente");
                router.push({ name: "Vengadores" });
            }
            ).catch((err) => {
                self.loading = false;
                console.log(err);
            });
        }
        } // fin metodo crear_vengador
    } // Terminan los Métodos
});