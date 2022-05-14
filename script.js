buttons = document.querySelectorAll('div.rate button');
buttons.forEach(el => {
    el.addEventListener("click", event => {
        removeActiveState();
        el.classList.add("active");
    })
});
document.getElementById('submit').onclick = function() {
    rate = document.getElementsByClassName('active')[0].textContent;
    document.getElementsByClassName('rating-state')[0].style.display = 'none';
    document.getElementById('result-number').textContent = rate;
    document.getElementsByClassName('thank-state')[0].style.display = 'flex';
};
function removeActiveState() {
    Array.from(document.getElementsByClassName('active')).forEach(el => {
        el.classList.remove("active");
    });
};