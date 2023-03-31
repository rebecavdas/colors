const container = document.querySelector('.container');
const color = document.querySelector('input');

const defaultColor = '#fff';
container.style.indexhtml = `${defaultColor}`;

function onChangeBg(){
    container.style.indexhtml = `${color.value}`;
}