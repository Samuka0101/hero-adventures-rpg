
var heroi={
  nome:"",  
  vida:100,
  poder:10,
  defesa:5,
  guarda:true,
};
var orc = {
  nome:"",
  vida:120,
  poder: 20,
  defesa:6,
};

var nome_heroi = true;
var nome_orc = true;
var jogando = true;
var start_game = true;
var lança_usada = true;


function Main() {
  forçaVento();
  var forçavento = forçaVento(1, 4);
  console.log("A força do vento é: " + forçavento);

  if (nome_heroi) {
   heroi.nome = prompt("Digite o nome do seu herói: ");
   console.log("Bem-vindo, " + heroi.nome + "!");
   nome_heroi = false;
  }
  if(nome_orc){
    orc.nome = prompt("Digite o nome do orc: ");
    console.log("O orc se chama " + orc.nome + "!");
    nome_orc = false;
  }  
  if (start_game) {
    console.log("A batalha começa!");
    console.log("Um orc gigante apareceu!");
    start_game = false
  }
  console.log("Qual a sua escolha?");
  console.log("1 - Atacar:");
  console.log("2 - Defender:");
  if (lança_usada) {
  console.log("3 - Lança:");
  } else {
    console.log("3 - recuperar lança:");
  }
  console.log("4 - Fugir!");
  console.log("5 - Sacrificar")

  let escolha = prompt("Escolha a sua opção: ");

  if (escolha == 1) {
    Atacar();
    orcAtaque();
  }
  else if (escolha == 2) {
    Defender();
    orcAtaque();
  }
  else if (escolha == 3) {
    if (lança_usada) {
      Lança();
      orcAtaque();
    } else {
      recuperarLança();
      orcAtaque();
    }
  }
  else if (escolha == 4) {
    Fugir();
    orcAtaque();
  }
  else if (escolha == 5) {
    console.log("O herói se sacrifica para derrotar o orc!");
    console.log("pulando e empurrando o orc de um penhasco");
    console.log("Você se sacrificou para derrotar o orc, mas infelizmente você morreu");
    console.log("Agradecimentos, " + heroi.nome + "!");
    jogando = false;
  }
}

function Atacar(){

  console.log("O herói ataca!");
  var dano = heroi.poder - orc.defesa;
  console.log("O orc perdeu " + (heroi.poder - orc.defesa) + "de dano");
  orc.vida -= dano;
  console.log("Vida do orc: " + orc.vida);
}

function Defender() {
  heroi.guarda = true;
  console.log("O herói esta em guarda");
  console.log("Todo o dano é reduzido pela metade")
}

function Fugir() {
  console.log("Nosso heroi esta fugindo");
  console.log("Que vergonha!");
  jogando = false;
}

function orcAtaque(){
  console.log("O orc ataca!");
  var dano = orc.poder - heroi.defesa;
  console.log("O herói perdeu " + dano + " de vida");
  heroi.vida -= dano;
  console.log("Vida do herói: " + heroi.vida);
}

function recuperarLança() {
  console.log("O herói recupera a lança!");
  lança_usada = true;
}

function Lança() {
    console.log("O herói usa uma lança!");
    var dano = (heroi.poder * forçavento) - orc.defesa;
    orc.vida -= dano;
    console.log("O orc perdeu " + dano + " de dano");
    console.log("Vida do orc: " + orc.vida);
    console.log("A lança ficou presa na pele do orc");
    lança_usada = false;
}

function forçaVento(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

while (jogando)
{
  Main();

  if (heroi.vida <= 0)
  {
    console.log("Game Over!");
    jogando = false;
  }

  if (orc.vida <= 0)
  {
    console.log("Você venceu!");
    jogando = false;
  }
}