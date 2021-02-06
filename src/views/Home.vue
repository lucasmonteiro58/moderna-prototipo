<template>
  <div class="home">
    <Slide noOverlay>
      <img class="logo-menu" src="../assets/images/logo-moderna.png" />
      <main id="page-wrap">
        <div>
          <img src="../assets/images/icons/reiniciar.png" />
          <span>Reiniciar</span>
        </div>
        <div>
          <img src="../assets/images/icons/som-on.png" />
          <span>Som Ativado</span>
        </div>
        <div>
          <img src="../assets/images/icons/acessibilidade.png" />
          <span>Acessibilidade</span>
        </div>
        <div>
          <img src="../assets/images/icons/ajuda.png" />
          <span>Ajuda</span>
        </div>
        <div>
          <img src="../assets/images/icons/creditos.png" />
          <span>Créditos</span>
        </div>
        <div>
          <img src="../assets/images/icons/compartilhar.png" />
          <span>Compartilhar</span>
        </div>
      </main>
    </Slide>
    <img
      class="logo-page"
      src="../assets/images/logo-moderna-white.png"
      alt="logo"
    />
    <div class="center-content">
      <CardQuestion></CardQuestion>
    </div>
  </div>
</template>

<script>
import { Slide } from "vue-burger-menu";
import CardQuestion from "../components/CardQuestion";
export default {
  name: "Home",
  components: { Slide, CardQuestion }
};
</script>
<style lang="scss" scoped>
.center-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.logo-page {
  position: absolute;
  top: 16px;
  left: 60px;
  width: 12%;
}
.logo-menu {
  transform: scale(0.8);
  margin-top: 18px;
  margin-left: 8px;
}
#page-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;

  div {
    font-size: 22px;
    letter-spacing: 1px;
    padding: 20px 30px;
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 300px;

    &:hover {
      background-color: #e7e7e7;
    }

    img {
      margin-right: 20px;
    }
  }
}
</style>
