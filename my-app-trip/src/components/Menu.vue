<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <div class="container-fluid">
        <div class="nav-brand">
          <img src="https://img.icons8.com/wired/2x/bbb.png" width="50" />
        </div>
        <div class="navbar">
          <button
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggle"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarToggle">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link">About</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/trip" class="nav-link">Travel</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "menuBar",
};
</script>

<style>
img {
  background: #fff;
}
</style>
