function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //if(html.classList.contains("light")) {
  //  html.classList.remove('light')
  //}
  //else {
  //  html.classList.add("light")
  //}

  // pegar a tag img - o querySelector é o mesmo seletor css
  const img = document.querySelector("#profile img")
  //substituir a imagem
  //se tiver light mode, adicionar a imagem light

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./Avatar-light.png")
  } else {
    img.setAttribute("src", "./avatar.png")
  }
  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Foto de Mayk sorrindo, usando óculos de camisa preta e com fundo roxo."
    )
  } else {
    img.setAttribute(
      "alt",
      "Foto de Mayk sorrindo, usando óculos de camisa preta e com fundo amarelo."
    )
  }
}
