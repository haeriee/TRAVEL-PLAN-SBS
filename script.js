const cols = document.getElementsByClassName('col');

window.addEventListener('scroll', () => {
    console.log(cols[0].getBoundingClientRect().top);
})