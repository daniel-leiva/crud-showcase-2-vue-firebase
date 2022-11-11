var Villanos = Vue.component('Villanos',
{
    template: `
    <div>
    <h1 class="bg-warning bg-opacity-60 h1">Villanos</h1>
    <router-link class="nav-link" to="/crear_villano">
        <button class="btn btn-dark">Agregar Villano</button>
    </router-link>
    <br>
    <div class="table-responsive">
    <table class="table table-secondary">
        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">Nombre</th>
                <th scope="col">Superpoder</th>
                <th scope="col">Origen</th>
                <th scope="col">Derrotado por</th>
                <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in villanos">
                <td><img :src="item.url_imagen" class="img-fluid" alt="Villanos"></td>
                <td>{{ item.nombre }}</td>
                <td>{{ item.superpoder }}</td>
                <td>{{ item.origen }}</td>
                <td>{{ item.derrotado_por }}</td>
                <td><a href="/cambiar_villano"></a>
                <router-link class="nav-link" :to="{ name: 'cambiar_villano', params: { id:index }}"> <button class="btn btn-primary">Editar</button> </router-link>
                <button class="btn btn-danger" v-on:click="eliminar_villano(index) ">Eliminar</button>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
    
    <a href="/crear_villano"></a>
    </div>
    `,
    data: function () {
        return {
            villanos: [],
        }
    },
    mounted() {
        let self = this;
        fetch('https://tu-proyecto-default-rtdb.firebaseio.com/villanos.json')
        .then(r => r.json())
        .then(json => {
            self.villanos = json;
        });
    },
    methods: { //Inician los Métodos
        eliminar_villano: function(id){
            let self = this;
            axios.delete('https://tu-proyecto-default-rtdb.firebaseio.com/villanos/'+id+'.json')
            .then((response) => {
                alert("El Villano Fue Eliminado de la Lista");
                location.reload();
            }).catch((err) => {
                self.loading = false; console.log(err);
            });
        } // fin metodo eliminar_villano
    }
});