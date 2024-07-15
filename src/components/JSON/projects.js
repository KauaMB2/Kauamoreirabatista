import infrareportImage from "../../assets/img/infrareportImage.png";
import infrareportapiImage from "../../assets/img/infrareportapiImage.png";
import studybuddyapiImage from "../../assets/img/studybuddyapiImage.png";
import studybuddyImage from "../../assets/img/studybuddyImage.png";
import teamallocationImage from "../../assets/img/teamallocationImage.png";
import savetheplanetImage from "../../assets/img/savetheplanetImage.png";
import pongImage from "../../assets/img/pongImage.png";
import reconhecimentofacialImage from "../../assets/img/reconhecimentofacialImage.png";
import controladorvisualdevolumeImage from "../../assets/img/controladorvisualdevolumeImage.png";
import identificadordesinaisImage from "../../assets/img/identificadordesinaisImage.png";
import mousevisualImage from "../../assets/img/mousevisualImage.png";
import paintvisualImage from "../../assets/img/paintvisualImage.png";
import personaltrainerImage from "../../assets/img/personaltrainerImage.png";
import movevisionImage from "../../assets/img/movevisionImage.png";
import cadastrodeclientesImage from "../../assets/img/cadastrodeclientesImage.png";

export const projects = {
  web_development: {
    first: [
      {
        title: "Studybuddy",
        description: "Frontend & Design",
        imgUrl: studybuddyImage,
        link: "https://kauamoreira.pythonanywhere.com/home/",
      },
      {
        title: "Studybuddy API",
        description: "Backend & REST API",
        imgUrl: studybuddyapiImage,
        link: "https://kauamoreira.pythonanywhere.com/api/",
      },
      {
        title: "Infrareport",
        description: "Frontend & Design",
        imgUrl: infrareportImage,
        link: "https://infrareportfrontend.vercel.app",
      },
    ],
    second: [
      {
        title: "Infrareport API",
        description: "Backend & REST API",
        imgUrl: infrareportapiImage,
        link: "https://infrareportrestapi.pythonanywhere.com",
      },
      {
        title: "Team allocation",
        description: "Frontend & Empresas",
        imgUrl: teamallocationImage,
        link: "https://team-allocation-frontend.vercel.app",
      },
      {
        title: "Save the planet",
        description: "Jogo & Entretenimento",
        imgUrl: savetheplanetImage,
        link: "https://savetheplanetkaua.netlify.app",
      },
    ],
    third: [
      {
        title: "PONG",
        description: "Jogo & Entretenimento",
        imgUrl: pongImage,
        link: "https://pongkaua.netlify.app",
      },
    ],
  },
  computer_vision: {
    first: [
      {
        title: "Reconhecimento facial",
        description: "I.A. & Reconhecimento",
        videoUrl: "https://www.youtube.com/embed/QCRcDWnEPDg",
        explanation: "Este projeto é uma interface gráfica desenvolvida que permite efetuar o reconhecimento de faces em fotos e pela webcam além do cadastro de novas faces e treinamento da inteligência artificial para identificação de novas faces. A aplicação foi desenvolvida utilizando Python, OpenCV, Haarcascade e Tkinter.",
        imgUrl: reconhecimentofacialImage,
        link: "https://drive.google.com/uc?export=download&id=1EBi1P63DkbQmKV0pG38kTlQvoXLXi6rQ",
      },
      {
        title: "Paint visual",
        description: "I.A. & Design",
        videoUrl: "https://www.youtube.com/embed/Z7B6_DMFadw",
        explanation: "Este projeto nada mais é que uma versão simulada e reduzida do software Paint, mas controlado pelas mãos. O software detecta os sinais feitos com a mão e permite desenhar em verde, azul e vermelho e, além disso, permite apagar o que já foi desenhado! Se você levantar o dedo indicador com o dedo médio, o software entenderá que você está selecionando uma das três cores possíveis, portanto, está em modo de seleção e, se você levantar somente o dedo indicador, o software entenderá que você está desenhando na tela. A aplicação foi desenvolvida utilizando Python, OpenCV e Mediapipe.",
        imgUrl: paintvisualImage,
        link: "https://drive.google.com/uc?export=download&id=1eNG8LThg6vICESVci4pAxaL_Ri81Rw8y",
      },
      {
        title: "Move Vision",
        description: "I.A. & Entretenimento",
        videoUrl: "https://www.youtube.com/embed/nhY7hpbePBQ",
        explanation: "Move Vision é um jogo de movimento corporal. Basicamente, você acessa o jogo se registrando com um usuário e senha e, após clicar no botão \"Play\", o jogo abre sua câmera e divide ela em uma matrix 3x3 onde cada célula representa uma posição possível. Após isso, é exibida uma imagem e dois pontos representando a posição que você deve ficar e o jogador deve, em menos de um segundo, se adequar a posição exibida na imagem. As imagens são trocadas de segundo em segundo e, enquanto o jogador conseguir se adequar à sequência de movimentos e posições, ele ganha ponto, mas, se errar uma posição, o jogador perde.",
        imgUrl: movevisionImage,
        link: "https://drive.google.com/uc?export=download&id=10Nn2CweBseQXDJcFYNS5_gH6jg76ZDvZ",
      }
    ],
    second: [
      {
        title: "Identificador de sinais",
        description: "I.A. & Detecção",
        videoUrl: "https://www.youtube.com/embed/8vme6-fE6Is",
        explanation: "Este projeto utiliza visão computacional para identificar sinais feitos com a mão, permitindo que o computador identifique os número 1, 2, 3, 4 e 5 quando sinalizados. A aplicação foi desenvolvida utilizando Python, OpenCV e Mediapipe.",
        imgUrl: identificadordesinaisImage,
        link: "https://drive.google.com/uc?export=download&id=17gk1EKBWCM57YRzva9Qu6VBc1qBtENYD",
      },
      {
        title: "I.A. personal trainer",
        description: "I.A. & Detecção",
        videoUrl: "https://www.youtube.com/embed/9nlQETYTNNU",
        explanation: "Este projeto é um personal trainer automático. Utilizando inteligência artificial, é possível calcular a angulação criado por seu braço durante a execução da flexão de bíceps com halter e, utilizando essa angulação, é possível saber se o usuário está fazendo o exercício corretamente e quantas vezes ele executou. A aplicação foi desenvolvida utilizando Python, OpenCV e Mediapipe.",
        imgUrl: personaltrainerImage,
        link: "https://drive.google.com/uc?export=download&id=1UZe8QML1JrIXm9CdAXDzFjclIuwlmsw-",
      },
      {
        title: "Mouse visual",
        description: "I.A. & Detecção",
        videoUrl: "https://www.youtube.com/embed/Zy6PrwxwyAM",
        explanation: "Este projeto utiliza visão computacional para identificar sinais feitos com a mão e, por meio desses sinais, controlar o cursor do mouse e até dar cliques. Muitas vezes em filmes de ficção nós víamos as pessoas interagindo com as telas dos computadores utilizando as próprias mãos. Sendo assim, a ideia desse projeto é nos proximar um pouco dessa realidade. Se você levantar somente o dedo indicador, o software entenderá que você quer mover o cursor do mouse e, se você levantar dedo indicador e o dedo médio juntos, o software entenderá que você quer dar um clique na tela. A aplicação foi desenvolvida utilizando Python, OpenCV, Mediapipe e outras tecnologias.",
        imgUrl: mousevisualImage,
        link: "https://drive.google.com/uc?export=download&id=1QrS7uU3oZpYo0OXAY9dzTMdYV8xvlnjz",
      },
    ],
    third: [
      {
        title: "Controlador de volume visual",
        description: "I.A. & Detecção",
        videoUrl: "https://www.youtube.com/embed/cP1zfRaG5C4",
        explanation:
          "Este projeto utiliza visão computacional para identificar sinais feitos com a mão e, por meio desses sinais, controlar o volume do computador. O software mede a distância entre o dedo indicador e o polegar e utiliza essa distância para controlar o volume. A aplicação foi desenvolvida utilizando Python, OpenCV, Mediapipe e outras tecnologias.",
        imgUrl: controladorvisualdevolumeImage,
        link: "https://drive.google.com/uc?export=download&id=1GMCnOPuk8kCGzM1yHKUIoCY_bm4ZvceK",
      }
    ],
  },
  GUI: {
    first: [
      {
        title: "Cadastro de clientes",
        description: "Desktop & Banco de dados",
        videoUrl: "https://www.youtube.com/embed/N406Ala4tyk",
        explanation: "Este projeto consiste em uma aplicação desktop que permite qualquer pessoa gerenciar sua lista de clientes do seu negócio. A aplicação exibe, em uma tabela, os clientes cadastrados e permite deletar, pesquisar e inserir novos clientes na tabela. É extremamente intuitivo, leve e qualquer um pode usar!",
        imgUrl: cadastrodeclientesImage,
        link: "https://drive.google.com/uc?export=download&id=1bbjuUBhrgIxssiIYxmPIIR3IyyfpB-Ye",
      },
    ],
    second: [],
    third: [],
  },
};