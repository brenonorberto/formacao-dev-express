// GET
fetch("https://www.youtube.com/watch?v=WRlfwBof66s")
  .then((resp) => resp.text())
  .then((html) => html.split("<title>")[1])
  .then((html) => html.split("</title>")[0])
  .then(console.log);
