var GemasInfinito = Vue.component('GemasInfinito',
{
    template: `
    <div>
    <h1 class="bg-warning bg-opacity-60 h1">Gemas del Infinito</h1>
    <router-link class="nav-link" to="/crear_gema">
        <button class="btn btn-dark">Agregar Gema</button>
    </router-link>
    <br>
    <div class="table-responsive">
    <table class="table table-secondary">
        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">Nombre</th>
                <th scope="col">Poder</th>
                <th scope="col">Portador</th>
                <th scope="col">Ubicación</th>
                <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in gemas_infinito">
                <td><img :src="item.url_imagen" class="img-fluid" alt="Gema del Infinito"></td>
                <td>{{ item.nombre }}</td>
                <td>{{ item.poder }}</td>
                <td>{{ item.portador }}</td>
                <td>{{ item.ubicacion }}</td>
                <td><a href="/cambiar_gema"></a>
                <router-link class="nav-link" :to="{ name: 'cambiar_gema', params: { id:index }}"> <button class="btn btn-primary">Editar</button> </router-link>
                <button class="btn btn-danger" v-on:click="eliminar_gema(index) ">Eliminar</button>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
    
    <a href="/crear_gema"></a>
    </div>
    `,
    data: function () {
        return {
            gemas_infinito: [],
        }
    },
    mounted() {
        let self = this;
        fetch('https://tu-proyecto-default-rtdb.firebaseio.com/gemas_infinito.json')
        .then(r => r.json())
        .then(json => {
            self.gemas_infinito = json;
        });
    },
    methods: { //Inician los Métodos
        eliminar_gema: function(id){
            let self = this;
            axios.delete('https://tu-proyecto-default-rtdb.firebaseio.com/gemas_infinito/'+id+'.json')
            .then((response) => {
                alert("La Gema Fue Eliminado de la Lista");
                location.reload();
            }).catch((err) => {
                self.loading = false; console.log(err);
            });
        } // fin metodo eliminar_gema
    }
});