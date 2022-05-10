<template>
  <nav>
    <diV>
      <Menu/>
    </diV>
    <Footer/>
  </nav>
</template>

<script>
import Menu from "./components/Menu.vue";
import Footer from "./components/Footer.vue";
export default {
    name: "app",
    components: { Menu, Footer }
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
