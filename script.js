const color = document.querySelector('.color');
const overColor = document.querySelector('.overflow');
const body = document.querySelector('.body');

document.querySelector('.black').addEventListener('click', function(){
    document.querySelector('.color').style.backgroundColor = 'black';
});
document.querySelector('.blue').addEventListener('click', function(){
    document.querySelector('.color').style.backgroundColor = 'blue';
});
document.querySelector('.red').addEventListener('click', function(){
    document.querySelector('.color').style.backgroundColor = 'red';
});
document.querySelector('.resetColor').addEventListener('click', function () {
  document.querySelector('.color').style.backgroundColor = 'violet'
})

