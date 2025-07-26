const downArrowHader = document.getElementById("arrowIcon");
const profilePhoto = document.getElementsByClassName("logoPrincipal")[0]
let activator = false;

downArrowHader.addEventListener("click",() => {
    const settingUserBarHeader = document.querySelector(".settingUserBarHeader");
    if(settingUserBarHeader.getAttribute("style") == "display:flex;") {
        settingUserBarHeader.setAttribute("style","display:none;");
    }
    else {
        settingUserBarHeader.setAttribute("style","display:flex;")
        settingUserBarHeader.innerHTML = `<nav class="navUserBarHeader">
                                    <ul>
                                        <li type="none"><a href="/">Mi cuenta</a></li>
                                        <li type="none"><a href="/">Tutorias</a></li>
                                        <li type="none"><a href="/">Pagos</a></li>
                                        <li type="none"><a href="/">Salir</a></li>
                                    </ul>
                                </nav>     
                                `
    }
})