<template>
  <div class="home" :class="{ 'light-off': !lightUp }">
    <Slide noOverlay>
      <img class="logo-menu" src="../assets/images/logo-moderna.png" />
      <main id="page-wrap">
        <div @click="reiniciar">
          <img src="../assets/images/icons/reiniciar.png" />
          <span>Reiniciar</span>
        </div>
        <div v-if="somOn" @click="desativarSom">
          <img src="../assets/images/icons/som-on.png" />
          <span>Som Ativado</span>
        </div>
        <div v-else @click="desativarSom">
          <img src="../assets/images/icons/som-off.png" />
          <span>Som Desativado</span>
        </div>
        <div @click="openAcessibilidade">
          <img src="../assets/images/icons/acessibilidade.png" />
          <span>Acessibilidade</span>
        </div>
        <div @click="openAjuda">
          <img src="../assets/images/icons/ajuda.png" />
          <span>Ajuda</span>
        </div>
        <div @click="openCreditos">
          <img src="../assets/images/icons/creditos.png" />
          <span>Créditos</span>
        </div>
        <div>
          <img src="../assets/images/icons/compartilhar.png" />
          <span>Compartilhar</span>
        </div>
      </main>
      <SubMenu
        :index="subMenuIndex"
        :show="showSubMenu"
        @fecharSubMenu="closeSubMenu"
      ></SubMenu>
    </Slide>
    <img
      class="logo-page"
      src="../assets/images/logo-moderna-white.png"
      alt="logo"
    />
    <div class="center-content">
      <CardQuestion :reinciar="reiniciar"></CardQuestion>
    </div>
  </div>
</template>

<script>
import { Slide } from "vue-burger-menu";
import CardQuestion from "../components/CardQuestion";
import SubMenu from "../components/SubMenu";
export default {
  name: "Home",
  components: { Slide, CardQuestion, SubMenu },
  data() {
    return {
      showSubMenu: false,
      subMenuIndex: 0
    };
  },
  computed: {
    lightUp() {
      return this.$store.state.light;
    },
    somOn() {
      return this.$store.state.som;
    }
  },
  methods: {
    reiniciar() {
      this.closeLight();
      this.$emit("reiniciar");
    },
    desativarSom() {
      this.$store.commit("changeSom", !this.somOn);
    },
    closeLight() {
      this.$store.commit("changeLight", true);
    },
    openAcessibilidade() {
      this.showSubMenu = true;
      this.subMenuIndex = 0;
    },
    openAjuda() {
      this.showSubMenu = true;
      this.subMenuIndex = 1;
    },
    openCreditos() {
      this.showSubMenu = true;
      this.subMenuIndex = 2;
    },
    closeSubMenu() {
      this.showSubMenu = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  color: #4a462a;

  &.light-off {
    background-color: #1a180e;
  }
}
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
  color: #4a462a;

  div {
    font-size: 22px;
    letter-spacing: 1px;
    height: 80px;
    display: flex;
    align-items: center;
    padding-left: 30px;
    cursor: pointer;
    width: 300px;

    &:hover {
      background-color: #e7e7e7;
    }

    img {
      margin-right: 30px;
      width: 30px;
    }
  }
}
</style>
