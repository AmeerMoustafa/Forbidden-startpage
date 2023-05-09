themeRandomizer = () => {
const theme = ["gold", "pastel", "alcest", "griffith", "guts"]
const random = theme[Math.floor(Math.random() * theme.length)]
return random
}

setTheme = () => {
    const selector = document.getElementsByClassName("image")[0]
    savedTheme = localStorage.getItem('theme')
    if(savedTheme) {
        document.documentElement.className = savedTheme
    }



    selector.addEventListener("click", () => {
        theme = themeRandomizer()
        document.documentElement.className = theme
        localStorage.setItem('theme', theme)
    })
}

setTheme()