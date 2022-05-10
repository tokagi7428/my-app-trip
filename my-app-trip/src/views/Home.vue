<template>
  <div>
      <div class="w-100">
          <img :src="image[0]" alt="" class="banner w-100">
          <div class="row">
              <p class="text-img col-sm col-md  w-50">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia perferendis laudantium dolorem cupiditate quidem odio earum, quas facere accusamus quisquam id possimus asperiores consectetur qui harum quis placeat. Explicabo tempora aut dignissimos obcaecati officia doloribus voluptates ab molestiae distinctio maiores dolorem earum dolores nemo delectus iste, repellendus cumque beatae quod!</p>
          </div>
      </div>
      <div class="group-card row ">
          <div class="card col-sm-12 col-md-6 col-lg text-center">
              <div>
                  <img :src="image[1]" alt="">
              </div>
              <div>
                  <h1>Airplane</h1>
                  <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus veniam dolore magnam voluptatibus atque provident quisquam sunt? Alias similique saepe officia magnam neque. Distinctio minima quos voluptate odio ad excepturi fugiat asperiores sequi dolores blanditiis voluptatibus neque aut, autem esse ipsum mollitia accusamus! Ullam, quasi! Aperiam soluta deleniti numquam dolorem!</p>
              </div>
          </div>
          <div class="card col-sm-12 col-md-6 col-lg text-center">
              <div>
                  <img :src="image[1]" alt="">
              </div>
              <div>
                  <h1>Places</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus veniam dolore magnam voluptatibus atque provident quisquam sunt? Alias similique saepe officia magnam neque. Distinctio minima quos voluptate odio ad excepturi fugiat asperiores sequi dolores blanditiis voluptatibus neque aut, autem esse ipsum mollitia accusamus! Ullam, quasi! Aperiam soluta deleniti numquam dolorem!</p>
              </div>
          </div>
          <div class="card col-sm-12 col-md-6 col-lg text-center">
              <div>
                  <img :src="image[1]" alt="">
              </div>
              <div>
                  <h1>Benefits</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus veniam dolore magnam voluptatibus atque provident quisquam sunt? Alias similique saepe officia magnam neque. Distinctio minima quos voluptate odio ad excepturi fugiat asperiores sequi dolores blanditiis voluptatibus neque aut, autem esse ipsum mollitia accusamus! Ullam, quasi! Aperiam soluta deleniti numquam dolorem!</p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
    name: "homeVue",
    data(){
        return {
            image: ['https://cdn.pixabay.com/photo/2016/01/09/18/28/notepad-1130743__340.jpg','https://cdn.pixabay.com/photo/2019/06/27/06/49/plane-4301615__340.png']
        }
    }
}
</script>

<style scoped>
.banner{
    width:100%;
    height: 500px;
    z-index: 1;
}
.text-img{
    position: absolute;
    top: 30%;
    left: 20%;
    text-align: center;
    transition: calc(-50%,-50%);
    z-index: 9;
    color:#eee;
    font-family: inherit;
    margin: auto;
}
.group-card{
  display: flex;
  max-width: 960px;
  margin: 30px auto;
}
.card{
    width: 300px;
    margin: 20px;
    border: none;
}
.card img{
    width: 200px;
    border-radius: 50%;
}
.card h1{
    margin-left:30px;
    margin-top: 10px;
}
.card p{
    width: 270px;
    margin: 20px 3rem 0 0;
}
</style>