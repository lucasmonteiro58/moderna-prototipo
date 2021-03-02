<template>
  <div
    class="popup-content"
    :class="[!lightUp ? 'light-off' : '', contrasteOn]"
  >
    <img
      @click="close"
      class="btn-sair"
      src="../assets/images/icons/btn-sair-cinza.png"
    />
    <div v-if="index === 0" class="content-0">
      <button @click="goToTexto" class="btn-1" :class="contrasteOn">
        Ver a explicação do texto e imagem
      </button>
      <button @click="goToEnunciado" class="btn-2" :class="contrasteOn">
        Pular para enunciado da questão
      </button>
    </div>
    <div v-if="index === 1" class="content-1">
      <button @click="goToEnunciado" class="btn-1" :class="contrasteOn">
        Ver explicação do enunciado
      </button>
      <button @click="goToTexto" class="btn-2" :class="contrasteOn">
        Voltar para explicação do texto
      </button>
    </div>
    <div v-if="index === 2" class="content-2">
      <div class="title" :class="[!lightUp ? 'light-off' : '', contrasteOn]">
        Explicação itens
      </div>
      <div class="items-options" :class="contrasteOn">
        <div @click="goToItemA" class="alternativa-a">A</div>
        <div @click="goToItemB" class="alternativa-b">B</div>
        <div @click="goToItemC" class="alternativa-c">C</div>
        <div @click="goToItemD" class="alternativa-d">D</div>
      </div>
      <div class="buttons-section">
        <button @click="goToIntroducao" class="btn-1" :class="contrasteOn">
          Início Explicação
        </button>
        <button @click="goToEncerramento" class="btn-2" :class="contrasteOn">
          Encerramento
        </button>
      </div>
    </div>
    <div v-if="index === 3" class="content-3">
      <button @click="goToIntroducao" class="btn-1" :class="contrasteOn">
        Rever explicação completa
      </button>
      <button @click="goToSair" class="btn-2" :class="contrasteOn">
        Sair da questão
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopUpVideo",
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  created() {},

  data() {
    return {};
  },
  computed: {
    lightUp() {
      return this.$store.state.light;
    },
    contrasteOn() {
      if (this.$store.state.contraste) {
        return "contraste-on";
      } else {
        return "";
      }
    }
  },
  methods: {
    close() {
      this.$emit("close");
    },
    closeLight() {
      this.$store.commit("changeLight", true);
    },
    goToTexto() {
      this.$emit("gotoTexto");
    },
    goToEnunciado() {
      this.$emit("gotoEnunciado");
    },
    goToItemA() {
      this.$emit("gotoItemA");
    },
    goToItemB() {
      this.$emit("gotoItemB");
    },
    goToItemC() {
      this.$emit("gotoItemC");
    },
    goToItemD() {
      this.$emit("gotoItemD");
    },
    goToEncerramento() {
      this.$emit("gotoEncerramento");
    },
    goToIntroducao() {
      this.$emit("gotoIntroducao");
    },
    goToSair() {
      this.$emit("gotoSair");
      this.closeLight();
    }
  }
};
</script>

<style lang="scss" scoped>
.popup-content {
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 50%;
  box-shadow: 1px 0px 6px 0px #9e9e9e;
  border-radius: 2vw;
  background-color: white;
  font-size: 25px;
  position: relative;

  &.light-off {
    background-color: #1a180e;
    box-shadow: 1px 0px 6px 0px rgb(0, 0, 0);
  }

  .btn-sair {
    cursor: pointer;
    position: absolute;
    top: 25px;
    right: 25px;
    opacity: 0.6;
    width: 25px;
  }

  &.contraste-on {
    background-color: black;

    .btn-sair {
      filter: brightness(0) invert(1);
    }
  }

  .content-0,
  .content-1,
  .content-3 {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 6%;
    align-items: center;
    justify-content: center;
    button {
      font-family: SourceSansBold;
      width: 75%;
      font-size: 1.2vw;
      color: white;
      background-color: #0087c2;
      border: none;
      border-radius: 14px;

      &.contraste-on {
        background-color: yellow;
        color: black;
      }
    }
  }

  .content-2 {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 6%;
    align-items: center;
    justify-content: center;

    .title {
      font-family: SourceSansBold;
      letter-spacing: 1px;
      font-size: 1.4vw;

      &.contraste-on {
        color: white;
      }

      &.light-off {
        color: white;
      }
    }

    .items-options {
      display: flex;
      width: 330px;
      justify-content: space-between;
      align-items: center;

      div {
        cursor: pointer;
        font-size: 1.25vw;
        font-family: SourceSansBold;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #928c5d;
        border-radius: 50%;
        width: 60px;
        height: 60px;

        &:active {
          background-color: #4a462a;
        }
      }

      &.contraste-on {
        div {
          color: black;
          background-color: white;
        }
      }
    }

    .buttons-section {
      margin-top: 30px;
      display: flex;
      gap: 6%;
      button {
        width: 260px;
        font-family: SourceSansBold;
        font-size: 1.2vw;
        color: white;
        background-color: #0087c2;
        border: none;
        border-radius: 14px;

        &.contraste-on {
          background-color: yellow;
          color: black;
        }
      }
    }
    &.light-off {
      .content-2 {
        .items-options {
          div {
            color: #1a180e;
          }
        }
      }
    }
  }
}

@media (max-width: 1025px) {
  .popup-content .btn-sair {
    top: 16px;
    right: 20px;
    width: 15px;
  }

  .popup-content .content-2 .items-options div {
    width: 30px;
    height: 30px;
  }

  .popup-content .content-2 .items-options {
    width: 190px;
  }

  .popup-content .content-2 .buttons-section button {
    width: 140px;
  }
}

@media (max-width: 769px) and (orientation: portrait) {
  .popup-content {
    width: 95%;
    height: 150%;
  }
  .popup-content .content-2 .items-options {
    width: 180px;
  }

  .popup-content .content-2 .buttons-section button {
    width: 118px;
  }

  .popup-content .content-0 button,
  .popup-content .content-1 button,
  .popup-content .content-3 button {
    font-size: 15px;
  }

  .popup-content .content-2 .title {
    font-size: 15px;
  }

  .popup-content .content-2 .items-options div {
    width: 35px;
    height: 35px;
    font-size: 15px;
  }

  .popup-content .content-2 .buttons-section button {
    font-size: 15px;
  }
}

@media (orientation: landscape) {
  .popup-content {
    width: 78%;
    height: 75%;
    margin-top: -22px;
  }

  .popup-content .content-0 button,
  .popup-content .content-1 button,
  .popup-content .content-3 button {
    font-size: 13px;
  }

  .popup-content .content-2 .title {
    font-size: 16px;
  }

  .popup-content .content-2 .items-options div {
    font-size: 15px;
  }

  .popup-content .content-2 .buttons-section button {
    font-size: 13px;
  }

  .popup-content .content-2 .buttons-section {
    margin-top: 15px;
  }
}
</style>
