const helper = require('../helpers/helpers');

const allPosts = [
  {
        id: 1,
        date: new Date().toString(), 
        title: "Materninade e carreira em tecnologia",
        content: "Uma discussão sobre os embates e possibilidades sobre a presença de mães no mercado de trabalho em T.I",
        tags: [
      "materninade",
      "tech",
      "carreira",
      "trabalho"
    ]
  },
  {
        id: 2,
        date: new Date().toString(),
        title: "Espaço seguro no ambiente corporativo e inclusão de mulheres no mercado de trabalho",
        content: "Como desenvolver um ambiente seguro para mulheres e ampliar o rendimento de seus funcionários",
        tags: [
      "soft skills",
      "Saude mental",
      "Espaço seguro"
    ]
  }
  
];



module.exports = allPosts;