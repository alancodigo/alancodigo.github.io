const temaOscuro = () => {
    document.querySelector('body').setAttribute('class','bg-light');
    document.querySelector('#dl-icon').setAttribute('class','bi bi-sun-fill');
}

const temaClaro = () => {
    document.querySelector('body').setAttribute('class','bg-dark');
    document.querySelector('#dl-icon').setAttribute('class','bi bi-moon-fill');
}

const cambiarTema = () => {
    document.querySelector('body').getAttribute('class') === 'bg-dark'?
    temaOscuro (): temaClaro ();
   
}

