<template>
  <div class="submenu" :class="{ 'no-show': !show }">
    <slot v-if="index === 0">
      <div class="title" @click="closeSubMenu">
        <img class="voltar" src="../assets/images/icons/back-menu.png" />
        <img class="icon" src="../assets/images/icons/acessibilidade.png" />
        <span>Acessibilidade</span>
      </div>
      <div class="options alto-contraste">
        <switches v-model="altoContraste" type-bold="true"></switches>
        <div class="label-text">Alto Contraste</div>
      </div>
      <div class="options legenda">
        <switches v-model="legenda" type-bold="true"></switches>
        <div class="label-text">Legenda</div>
      </div>
      <div class="atalhos">
        <div class="title-comando">Comandos de Teclado</div>
        <p>Alt+O - Abre o Menu</p>
        <p>Alt+C - Fecha o Menu</p>
        <p>Alt+A - Abre/Fecha acessibilidade</p>
        <p>Alt+X - Fecha os pop-ups</p>
        <p>Tab - Navega para o próximo elemento</p>
        <p>Tab+Shift - Navega para o elemento anterior</p>
      </div>
    </slot>
    <slot v-if="index === 1">
      <div class="title" @click="closeSubMenu">
        <img class="voltar" src="../assets/images/icons/back-menu.png" />
        <img class="icon" src="../assets/images/icons/ajuda.png" />
        <span>Ajuda</span>
      </div>
      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus
        ornare purus id rutrum. Suspendisse varius magna at nulla viverra, ac
        hendrerit mauris luctus. Ut ante dui, tristique non suscipit eget,
        sollicitudin nec nisi. Vestibulum interdum vulputate nibh, nec
        sollicitudin nunc viverra eget. Integer odio nulla, ultrices ut mi vel,
        vehicula euismod felis.
      </div>
    </slot>
    <slot v-if="index === 2">
      <div class="title" @click="closeSubMenu">
        <img class="voltar" src="../assets/images/icons/back-menu.png" />
        <img class="icon" src="../assets/images/icons/creditos.png" />
        <span>Créditos</span>
      </div>
      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus
        ornare purus id rutrum. Suspendisse varius magna at nulla viverra, ac
        hendrerit mauris luctus. Ut ante dui, tristique non suscipit eget,
        sollicitudin nec nisi. Vestibulum interdum vulputate nibh, nec
        sollicitudin nunc viverra eget. Integer odio nulla, ultrices ut mi vel,
        vehicula euismod felis.
      </div>
    </slot>
  </div>
</template>

<script>
import Switches from "vue-switches";

export default {
  props: {
    index: {
      type: Number,
      default: 0
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Switches
  },
  data() {
    return {
      altoContraste: false,
      legenda: false
    };
  },
  methods: {
    closeSubMenu() {
      this.$emit("fecharSubMenu");
    }
  }
};
</script>

<style lang="scss" scoped>
.submenu {
  position: absolute;
  top: 120px;
  left: 0;
  height: 85vh;
  width: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  transition: 0.4s;

  &.no-show {
    transition: 0.4s;
    left: -300px;
  }

  .title {
    color: #4a462a;
    font-size: 22px;
    font-family: SourceSans;
    letter-spacing: 1px;
    height: 80px;
    display: flex;
    align-items: center;
    padding-left: 25px;
    cursor: pointer;
    width: 300px;
    margin-bottom: 15px;

    &:hover {
      background-color: #e7e7e7;
    }

    .voltar {
      margin-right: 15px;
      width: 9px;
    }

    .icon {
      width: 30px;
      margin-right: 20px;
    }
  }

  .content {
    color: #4a462a;
    padding: 0 40px;
    font-size: 17px;
  }

  .options {
    display: flex;
    align-items: center;
    gap: 15px;
    padding-left: 50px;
    color: #4a462a;
    font-size: 18px;
    margin-bottom: 30px;
    .label-text {
      margin-top: -15px;
    }
  }

  .alto-contraste {
    margin-top: 15px;
  }

  .atalhos {
    padding: 0 25px;
    .title-comando {
      color: #4a462a;
      font-size: 20px;
      margin-bottom: 15px;
    }

    p {
      font-size: 15px;
      color: #4a462a;
      margin-bottom: 12px;
    }
  }
}
</style>
