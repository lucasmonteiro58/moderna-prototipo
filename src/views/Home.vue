<template>
  <div class="home" :class="[lightUp, contrasteOn]">
    <Slide
      :isOpen="isOpen"
      @openMenu="handleOpenMenu"
      @closeMenu="handleCloseMenu"
      noOverlay
      :class="contrasteOn"
    >
      <Menu />
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
        <div @click="openCompartilhar">
          <img src="../assets/images/icons/compartilhar.png" />
          <span>Compartilhar</span>
        </div>
      </main>
      <SubMenu
        :index="subMenuIndex"
        :show="showSubMenu"
        @fecharSubMenu="closeSubMenu"
        @openCompartilhar="openCompartilhar"
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
    <PopUpCompartilhar
      :show="showPopUpCompartilhar"
      @closeCompartilhar="closeCompartilhar"
    ></PopUpCompartilhar>
  </div>
</template>

<script>
import { Slide } from "vue-burger-menu";
import CardQuestion from "../components/CardQuestion";
import PopUpCompartilhar from "../components/PopUpCompartilhar";
import SubMenu from "../components/SubMenu";
export default {
  name: "Home",
  components: { Slide, CardQuestion, SubMenu, PopUpCompartilhar },
  data() {
    return {
      showSubMenu: false,
      showPopUpCompartilhar: false,
      subMenuIndex: 0,
      isOpen: false
    };
  },
  computed: {
    lightUp() {
      if (!this.$store.state.light) {
        return "light-off";
      } else {
        return "";
      }
    },
    somOn() {
      return this.$store.state.som;
    },
    contrasteOn() {
      if (this.$store.state.contraste) {
        return "contraste-on";
      } else {
        return "";
      }
    }
  },
  mounted() {
    // this.$children.$on("openMenu", () => {
    //   console.log("openmenuuuu");
    // });

    window.addEventListener(
      "keydown",
      function(e) {
        if (e.altKey == true && e.keyCode === 79) {
          this.handleOpenMenu();
        } else if (e.altKey == true && e.keyCode === 67) {
          this.handleCloseMenu();
        } else if (e.altKey == true && e.keyCode === 65) {
          this.toggleAcessibilidade();
        } else if (e.altKey == true && e.keyCode === 88) {
          this.handleClosePopUpCompartilhar();
        }
      }.bind(this)
    );
  },
  methods: {
    reiniciar() {
      this.closeLight();
      this.$emit("reiniciar");
    },
    handleOpenMenu() {
      this.isOpen = true;
    },
    handleCloseMenu() {
      this.isOpen = false;
      this.showSubMenu = false;
    },
    toggleAcessibilidade() {
      if (this.isOpen) {
        if (this.showSubMenu && this.subMenuIndex === 0) {
          this.showSubMenu = false;
          this.subMenuIndex = 0;
          this.handleCloseMenu();
        } else if (this.showSubMenu && this.subMenuIndex !== 0) {
          this.subMenuIndex = 0;
        } else if (!this.showSubMenu) {
          this.showSubMenu = true;
          this.subMenuIndex = 0;
        }
      } else {
        this.handleOpenMenu();
        this.showSubMenu = true;
        this.subMenuIndex = 0;
      }
      // if (this.isOpen && this.showSubMenu) {
      //   this.isOpen = false;
      //   this.showSubMenu = !this.showSubMenu;
      //   this.subMenuIndex = 0;
      // } else {
      //   this.isOpen = true;
      //   this.showSubMenu = !this.showSubMenu;
      //   this.subMenuIndex = 0;
      // }
    },
    handleClosePopUpCompartilhar() {
      if (this.showPopUpCompartilhar) {
        this.showPopUpCompartilhar = false;
      }
    },
    openCompartilhar() {
      this.showPopUpCompartilhar = true;
    },
    closeCompartilhar() {
      this.showPopUpCompartilhar = false;
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

  &.contraste-on {
    background-color: black;
  }

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
  top: 25px;
  left: 60px;
  width: 165px;
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

@media (max-width: 1025px) and (orientation: landscape) {
  .logo-page {
    top: 14px;
    left: 42px;
    width: 118px;
  }
}

@media (max-width: 769px) and (orientation: portrait) {
  .logo-page {
    position: absolute;
    top: 12px;
    left: 44px;
    width: 127px;
  }

  .home {
    max-height: 100vh;
  }

  .logo-menu {
    margin-top: -22px;
    margin-left: 2px;
  }

  #page-wrap {
    margin-top: 20px;
  }

  #page-wrap div {
    height: 71px;
  }

  #page-wrap div img {
    margin-right: 18px;
  }
}

@media (orientation: landscape) {
  .logo-menu {
    transform: scale(0.6);
    margin-top: -38px;
    margin-left: -16px;
  }

  #page-wrap {
    margin-top: 7px;
  }

  #page-wrap div {
    font-size: 18px;
    height: 60px;
    padding-left: 22px;
  }

  #page-wrap div img {
    margin-right: 20px;
    width: 25px;
  }
}
</style>
