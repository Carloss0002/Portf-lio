<template>
   <section id="Home">
      <article class="d-flex justify-content-around">
         <div class="order-2 align-self-center">
            <h1 class="title-home my-auto mb-5 animation">Olá, eu sou Carlos Eduardo!</h1>
            <p class="subtitle mb-4 mt-4">Desenvolvedor Web Front end</p> 
            <b-button class="btn text-center" size="lg" variant="primary">Entrar em contato</b-button>
         </div>

         <figure class="order-1">
            <img src="/images/jovem_Computer.png" alt="jovem programador imagem do site icons8">
            <figcaption>Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA" target="_blank">Icons 8</a> from <a href="https://icons8.com/illustrations" target="_blank">Ouch!</a></figcaption>
         </figure>
      </article> 

   </section>
</template>

<script>
export default {
     name: 'Home'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');
    #Home{
      margin-bottom: 50px;
    }
    .title-home{
      font: normal 2.9rem 'Special Elite', monospace, sans-serif;
      border-right: 2px solid rgba(255, 255, 255, .75);
      white-space: nowrap;
      overflow: hidden;
    }
    .animation{
      animation: blinkCursor 500ms steps(40) infinite normal, text-animation 4s steps(40) 1s normal both;
    }
    @keyframes text-animation{
      from{
         width: 0;
      }
      to{
            width: 100%;
      }
    }

    @keyframes blinkCursor{
      from{
         border-right-color: rgba(255, 255, 255, .75);
      }
      to{
         border-right-color: transparent;
      }
    }
</style>