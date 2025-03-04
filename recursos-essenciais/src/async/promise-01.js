function promessa() {
  return new Promise((atender) => {
    atender("Bom dia");
  });
}

promessa().then((resp) => console.log(resp));
console.log("Fim!!!");
