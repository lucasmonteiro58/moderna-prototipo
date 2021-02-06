<template>
  <section class="card-question">
    <div class="title-section">
      <div class="container">
        <div class="title">Congresso de Viena</div>
        <div class="subtitle">- História -</div>
      </div>
      <img
        class="seta-baixo"
        src="../assets/images/icons/seta-baixo.png"
        alt="baixo"
      />
    </div>
    <!-- <div class="question-section"></div>
    <div class="video-section"></div> -->
  </section>
</template>

<script>
export default {
  name: "CardQuestion"
};
</script>
<style lang="scss" scoped>
.card-question {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  .title-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40vw;
    height: 380px;
    border: 8px solid #4a462a;
    border-radius: 3vw;

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 250px;
      border-bottom: 8px solid #4a462a;
      width: 100%;

      .title {
        font-family: Maven-Black;
        font-size: 64px;
        text-align: center;
      }

      .subtitle {
        font-size: 48px;
        text-align: center;
      }
    }

    .seta-baixo {
      width: 120px;
      margin-top: 35px;
      cursor: pointer;

      &:hover {
        margin-top: 38px;
      }
    }
  }
}
</style>
