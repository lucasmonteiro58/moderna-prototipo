<template>
  <div class="home">
    <Slide noOverlay>
      <a id="home" href="#">
        <span>Home</span>
      </a>
    </Slide>
  </div>
</template>

<script>
import { Slide } from "vue-burger-menu";
export default {
  name: "Home",
  components: { Slide }
};
</script>
<style scoped></style>
