<template>
  <div class="container-fluid-lg">
    <header>
        <nav class="navbar navbar-expand-sm topoMenu fixed-top" type="dark" toggleable="lg" variant="dark">
            <a class="navbar-brand pl-5" href="">Carlos Eduardo</a>
            
              <b-navbar-toggle target="menu">
                 <b-icon icon="menu-button-wide" variant="light" scale="2"></b-icon>
              </b-navbar-toggle>

            <b-collapse class="collapse navbar-collapse pr-5" id="menu" is-nav>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="">SKILLS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="">SOBRE MIM</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="">PROJETOS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="">CONTATO</a>
                    </li>
                </ul>
            </b-collapse>
        </nav>
    </header>
    <div class="container-fluid-lg">
        <Nuxt/>
    </div>
    <footer>
        
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Saira&display=swap');
    .topoMenu{
        background: #1f1f1fe5;
        border-radius: 0 0 10px 10px;
    }
    a, .nav-link{
        font: normal 1.32rem 'Poppins', sans-serif;
        color: #fff;

    }
    .navbar-brand{
        font-size: 1.80rem;
        font-family: 'Saira', sans-serif;
        padding: 30px 0 30px 0;
    }
</style>