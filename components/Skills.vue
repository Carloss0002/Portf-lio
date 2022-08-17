<template>
     <section id="Skills" data-aos="fade-up" data-aos-duration="1500">
          <h2 class="text-center title mb-5">Skills</h2>
          <article name="habilidades do desenvolvedor">
            <div>
             <h3 class="subititle text-center">Principais Habilidades</h3>
             <p class="text-center text" name="Tecnologias que me ajudam a concluir e facilitar minhas tarefas">Tecnologias que me ajudam a concluir e facilitar minhas tarefas</p>
             
             <div class="d-flex justify-content-center w-100">
              <div class="d-flex justify-content-center  flex-column" name="card">

                <div class="d-flex flex-wrap">

                  <div class="mini-card text-center m-2">
                      <figure class="my-auto pt-2 pb-2">
                        <img src="/images/html.svg" alt="Html5 logo" width="40">
                      </figure>
                      <span class="p-4 font-weight-bold">Html</span>
                      <p class="mx-2 text-monospace">
                        Linguagem de marcação base da web, que estruturam a página.
                       </p>
                  </div>
                  <div class="mini-card  m-2 " name="card">
                      <figure class="my-auto pt-2 pb-2">
                        <img src="/images/css-svgrepo-com.svg" alt="Css logo" width="40">   
                      </figure>
                      <span class="p-4 font-weight-bold">CSS</span>
                      <p class="text-monospace mx-2">
                        Linguagem de estilo que melhora o visual das páginas web. 
                      </p>
                  </div>
                  <div class="mini-card  m-2" name="card">
                      <figure class="my-auto pt-2 pb-2">
                        <img src="/images/js-svgrepo-com.svg" alt="Js logo" width="40">         
                      </figure>
                      <span class="p-4 mb-5 font-weight-bold">JavaScript</span>
                       <p class="text-monospace mx-2">
                        Linguagem de Programação que deixa a página interativa. 
                      </p>
                  </div>

                  <div class="mini-card  m-2" name="card">
                      <figure class="my-auto pt-2 pb-2">
                        <img src="/images/bootstrap-svgrepo-com.svg" alt="Bootstrap logo" width="40">                      
                      </figure>
                       <span class="p-4 mb-5 font-weight-bold">Bootstrap</span>
                       <p class="text-monospace mx-2">
                        Framework web para facilitar a vida do desenvolvedor front-end. 
                       </p>
                  </div>
                </div>

               <transition name="bounce">
                 <div v-if="show">

                  <div class="d-flex flex-wrap" >
                  
                    <div class="mini-card m-2" name="card">
                        <figure class="my-auto pt-2 pb-2">
                          <img src="/images/git-svgrepo-com.svg" alt="git logo" width="40">                    
                        </figure>
                        <span class="p-4 mb-5 font-weight-bold">Git</span>
                        <p class="text-monospace mx-2">
                          Sistema de controle de versão (ajuda a não perder horas de trabalho).  
                        </p>
                    </div>

                    <div class="mini-card m-2" name="card">
                        <figure class="my-auto pt-2 pb-2">
                          <img src="/images/github-svgrepo-com.svg" alt="github logo" width="40">     
                        </figure>
                        <span class="p-4 mb-5 font-weight-bold">GitHub</span>
                        <p class="text-monospace mx-2">
                          Facilita o trabalho em equipe no mesmo Código. 
                        </p>
                    </div>

                    <div class="mini-card  m-2" name="card">
                        <figure class="my-auto pt-2 pb-2">
                          <img src="/images/vue-9-logo-svgrepo-com.svg" alt="Vue logo" width="40"> 
                        </figure>
                          <span class="p-4 mb-5 font-weight-bold">Vue</span>
                        <p class="text-monospace mx-2">
                          Framework JS utilizado para criar aplicações <span class="font-italic">single page</span>
                        </p>
                    </div>

                    <div class="mini-card  m-2" name="card">
                        <figure class="my-auto pt-2 pb-2">
                          <img src="/images/nuxt-icon-svgrepo-com.svg" alt="Nuxt logo" width="40">
                        </figure>
                          <span class="p-4 mb-5 font-weight-bold">Nuxt</span>
                        <p class="text-monospace mx-2">
                          Framework baseado em vue, que resolve alguns problemas do mesmo. 
                        </p>
                    </div>
                  </div>

                  <div class="d-flex justify-content-center">
                    
                    <div class="mini-card  m-2" name="card">
                        <figure class="my-auto pt-2 pb-2">
                          <img src="/images/react-svgrepo-com.svg" alt="React logo" width="40">
                        </figure>
                          <span class="p-4 mb-5 font-weight-bold">React</span>
                        <p class="text-monospace mx-2">
                          Biblioteca baseada em <span class="text-italic">JS</span> com foco em criar interfaces de usuários. 
                        </p>
                    </div>

                  </div>
                 </div>
               </transition>
              </div>
             </div>
              <div class="w-100 d-flex justify-content-center">
                <b-button @click="show = !show" class="btn-body w-25 mt-5 btn" variant="primary">{{show? 'Ver menos': 'Ver mais'}}</b-button>
              </div>
            </div> 
          </article>
     </section>
</template>

<script>
export default {
    data(){
      return{
        show: false
      }
    }
}
</script>

<style scoped>
   .mini-card{
     border: 2px solid #fff;
     width: 160px;
     text-align: center;
     border-radius: 10px;
   }
   .mini-card:hover{
    cursor: pointer;
    border: 2px solid #000;
   }
   .bounce-enter-active {
  animation: bounce-in 0.5s;
  }
  .bounce-leave-active {
    animation: bounce-in 0.5s reverse;
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
</style>