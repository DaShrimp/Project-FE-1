const dropmenu = document.querySelectorAll('.dropmenu');
dropmenu.forEach(dropmenu => {
    const select = dropmenu.querySelector('.select');
    const caret = dropmenu.querySelector('.caret');
    const menu = dropmenu.querySelector('.menu');
    const options = dropmenu.querySelector('.menu li');
    const selected = dropmenu.querySelector('.selected');
    
    select.addEventListener('click', () =>{
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', ()=> {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});