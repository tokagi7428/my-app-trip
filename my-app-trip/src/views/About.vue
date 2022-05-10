<template>
  <div class="about">
     <div class="about-banner">
       <img src="https://cdn.pixabay.com/photo/2017/05/23/19/42/seal-2338306__340.png" alt="" class="about-img">
       <h1 class="about-text">Who we are?</h1>
     </div>
  </div>
</template>

<script>

export default {
    name: 'aboutVue',
    component: {
      
    }
}
</script>

<style scoped>
.about{
  height: 100vh;
}
.about-img{
  width: 100%;
  height: 500px;
}
.about-banner{
  position: relative;
  text-align: center;
  color: #000;
}
.about-text{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media screen and (max-width: 1280px)  {
  .about-text{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
};
  
</style>

