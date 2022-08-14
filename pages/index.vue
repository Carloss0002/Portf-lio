<template>
  <div>
    <Home class="distancia"/>
    <Skills class="distancia"/>
    <Projetos class="distancia"/>
    <Sobre class="distancia"/>
    <Contatos class="distancia"/>
  </div>
</template>

<script>
import aosMixins from '~/mixins/aos.js'
export default {
  name: 'IndexPage',
  mixins: [aosMixins]
}
</script>

<style scoped>
@import '/static/CSS/index.css';
.distancia{
  margin-bottom: 90px;
}
</style>
