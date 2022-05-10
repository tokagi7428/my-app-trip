<template>
  <div>
    <div class="w-100">
      <img :src="image[0]" alt="" class="banner w-100" />
      <div class="row">
        <div class="text-img col-sm col-md col-lg w-75">
          <h1>Lorem ipsum dolor.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
            perferendis laudantium dolorem cupiditate quidem odio earum, quas
            facere accusamus quisquam id possimus asperiores consectetur qui
            harum quis placeat. Explicabo tempora aut dignissimos obcaecati
            officia doloribus voluptates ab molestiae distinctio maiores dolorem
            earum dolores nemo delectus iste, repellendus cumque beatae quod!
          </p>
        </div>
      </div>
    </div>
    <div class="group-card row">
      <div class="card col-sm-12 col-md-6 col-lg text-center">
        <div>
          <img :src="image[1]" alt="" />
        </div>
        <div class="card-title">
          <h1>Airplane</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            veniam dolore magnam voluptatibus atque provident quisquam sunt?
            Alias similique saepe officia magnam neque. Distinctio minima quos
            voluptate odio ad excepturi fugiat asperiores sequi dolores
            blanditiis voluptatibus neque aut, autem esse ipsum mollitia
            accusamus! Ullam, quasi! Aperiam soluta deleniti numquam dolorem!
          </p>
        </div>
      </div>
      <div class="card col-sm-12 col-md-6 col-lg text-center">
        <div>
          <img :src="image[1]" alt="" />
        </div>
        <div class="card-title">
          <h1>Places</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            veniam dolore magnam voluptatibus atque provident quisquam sunt?
            Alias similique saepe officia magnam neque. Distinctio minima quos
            voluptate odio ad excepturi fugiat asperiores sequi dolores
            blanditiis voluptatibus neque aut, autem esse ipsum mollitia
            accusamus! Ullam, quasi! Aperiam soluta deleniti numquam dolorem!
          </p>
        </div>
      </div>
      <div class="card col-sm-12 col-md-6 col-lg text-center">
        <div>
          <img :src="image[1]" alt="" />
        </div>
        <div class="card-title">
          <h1>Benefits</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            veniam dolore magnam voluptatibus atque provident quisquam sunt?
            Alias similique saepe officia magnam neque. Distinctio minima quos
            voluptate odio ad excepturi fugiat asperiores sequi dolores
            blanditiis voluptatibus neque aut, autem esse ipsum mollitia
            accusamus! Ullam, quasi! Aperiam soluta deleniti numquam dolorem!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name: "homeVue",
    data() {
        return {
            image: [
                "https://cdn.pixabay.com/photo/2016/01/09/18/28/notepad-1130743__340.jpg",
                "https://cdn.pixabay.com/photo/2019/06/27/06/49/plane-4301615__340.png",
            ],
        };
    },
    components: { }
};
</script>

<style scoped>
.banner {
  width: 100%;
  height: 500px;
  z-index: 1;
}
.text-img {
  position: absolute;
  top: 20%;
  left: 15%;
  text-align: center;
  transition: calc(-50%, -50%);
  z-index: 9;
  color: #eee;
  font-family: inherit;
  margin: auto;
}
.group-card {
  display: flex;
  max-width: 960px;
  margin: 30px auto;
}
.card {
  width: 300px;
  margin: 20px;
  border: none;
}
.card-title {
  margin-left: 40px;
}
.card img {
  width: 200px;
  border-radius: 50%;
}
.card h1 {
  max-width: 500px;
  margin: 20px 3rem 0 0;
}
.card p {
  max-width: 600px;
  height: auto;
  margin: 20px 3rem 0 0;
}
@media screen and (max-width: 687px) {
  .card {
    width: 100%; /* The width is 100%, when the viewport is 800px or smaller */
  }
 
  .card-title h1{
    margin: 10px auto;
  }
}
@media screen and (max-width: 450px) {
  .card {
    width: 100%; /* The width is 100%, when the viewport is 800px or smaller */
  }
  .text-img {
    position: absolute;
    top: 20%;
    width: 100%;
  }
  .card img {
    margin-left: 10px;
  }
}
@media screen and (max-width: 960px) {
  .text-img {
    position: absolute;
    top: 200px;
    width: 100%;
  }
  .card{
      margin: 20px auto;
  }
}
</style>
