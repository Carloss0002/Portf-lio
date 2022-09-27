<template>
    <section id="Contatos" >
        <h2 class="title text-center">Entre em contato comigo</h2>
        <article class="d-flex flex-wrap justify-content-around  mt-5">
            <div class="sm-flex">
                <p class="text w-75 mb-4">Se gostou do meu trabalho entre em contato nas seguintes redes</p> 
                 <small>Clique em um dos icones para acessar as redes</small>
                <div class="w-25 d-flex justify-content-md-around  mt-5 div-buttons">
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

            <form class="d-flex flex-column mb-5" @submit.prevent="enviarPost" method="get" data-aos="fade-left" data-aos-duration="1500"> 
                <input class="mb-3 geral-inputs" id="input1" type="text" placeholder="nome" v-model="nome">
                <input class="mb-3 geral-inputs" id="input2" type="email" name="email" placeholder="email" v-model="email">
                <input class="mb-3 geral-inputs" id="input3" type="text" placeholder="Seu número" v-model="numero">
                <textarea class="mb-3 geral-inputs" id="input4" name="escreva uma mensagem" placeholder="Escreva uma mensagem" v-model="mensagem"></textarea>
                <b-button type="submit" class="btn-input" id="input5" variant="primary">Enviar</b-button>
            </form>
        </article>
     <notifications group="foo" position="top right" width="300px"/>
    </section>
</template>

<script>
import {fireDb} from '~/plugins/firebase.js'
export default {
  data(){
     return{
       nome: '',
       numero: '',
       email: '',
       mensagem: ''
     }
  },
  methods:{
   async enviarPost(){
     if(this.nome !== '' && this.numero !== '' && this.email !== ''){
       const Dados = fireDb.collection('users').doc()
       const userDados={
          nome: this.nome,
          numero: this.numero,
          email: this.email,
          mensagem: this.mensagem
       }
       try{
         await Dados.set(userDados)
          this.$notify({
            group: 'foo',
            type: 'success',
            title: 'Obrigado por entrar em contato',
            text: 'Responderei o mais breve possivel',
            duration: 4000
          })

         this.nome = '',
         this.numero = '',
         this.email = '',
         this.mensagem = ''
       } catch{
            this.$notify({
              group: 'foo',
              type: 'error',
              title: 'Problema detectado',
              text: 'Tente outra maneira de entrar em contato'
            }) 
       }
     } else{
       this.$notify({
         group: 'foo',
         type: 'error',
         title: 'Acho que algo está faltando',
         text: 'Por favor confira os seus dados!'
       })
     }
    },
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
    font-size: 16px;
  }
  .btn-input{
    width: 358px;
    height: 46px;
    border-radius: 10px;
  }
 
  input{
    height: 50px;
    color:#fff;
    padding: 20px;
  }
  textarea{
     height: 94px;
     padding-left: 20px;
     color: #fff;
  }
  .div-buttons icon:hover{
    background: rgb(0, 0, 223);
  }
</style>