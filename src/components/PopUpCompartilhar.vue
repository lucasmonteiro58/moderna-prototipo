<template>
  <div v-show="show" class="card-compartilhe" :class="contrasteOn">
    <div class="card">
      <img
        @click="closeCompartilhar"
        class="btn-sair"
        src="../assets/images/icons/btn-sair-cinza.png"
      />
      <div class="title-compartilhe">Compartilhe com seus amigos!</div>
      <div class="link">
        <vue-feather type="link" size="20"></vue-feather>
        https://moderna-prototipo.netlify.app/
      </div>
      <button @click="copiar">
        <span><vue-feather type="copy" size="18"></vue-feather></span>COPIAR
      </button>
    </div>
  </div>
</template>

<script>
import VueFeather from "vue-feather";
export default {
  components: {
    VueFeather
  },
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
    closeCompartilhar() {
      this.$emit("closeCompartilhar");
    },
    copiar() {
      navigator.clipboard.writeText(" https://moderna-prototipo.netlify.app/");
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
    height: 260px;
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

@media (max-width: 769px) {
  .card-compartilhe .card {
    width: 55vw;
  }
}
</style>
