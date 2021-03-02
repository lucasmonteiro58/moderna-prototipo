<template>
  <div v-show="show" class="card-compartilhe" :class="contrasteOn">
    <div class="card">
      <img
        @click="closeVirar"
        class="btn-sair"
        src="../assets/images/icons/btn-sair-cinza.png"
      />
      <img class="land" src="../assets/images/icons/land.png" />
      <div class="title-compartilhe">
        Vamos te explicar como respondemos a essa questão, mas para visualizar
        melhor precisamos que você rotacione o celular na próxima tela. Vamos
        lá? :)
      </div>
      <button @click="closeVirar">
        TUDO BEM, VAMOS!
      </button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    contrasteOn() {
      if (this.$store.state.contraste) {
        return "contraste-on";
      } else {
        return "";
      }
    }
  },
  methods: {
    closeVirar() {
      this.$emit("closeVirar");
    }
  }
};
</script>

<style lang="scss" scoped>
.card-compartilhe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #20202031;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;

  .card {
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30vw;
    height: 360px;
    border-radius: 2vw;
    box-shadow: 1px 0px 6px 0px #9e9e9e;
    position: relative;
    gap: 20px;

    .title-compartilhe {
      font-family: SourceSansBold;
      font-size: 23px;
    }

    .link {
      background-color: #efefef;
      padding: 10px 20px;
      border-radius: 30px;
      font-size: 18px;
    }

    button {
      margin-top: 10px;
      font-family: SourceSansBold;
      font-size: 18px;
      padding: 10px 20px;
      color: white;
      background-color: #0087c2;
      border: none;
      border-radius: 14px;
      span {
        margin-right: 8px;
      }
    }

    .btn-sair {
      cursor: pointer;
      position: absolute;
      top: 25px;
      right: 25px;
      opacity: 0.6;
      width: 20px;
    }
  }
}

.contraste-on {
  .card {
    background-color: black;

    img {
      filter: brightness(0) invert(1);
    }

    .title-compartilhe {
      color: white;
    }

    button {
      background-color: yellow;
      color: black;
    }
  }
}

@media (max-width: 1025px) {
  .card-compartilhe .card {
    width: 43vw;
  }
}

@media (max-width: 769px) and (orientation: portrait) {
  .card-compartilhe .card {
    width: 90vw;
  }

  .card-compartilhe .card .title-compartilhe {
    font-size: 17px;
    margin-top: 0px;
    width: 273px;
    text-align: center;
  }

  .card-compartilhe .card .link {
    width: 279px;
    font-size: 13px;
    padding-bottom: 16px;
  }
}
</style>
