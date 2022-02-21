let burgerMenu = document.getElementById('burger-menu')
let burgerBtn = document.getElementById('burger-btn')

burgerBtn.addEventListener('click',function(){
    burgerMenu.classList.toggle('active')
})