const mainContainer = document.querySelector('.main-container')
const btns = document.querySelectorAll('.link')
const content = document.querySelectorAll('.content');


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
    }
});