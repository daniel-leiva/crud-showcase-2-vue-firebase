var CrearGema = Vue.component('CrearGema', {
    data: function () { //Declaración de la Data
        return {
            errores: [],
            nombre: null,
            poder: null,
            portador: null,
            ubicacion: null,
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
                    <label class="form-label fs-5 fw-semibold" for="poder">Poder</label><br>
                    <input class="form-control" id="poder" v-model="poder" type="text">
                </p>
                <p>
                    <label class="form-label fs-5 fw-semibold" for="portador">Portador</label><br>
                    <input class="form-control" id="portador" v-model="portador" type="text">
                </p>
                <p>
                    <label class="form-label fs-5 fw-semibold" for="ubicacion">Ubicación</label><br>
                    <input class="form-control" id="ubicacion" v-model="ubicacion" type="text">
                </p>
                <p>
                    <label class="form-label fs-5 fw-semibold" for="url_imagen">URL Imagen</label><br>
                    <input class="form-control" id="url_imagen" v-model="url_imagen" type="text">
                </p>
                <p>
                    <button class="btn btn-warning" v-on:click="validarFormulario(), crear_gema(nombre, poder,
                    portador, ubicacion, url_imagen) ">Agregar Gema</button>
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
            if (!this.poder) {
                this.errores.push("El Poder es obligatorio.");
            }
            if (!this.portador) {
                this.errores.push("El Portador es obligatorio.");
            }
            if (!this.ubicacion) {
                this.errores.push("La Ubicación es obligatorio.");
            }
            if (!this.url_imagen) {
                this.errores.push("La Imagen es obligatoria.");
            }
            if (!this.errores.length) {
                return true;
            }
            },
            crear_gema: function(nombre, poder, portador, ubicacion, url_imagen){
                if (!(Array.isArray(this.errores) && this.errores.length)) {
                let self = this;
                axios.post('https://tu-proyecto-default-rtdb.firebaseio.com/gemas_infinito.json',{
                    nombre:nombre,
                    poder:poder,
                    portador:portador,
                    ubicacion:ubicacion,
                    url_imagen:url_imagen,
            })
            .then((response) => {
                alert("Se Agregó la Gema a la Lista Exitosamente");
                router.push({ name: "GemasInfinito" });
            }
            ).catch((err) => {
                self.loading = false;
                console.log(err);
            });
        }
        } // fin metodo crear_gema
    } // Terminan los Métodos
});