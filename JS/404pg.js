const homeImg = document.querySelector("#home-nav-img")
const aboutImg = document.querySelector("#about-nav-img")
const diaryImg = document.querySelector("#diary-nav-img")
const projectsImg = document.querySelector("#projects-nav-img")

const home = document.querySelector("#home")
const about = document.querySelector("#about")
const diary = document.querySelector("#diary")
const projects = document.querySelector("#projects")


function goTo(link) {
    window.open(link + ".html")
}



about.addEventListener("mouseover", function () {
    aboutImg.src = "IMG/about-icon-hover.png"
});
about.addEventListener("mouseout", function () {
    aboutImg.src = "IMG/about-icon.png"
});

home.addEventListener("mouseover", function () {
    homeImg.src = "IMG/home-icon-hover.png"
});
home.addEventListener("mouseout", function () {
    homeImg.src = "IMG/home-icon.png"
});

projects.addEventListener("mouseover", function () {
    projectsImg.src = "IMG/projects-icon-hover.png"
});
projects.addEventListener("mouseout", function () {
    projectsImg.src = "IMG/project-icon.png"
});

diary.addEventListener("mouseover", function () {
    diaryImg.src = "IMG/diary-icon-hover.png"
});
diary.addEventListener("mouseout", function () {
    diaryImg.src = "IMG/diary-icon.png"
});