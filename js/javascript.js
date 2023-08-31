// JS - Carrossel
const controls = 
document.querySelectorAll('.control');
let currentItem = 0;
const items =
document.querySelectorAll('.item');
const maxItems = items.length;

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('arrow-left');


        if (isLeft) {
            currentItem -= 1;
        }else {
            currentItem += 1;
        }

        if (currentItem >= maxItems){
            currentItem = 0;
        }
        if (currentItem < 0){
            currentItem = maxItems - 1;
        }

        items.forEach((item) => item.classList.remove('current-item'));

        items[currentItem].scrollIntoView({inline: 'center', behavior: 'smooth'});

        items[currentItem].classList.add('current-item');
    })
})


function button(){
    const el = document.querySelector('.arrow-left,.arrow-right');
    el.style.cssText =
    'height: 92vh;' +
    'opacity: 2';

}
function buttonS(){
    const el = document.querySelector('.arrow-left,.arrow-right');
    el.style.cssText =
    'height: 90vh;' +
    'opacity: 0.5';

}
function button1(){
    const el = document.querySelector('.arrow-right');
    el.style.cssText =
    'height: 92vh;' +
    'opacity: 2';

}
function buttonS1(){
    const el = document.querySelector('.arrow-right');
    el.style.cssText =
    'height: 90vh;' +
    'opacity: 0.5';
}

//JS - Carrossel 2

const controlsS = 
document.querySelectorAll('.controlL');
let currentItemM = 0;
const itemsS =
document.querySelectorAll('.itemM');
const maxItemsS = items.length;

controlsS.forEach(controlL => {
    controlL.addEventListener('click', () => {
        const isLeftT = controlL.classList.contains('arrow-leftT');


        if (isLeftT) {
            currentItemM -= 1;
        }else {
            currentItemM += 1;
        }

        if (currentItemM >= maxItemsS){
            currentItemM = 0;
        }
        if (currentItemM < 0){
            currentItemM = maxItemsS - 1;
        }

        itemsS.forEach((itemM) => itemM.classList.remove('current-itemM'));

        itemsS[currentItemM].scrollIntoView({inline: 'center', behavior: 'smooth'});

        itemsS[currentItemM].classList.add('current-itemM');
    })
})


function Cursos(){
        Texto = "Esta área de estudo é essencial para entender o que nos move como seres humanos e o que torna nossas vidas significativas, portanto, em uma faculdade de filosofia você estudará os princípios fundamentais da vida e da existência humana.";
        // imagem = "<img src='img/Foto-Header.png'>";
        const el = document.querySelector('#egll');
        el.style.cssText =
        'background-color: #8059DE;' + 
        'color: #fffff';
        document.getElementById("CkJ").innerText = Texto;
        // document.getElementById("lxsx").innerHTML = imagem;

}
