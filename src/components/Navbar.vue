<template>
  <nav>
    <div class="nav-wrapper blue">
      <div class="container">
        <router-link to="/" class="brand-logo">Avisos</router-link>
        <a href="#" data-target="mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down">
            <li><router-link to="/">Inicio</router-link></li>
            <li><router-link v-bind:to="{name:'category', params: {category: 'NECESITO'}}">Necesito</router-link></li>
            <li><router-link v-bind:to="{name:'category', params: {category: 'ALQUILO'}}">Alquilo</router-link></li>
            <li><router-link v-bind:to="{name:'category', params: {category: 'VENDO'}}">Vendo</router-link></li>
            <li><router-link to="/">Todos</router-link></li>
            <li><router-link to="/new"><a class="green waves-effect waves-light btn"><i class="material-icons left">add_circle</i> Publicar Aviso</a></router-link></li>
          </ul>
          <ul class="sidenav" id="mobile">
            <li><router-link to="/"><i class="material-icons">home</i> Inicio</router-link></li>
            <li><router-link to="{name:'category', params: {category: 'NECESITO'}}"><i class="material-icons">apps</i> Necesito</router-link></li>
            <li><router-link to="{name:'category', params: {category: 'ALQUILO'}}"><i class="material-icons">apps</i> Alquilo</router-link></li>
            <li><router-link to="{name:'category', params: {category: 'VENDO'}}"><i class="material-icons">apps</i> Vendo</router-link></li>
            <li><router-link to="{name:'category', params: {category: 'TRASPASO'}}"><i class="material-icons">apps</i> Traspaso</router-link></li>
            <li><router-link v-bind:to="{name:'category', params: {category: 'ANTICRESIS'}}"><i class="material-icons">apps</i> Anticresis</router-link></li>
            <li><router-link v-bind:to="{name:'category', params: {category: 'SERVICIOS'}}"><i class="material-icons">apps</i> Servicios</router-link></li>
            <li><router-link v-bind:to="{name:'category', params: {category: 'CLASES-CURSOS'}}"><i class="material-icons">apps</i> C-Cursos</router-link></li>
            <li><router-link v-bind:to="{name:'category', params: {category: 'OTROS'}}"><i class="material-icons">apps</i> Otros</router-link></li>
          </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    name:'navbar'
}
</script>
