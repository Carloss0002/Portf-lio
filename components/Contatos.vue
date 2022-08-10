<template>
    <section id="#Contatos">
        <h2 class="title text-center">Entre em contato comigo</h2>
        <article class="d-flex justify-content-around mt-5">
            <div>
                <p class="text w-75 mb-4">Se gostou do meu trabalho entre em contato nas seguintes redes</p> 

                <div class="w-25 d-flex justify-content-around mt-5">
                   <a href="https://www.linkedin.com/in/carlos-eduardo002/" target="blank">
                    <b-icon icon="linkedin" font-scale="2" variant="light"></b-icon>
                   </a>
                   <a href="https://github.com/Carloss0002" target="blank">
                     <b-icon icon="github" font-scale="2" variant="light"></b-icon>
                   </a>
                   <a href="mailto:carlosseduardo003@hotmail.com" target="blank">
                    <b-icon icon="voicemail" font-scale="2" variant="light"></b-icon>
                   </a>
                </div>
            </div>

            <form class="d-flex flex-column" @submit="enviarPost" method="get"> 
                <input class="mb-3 geral-inputs"  type="text" placeholder="nome">
                <input class="mb-3 geral-inputs" type="email" name="email" placeholder="email">
                <input class="mb-3 geral-inputs" type="text" placeholder="Seu número">
                <textarea class="mb-3 geral-inputs" name="" id="" placeholder="Escreva uma mensagem"></textarea>
                <b-button class="btn-input" variant="primary">Enviar</b-button>
            </form>
        </article>
    </section>
</template>

<script>
export default {
  methods:{
    enviarPost(){
      console.log('Caracas')
    }
  }

}
</script>

<style scoped>
  .geral-inputs{
      background: rgba(106, 106, 106, 0.705);
      border: none;
      border-radius: 10px;
      width: 358px;
  }
  .geral-inputs::placeholder{
    color: #fff;
    padding-left: 20px;
    font-size: 16px;
  }
  .btn-input{
    width: 358px;
    height: 46px;
    border-radius: 10px;
  }
 
  input{
    height: 50px;
  }
  textarea{
     height: 94px;
  }
</style>