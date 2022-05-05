function idade() {
  var anoAtual = new Date().getUTCFullYear;
  var idade = Math.abs(anoAtual-2002);
  document.getElementById("idade").innerHTML=""+idade;      
}
