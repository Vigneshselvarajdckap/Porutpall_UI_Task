const mainContainer = document.querySelector('.main-container')
const btns = document.querySelectorAll('.link')
const content = document.querySelectorAll('.content');
const tabContainer = document.querySelector("#tab-menu")





const hamburgIcon = document.querySelector('#hamburg-icon').addEventListener('click', function (e) {
    if (document.querySelector('#hamburg-icon').classList.contains("fa-bars")) {
        document.querySelector('#hamburg-icon').classList.remove("fa-bars")
        document.querySelector('#hamburg-icon').classList.add("fa-xmark")
        document.querySelector('#hamburg-icon').style.color = 'yellow'
        tabContainer.classList.add("show")
    }
    else {
        document.querySelector('#hamburg-icon').classList.remove("fa-xmark")
        document.querySelector('#hamburg-icon').classList.add("fa-bars")
        tabContainer.classList.remove("show");
        document.querySelector('#hamburg-icon').style.color = ''
    }
})

mainContainer.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
        // remove selected from other buttons
        btns.forEach(function (btn) {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");
        // hide other container
        content.forEach(function (article) {
            article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");

        tabContainer.classList.remove("show");
        document.querySelector('#hamburg-icon').classList.remove("fa-xmark")
        document.querySelector('#hamburg-icon').classList.add("fa-bars")
        document.querySelector('#hamburg-icon').style.color = '';


    }
});

