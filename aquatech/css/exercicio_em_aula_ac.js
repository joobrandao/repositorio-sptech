function verificarMcdonalds() {
  var chovendo;
  var dinheiro;
  var tempo;
  var nuggets;
  var saida;

  if (
    (!chovendo == 1 && !dinheiro == 1 && tempo == 1) ||
    (tempo == 1 && nuggets == 1)
  ) {
    var saida = 1;
  } else {
    var saida = 0;
  }

  alert(`${saida}`);
}
