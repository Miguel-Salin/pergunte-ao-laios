function randomizeblud(){

  var op1 = document.getElementById("op1").value;
  var op2 = document.getElementById("op2").value;

  var laiosEscolheu = [op1, op2]

  

  var respostaLaios = laiosEscolheu[Math.floor(Math.random() *laiosEscolheu.length )]

  document.getElementById("rere").innerHTML = "Laios escolheu " + respostaLaios + "!";

}
