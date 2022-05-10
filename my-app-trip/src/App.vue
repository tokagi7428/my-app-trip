<template>
  <nav>
    <Menu/>
  </nav>
</template>

<script>
import Menu from "./components/Menu.vue";
export default {
    name: "app",
    components: { Menu,}
}
</script>

<style>
*{
  box-sizing: border-box;
  padding:0;
  margin:0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
