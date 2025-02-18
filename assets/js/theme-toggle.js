const themeBtn = document.querySelector("#theme-toggle");
const imgTheme = document.querySelector("#theme-img-toggle");
const body = document.body;


themeBtn.addEventListener('click', () =>{
    if(imgTheme.src.endsWith('sun.svg')){
        imgTheme.src = './assets/images/icon/moon.svg';
        body.classList.add('dark');
    }

    else{
        imgTheme.src = './assets/images/icon/sun.svg';
        body.classList.remove('dark');
    }
})