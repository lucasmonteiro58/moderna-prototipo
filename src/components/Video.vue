<template>
  <div class="player-container">
    <vue-plyr ref="plyr">
      <video :src="currentVideo"></video>
    </vue-plyr>
  </div>
</template>

<script>
import Vue from "vue";
import VuePlyr from "vue-plyr";
import "vue-plyr/dist/vue-plyr.css";

Vue.use(VuePlyr, {
  plyr: {
    controls: [
      "play-large", // The large play button in the center
      "play", // Play/pause playback
      "progress", // The progress bar and scrubber for playback and buffering
      "current-time", // The current time of playback
      "duration", // The full duration of the media
      "mute", // Toggle mute
      "volume", // Volume control
      "captions", // Toggle captions
      "settings", // Settings menu
      "fullscreen" // Toggle fullscreen
    ],
    i18n: {
      restart: "Reiniciar",
      play: "Começar",
      pause: "Pausar",
      seek: "Seek",
      currentTime: "Tempo Atual",
      duration: "Duração",
      volume: "Volume",
      mute: "Mutar",
      unmute: "Desativar Mudo",
      enableCaptions: "Ativar Legenda",
      disableCaptions: "Desativar Legenda",
      enterFullscreen: "Tela cheia",
      exitFullscreen: "Sair tela cheia",
      captions: "Legenda",
      settings: "Configurações",
      speed: "Velocidade",
      normal: "Normal",
      quality: "Qualidade",
      loop: "Loop",
      start: "Start",
      end: "End",
      all: "All",
      reset: "Reset",
      disabled: "Disabled"
    },
    speed: {
      selected: 1,
      // The options to display in the UI, if available for the source media (e.g. Vimeo and YouTube only support 0.5x-4x)
      options: [0.5, 1, 1.5, 2]
    }
  }
});

export default {
  name: "Video",
  props: {
    currentVideo: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.$refs.plyr.player.on("ended", () => this.$emit("videoEnd"));
    this.$refs.plyr.player.on("pause", () => this.$emit("videoPause"));
    this.$refs.plyr.player.on("play", () => this.$emit("videoPlay"));
    this.$refs.plyr.player.on("volumechange", () => this.mutarSom());
    this.$refs.plyr.player.muted = this.muted;
  },
  computed: {
    muted() {
      return !this.$store.state.som;
    }
  },
  watch: {
    muted: function() {
      this.$refs.plyr.player.muted = this.muted;
    }
  },
  methods: {
    mutarSom() {
      if (this.$refs.plyr.player.muted) {
        this.$store.commit("changeSom", false);
      } else {
        this.$store.commit("changeSom", true);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.player-container {
  color: white !important;
}
</style>
