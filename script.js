buttons = document.querySelectorAll('div.rate button');
buttons.forEach(el => {
    el.addEventListener("click", event => {
        removeActiveState();
        el.classList.add("active");
    })
});
document.querySelector('input').onclick = function() {
    alert(document.querySelector('div.rate button.active').textContent);
};
function removeActiveState() {
    document.querySelectorAll('div.rate button.active').forEach(el => {
        el.classList.remove("active");
    });
};