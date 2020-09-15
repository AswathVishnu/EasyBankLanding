///select dom items
const menuBtn = document.querySelector('.head-button');
const navMenu = document.querySelector('#nav')
const nav = document.querySelector('#nav ul')
const navItems = document.querySelectorAll('.btn-line');
const bgItem = document.body;




//set initial sate of menu
let showMenu = false;
//menu toggle

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        navMenu.classList.add('show');
        nav.classList.add('show');
        // navItems.forEach(item => item.classList.add('close'));
        bgItem.setAttribute('id', 'bg-img');
        //resetMenu
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        navMenu.classList.remove('show');
        nav.classList.remove('show');
        // navItems.forEach(item => item.classList.remove('close'));
        bgItem.removeAttribute('id');
        //resetMenu
        showMenu = false;

    }
}



//scroll animation
const boxs = document.querySelector('.boxes');
let heightBox = boxs.offsetTop - 100;

function scrollToggle(e) {
    let scroll = window.scrollY;
    if (scroll >= heightBox) {
        boxs.classList.add('show')
    }


}
menuBtn.addEventListener('click', toggleMenu);
window.addEventListener('scroll', scrollToggle);