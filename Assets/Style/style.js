const about = document.querySelector("#aboutMe");
const work = document.querySelector("#workPage");
const contact = document.querySelector("#contactPage");

const aboutContent = document.querySelector(".aboutcards")
const workContent = document.querySelector(".theWorkPage")
const contactContent = document.querySelector(".theContactPage")

const toAbout = function (){
    workContent.setAttribute("class", "hide")
    contactContent.setAttribute("class", "hide")
    aboutContent.setAttribute("class", "show")
    console.log("ye")
}

function toWork() {
    workContent.setAttribute("class", "show")
    contactContent.setAttribute("class", "hide")
    aboutContent.setAttribute("class", "hide")
}

function toContact() {
    workContent.setAttribute("class", "hide")
    contactContent.setAttribute("class", "show")
    aboutContent.setAttribute("class", "hide")
}

about.addEventListener("click", toAbout());
work.addEventListener("click", toWork());
contact.addEventListener("click", toContact());