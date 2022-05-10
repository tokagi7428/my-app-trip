<template>
  <div class="about">
    <div class="about-banner">
      <img
        src="https://cdn.pixabay.com/photo/2014/08/15/06/15/imprint-418593__340.jpg"
        alt=""
        class="about-img"
      />
    </div>
    <div class="about-box">
      <h1 class="about-header">Who we are ?</h1>
      <nav class="about-title">
        <div class="box box1">
          <h1>Header</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, corporis!</p>
        </div>
        <div class="box box2">
          <h1>Header</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, corporis!</p>
        </div>
        <div class="box box3">
          <h1>Header</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, corporis!</p>
        </div>
        <div class="box box4">
          <h1>Header</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, corporis!</p>
        </div>
        <div class="box box5">
          <h1>Header</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, corporis!</p>
        </div>
        <div class="box box6">
          <h1>Header</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, corporis!</p>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutVue",
  component: {},
};
</script>

<style scoped>

.about-img {
  width: 100%;
  height: 500px;
}

.about-header {
  text-align: center;
  margin: 70px auto;
}
.box {
  background: green;
  width: 300px;
  height: 300px;
  position: relative;
  text-align: center;
}
.box p{
  position: absolute;
  display: block;
  bottom: 0px;
}
.about-title {
  width: 80%;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
}
</style>

