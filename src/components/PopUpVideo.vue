<template>
  <div class="popup-content">
    <img
      @click="close"
      class="btn-sair"
      src="../assets/images/icons/btn-sair-cinza.png"
    />
    <div v-if="index === 0" class="content-0">
      <button class="btn-1">Ver a explicação do texto e imagem</button>
      <button class="btn-2">Pular para enunciado da questão</button>
    </div>
    <div v-if="index === 1" class="content-1">
      <button class="btn-1">Ver explicação do enunciado</button>
      <button class="btn-2">Voltar para explicação do texto</button>
    </div>
    <div v-if="index === 2" class="content-2">
      <div class="title">Explicação itens</div>
      <div class="items-options">
        <div class="alternativa-a">A</div>
        <div class="alternativa-b">B</div>
        <div class="alternativa-c">C</div>
        <div class="alternativa-d">D</div>
      </div>
      <div class="buttons-section">
        <button class="btn-1">Início Explicação</button>
        <button class="btn-2">Encerramento</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopUpVideo",
  data() {
    return {
      index: 0
    };
  },
  methods: {
    close() {
      this.$emit("close");
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

  .btn-sair {
    cursor: pointer;
    position: absolute;
    top: 25px;
    right: 25px;
    opacity: 0.6;
    width: 25px;
  }

  .content-0,
  .content-1 {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 6%;
    align-items: center;
    justify-content: center;
    button {
      font-family: SourceSansBold;
      width: 75%;
      font-size: 25px;
      color: white;
      background-color: #0087c2;
      border: none;
      border-radius: 14px;
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
    }

    .items-options {
      display: flex;
      width: 330px;
      justify-content: space-between;
      align-items: center;

      div {
        cursor: pointer;
        font-size: 27px;
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
    }

    .buttons-section {
      margin-top: 30px;
      display: flex;
      gap: 6%;
      button {
        width: 260px;
        font-family: SourceSansBold;
        font-size: 25px;
        color: white;
        background-color: #0087c2;
        border: none;
        border-radius: 14px;
      }
    }
  }
}
</style>
