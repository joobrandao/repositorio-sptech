/*
function calculadora(num1, num2, operacao) {
  if (operacao === "+") {
    return num1 + num2;
  } else if (operacao === "-") {
    return num1 - num2;
  } else if (operacao === "*") {
    return num1 * num2;
  } else if (operacao === "/") {
    return num1 / num2;
  } else {
    return "Operação inválida";
  }
}

function calculadora(num1, num2, operacao) {
  switch (operacao) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Operação inválida";
  }
}


var carro = {
  quantidadeRodas: 4,
  cor: "vermelho",
  montador: "Ford",
  modelo: "Ka",
  ano: 2019,
  capacidadeTanque: 40,
  tanque: 20,
  ligado: false,
  ligar: function () {
    this.ligado = true;
    console.log("Carro ligado");
  },
  desligar: function () {
    this.ligado = false;
    console.log("Carro desligado");
  },
  andar: function (km) {
    if (this.ligado == true) {
      
      this.tanque -= km/4;
    } else {
      console.log("Carro desligado");
    }
  },
  abastecer: function (litros) {
    if(this.tanque + litros <+ this.capacidadeTanque){
        this.tanque += litros;
  }else{
      console.log("Erro: tanque excedeu a capacidade");
      }
    },
  detalhes: function  () {
    console.log("Quantidade de rodas: " + this.quantidadeRodas);
    console.log("Cor: " + this.cor);
    console.log("Montadora: " + this.montador);
    console.log("Modelo: " + this.modelo);
    console.log("Ano: " + this.ano);
    console.log("Capacidade do tanque: " + this.capacidadeTanque);
    console.log("Ligado: " + this.ligado);
  },
  pintar: function (cor) {
    if (this.cor === cor) {
      console.log("O carro já está pintado dessa cor");
    } else {
      this.cor = cor;
      console.log("O carro foi pintado de " + this.cor);
    }
  },
};
*/

var notebookCaio = {
  marca: "Dell",
  tipo: "Ultrabook",
  especificação: {
    SSD: "256",
    Memória: "32GB",
    Processador: "I7",
    SO: "Windows10",
  },
};

var caio = {
  notebook: notebookCaio,
  nome: "Caio",
  idade: 18,
  matéria: "Algoritmo",
  turma: "AADS",
  humor: "Feliz",
  verificarLiberação: function () {
    if (humor === "Feliz") {
      alert(`Vazem da minha aula!`);
    } else {
      alert(`Fiquem até 16:10`);
    }
  },
};

var sala3A = {
  quantidadeCadeiras: 40,
  quantidadeMesas: 10,
  qtdNotebooks: 20,
  quantidadeLousas: 2,
  quantidadeAlunos: 40,
  quantidadeAlunosComNotebook: 10,
  professor: caio,
  verificarDisponibilidadeCadeiras: function () {
    if (this.quantidadeAlunos > this.quantidadeCadeiras) {
      alert(`A sala a não comporta essa quantidade de alunos`);
    } else {
      alert(`Começar a aula!`);
    }
  },
  verificarDisponibilidadeNotebooks: function () {
    var alunosSemNotebook = this.quantidadeAlunos - this.quantidadeAlunosComNotebook
    if (alunosSemNotebook <= this.notebooks) {
      alert(`Podemos codar!`);
    } else if (alunosSemNotebook / 2 <= this.notebooks) {
      alert(`Formem duplas e codem!`);
    } else {
      alert(`Não da para codar :(`);
    }
  },
  verificarConteudo: function(){
    if(this.quantidadeAlunos >= this.quantidadeCadeiras / 2){
      alert(`Conteudo novo e Exercícios`)
    }else{
      alert(`Só exercicio hoje!`)
    }
  }
};
