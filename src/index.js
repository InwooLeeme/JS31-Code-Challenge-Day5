const panelImg = document.querySelectorAll('.panel');

function handleClick(){
    this.classList.toggle('open');
    this.classList.toggle('open-active');
}

panelImg.forEach(img => {
    img.addEventListener('click',handleClick);
});