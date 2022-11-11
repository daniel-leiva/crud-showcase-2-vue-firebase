var CambiarVillano = Vue.component('CambiarVillano', {
    data: function () { //Declaración de la Data
        return {
            errores: [],
            nombre: null,
            superpoder: null,
            origen: null,
            derrotado_por: null,
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
                    <label class="form-label fs-5 fw-semibold" for="superpoder">Superpoder</label><br>
                    <input class="form-control" id="superpoder" v-model="superpoder" type="text">
                </p>
                <p>
                    <label class="form-label fs-5 fw-semibold" for="origen">Origen</label><br>
                    <input class="form-control" id="origen" v-model="origen" type="text">
                </p>
                <p>
                    <label class="form-label fs-5 fw-semibold" for="derrotado_por">Derrotado por</label><br>
                    <input class="form-control" id="derrotado_por" v-model="derrotado_por" type="text">
                </p>
                <p>
                    <label class="form-label fs-5 fw-semibold" for="url_imagen">URL Imagen</label><br>
                    <input class="form-control" id="url_imagen" v-model="url_imagen" type="text">
                </p>
                <p>
                    <button class="btn btn-warning" v-on:click="validarFormulario(), cambiar_villano(nombre, superpoder, origen, derrotado_por, url_imagen)">Guardar Cambios</button>
                </p>
            </div>
            <div class="col-3"></div>
        </div>

    </div>`, // Aca termina nuestro Template
    mounted() {
        let self = this;
            fetch('https://tu-proyecto-default-rtdb.firebaseio.com/villanos/'+this.$route.params.id+'.json')
            .then(r => r.json())
            .then(json => {
                self.nombre = json.nombre,
                self.superpoder = json.superpoder,
                self.origen = json.origen,
                self.derrotado_por = json.derrotado_por,
                self.url_imagen = json.url_imagen
            });
        },
    methods: { //Inician los Métodos
        validarFormulario: function (e) { //iniciamos la Funcion que valida el formulario
            this.errores = [];
            if (!this.nombre) {
                this.errores.push("El Nombre es obligatorio.");
            }
            if (!this.superpoder) {
                this.errores.push("El Superpoder es obligatorio.");
            }
            if (!this.origen) {
                this.errores.push("El Origen es obligatorio.");
            }
            if (!this.derrotado_por) {
                this.errores.push("El campo Derrotado Por es obligatorio.");
            }
            if (!this.url_imagen) {
                this.errores.push("La Imagen es obligatoria.");
            }
            if (!this.errores.length) {
                return true;
            }
        },
        cambiar_villano: function(nombre, superpoder, origen, derrotado_por, url_imagen){
            if (!(Array.isArray(this.errores) && this.errores.length)) {
            let self = this;
            axios.put('https://tu-proyecto-default-rtdb.firebaseio.com/villanos/'+ this.$route.params.id +'.json',{
                nombre:nombre,
                superpoder:superpoder,
                origen:origen,
                derrotado_por:derrotado_por,
                url_imagen:url_imagen,
            }).then((response) => {
                alert("Datos del Villano Modificados Exitosamente");
                router.push({ name: "Villanos" });
            }).catch((err) => {
            self.loading = false; console.log(err);});
            }
        } // fin metodo cambiar_villano
    } // Terminan los Métodos
});
