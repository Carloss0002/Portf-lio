<template>
   <section id="Home" class="mb-5">

      <article class="d-flex flex-row-reverse flex-wrap-reverse justify-content-around" name="página principal">

         <div class="align-self-center">
            <p class="title-element for-sm-el d-md-block d-none">Olá,</p>
            <h1 class="title-home title-element my-auto mb-5 animation pr-1"><span class="d-md-none d-sm-block">Olá,</span> eu sou Carlos Eduardo!</h1>
            <p class="subtitle  mb-4 mt-4 font-weight-light" name="Desenvolvedor web Front end">Desenvolvedor Web Front end</p> 
            <div class="d-flex justify-content-around mt-md-4">
               <b-button class="btn d-flex justify-content-center align-items-center blob" size="sm" variant="outline-success" href="https://wa.me/5577988592487" target="_blank">
                 <b-icon icon="whatsapp" font-scale="1"></b-icon>
                  <span class="ml-2">Whatsapp</span>
               </b-button>
               <b-button class="btn d-flex justify-content-center align-items-center linkedin-blob" size="sm" variant="outline-primary" href="https://www.linkedin.com/in/carlos-eduardo002/" target="_blank">
                  <b-icon icon="linkedin" font-scale="1"></b-icon>
                  <span class="ml-2">Linkedin</span>
               </b-button>
            </div>
         </div>

         <figure data-aos="fade-right" data-aos-duration="1500">
            <img src="/images/jovem_Computer.png" alt="jovem programador" class="img-sm">
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
    #Home{
      margin-bottom: 50px;
    }
    .title-element{
       font: normal 2.9rem 'Open Sans', sans-serif;
    }
    .title-home{
      border-right: 2px solid rgba(255, 255, 255, .75);
      white-space: nowrap;
      overflow: hidden;
    }
    .animation{
      animation: blinkCursor 500ms steps(40) infinite normal, text-animation 4s steps(40) 1s normal both;
    }
    .btn{
      width: 200px;
      transition:all 1s;
    }
    .subtitle{
      font: lighter 2rem 'Prata', serif;
      color: #7B797B;
    }
    .blob {
      box-shadow: 0 0 0 0 rgba(51, 217, 178, 1);
      transform: scale(1);
      animation: pulse-green 6s infinite;
      }
     .linkedin-blob{
        box-shadow: 0 0 0 0 rgb(14, 120, 170, 1);
        animation: pulse-blue 6s infinite;
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
    @keyframes pulse-green {
      0% {
         transform: scale(0.95);
         box-shadow: 0 0 0 0 rgba(51, 217, 178, 0.7);
      }
      
      70% {
         transform: scale(1);
         box-shadow: 0 0 0 10px rgba(51, 217, 178, 0);
      }
       100% {
         transform: scale(0.95);
         box-shadow: 0 0 0 0 rgba(51, 217, 178, 0);
      }
    }
    @keyframes pulse-blue {
      0% {
         transform: scale(0.95);
         box-shadow: 0 0 0 0 rgba(14, 120, 170, 0.7);
      }
      
      70% {
         transform: scale(1);
         box-shadow: 0 0 0 10px rgba(14, 120, 170, 0);
      }
      
      100% {
         transform: scale(0.95);
         box-shadow: 0 0 0 0 rgba(14, 120, 170, 0);
      }
    }
    @media (max-width: 992px){
      #Home{
         margin-top: 120px;
      }
      .title-home{
         font-size: 2rem;
         white-space:pre-wrap;
      }
      .animation{
         animation: blinkCursor 500ms steps(40) infinite normal;
      }
    }
</style>