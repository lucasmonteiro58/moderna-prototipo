<template>
  <section class="card-question">
    <!-- <div class="title-section">
      <div class="container">
        <div class="title">Congresso de Viena</div>
        <div class="subtitle">- História -</div>
      </div>
      <img
        class="seta-baixo"
        src="../assets/images/icons/seta-baixo.png"
        alt="baixo"
      />
    </div> -->
    <div class="question-section">
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
      <div class="question-alternativas">
        <div class="alternativa-a">{{ question.alternativas[0].text }}</div>
        <div class="alternativa-b">{{ question.alternativas[1].text }}</div>
        <div class="alternativa-c">{{ question.alternativas[2].text }}</div>
        <div class="alternativa-d">{{ question.alternativas[3].text }}</div>
      </div>
      <div class="qual-item">Qual item você acha ques está correto?</div>
      <div class="form">
        <div class="items-options">
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
        <button class="btn-conferir">Conferir</button>
      </div>
    </div>
    <!-- <div class="video-section"></div> -->
    <viewer :images="images" @inited="inited" class="viewer" ref="viewer">
      <img v-for="src in images" :src="src" :key="src" class="none" />
    </viewer>
  </section>
</template>

<script>
import { question } from "../consts/index";

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
  data() {
    return {
      question,
      images: [question.imagem.link],
      selected: ""
    };
  },
  methods: {
    inited(viewer) {
      this.$viewer = viewer;
    },
    show() {
      this.$viewer.show();
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

  .question-section {
    display: flex;
    flex-direction: column;
    width: 70vw;
    height: 65vh;
    box-shadow: 1px 0px 6px 0px rgba(158, 158, 158, 1);
    border-radius: 3vw;
    background-color: white;
    padding: 80px 150px;
    font-size: 25px;
    overflow: auto;

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
          font-size: 35px;
          font-family: SourceSansBold;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #928c5d;
          border-radius: 50%;
          width: 70px;
          height: 70px;

          &.checked {
            background-color: #4a462a;
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
        font-size: 27px;
        letter-spacing: 1px;
        width: 250px;
        color: white;
        height: 70px;

        &:hover {
          background-color: #0075a7;
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
</style>
