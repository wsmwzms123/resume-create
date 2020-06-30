<template>
  <div id="app">
    <main class="wrap">
      <Header></Header>
    </main>
  </div>
</template>

<script>
import Header from '@/views/header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">
@import "~@/styles/mixin.scss";
  body {
    @include flex-center;
    #app {
      width: 750px;
      main.wrap {
        height: 100%;
        width: 100%;
        border: 1px solid #E3EBE9;
        margin-top: 15px;
        border-radius: 5px;
      }
    }
  }
</style>
