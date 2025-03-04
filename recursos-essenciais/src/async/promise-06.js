function promessa() {
  return new Promise((atender, rejeitar) => {
    if (Math.random() < 0.5) {
      atender("Bom dia");
    } else {
      rejeitar("sai fora!!!");
    }
  });
}

promessa()
  .then((resp) => console.log(resp + " - then"))
  .catch((resp) => console.log(resp + " - catch"));
