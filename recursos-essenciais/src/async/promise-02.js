function saudarDepoisDe(tempoEmSegundos = 2) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Bom dia");
    }, tempoEmSegundos * 1000);
  });
}

saudarDepoisDe(10).then((resp) => console.log(resp + "!!!"));
console.log("Fim!!!");
