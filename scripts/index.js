const btn = document.getElementById("menu-btn");


const toggleNav = () => {
    btn.classList.toggle('open');

    const menu = document.getElementById("menu");
    menu.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll');
}

btn.addEventListener('click', toggleNav);
