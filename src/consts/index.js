export const question = {
  enunciado: {
    texto:
      '(UEMG) "Há duzentos anos, em 9 de junho de 1815, encerrava-se o Congresso de Viena, conferência de países europeus que, após nove meses de deliberações, estabeleceu um plano de paz de longo prazo para o continente, que vivia um contexto político conturbado (...). Para alcançar esse objetivo, os diplomatas presentes ao Congresso de Viena criaram um mecanismo de pesos e contrapesos conhecido como "Concerto Europeu" (...). O Concerto Europeu procurou substituir um arranjo unipolar por um sistema inovador de consultas plurilaterais. Esse esforço visava a garantir a estabilidade europeia no pós-guerra".',
    fonte:
      "http://blog.itamaraty.gov.br/63-historia/146-200-anos-do-congresso-de-viena.",
    acesso: "Acesso em: 20/7/2015."
  },

  imagem: {
    link: require("../assets/images/question-image.png"),
    fonte: "http://blog.itamaraty.gov.br/images/viena.jpg. ",
    acesso: "  Acesso em: 19/9/2015.",
    title: "imagem"
  },
  pergunta:
    "O contexto conturbado vivido pela Europa antes do Congresso de Viena e os resultados deste foram, respectivamente:  ",
  alternativas: [
    {
      text:
        "a) A guerra dos sete anos que colocaram em confronto Inglaterra e França em função de disputas territoriais na América. – A expulsão da França da Liga das Nações por ter desrespeitado regras internacionais preestabelecidas. ",
      correct: false,
      nome: "A",
      checked: false
    },
    {
      text:
        "b) A disputa imperialista protagonizada pelas nações europeias em função da crise econômica vivida no século XIX. – Evitou-se provisoriamente um conflito de proporções mundiais já que, por meio de concessões, garantiu-se um equilíbrio político. ",
      correct: false,
      nome: "B",
      checked: false
    },
    {
      text:
        "c) A expansão napoleônica que destronou reis e promoveu a invasão e ocupação militar sobre diversas regiões. – Restauração das monarquias depostas por Napoleão, legitimação das existentes à época e a criação da Santa Aliança. ",
      correct: false,
      nome: "C",
      checked: false
    },
    {
      text:
        "d) A primeira grande guerra, que foi consequência de um momento marcado pelo nacionalismo exacerbado e por rivalidades econômicas e territoriais. – A imposição de uma paz despreocupada com o equilíbrio mundial pois humilhava os derrotados.",
      correct: false,
      nome: "D",
      checked: false
    }
  ]
};

export const videos = {
  introducao: require("../assets/videos/1-introducao.mp4"),
  texto: require("../assets/videos/2-explicacao_texto.mp4"),
  enunciado: require("../assets/videos/3-leitura-enunciado.mp4"),
  itemA: require("../assets/videos/4-item_a.mp4"),
  itemB: require("../assets/videos/5-item_b.mp4"),
  itemC: require("../assets/videos/6-item_c.mp4"),
  itemD: require("../assets/videos/7-item_d.mp4"),
  encerramento: require("../assets/videos/8-encerramento.mp4")
};
