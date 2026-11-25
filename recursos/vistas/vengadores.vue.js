var Vengadores = Vue.component('Vengadores',
{
    template: `
    <div>
    <h1 class="bg-warning bg-opacity-60 h1">Vengadores</h1>
    <router-link class="nav-link" to="/crear_vengador">
        <button class="btn btn-dark">Agregar Vengador</button>
    </router-link>
    <br>
    <div class="table-responsive">
    <table class="table table-secondary">
        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">Nombre</th>
                <th scope="col">Alias</th>
                <th scope="col">Superpoder</th>
                <th scope="col">Trabajo Actual</th>
                <th scope="col">Telefono</th>
                <th scope="col">Email</th>
                <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in vengadores">
                <td><img :src="item.url_imagen" class="img-fluid" alt="Vengador"></td>
                <td>{{ item.nombre }}</td>
                <td>{{ item.alias }}</td>
                <td>{{ item.superpoder }}</td>
                <td>{{ item.trabajo_actual }}</td>
                <td>{{ item.telefono }}</td>
                <td>{{ item.email }}</td>
                <td><a href="/cambiar_vengador"></a>
                <router-link class="nav-link" :to="{ name: 'cambiar_vengador', params: { id:index }}"> <button class="btn btn-primary">Editar</button> </router-link>
                <button class="btn btn-danger" v-on:click="eliminar_vengador(index) ">Eliminar</button>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
    
    <a href="/crear_vengador"></a>
    </div>
    `,
    data: function () {
        return {
            vengadores: [],
        }
    },
    mounted() {
        let self = this;
        fetch('https://tu-proyecto-default-rtdb.firebaseio.com//vengadores.json')
        .then(r => r.json())
        .then(json => {
            self.vengadores = json;
        });
    },
    methods: { //Inician los Métodos
        eliminar_vengador: function(id){
            let self = this;
            axios.delete('https://tu-proyecto-default-rtdb.firebaseio.com//vengadores/'+id+'.json')
            .then((response) => {
                alert("El Vengador Fue Eliminado de la Lista");
                location.reload();
            }).catch((err) => {
                self.loading = false; console.log(err);
            });
        } // fin metodo eliminar_vengador
    }
});