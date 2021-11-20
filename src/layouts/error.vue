{{{{raw}}}}
<template>
  <section class="container">
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo">
    <h1 class="title">
      {{ error.statusCode }}
    </h1>
    <h2 class="info">
      {{ error.message }}
    </h2>
    <nuxt-link v-if="error.statusCode === 404" class="button" to="/">
      Homepage
    </nuxt-link>
  </section>
</template>
{{{{/raw}}}}

<script>
import { Component, mixins, Prop } from 'nuxt-property-decorator';
import App from '~/mixins/app';

@Component
export default class ErrorLayout extends mixins(App) {
  @Prop({ type: Object, required: true }) error;
}
</script>

<style lang="scss" scoped>
.title
{
  margin-top: 15px;
  font-size: 5em;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
}
.button
{
  margin-top: 50px;
}
</style>
