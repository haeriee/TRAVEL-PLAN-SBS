const cols = document.getElementsByClassName('col');

for(let i = 0 ; i < cols.length ; i ++){
    window.addEventListener('scroll', () => {

        if(cols[i].getBoundingClientRect().top - window.innerHeight < 0){
            cols[i].classList.add('flip');
        }
    })
}

/*--------------------------------------------------------------------*/

const background1 = document.querySelector('.container');
const background2 = document.querySelector('.container2');

makeMoveBacgroun(background1);
makeMoveBacgroun(background2);

function makeMoveBacgroun(content){
    window.addEventListener('scroll',()=>{
        const scrollY= content.getBoundingClientRect().top;
        console.log(scrollY);
        content.style.backgroundPositionY = `${scrollY/2}px`;
    })

}

