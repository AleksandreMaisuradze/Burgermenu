let burger = document.querySelector(".fa-bars")
let xMark = document.querySelector(".fa-x")
let burgerMenu = document.querySelector(".header_nav")

burger.addEventListener("click", () => {
    burger.style.display = "none"
    xMark.style.display = "block"
    burgerMenu.classList.add("show")
})

xMark.addEventListener("click", () => {
    xMark.style.display = "none"
    burger.style.display = "block"
    burgerMenu.classList.remove("show")
})