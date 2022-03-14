const showMenu = (item, show) => {
    if(show) {
        item.style.display = 'flex';
    } else {
        item.style.display = 'none'
    };
};

window.addEventListener('load', () => {

    const menu =  document.getElementsByTagName('header')[0];

    if(scrollY === 0) {
        showMenu(menu, true);
    };

    window.addEventListener('touchmove', ev => {
        showMenu(menu, false);
    });

    window.addEventListener('touchend', ev => {
        showMenu(menu, true);
    })
});

window.addEventListener('load', () => {
    function typeWriter(elemento) {
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        textoArray.forEach((letra, i) => {
          setTimeout(() => elemento.innerHTML += letra, 60 * i);
        });
      }
    
      // Se estiver tendo problemas com performance, utilize o FOR loop como abaixo no local do forEach
      // function typeWriter(elemento) {
      //   const textoArray = elemento.innerHTML.split('');
      //   elemento.innerHTML = '';
      //   for(let i = 0; i < textoArray.length; i++) {
      //     setTimeout(() => elemento.innerHTML += textoArray[i], 75 * i);
      //   }
      // }
    
    const titulo = document.querySelector('.effectText');
    typeWriter(titulo);
})

