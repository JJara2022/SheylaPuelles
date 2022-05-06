const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Es lo mejor')
    alert('ya derrame muchas lagrimas')
    alert('No pienso llorar una ves más por tí')
    alert('Adios')
    alert('Que te vaya bien')
    alert('Es lo mejor')
    alert('con el debido respeto')
    alert('Te me vas a la recalcada putisma, conchadetumadre')
    alert('Adios')
    alert('te deseas "sheila puelles come ceviche')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})