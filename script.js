const cols = document.getElementsByClassName('col');

for(let i = 0 ; i < cols.length ; i ++){
    window.addEventListener('scroll', () => {

        if(cols[i].getBoundingClientRect().top - window.innerHeight < 0){
            cols[i].classList.add('flip');
        }
    })
}
