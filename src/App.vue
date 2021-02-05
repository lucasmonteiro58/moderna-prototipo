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

/* ------------------Menu-Burger */

.bm-burger-button {
  position: fixed;
  width: 36px;
  height: 30px;
  left: 0px;
  top: 36px;
  cursor: pointer;
}
.bm-burger-bars {
  background-color: white;
}
.line-style {
  position: absolute;
  border-radius: 0 5px 5px 0;
  height: 5px;
  left: 0;
  right: 0;
}
.cross-style {
  position: absolute;
  top: 12px;
  right: 2px;
  cursor: pointer;
}
.bm-cross {
  background: #bdc3c7;
}
.bm-cross-button {
  height: 24px;
  width: 24px;
}
.bm-menu {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1000; /* Stay on top */
  top: 0;
  left: 0;
  background-color: white; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
}

.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}
.bm-item-list {
  color: #b8b7ad;
  margin-left: 10%;
  font-size: 20px;
}
.bm-item-list > * {
  display: flex;
  text-decoration: none;
  padding: 0.7em;
}
.bm-item-list > * > span {
  margin-left: 10px;
  font-weight: 700;
  color: #4a462a;
}

/* ------------------Menu-Burger */
</style>
