<template>
  <div class="container-fluid-lg">
    <header>
        <nav 
           id="navElement" 
           class="navbar navbar-expand-sm topoMenu fixed-top w-100"
           type="dark" 
           toggleable="lg" 
           variant="dark"
           :style="scrollPosition? 'background: #1f1f1f': '' "
        >
           
            <a class="navbar-brand pl-md-5 pl-sm-0" href="">Carlos Eduardo</a>
            
              <b-navbar-toggle target="menu" class="menu-mobile">
                 <b-icon icon="menu-button-wide" variant="light" scale="2"></b-icon>
              </b-navbar-toggle>

            <b-collapse class="collapse navbar-collapse pr-5" id="menu" is-nav>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#Home">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Skills">SKILLS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Projetos">PROJETOS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Sobre">SOBRE MIM</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Contatos">CONTATO</a>
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
 export default{
    data(){
        return{
            scrollPosition: null
        }
    },
    methods:{
        updateScroll(){
            this.scrollPosition = window.scrollY
        }
    },
    mounted(){
        window.addEventListener('scroll', this.updateScroll)
    }
 }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Saira&display=swap');
    .topoMenu{
        background: #1f1f1fe5;
        border-radius: 0 0 15px 15px;
    }
    .active{
        background: pink;
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
    @media (max-width: 992px) {
        a{
            font-size: 8px;
        }
        .menu-mobile{
            margin-right: 10px;
        }
    }
</style>


