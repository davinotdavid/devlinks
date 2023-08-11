function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Switch profile image
  const profileImg = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    profileImg.setAttribute("src", "./assets/avatar-light.png")
    profileImg.setAttribute(
      "alt",
      "Davi Nakano's picture making a hang loose gesture while wearing upside down red sunglasses, an ugly christmas sweater and eating a lollipop."
    )
  } else {
    profileImg.setAttribute("src", "./assets/avatar.png")
    profileImg.setAttribute(
      "alt",
      "Davi Nakano's picture smiling and facing forward wearing a plaid shirt with a blurple background"
    )
  }
}
