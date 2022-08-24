<template>
   <section id="Home">

      <article class="d-flex flex-row-reverse flex-wrap-reverse justify-content-around" name="página principal">

         <div class="  align-self-center">
            <h1 class="title-home  my-auto mb-5 animation">Olá, eu sou Carlos Eduardo!</h1>
            <p class="subtitle mb-4 mt-4" name="Desenvolvedor web Front end">Desenvolvedor Web Front end</p> 
            <b-button class="btn d-flex justify-content-center align-items-center" size="lg" variant="primary" href="#Contatos">Entrar em contato</b-button>
         </div>

         <figure data-aos="zoom-in-right" data-aos-duration="500">
            <img src="http://localhost:3000/Portf-lio//images/jovem_Computer.png" alt="jovem programador" class="img-sm">
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
    @media (max-width: 992px){
      .title-home{
         font-size: 2rem;
         white-space:pre-wrap;
      }
      .animation{
         animation: blinkCursor 500ms steps(40) infinite normal;
      }
    }
</style>