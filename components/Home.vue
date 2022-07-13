<template>
   <section id="Home" class="d-flex justify-content-around">
      <article class="order-2">
         <h1 class="title my-auto">Olá, eu sou Carlos Eduardo</h1>
         <p class="subtitle">Desenvolvedor Web Front end</p> 
         <b-button class="btn" size="lg" variant="primary">Entrar em contato</b-button> 
      </article> 

      <figure class="order-1">
         <img src="/images/jovem_Computer.png" alt="jovem programador imagem do site icons8">
         <figcaption>Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA" target="_blank">Icons 8</a> from <a href="https://icons8.com/illustrations" target="_blank">Ouch!</a></figcaption>
      </figure>
   </section>
</template>

<script>
export default {
     name: 'Home'
}
</script>

<style scoped>
    #Home{
      margin-bottom: 50px;
    }
</style>