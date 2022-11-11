var Inicio = Vue.component('Inicio', {
    template: `
    <div>
    <br>
        <h1 class="bg-warning bg-opacity-60">Inicio</h1>
        <span class="fs-5 bg-light bg-opacity-75">¡Te damos la bienvenida!</span>
        <br>
        <span class="fs-5 bg-light bg-opacity-75"> Un mundo lleno de superheroes te espera, contrata nuestros servicios :) </span>
        <br><br>
        <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="true">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="2000">
            <img src="imagenes/portada-avengers1.jpg" class="d-block w-100" alt="Avengers-Portada1">
            </div>
            <div class="carousel-item" data-bs-interval="2000">
            <img src="imagenes/portada-avengers2.jpg" class="d-block w-100" alt="Avengers-Portada2">
            </div>
            <div class="carousel-item">
            <img src="imagenes/portada-avengers3.jpg" class="d-block w-100" alt="Avengers-Portada3">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Siguiente</span>
        </button>
    </div>

    </div>
    `
});