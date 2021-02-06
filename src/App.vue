<template>
  <div id="app">
    <img class="bg-top-right" src="./assets/images/bg-top-right.png" />
    <img class="bg-bottom-left" src="./assets/images/bg-bottom-left.png" />
    <img class="bg-bottom-right" src="./assets/images/bg-bottom-right.png" />
    <img class="bg-top-left" src="./assets/images/bg-top-left.png" />
    <router-view />
  </div>
</template>

<style lang="css">
.bg-top-left {
  position: absolute;
  width: 30%;
  top: 0;
  left: 0;
}

.bg-top-right {
  position: absolute;
  width: 15%;
  top: 0;
  right: 0;
}

.bg-bottom-left {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 15%;
}

.bg-bottom-right {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 35%;
}
</style>
