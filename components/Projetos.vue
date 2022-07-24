<template>
  <section id="Projetos" class="text-center">
    <h2 class="title">Projetos</h2>
    <article>
        <p id="subtitle-projetos" class="subtitle">Alguns Projetos e desafios, você pode encontrar muito mais no meu <a href="" target="blank">Github</a></p>
         
         
        

        <b-button class="btn-body w-25" variant="primary">Ver Mais</b-button>
    </article>
  </section>
</template>

<script>

export default {
     data(){
        return{
          baseUrl: process.env.VUE_APP_BASE_URL ,
          projetos: []
        }
     },
     methods:{
        fetchData(){
           this.$axios.get('/JSON/projetos.json').then(response=>{
                 this.projetos = response.data
                 console.log(this.projetos)
           })
        }
     },
     created(){
         this.fetchData()
     }
}
</script>

<style scoped>
 #subtitle-projetos{
    font-size: 1.50rem;
 }
</style>