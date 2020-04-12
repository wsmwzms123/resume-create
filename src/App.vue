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
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    #app {
      width: 750px;
      height: 100%;
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
