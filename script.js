buttons = document.querySelectorAll('div.rate button');
buttons.forEach(el => {
    el.addEventListener("click", event => {
        removeActiveState();
        el.classList.add("active");
    })
});
document.querySelector('input').onclick = function() {
    rate = document.querySelector('div.rate button.active').textContent;
    document.querySelector('div.rating-state').style.display = 'none';
    document.querySelector('div.thank-state button span').textContent = rate;
    document.querySelector('div.thank-state').style.display = 'flex';
};
function removeActiveState() {
    document.querySelectorAll('div.rate button.active').forEach(el => {
        el.classList.remove("active");
    });
};