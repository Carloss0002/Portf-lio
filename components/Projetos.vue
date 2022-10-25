<template>
  <section id="Projetos" class="text-center" data-aos="fade-right" data-aos-duration="2900">
    <h2 class="title">Projetos</h2>
    <article>
       <div class="d-flex flex-column">
          <p id="subtitle-projetos" class="subtitle">Alguns Projetos e desafios, você pode encontrar muito mais no meu <a href="" target="_blank">Github</a></p>
          <span>/*Passe o mouse nos cards e veja a mágica acontecer*/</span>
          <label for="select" class="text-dark">
            tecnologias:
            <select class="input-filter text-white" v-model="search" name="" id="select">
                <option  disabled selected>select a technology</option>
                <option v-for="option in options" :value="option" :key="option">{{option}}</option>
            </select>
          </label>
       </div>
      
        <div class=" d-flex flex-wrap justify-content-center">
           <div v-if="search !== '' " class="d-flex flex-wrap">
            <div v-for="filter in filteredProjects" :key="filter.id">
               <div class="cards">
                  <div class="card">
                    <img :src="filter.imagem" class="img" :alt="filter.descricao">
                  </div>
                  <div class="texto d-flex flex-column justify-content-center align-items-center">
                      <p class="text">{{filter.descricao}}</p>
                  <div>
                    <b-button class="btn-link" variant="primary">
                      <a :href="filter.repo" target="_blank">Repositorio</a>
                    </b-button>
                    <b-button class="btn-link" variant="primary">
                      <a :href="filter.site" target="_blank">Site ativo</a>
                      </b-button>
                    </div>
                  </div>
              </div>
            </div>
           </div>

            <div v-if="search === '' " class="d-flex flex-wrap justify-content-center">
                <div v-for="produtos in projetos" :key="produtos.id">
                  <div v-if="produtos.categoria == 'HTML'" class="cards">
                      <div class="card">
                        <img :src="produtos.imagem" class="img" alt="">
                      </div>
                      <div class="texto d-flex flex-column justify-content-center align-items-center">
                        <p class="text">{{produtos.descricao}}</p>
                        <div>
                          <b-button class="btn-link" variant="primary">
                              <a :href="produtos.repo" target="_blank">Repositorio</a>
                          </b-button>
                          <b-button class="btn-link" variant="primary">
                              <a :href="produtos.site" target="_blank">Site ativo</a>
                          </b-button>
                        </div>
                      </div>
                  </div>
                </div>
            </div>

            <transition name="slide">
                <div v-if="show" class="size-projects d-flex flex-wrap justify-content-center">
                  <div v-for="produtos in projetos" :key="produtos.id">
                      <div v-if="produtos.categoria !== 'HTML'" class="cards">
                        <div class="card">
                          <img :src="produtos.imagem" class="img" alt="">
                        </div>
                        <div class="texto d-flex flex-column justify-content-center align-items-center">
                          <p class="text">{{produtos.descricao}}</p>
                          
                          <div>
                            <b-button class="btn-link" variant="primary">
                                <a :href="produtos.repo" target="_blank">Repositorio</a>
                            </b-button>
                            <b-button class="btn-link" variant="primary">
                                <a :href="produtos.site" target="_blank">Site ativo</a>
                            </b-button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>  
              
            </transition>
        
        
        </div>
         
        

        <b-button v-if="search === '' " @click="show = !show" class="btn-body w-25 mt-5 btn" variant="primary">{{show? 'Ver menos': 'Ver mais'}}</b-button>
    </article>
  </section>
</template>

<script>
import Projetos from '../JSON/projetos.json'
export default {
     data(){
        return{
          projetos: [],
          show: false,
          search: "",
          options:[
              'HTML',
               'VUE',
               'REACT'
          ]
        }
     },
     methods:{
        fetchData(){
            this.projetos = Projetos
        },
     },
     created(){
         this.fetchData()
     },
     computed:{
        filteredProjects(){
           let filtered = this.projetos.filter(projeto=> projeto.categoria.toLowerCase().includes(this.search.toLowerCase()))
           return filtered
        }
     }
}
</script>

<style scoped>
 #subtitle-projetos{
    font-size: 1.50rem;
 }
 span{
    color: #1d1d1d;
 }
 span:hover{
  cursor: pointer;
  color: #585858;
 }
 .btn{
   margin-top: 20px;
 }
 .card{
   width: 300px;
   height: 200px;
   margin-right:20px;
   margin-bottom: 40px;
   margin-top: 40px;
   border-radius: 10px;
 }
 .img{
   width: 100%;
   height: 100%;
   border-radius: 10px;
   object-fit: cover;
 }
 .card .img:hover{
    cursor: pointer;
    opacity: 0.3;
    box-shadow: 5px 5px 30px 5px;
 }
 .texto{
  width: 300px;
  height: 200px;
  position: relative;
  margin-top: -240px;
  border-radius: 10px;
  color: #000;
  visibility: hidden;
  background: rgba(255, 255, 255, 0.664);
  cursor: pointer;
 }
 .texto p{
  font-weight: bold;
 }
 .cards:hover .texto{
    visibility: visible;
 }

 .btn-link{
   outline: none;
   width: 100px;
   height: 35px;
 }
 .btn-link a{
   color: #fff;
   text-decoration: none;
 }
 .slide-enter-active {
  animation: bounce-in 0.5s;
}
.size-projects{
  width: 75%;
}
.input-filter{
  outline: none;
  padding: 5px;
  border: none;
  border-radius: 5px;
  background: #585858;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

.slide-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

@media (max-width: 992px) {
  .size-projects{
    width: 100%;
  }
}

</style>