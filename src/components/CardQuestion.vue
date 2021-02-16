<template>
  <section class="card-question">
    <div v-if="index === 0" class="title-section" :class="contrasteOn">
      <div class="container">
        <div class="title">Congresso de Viena</div>
        <div class="subtitle">- História -</div>
      </div>
      <img
        class="seta-baixo"
        src="../assets/images/icons/seta-baixo.png"
        alt="baixo"
        @click="goToQuestion()"
      />
    </div>
    <div v-if="index === 1" class="question-section" :class="contrasteOn">
      <div class="enunciado-texto">
        {{ question.enunciado.texto }}
      </div>
      <div class="enunciado-fonte">{{ question.enunciado.fonte }}</div>
      <div class="enunciado-acesso">{{ question.enunciado.acesso }}</div>
      <div class="imagem">
        <img
          :src="question.imagem.link"
          :alt="question.imagem.title"
          @click="show"
        />
        <div class="imagem-font">
          {{ question.imagem.fonte }} <span> {{ question.imagem.acesso }}</span>
        </div>
      </div>
      <div class="quention-pergunta">{{ question.pergunta }}</div>
      <div class="question-alternativas" :class="contrasteOn">
        <div class="alternativa-a">{{ question.alternativas[0].text }}</div>
        <div class="alternativa-b">{{ question.alternativas[1].text }}</div>
        <div class="alternativa-c">{{ question.alternativas[2].text }}</div>
        <div class="alternativa-d">{{ question.alternativas[3].text }}</div>
      </div>
      <div class="qual-item">
        Qual dos itens abaixo você acha que é o correto?
      </div>
      <div class="form">
        <div class="items-options" :class="contrasteOn">
          <div
            v-for="(item, index) in question.alternativas"
            :key="index"
            class="item"
            @click="checkOption(item.nome)"
            :class="{ checked: item.checked }"
          >
            {{ item.nome }}
          </div>
        </div>
        <button @click="goToVideo" class="btn-conferir" :class="contrasteOn">
          Conferir
        </button>
      </div>
    </div>
    <div
      v-if="index === 2"
      class="video-section"
      :class="[!lightUp ? 'light-off' : '', contrasteOn]"
    >
      <div class="left-content" :class="contrasteOn">
        <div class="btn-sair" @click="goToQuestion">
          <img src="../assets/images/icons/btn-sair.png" />
          <div>SAIR</div>
        </div>
      </div>
      <div class="mid-content">
        <Video
          :current-video="currentVideo"
          @videoPlay="videoPlay"
          @videoPause="videoPause"
          @videoEnd="videoEnd"
        ></Video>
        <div v-if="showPopUpVideo" class="popup-video">
          <PopUpVideo
            @close="closePopUpVideo"
            :index="indexPopUpVideo"
            @gotoTexto="goToTexto()"
            @gotoEnunciado="goToEnunciado()"
            @gotoItemA="goToItemA()"
            @gotoItemB="goToItemB()"
            @gotoItemC="goToItemC()"
            @gotoItemD="goToItemD()"
            @gotoEncerramento="goToEncerramento()"
            @gotoIntroducao="goToIntroducao()"
            @gotoSair="reiniciar()"
          ></PopUpVideo>
        </div>
      </div>
      <div class="right-content" :class="contrasteOn">
        <div class="btn-luz" @click="closeLight">
          <img src="../assets/images/icons/luz.png" />
          <div>LUZ</div>
        </div>
      </div>
    </div>
    <viewer :images="images" @inited="inited" class="viewer" ref="viewer">
      <img v-for="src in images" :src="src" :key="src" class="none" />
    </viewer>
  </section>
</template>

<script>
import { question, videos } from "../consts/index";
import Video from "../components/Video";
import PopUpVideo from "../components/PopUpVideo";

import "viewerjs/src/css/viewer.scss";
import Viewer from "v-viewer";
import Vue from "vue";

Vue.use(Viewer);

Viewer.setDefaults({
  button: true,
  navbar: false,
  title: false,
  toolbar: false,
  tooltip: false,
  movable: false,
  zoomable: true,
  rotatable: false,
  scalable: false,
  fullscreen: false,
  keyboard: false
});

export default {
  name: "CardQuestion",
  props: {},
  components: {
    Video,
    PopUpVideo
  },
  data() {
    return {
      question,
      index: 0,
      images: [question.imagem.link],
      showPopUpVideo: false,
      indexPopUpVideo: 0,
      videos,
      currentVideo: videos.introducao
    };
  },
  created() {
    this.$parent.$on("reiniciar", this.reiniciar);
  },
  mounted() {
    window.addEventListener(
      "keydown",
      function(e) {
        if (e.altKey == true && e.keyCode === 88) {
          this.handleClosePopUp();
        } else if (e.shiftKey && e.key === "Tab") {
          if (this.index > 0) {
            this.index--;
          }
        } else if (e.key === "Tab") {
          if (this.index < 2) {
            this.index++;
          }
        }
      }.bind(this)
    );
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
    inited(viewer) {
      this.$viewer = viewer;
    },
    closeLight() {
      this.$store.commit("changeLight", !this.lightUp);
    },
    show() {
      this.$viewer.show();
    },
    closePopUpVideo() {
      this.showPopUpVideo = false;
    },
    handleClosePopUp() {
      if (this.showPopUpVideo) {
        this.showPopUpVideo = false;
      }
    },
    reiniciar() {
      this.index = 0;
      this.currentVideo = this.videos.introducao;
      this.showPopUpVideo = false;
      this.indexPopUpVideo = 0;
      this.$store.commit("changeLight", true);
    },
    goToQuestion() {
      this.index = 1;
    },
    goToVideo() {
      this.index = 2;
    },
    desmarcar() {
      for (let i = 0; i < this.question.alternativas.length; i++) {
        this.question.alternativas[i].checked = false;
      }
    },
    checkOption(nome) {
      switch (nome) {
        case "A":
          this.desmarcar();
          this.question.alternativas[0].checked = true;
          break;
        case "B":
          this.desmarcar();
          this.question.alternativas[1].checked = true;
          break;
        case "C":
          this.desmarcar();
          this.question.alternativas[2].checked = true;
          break;
        case "D":
          this.desmarcar();
          this.question.alternativas[3].checked = true;
          break;
        default:
          this.desmarcar();
          break;
      }
    },
    goToIntroducao() {
      this.currentVideo = this.videos.introducao;
      this.showPopUpVideo = false;
      this.indexPopUpVideo = 0;
    },
    goToTexto() {
      this.currentVideo = this.videos.texto;
      this.showPopUpVideo = false;
      this.indexPopUpVideo = 1;
    },
    goToEnunciado() {
      this.currentVideo = this.videos.enunciado;
      this.showPopUpVideo = false;
      this.indexPopUpVideo = 2;
    },
    goToItemA() {
      this.currentVideo = this.videos.itemA;
      this.showPopUpVideo = false;
      this.indexPopUpVideo = 2;
    },
    goToItemB() {
      this.currentVideo = this.videos.itemB;
      this.showPopUpVideo = false;
      this.indexPopUpVideo = 2;
    },
    goToItemC() {
      this.currentVideo = this.videos.itemC;
      this.showPopUpVideo = false;
      this.indexPopUpVideo = 2;
    },
    goToItemD() {
      this.currentVideo = this.videos.itemD;
      this.showPopUpVideo = false;
      this.indexPopUpVideo = 2;
    },
    goToEncerramento() {
      this.currentVideo = this.videos.encerramento;
      this.showPopUpVideo = false;
      this.indexPopUpVideo = 3;
    },
    goToSair() {
      this.currentVideo = this.videos.introducao;
      this.showPopUpVideo = false;
      this.indexPopUpVideo = 0;
      this.index = 0;
    },
    videoPlay() {
      console.log("play");
    },
    videoPause() {
      console.log("pause");
    },
    videoEnd() {
      this.showPopUpVideo = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.none {
  display: none;
}
.card-question {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  color: #4a462a;
  .title-section {
    background-color: white;
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
        font-size: 3vw;
        text-align: center;
      }

      .subtitle {
        font-size: 2.5vw;
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

    &.contraste-on {
      background-color: black;
      border: 8px solid white;

      .container {
        border-bottom: 8px solid white;
        color: white;
      }

      .seta-baixo {
        filter: brightness(0) invert(1);
      }
    }
  }

  .question-section {
    display: flex;
    flex-direction: column;
    width: 70vw;
    height: 65vh;
    box-shadow: 1px 0px 6px 0px rgba(158, 158, 158, 1);
    border-radius: 3vw;
    background-color: white;
    padding: 80px 150px;
    font-size: 1.4vw;
    overflow: auto;

    &.contraste-on {
      background-color: black;
      color: white;
    }

    /* width */

    .enunciado-texto {
      text-align: justify;
    }

    .enunciado-fonte {
      margin-top: 30px;
      font-size: 18px;
      font-style: italic;
    }

    .enunciado-acesso {
      font-size: 18px;
    }

    .imagem {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 70px;

      img {
        max-height: 350px;
        cursor: nwse-resize;
      }

      .imagem-font {
        font-size: 16px;
        font-style: italic;
        margin-top: 10px;

        span {
          font-style: normal;
        }
      }
    }

    .quention-pergunta {
      margin: 0px 30px;
      margin-top: 70px;
      text-align: justify;
    }

    .question-alternativas {
      div {
        text-align: justify;
        margin: 30px 0;
        padding: 20px 30px;
        border: 2px solid #4a462ac2;
        border-radius: 1.5vw;
      }

      &.contraste-on {
        div {
          border: 2px solid white;
        }
      }
    }

    .qual-item {
      font-family: SourceSansBold;
      margin-top: 20px;
    }

    .form {
      display: flex;
      justify-content: space-between;

      .items-options {
        margin-top: 20px;
        display: flex;
        width: 350px;
        justify-content: space-between;
        align-items: center;

        div {
          cursor: pointer;
          font-size: 30px;
          font-family: SourceSansBold;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #928c5d;
          border-radius: 50%;
          width: 60px;
          height: 60px;

          &.checked {
            background-color: #4a462a;
          }
        }

        &.contraste-on {
          div {
            background-color: white;
            color: black;

            &.checked {
              background-color: rgb(71, 71, 71);
            }
          }
        }
      }

      .btn-conferir {
        cursor: pointer;
        margin-top: 20px;
        background-color: #0087c2;
        font-family: SourceSansBold;
        text-transform: uppercase;
        border-radius: 18px;
        border: none;
        font-size: 26px;
        letter-spacing: 1px;
        width: 199px;
        color: white;
        height: 68px;

        &:hover {
          background-color: #0075a7;
        }

        &.contraste-on {
          background-color: yellow;
          color: black;

          &:hover {
            background-color: rgb(212, 212, 3);
          }
        }
      }
    }
  }
  // ------------------------------
  .video-section {
    display: flex;

    height: fit-content;
    box-shadow: 1px 0px 6px 0px rgba(158, 158, 158, 1);
    border-radius: 3vw;
    background-color: white;
    padding: 0px 0px;
    font-size: 25px;

    &.contraste-on {
      background-color: black;
    }

    &.light-off {
      background-color: #1a180e;
      box-shadow: 1px 0px 6px 0px rgb(0, 0, 0);
    }

    .left-content {
      display: flex;
      justify-content: center;
      width: 90px;

      &.contraste-on {
        filter: brightness(0) invert(1);
      }
      .btn-sair {
        margin-top: 40px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 60px;
        img {
          margin-bottom: 5px;
          width: 25px;
        }
        div {
          font-size: 18px;
          margin-top: 2px;
          font-family: SourceSansBold;
        }
      }
    }

    .mid-content {
      width: 60vw;
      position: relative;

      .popup-video {
        position: absolute;
        background-color: #a7a7a765;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .right-content {
      display: flex;
      justify-content: center;
      width: 90px;

      &.contraste-on {
        filter: brightness(0) invert(1);
      }
      .btn-luz {
        margin-top: 40px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 60px;
        img {
          margin-top: -4px;
          margin-bottom: 5px;
          height: 30px;
        }
        div {
          font-size: 18px;
          font-family: SourceSansBold;
        }
      }
    }
  }
}

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #dbdbdb;
  border-radius: 20px;
  margin-bottom: 42px;
  margin-top: 42px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 20px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

@media (max-width: 1025px) {
  .title-section {
    width: 60vw !important;
  }

  .card-question .title-section .container .title {
    font-size: 48px;
  }

  .card-question .question-section .enunciado-fonte {
    font-size: 12px;
  }

  .card-question .question-section .enunciado-acesso {
    font-size: 12px;
  }

  .card-question .question-section .imagem .imagem-font {
    font-size: 12px;
  }

  .card-question .question-section {
    padding: 50px 70px;
  }

  .card-question .question-section .form .items-options {
    width: 253px;
  }

  .card-question .question-section .form .items-options div {
    font-size: 25px;
    width: 50px;
    height: 50px;
  }

  .card-question .question-section .form .btn-conferir {
    font-size: 23px;
    width: 222px;
    height: 54px;
  }

  .card-question .video-section .left-content .btn-sair img {
    width: 18px;
  }

  .card-question .video-section .left-content .btn-sair div {
    font-size: 15px;
  }

  .card-question .video-section .right-content .btn-luz img {
    width: 18px;
  }

  .card-question .video-section .right-content .btn-luz div {
    font-size: 15px;
  }
}

@media (max-width: 769px) {
  .card-question .title-section {
    width: 75vw !important;
    height: 245px;
  }

  .card-question .title-section .seta-baixo {
    width: 96px;
    margin-top: 23px;
    margin-bottom: 10px;
  }

  .card-question .question-section {
    padding: 40px 40px;
  }

  .card-question .question-section .enunciado-fonte {
    font-size: 10px;
  }

  .card-question .question-section .enunciado-acesso {
    font-size: 10px;
  }

  .card-question .question-section .imagem {
    margin-top: 43px;
  }

  .card-question .question-section .imagem .imagem-font {
    font-size: 10px;
  }

  .card-question .question-section .quention-pergunta {
    margin-top: 42px;
  }

  .card-question .question-section .question-alternativas div {
    padding: 13px 20px;
  }

  .card-question .question-section .form .items-options {
    width: 190px;
  }

  .card-question .question-section .form .items-options div {
    font-size: 21px;
    width: 40px;
    height: 40px;
  }

  .card-question .question-section .form .btn-conferir {
    font-size: 19px;
    width: 192px;
    height: 45px;
  }

  .card-question .video-section .left-content .btn-sair img {
    width: 13px;
  }

  .card-question .video-section .right-content .btn-luz img {
    width: 11px;
  }

  .card-question .video-section .left-content .btn-sair {
    margin-top: 24px;
  }

  .card-question .video-section .right-content .btn-luz {
    margin-top: 24px;
  }
}

@media (min-width: 426px) {
}
</style>
